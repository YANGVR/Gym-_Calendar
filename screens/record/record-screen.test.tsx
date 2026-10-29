import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { replace } = vi.hoisted(() => ({ replace: vi.fn() }));

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({ replace, push: vi.fn() }),
}));
vi.mock("@/lib/supabase/client", () => ({ createClient: () => ({}) }));

import { RecordScreen } from "./record-screen";

const buttonNames = (group: HTMLElement) =>
  within(group)
    .getAllByRole("button")
    .map((b) => b.textContent);
const cardNames = (group: HTMLElement) =>
  within(group)
    .getAllByRole("button")
    .map((b) => b.getAttribute("aria-label"));

describe("운동 고르기: Machine", () => {
  beforeEach(() => replace.mockClear());

  it("종목과 브랜드 사이에 머신 카테고리를 고르고, 카테고리에 속한 브랜드만 보인다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "등" }));

    const categories = screen.getByRole("group", { name: "머신 카테고리" });
    expect(buttonNames(categories)).toEqual(["Pin", "Plate"]);

    // 처음에는 첫 카테고리(Pin)가 골라져 있어 Gym80은 보이지 않는다.
    expect(
      screen.getByRole("button", { name: /Hammer Strength/ }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Gym80/ }),
    ).not.toBeInTheDocument();

    fireEvent.click(within(categories).getByRole("button", { name: "Plate" }));

    expect(screen.getByRole("button", { name: /Gym80/ })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Hammer Strength/ }),
    ).not.toBeInTheDocument();
  });

  it("카테고리가 하나뿐인 종목은 그 하나만 보이고 브랜드가 바로 나온다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "등" }));
    fireEvent.click(screen.getByRole("button", { name: "시티드 로우" }));

    expect(
      buttonNames(screen.getByRole("group", { name: "머신 카테고리" })),
    ).toEqual(["Pin"]);
    expect(
      screen.getByRole("button", { name: /Technogym/ }),
    ).toBeInTheDocument();
  });
});

describe("운동 고르기: 머신 모델", () => {
  beforeEach(() => replace.mockClear());

  it("모델이 여러 개인 브랜드를 누르면 모델 카드가 나오고, 모델을 골라야 선택된다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "체스트 프레스" }));
    fireEvent.click(screen.getByRole("button", { name: /Hammer Strength/ }));

    expect(replace).not.toHaveBeenCalled();
    const models = screen.getByRole("group", { name: "머신 모델" });
    expect(buttonNames(models)).toEqual(
      expect.arrayContaining([
        expect.stringContaining("MTS Iso-Lateral Chest Press"),
      ]),
    );

    fireEvent.click(
      within(models).getByRole("button", {
        name: /MTS Iso-Lateral Chest Press/,
      }),
    );

    expect(replace).toHaveBeenCalledTimes(1);
    const url = new URL(replace.mock.calls[0][0], "http://localhost");
    expect(url.searchParams.get("brand")).toBe("Hammer Strength");
    expect(url.searchParams.get("model")).toBe("MTS Iso-Lateral Chest Press");
  });

  it("모델이 하나뿐인 브랜드도 모델 카드를 눌러 선택하고, 브랜드 카드에는 이미지가 없다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "등" }));
    fireEvent.click(screen.getByRole("button", { name: "시티드 로우" }));
    const technogym = screen.getByRole("button", { name: /Technogym/ });

    expect(within(technogym).queryByRole("img")).not.toBeInTheDocument();
    fireEvent.click(technogym);
    expect(replace).not.toHaveBeenCalled();

    fireEvent.click(
      within(screen.getByRole("group", { name: "머신 모델" })).getByRole(
        "button",
        { name: /Selection 900 Low Row/ },
      ),
    );

    const url = new URL(replace.mock.calls[0][0], "http://localhost");
    expect(url.searchParams.get("model")).toBe("Selection 900 Low Row");
  });
});

describe("운동 고르기: Free Weight", () => {
  beforeEach(() => replace.mockClear());

  function openFreeWeight() {
    render(<RecordScreen />);
    fireEvent.click(
      within(screen.getByRole("group", { name: "분류" })).getByRole("button", {
        name: "Free Weight",
      }),
    );
  }

  it("분류는 Machine과 Free Weight이고, Free Weight에는 머신 카테고리와 브랜드가 없다", () => {
    render(<RecordScreen />);

    const kinds = screen.getByRole("group", { name: "분류" });
    expect(buttonNames(kinds)).toEqual(["Machine", "Free Weight"]);

    fireEvent.click(within(kinds).getByRole("button", { name: "Free Weight" }));

    expect(
      screen.queryByRole("group", { name: "머신 카테고리" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("머신 브랜드")).not.toBeInTheDocument();
    // 부위는 머신과 같다.
    expect(buttonNames(screen.getByRole("group", { name: "부위" }))).toEqual([
      "가슴",
      "등",
      "어깨",
      "하체",
      "팔",
    ]);
  });

  it("부위를 고르고 Dumbbell과 Barbell로 나뉜 대표 운동 목록을 본다", () => {
    openFreeWeight();

    expect(buttonNames(screen.getByRole("group", { name: "장비" }))).toEqual([
      "Dumbbell",
      "Barbell",
      "Cable",
    ]);
    expect(
      cardNames(screen.getByRole("group", { name: "프리웨이트 종목" })),
    ).toEqual(["벤치 프레스", "인클라인 프레스", "플라이"]);

    fireEvent.click(
      within(screen.getByRole("group", { name: "장비" })).getByRole("button", {
        name: "Barbell",
      }),
    );

    expect(
      cardNames(screen.getByRole("group", { name: "프리웨이트 종목" })),
    ).toEqual(["벤치 프레스", "인클라인 벤치 프레스", "디클라인 벤치 프레스"]);
  });

  it("운동을 누르면 장비가 브랜드 자리에 들어가서 바로 선택된다", () => {
    openFreeWeight();

    fireEvent.click(
      within(screen.getByRole("group", { name: "장비" })).getByRole("button", {
        name: "Barbell",
      }),
    );
    fireEvent.click(
      within(screen.getByRole("group", { name: "프리웨이트 종목" })).getByRole(
        "button",
        { name: "벤치 프레스" },
      ),
    );

    expect(replace).toHaveBeenCalledTimes(1);
    const href = replace.mock.calls[0][0] as string;
    expect(Object.fromEntries(new URLSearchParams(href.slice(2)))).toEqual({
      part: "가슴",
      exercise: "벤치 프레스",
      brand: "Barbell",
    });
  });
});
