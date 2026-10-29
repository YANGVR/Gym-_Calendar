export type AuthMode = "login" | "signup";

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 서버에 보내기 전에 입력을 검사한다. 문제가 없으면 null. */
export function validateCredentials(email: string, password: string) {
  if (!EMAIL_PATTERN.test(email.trim())) {
    return { field: "email" as const, message: "이메일 형식이 올바르지 않아요." };
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
      return "이메일 또는 비밀번호가 올바르지 않아요.";
    case "user_already_exists":
      return mode === "signup" ? "이미 가입된 이메일이에요. 로그인해 주세요." : "이메일 또는 비밀번호가 올바르지 않아요.";
    case "weak_password":
      return "비밀번호가 너무 약해요. 더 길게 만들어 주세요.";
    case "email_address_invalid":
    case "validation_failed":
      return "이메일 형식이 올바르지 않아요.";
    case "over_request_rate_limit":
    case "over_email_send_rate_limit":
      return "요청이 너무 많아요. 잠시 뒤에 다시 시도해 주세요.";
    case "signup_disabled":
      return "지금은 회원가입을 받지 않아요.";
    default:
      return "문제가 생겼어요. 잠시 뒤에 다시 시도해 주세요.";
  }
}
