import { expect, test, type Page } from "@playwright/test";

// 로그인이 필요한 흐름은 테스트용 계정이 있을 때만 돌린다(실제 Supabase 프로젝트를 쓴다).
//   E2E_USERNAME=... E2E_PASSWORD=... bun run test:e2e
const username = process.env.E2E_USERNAME;
const password = process.env.E2E_PASSWORD;

test("로그인하지 않으면 어느 화면 주소로 들어가도 로그인 화면이 나온다", async ({ page }) => {
  for (const path of ["/", "/calendar", "/chart"]) {
    await page.goto(path);
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("button", { name: "로그인", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "달력" })).toHaveCount(0);
  }
});

test("잘못된 입력은 입력 칸 근처에 안내가 나온다", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel("아이디").fill("ab");
  await page.getByLabel("비밀번호").fill("123456");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await expect(page.getByText("아이디는 영문, 숫자, 밑줄(_)로 3~20자여야 해요.")).toBeVisible();

  await page.getByLabel("아이디").fill("yang_1");
  await page.getByLabel("비밀번호").fill("123");
  await page.getByRole("button", { name: "로그인", exact: true }).click();
  await expect(page.getByText("비밀번호는 6자 이상이어야 해요.")).toBeVisible();
});

test.describe("로그인한 뒤", () => {
  test.skip(!username || !password, "E2E_USERNAME, E2E_PASSWORD가 없으면 건너뜁니다.");

  async function login(page: Page) {
    await page.goto("/login");
    await page.getByLabel("아이디").fill(username!);
    await page.getByLabel("비밀번호").fill(password!);
    await page.getByRole("button", { name: "로그인", exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
  }

  test("세트를 기록하면 서버에 저장되어 새로고침해도 남고, 로그아웃하면 로그인 화면으로 간다", async ({ page }) => {
    await login(page);

    await page.getByRole("button", { name: "등", exact: true }).click();
    await page.getByRole("button", { name: /Hammer Strength/ }).click();
    await page.getByLabel("1세트 무게").fill("52.5");
    await page.getByLabel("1세트 횟수").fill("8");
    await expect(page.getByText("저장 중…")).toHaveCount(0, { timeout: 10_000 });

    await page.reload();
    await expect(page.getByRole("link", { name: /렛풀다운 Hammer Strength 기록 열기/ })).toBeVisible();

    // 뒷정리: 이 테스트가 만든 기록을 지운다.
    await page.getByRole("link", { name: /렛풀다운 Hammer Strength 기록 열기/ }).click();
    await page.getByRole("button", { name: "이 운동 기록 삭제" }).click();
    await page.getByRole("button", { name: "한 번 더 눌러 삭제" }).click();
    await expect(page.getByText("저장 중…")).toHaveCount(0, { timeout: 10_000 });

    await page.getByRole("button", { name: "로그아웃" }).click();
    await expect(page).toHaveURL(/\/login$/);
    await page.goto("/calendar");
    await expect(page).toHaveURL(/\/login$/);
  });
});
