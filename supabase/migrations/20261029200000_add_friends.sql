-- 친구 추가와 친구 기록 보기. 요청을 보내고, 상대가 수락하면 서로의 기록을 읽을 수 있다(읽기 전용).

-- 1) 아이디를 보여 주고 찾기 위한 프로필. 아이디는 로그인 이메일(아이디@gymlog.app)의 앞부분이다.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique
);

create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, username) values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 이미 가입한 계정의 프로필도 채운다.
insert into public.profiles (id, username)
select id, split_part(email, '@', 1) from auth.users
on conflict do nothing;

-- 2) 친구 관계. requester가 요청을 보내고 addressee가 수락하면 accepted가 된다.
create table public.friendships (
  id uuid primary key default gen_random_uuid(),
  requester uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  addressee uuid not null references public.profiles (id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted')),
  created_at timestamptz not null default now(),
  check (requester <> addressee)
);

-- 두 사람 사이에는 방향과 상관없이 관계가 하나만 있다.
create unique index friendships_one_per_pair
  on public.friendships (least(requester, addressee), greatest(requester, addressee));
create index friendships_addressee_idx on public.friendships (addressee);

alter table public.friendships enable row level security;
alter table public.friendships force row level security;

create policy "friendships_select_involved" on public.friendships
  for select to authenticated
  using ((select auth.uid()) in (requester, addressee));

-- 요청은 request_friend 함수로만 만든다(직접 insert 정책 없음).
-- 받은 사람만 대기 중인 요청을 수락(status를 accepted로)할 수 있다.
create policy "friendships_accept_addressee" on public.friendships
  for update to authenticated
  using ((select auth.uid()) = addressee and status = 'pending')
  with check ((select auth.uid()) = addressee and status = 'accepted');

-- 거절, 요청 취소, 친구 끊기는 관계의 어느 쪽이든 할 수 있다.
create policy "friendships_delete_involved" on public.friendships
  for delete to authenticated
  using ((select auth.uid()) in (requester, addressee));

revoke all on public.friendships from anon;
grant select, delete on public.friendships to authenticated;
grant update (status) on public.friendships to authenticated;

-- 프로필은 본인과, 요청을 주고받았거나 친구인 사람만 볼 수 있다.
alter table public.profiles enable row level security;
alter table public.profiles force row level security;

create policy "profiles_select_self_and_related" on public.profiles
  for select to authenticated
  using (
    id = (select auth.uid())
    or exists (
      select 1 from public.friendships f
      where (f.requester = profiles.id and f.addressee = (select auth.uid()))
         or (f.addressee = profiles.id and f.requester = (select auth.uid()))
    )
  );

revoke all on public.profiles from anon;
grant select on public.profiles to authenticated;

-- 3) 친구의 운동 기록은 읽을 수만 있다.
create policy "workouts_select_friends" on public.workouts
  for select to authenticated
  using (
    exists (
      select 1 from public.friendships f
      where f.status = 'accepted'
        and ((f.requester = (select auth.uid()) and f.addressee = workouts.user_id)
          or (f.addressee = (select auth.uid()) and f.requester = workouts.user_id))
    )
  );

-- 4) 아이디로 친구 요청 보내기. 상대가 이미 나에게 요청을 보냈다면 바로 친구가 된다.
-- 실패 이유는 예외 메시지(not_found, self, already_friends, already_requested)로 알려 준다.
create function public.request_friend(p_username text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  me uuid := auth.uid();
  target uuid;
  existing public.friendships%rowtype;
begin
  if me is null then
    raise exception 'not_signed_in';
  end if;

  select id into target from public.profiles where username = lower(trim(p_username));
  if target is null then
    raise exception 'not_found';
  end if;
  if target = me then
    raise exception 'self';
  end if;

  select * into existing from public.friendships
  where least(requester, addressee) = least(me, target)
    and greatest(requester, addressee) = greatest(me, target);

  if found then
    if existing.status = 'accepted' then
      raise exception 'already_friends';
    end if;
    if existing.requester = me then
      raise exception 'already_requested';
    end if;
    update public.friendships set status = 'accepted' where id = existing.id;
    return 'accepted';
  end if;

  insert into public.friendships (requester, addressee) values (me, target);
  return 'requested';
end;
$$;

revoke execute on function public.request_friend(text) from public, anon;
grant execute on function public.request_friend(text) to authenticated;
