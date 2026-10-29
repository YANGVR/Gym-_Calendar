"use client";

import { useState, type ComponentProps, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

type ConfirmButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "children"> & {
  children: ReactNode;
  confirmLabel: ReactNode;
  onConfirm: () => void;
  /** true면 확인 없이 바로 실행한다(값이 없는 항목 등). */
  immediate?: boolean;
};

/** 한 번 누르면 확인 문구로 바뀌고, 한 번 더 눌러야 실행되는 삭제 버튼. 다른 곳을 누르면 풀린다. */
export function ConfirmButton({ children, confirmLabel, onConfirm, immediate, ...props }: ConfirmButtonProps) {
  const [armed, setArmed] = useState(false);

  return (
    <Button
      {...props}
      variant={armed ? "destructive" : (props.variant ?? "outline")}
      className={props.className}
      onBlur={() => setArmed(false)}
      onClick={() => {
        if (immediate || armed) {
          setArmed(false);
          onConfirm();
        } else {
          setArmed(true);
        }
      }}
    >
      {armed ? confirmLabel : children}
    </Button>
  );
}
