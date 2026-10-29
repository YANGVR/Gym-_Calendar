/** friendships 테이블 한 행과, 함께 불러온 두 사람의 프로필(브라우저로 오가는 모양). */
export type FriendshipRow = {
  id: string;
  requester: string;
  addressee: string;
  status: "pending" | "accepted";
  requester_profile: { username: string } | null;
  addressee_profile: { username: string } | null;
};

/** 화면에 보여 줄 상대 한 명. id는 친구 관계의 id이고, userId는 상대 계정의 id다. */
export type Friend = { id: string; userId: string; username: string };

export type FriendLists = {
  /** 서로 수락한 친구. */
  friends: Friend[];
  /** 나에게 온, 아직 답하지 않은 요청. */
  incoming: Friend[];
  /** 내가 보내고 상대의 답을 기다리는 요청. */
  outgoing: Friend[];
};

const byUsername = (a: Friend, b: Friend) => a.username.localeCompare(b.username);

/** 친구 관계 행들을 내 입장에서 친구, 받은 요청, 보낸 요청으로 나눈다. */
export function groupFriendships(rows: FriendshipRow[], myId: string): FriendLists {
  const lists: FriendLists = { friends: [], incoming: [], outgoing: [] };
  for (const row of rows) {
    const mine = row.requester === myId;
    const other = mine ? row.addressee_profile : row.requester_profile;
    const friend: Friend = {
      id: row.id,
      userId: mine ? row.addressee : row.requester,
      username: other?.username ?? "알 수 없음",
    };
    if (row.status === "accepted") lists.friends.push(friend);
    else if (mine) lists.outgoing.push(friend);
    else lists.incoming.push(friend);
  }
  lists.friends.sort(byUsername);
  lists.incoming.sort(byUsername);
  lists.outgoing.sort(byUsername);
  return lists;
}

/** request_friend 함수가 던지는 예외 메시지를 사용자에게 보여 줄 문장으로 바꾼다. */
export function friendErrorMessage(message: string): string {
  if (message.includes("not_found")) return "그 아이디의 사용자를 찾을 수 없어요.";
  if (message.includes("self")) return "자기 자신에게는 요청할 수 없어요.";
  if (message.includes("already_friends")) return "이미 친구예요.";
  if (message.includes("already_requested")) return "이미 요청을 보냈어요. 상대가 수락하면 친구가 돼요.";
  return "요청하지 못했어요. 잠시 뒤 다시 시도해 주세요.";
}
