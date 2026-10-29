import { describe, expect, it } from "vitest";

import { authErrorMessage, validateCredentials } from "./index";

describe("로그인 입력 검사", () => {
  it("이메일 형식이 아니면 이메일 안내를 돌려준다", () => {
    expect(validateCredentials("abc", "123456")).toEqual({ field: "email", message: "이메일 형식이 올바르지 않아요." });
    expect(validateCredentials("", "123456")?.field).toBe("email");
  });

  it("비밀번호가 6자보다 짧으면 비밀번호 안내를 돌려준다", () => {
    expect(validateCredentials("me@example.com", "12345")).toEqual({
      field: "password",
      message: "비밀번호는 6자 이상이어야 해요.",
    });
  });

  it("올바른 입력은 문제가 없다", () => {
    expect(validateCredentials(" me@example.com ", "123456")).toBeNull();
  });
});

describe("서버가 돌려준 오류 문구", () => {
  it("로그인에서 이메일이나 비밀번호가 틀리면 둘 중 무엇이 틀렸는지 밝히지 않고 안내한다", () => {
    expect(authErrorMessage({ code: "invalid_credentials" }, "login")).toBe("이메일 또는 비밀번호가 올바르지 않아요.");
  });

  it("회원가입에서 이미 가입된 이메일이면 그렇게 알려준다", () => {
    expect(authErrorMessage({ code: "user_already_exists" }, "signup")).toBe("이미 가입된 이메일이에요. 로그인해 주세요.");
  });

  it("너무 약한 비밀번호와 잘못된 이메일을 구분한다", () => {
    expect(authErrorMessage({ code: "weak_password" }, "signup")).toBe("비밀번호가 너무 약해요. 더 길게 만들어 주세요.");
    expect(authErrorMessage({ code: "email_address_invalid" }, "signup")).toBe("이메일 형식이 올바르지 않아요.");
  });

  it("요청이 너무 많거나 알 수 없는 오류는 다시 시도하라고 안내한다", () => {
    expect(authErrorMessage({ code: "over_request_rate_limit" }, "login")).toBe(
      "요청이 너무 많아요. 잠시 뒤에 다시 시도해 주세요."
    );
    expect(authErrorMessage({ message: "boom" }, "login")).toBe("문제가 생겼어요. 잠시 뒤에 다시 시도해 주세요.");
  });
});
