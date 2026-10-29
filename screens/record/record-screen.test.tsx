import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
}));
vi.mock("@/lib/supabase/client", () => ({ createClient: () => ({}) }));

import { RecordScreen } from "./record-screen";

describe("운동 고르기", () => {
  it("종목과 브랜드 사이에 머신 카테고리를 고르고, 카테고리에 속한 브랜드만 보인다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "등" }));

    const categories = screen.getByRole("group", { name: "머신 카테고리" });
    expect(within(categories).getAllByRole("button").map((b) => b.textContent)).toEqual(["Pin", "Plate"]);

    // 처음에는 첫 카테고리(Pin)가 골라져 있어 Gym80은 보이지 않는다.
    expect(screen.getByRole("button", { name: /Hammer Strength/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Gym80/ })).not.toBeInTheDocument();

    fireEvent.click(within(categories).getByRole("button", { name: "Plate" }));

    expect(screen.getByRole("button", { name: /Gym80/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Hammer Strength/ })).not.toBeInTheDocument();
  });

  it("카테고리가 하나뿐인 종목은 그 하나만 보이고 브랜드가 바로 나온다", () => {
    render(<RecordScreen />);

    fireEvent.click(screen.getByRole("button", { name: "등" }));
    fireEvent.click(screen.getByRole("button", { name: "시티드 로우" }));

    const categories = screen.getByRole("group", { name: "머신 카테고리" });
    expect(within(categories).getAllByRole("button").map((b) => b.textContent)).toEqual(["Pin"]);
    expect(screen.getByRole("button", { name: /Technogym/ })).toBeInTheDocument();
  });
});
