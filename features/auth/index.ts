export type AuthMode = "login" | "signup";

const MIN_PASSWORD_LENGTH = 6;
const USERNAME_PATTERN = /^[a-z0-9_]{3,20}$/;

/**
 * Supabase Auth는 이메일을 신원으로 쓰므로, 아이디에 이 꼬리를 붙여 이메일 모양으로 바꿔 저장한다.
 * 메일은 보내지 않는다(이메일 인증을 끈 설정이 전제). 꼬리를 바꾸면 기존 계정으로 로그인할 수 없다.
 */
const EMAIL_SUFFIX = "@gymlog.app";

/** 앞뒤 공백을 지우고 소문자로 맞춘다. 같은 아이디는 대소문자와 상관없이 같은 계정이다. */
export function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

export function usernameToEmail(username: string): string {
  return `${normalizeUsername(username)}${EMAIL_SUFFIX}`;
}

/** 서버에 보내기 전에 입력을 검사한다. 문제가 없으면 null. */
export function validateCredentials(username: string, password: string) {
  if (!USERNAME_PATTERN.test(normalizeUsername(username))) {
    return { field: "username" as const, message: "아이디는 영문, 숫자, 밑줄(_)로 3~20자여야 해요." };
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return { field: "password" as const, message: `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 해요.` };
  }
  return null;
}

/** Supabase Auth가 돌려준 오류를 사람이 읽는 문장으로 바꾼다. */
export function authErrorMessage(error: { code?: string; message?: string }, mode: AuthMode): string {
  switch (error.code) {
    case "invalid_credentials":
      return "아이디 또는 비밀번호가 올바르지 않아요.";
    case "user_already_exists":
      return mode === "signup" ? "이미 사용 중인 아이디예요." : "아이디 또는 비밀번호가 올바르지 않아요.";
    case "weak_password":
      return "비밀번호가 너무 약해요. 더 길게 만들어 주세요.";
    case "email_address_invalid":
    case "validation_failed":
      return "이 아이디는 쓸 수 없어요. 다른 아이디로 해 주세요.";
    case "over_request_rate_limit":
    case "over_email_send_rate_limit":
      return "요청이 너무 많아요. 잠시 뒤에 다시 시도해 주세요.";
    case "signup_disabled":
      return "지금은 회원가입을 받지 않아요.";
    default:
      return "문제가 생겼어요. 잠시 뒤에 다시 시도해 주세요.";
  }
}
