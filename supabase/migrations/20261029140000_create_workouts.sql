-- 계정별 운동 기록. 한 사람이 같은 날 같은 종목·브랜드를 한 번만 기록한다.
create table public.workouts (
  id uuid primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  date date not null,
  part text not null,
  exercise text not null,
  brand text not null,
  -- 세트 목록: [{ "weightKg": 52.5, "reps": 8 }, ...] (무게는 kg로 통일해 저장, 비어 있으면 null)
  sets jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  constraint workouts_one_per_day unique (user_id, date, exercise, brand)
);

-- unique 제약이 user_id를 맨 앞에 둔 인덱스를 만들어 주므로, 본인 기록 조회와 외래 키 삭제에 따로 인덱스가 필요 없다.

alter table public.workouts enable row level security;
alter table public.workouts force row level security;

-- 본인 행만 읽고, 만들고, 고치고, 지울 수 있다. 다른 사람의 행은 보이지도 않는다.
create policy "workouts_select_own" on public.workouts
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "workouts_insert_own" on public.workouts
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "workouts_update_own" on public.workouts
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "workouts_delete_own" on public.workouts
  for delete to authenticated
  using ((select auth.uid()) = user_id);

-- 로그인하지 않은 사용자(anon)는 이 테이블에 접근할 수 없다.
revoke all on public.workouts from anon;
grant select, insert, update, delete on public.workouts to authenticated;
