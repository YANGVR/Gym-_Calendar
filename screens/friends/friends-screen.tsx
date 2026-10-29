"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";

import { ConfirmButton } from "@/components/confirm-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { normalizeUsername } from "@/features/auth";
import {
  acceptRequest,
  fetchFriendLists,
  removeFriendship,
  requestFriend,
  type Friend,
  type FriendLists,
} from "@/features/friends";
import { cn } from "@/lib/utils";

export function FriendsScreen() {
  const [lists, setLists] = useState<FriendLists | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    error: boolean;
  } | null>(null);
  const [busy, setBusy] = useState(false);

  const reload = useCallback(async () => {
    try {
      setLists(await fetchFriendLists());
      setLoadError(false);
    } catch {
      setLoadError(true);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchFriendLists().then(
      (next) => !cancelled && setLists(next),
      () => !cancelled && setLoadError(true)
    );
    return () => {
      cancelled = true;
    };
  }, []);

  async function run(action: () => Promise<void>) {
    setBusy(true);
    setMessage(null);
    try {
      await action();
      await reload();
    } catch {
      setMessage({
        text: "처리하지 못했어요. 잠시 뒤 다시 시도해 주세요.",
        error: true,
      });
    } finally {
      setBusy(false);
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = normalizeUsername(username);
    if (!name) return;
    setBusy(true);
    setMessage(null);
    try {
      const result = await requestFriend(name);
      setMessage({
        text:
          result === "accepted" ? `${name}님과 친구가 됐어요.` : `${name}님에게 요청을 보냈어요. 수락하면 친구가 돼요.`,
        error: false,
      });
      setUsername("");
      await reload();
    } catch (error) {
      setMessage({
        text: error instanceof Error ? error.message : "요청하지 못했어요.",
        error: true,
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 lg:max-w-xl">
      <Card size="sm">
        <CardContent>
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <label htmlFor="friend-username" className="text-xs font-medium text-muted-foreground">
              친구 아이디로 요청 보내기
            </label>
            <div className="flex gap-2">
              <Input
                id="friend-username"
                value={username}
                autoCapitalize="none"
                autoComplete="off"
                placeholder="친구의 아이디"
                onChange={(event) => setUsername(event.target.value)}
              />
              <Button type="submit" disabled={busy || !normalizeUsername(username)}>
                요청
              </Button>
            </div>
          </form>
          {message && (
            <p
              role="status"
              className={cn("mt-2 text-sm", message.error ? "text-destructive" : "text-muted-foreground")}
            >
              {message.text}
            </p>
          )}
        </CardContent>
      </Card>

      {loadError && (
        <div role="alert" className="flex items-center gap-2 text-sm text-destructive">
          친구 목록을 불러오지 못했어요.
          <Button variant="outline" size="sm" onClick={() => void reload()}>
            다시 시도
          </Button>
        </div>
      )}
      {!lists && !loadError && (
        <p role="status" className="py-6 text-center text-sm text-muted-foreground">
          불러오는 중이에요…
        </p>
      )}

      {lists && (
        <>
          <Section title="받은 요청" empty="받은 요청이 없어요." items={lists.incoming}>
            {(friend) => (
              <>
                <Button size="sm" disabled={busy} onClick={() => void run(() => acceptRequest(friend.id))}>
                  수락
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={busy}
                  onClick={() => void run(() => removeFriendship(friend.id))}
                >
                  거절
                </Button>
              </>
            )}
          </Section>
          <Section title="보낸 요청" empty="보낸 요청이 없어요." items={lists.outgoing}>
            {(friend) => (
              <Button
                variant="outline"
                size="sm"
                disabled={busy}
                onClick={() => void run(() => removeFriendship(friend.id))}
              >
                취소
              </Button>
            )}
          </Section>
          <Section title="친구" empty="아직 친구가 없어요. 아이디로 요청을 보내 보세요." items={lists.friends}>
            {(friend) => (
              <>
                <Link href={`/friends/${friend.userId}`} className={buttonVariants({ size: "sm" })}>
                  기록 보기
                </Link>
                <ConfirmButton
                  size="sm"
                  className="text-destructive"
                  confirmLabel="한 번 더 눌러 끊기"
                  onConfirm={() => void run(() => removeFriendship(friend.id))}
                >
                  친구 끊기
                </ConfirmButton>
              </>
            )}
          </Section>
        </>
      )}
    </div>
  );
}

function Section({
  title,
  empty,
  items,
  children,
}: {
  title: string;
  empty: string;
  items: Friend[];
  children: (friend: Friend) => ReactNode;
}) {
  return (
    <section aria-label={title} className="flex flex-col gap-2">
      <h2 className="text-xs font-medium text-muted-foreground">
        {title} {items.length > 0 && `· ${items.length}`}
      </h2>
      {items.length === 0 ? (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">{empty}</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((friend) => (
            <li key={friend.id}>
              <Card size="sm">
                <CardContent className="flex items-center gap-2">
                  <span className="min-w-0 flex-1 truncate font-semibold">{friend.username}</span>
                  {children(friend)}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
