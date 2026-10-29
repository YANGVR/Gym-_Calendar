import { describe, expect, it } from "vitest";

import { friendErrorMessage, groupFriendships, type FriendshipRow } from "./index";

const row = (id: string, requester: string, addressee: string, status: FriendshipRow["status"]): FriendshipRow => ({
  id,
  requester,
  addressee,
  status,
  requester_profile: { username: `name-${requester}` },
  addressee_profile: { username: `name-${addressee}` },
});

describe("친구 관계 나누기", () => {
  it("내 입장에서 친구, 받은 요청, 보낸 요청으로 나누고 상대의 아이디를 보여 준다", () => {
    const rows = [
      row("1", "me", "b", "accepted"),
      row("2", "c", "me", "accepted"),
      row("3", "d", "me", "pending"),
      row("4", "me", "e", "pending"),
    ];

    const lists = groupFriendships(rows, "me");

    expect(lists.friends.map((f) => f.username)).toEqual(["name-b", "name-c"]);
    expect(lists.friends.map((f) => f.userId)).toEqual(["b", "c"]);
    expect(lists.incoming.map((f) => f.username)).toEqual(["name-d"]);
    expect(lists.outgoing.map((f) => f.username)).toEqual(["name-e"]);
  });

  it("관계가 없으면 모두 빈 목록이다", () => {
    expect(groupFriendships([], "me")).toEqual({
      friends: [],
      incoming: [],
      outgoing: [],
    });
  });
});

describe("친구 요청 실패 문구", () => {
  it("서버가 알려 준 이유를 사용자 문장으로 바꾼다", () => {
    expect(friendErrorMessage("not_found")).toContain("찾을 수 없");
    expect(friendErrorMessage("self")).toContain("자기 자신");
    expect(friendErrorMessage("already_friends")).toContain("이미 친구");
    expect(friendErrorMessage("already_requested")).toContain("이미 요청");
    expect(friendErrorMessage("network down")).toContain("다시 시도");
  });
});
