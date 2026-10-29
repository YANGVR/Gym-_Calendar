import { cn } from "@/lib/utils";

type MachineImageProps = {
  brand: string;
  /** 머신 이미지 주소. 없으면 브랜드 이름이 든 자리표시 이미지를 보여준다. */
  src?: string;
  /** 사진 일부(판매처 배지 등)를 가릴 clip-path 값. */
  clip?: string;
  /** 사진을 칸에 맞추는 방식. 제품 사진은 contain, 사람이 나오는 운동 사진은 cover. */
  fit?: "contain" | "cover";
  /** 대체 텍스트. 없으면 "브랜드 머신". */
  alt?: string;
  className?: string;
};

export function MachineImage({ brand, src, clip, fit = "contain", alt, className }: MachineImageProps) {
  if (src) {
    return (
      <div className={cn("overflow-hidden rounded-md bg-white", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? `${brand} 머신`}
          style={clip ? { clipPath: clip } : undefined}
          className={fit === "cover" ? "size-full object-cover" : "size-full object-contain"}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${brand} 머신 이미지 자리표시`}
      className={cn(
        "grid place-items-center rounded-md bg-muted p-1 text-center text-xs font-semibold text-muted-foreground",
        className
      )}
    >
      {brand}
    </div>
  );
}
