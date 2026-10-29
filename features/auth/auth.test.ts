import { describe, expect, it } from "vitest";

import { authErrorMessage, normalizeUsername, usernameToEmail, validateCredentials } from "./index";

describe("아이디 입력 검사", () => {
  it("영문, 숫자, 밑줄이 아닌 글자가 있거나 길이가 맞지 않으면 아이디 안내를 돌려준다", () => {
    const message = "아이디는 영문, 숫자, 밑줄(_)로 3~20자여야 해요.";

    expect(validateCredentials("ab", "123456")).toEqual({ field: "username", message });
    expect(validateCredentials("a".repeat(21), "123456")).toEqual({ field: "username", message });
    expect(validateCredentials("양진성", "123456")).toEqual({ field: "username", message });
    expect(validateCredentials("me@example.com", "123456")?.field).toBe("username");
    expect(validateCredentials("", "123456")?.field).toBe("username");
  });

  it("비밀번호가 6자보다 짧으면 비밀번호 안내를 돌려준다", () => {
    expect(validateCredentials("yang_1", "12345")).toEqual({
      field: "password",
      message: "비밀번호는 6자 이상이어야 해요.",
    });
  });

  it("올바른 입력은 문제가 없고, 대문자와 앞뒤 공백은 허용한다", () => {
    expect(validateCredentials("yang_1", "123456")).toBeNull();
    expect(validateCredentials("  Yang_1 ", "123456")).toBeNull();
  });
});

describe("아이디와 서버용 이메일", () => {
  it("아이디는 앞뒤 공백을 지우고 소문자로 맞춘다", () => {
    expect(normalizeUsername("  Yang_1 ")).toBe("yang_1");
  });

  it("같은 아이디는 대소문자와 상관없이 같은 서버용 이메일이 된다", () => {
    expect(usernameToEmail("Yang_1")).toBe(usernameToEmail("yang_1"));
    expect(usernameToEmail("yang_1")).toMatch(/^yang_1@[a-z0-9.-]+\.[a-z]+$/);
  });
});

describe("서버가 돌려준 오류 문구", () => {
  it("로그인에서 아이디나 비밀번호가 틀리면 둘 중 무엇이 틀렸는지 밝히지 않고 안내한다", () => {
    expect(authErrorMessage({ code: "invalid_credentials" }, "login")).toBe("아이디 또는 비밀번호가 올바르지 않아요.");
  });

  it("회원가입에서 이미 쓰는 아이디면 그렇게 알려준다", () => {
    expect(authErrorMessage({ code: "user_already_exists" }, "signup")).toBe("이미 사용 중인 아이디예요.");
  });

  it("너무 약한 비밀번호와 서버가 받지 않는 아이디를 구분한다", () => {
    expect(authErrorMessage({ code: "weak_password" }, "signup")).toBe("비밀번호가 너무 약해요. 더 길게 만들어 주세요.");
    expect(authErrorMessage({ code: "email_address_invalid" }, "signup")).toBe(
      "이 아이디는 쓸 수 없어요. 다른 아이디로 해 주세요."
    );
  });

  it("요청이 너무 많거나 알 수 없는 오류는 다시 시도하라고 안내한다", () => {
    expect(authErrorMessage({ code: "over_request_rate_limit" }, "login")).toBe(
      "요청이 너무 많아요. 잠시 뒤에 다시 시도해 주세요."
    );
    expect(authErrorMessage({ message: "boom" }, "login")).toBe("문제가 생겼어요. 잠시 뒤에 다시 시도해 주세요.");
  });
});
