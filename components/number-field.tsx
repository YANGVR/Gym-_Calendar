"use client";

import { useState } from "react";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";

type NumberFieldProps = {
  label: string;
  /** 저장된 값(무게는 kg). 비어 있으면 null. */
  value: number | null;
  toText: (value: number | null) => string;
  fromText: (text: string) => number | null;
  onCommit: (value: number | null) => void;
  suffix: string;
  inputMode: "decimal" | "numeric";
  placeholder?: string;
  /** 바뀌면 입력 문구를 저장된 값에서 다시 만든다(예: 무게 단위 변경). */
  resetKey: string;
};

/**
 * 입력 중인 문구("52.")를 그대로 보여 주면서, 숫자로 읽히는 즉시 저장 값으로 올린다.
 * 저장 값이 밖에서 바뀌면(세트 삭제로 줄이 당겨지거나 단위가 바뀔 때) 문구도 따라 바뀐다.
 */
export function NumberField({
  label,
  value,
  toText,
  fromText,
  onCommit,
  suffix,
  inputMode,
  placeholder,
  resetKey,
}: NumberFieldProps) {
  const [text, setText] = useState(() => toText(value));
  const [seen, setSeen] = useState({ value, resetKey });

  if (seen.value !== value || seen.resetKey !== resetKey) {
    setSeen({ value, resetKey });
    if (seen.resetKey !== resetKey || fromText(text) !== value) setText(toText(value));
  }

  return (
    <InputGroup className="h-10">
      <InputGroupInput
        aria-label={label}
        inputMode={inputMode}
        placeholder={placeholder}
        value={text}
        className="font-semibold tabular-nums"
        onChange={(event) => {
          setText(event.target.value);
          onCommit(fromText(event.target.value));
        }}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>{suffix}</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
