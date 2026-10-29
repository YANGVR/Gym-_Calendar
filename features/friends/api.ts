import { createClient } from "@/lib/supabase/client";

import { friendErrorMessage, groupFriendships, type FriendLists, type FriendshipRow } from "./model";

const COLUMNS =
  "id,requester,addressee,status," +
  "requester_profile:profiles!friendships_requester_fkey(username)," +
  "addressee_profile:profiles!friendships_addressee_fkey(username)";

/** 내가 주고받은 친구 관계를 불러와 나눈다. */
export async function fetchFriendLists(): Promise<FriendLists> {
  const supabase = createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error("not_signed_in");
  const { data, error } = await supabase.from("friendships").select(COLUMNS);
  if (error) throw error;
  return groupFriendships((data ?? []) as unknown as FriendshipRow[], auth.user.id);
}

/** 아이디로 친구 요청을 보낸다. 상대가 먼저 보낸 요청이 있으면 바로 친구가 된다. */
export async function requestFriend(username: string): Promise<"requested" | "accepted"> {
  const { data, error } = await createClient().rpc("request_friend", {
    p_username: username,
  });
  if (error) throw new Error(friendErrorMessage(error.message));
  return data as "requested" | "accepted";
}

export async function acceptRequest(id: string) {
  const { error } = await createClient().from("friendships").update({ status: "accepted" }).eq("id", id);
  if (error) throw error;
}

/** 요청 거절과 취소, 친구 끊기는 모두 관계를 지우는 일이다. */
export async function removeFriendship(id: string) {
  const { error } = await createClient().from("friendships").delete().eq("id", id);
  if (error) throw error;
}
