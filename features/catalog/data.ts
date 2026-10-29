import { CATEGORIES, MODELS, type MachineCategory, type MachineModel } from "./models";
import { freeWeightImage, freeWeightParts, freeWeightPartOf, freeWeightSteps, isEquipment } from "./free-weight";

export const BRANDS = [
  "Hammer Strength",
  "Life Fitness",
  "Technogym",
  "Cybex",
  "Gym80",
  "Prime",
  "Nautilus",
] as const;

type Brand = (typeof BRANDS)[number];

type ExerciseEntry = {
  name: string;
  brands: Brand[];
  steps: string[];
};

export const CATALOG: Record<string, ExerciseEntry[]> = {
  가슴: [
    {
      name: "체스트 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80"],
      steps: [
        "손잡이가 가슴 중간 높이에 오도록 시트를 맞춥니다.",
        "어깨를 뒤로 모은 채 팔을 앞으로 밀어냅니다.",
        "팔꿈치를 완전히 펴기 직전까지 밀고 천천히 돌아옵니다.",
      ],
    },
    {
      name: "펙덱 플라이",
      brands: ["Life Fitness", "Technogym", "Nautilus", "Prime"],
      steps: [
        "팔꿈치가 어깨 높이가 되도록 시트를 맞춥니다.",
        "가슴을 연 채 두 팔을 앞으로 모읍니다.",
        "모았을 때 잠깐 멈추고 천천히 벌립니다.",
      ],
    },
    {
      name: "인클라인 프레스",
      brands: ["Hammer Strength", "Cybex", "Gym80"],
      steps: [
        "시트에 등을 붙이고 손잡이가 윗가슴 높이에 오게 합니다.",
        "대각선 위쪽으로 팔을 밀어 올립니다.",
        "돌아올 때 가슴이 늘어나는 느낌을 확인합니다.",
      ],
    },
  ],
  등: [
    {
      name: "렛풀다운",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus"],
      steps: [
        "무릎 패드를 허벅지에 고정하고 가슴을 살짝 열어 줍니다.",
        "손잡이를 쇄골 쪽으로 당기며 팔꿈치를 몸통 옆으로 내립니다.",
        "올라갈 때는 어깨가 들리지 않게 천천히 풉니다.",
      ],
    },
    {
      name: "시티드 로우",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Nautilus"],
      steps: [
        "가슴 패드에 몸을 붙이고 손잡이를 잡습니다.",
        "견갑골을 모으며 팔꿈치를 뒤로 당깁니다.",
        "당긴 자세에서 잠깐 멈추고 천천히 풉니다.",
      ],
    },
    {
      name: "T바 로우",
      brands: ["Hammer Strength", "Prime", "Gym80"],
      steps: [
        "가슴 패드에 상체를 기대고 손잡이를 잡습니다.",
        "팔꿈치를 몸 옆으로 붙여 뒤로 당깁니다.",
        "허리를 쓰지 않고 등 힘으로만 당깁니다.",
      ],
    },
  ],
  어깨: [
    {
      name: "숄더 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Prime"],
      steps: [
        "손잡이가 어깨 높이에 오도록 시트를 맞춥니다.",
        "머리 위로 팔을 밀어 올립니다.",
        "귀 옆까지 천천히 내리며 어깨가 솟지 않게 합니다.",
      ],
    },
    {
      name: "레터럴 레이즈",
      brands: ["Life Fitness", "Technogym", "Nautilus", "Gym80"],
      steps: [
        "팔꿈치를 살짝 굽혀 패드 안쪽에 댑니다.",
        "팔을 옆으로 어깨 높이까지 듭니다.",
        "내릴 때도 반동 없이 천천히 내립니다.",
      ],
    },
  ],
  하체: [
    {
      name: "레그 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Gym80", "Prime"],
      steps: [
        "등과 엉덩이를 시트에 붙이고 발을 어깨너비로 놓습니다.",
        "무릎이 안으로 모이지 않게 발판을 밉니다.",
        "무릎을 완전히 펴지 말고 천천히 돌아옵니다.",
      ],
    },
    {
      name: "레그 익스텐션",
      brands: ["Life Fitness", "Technogym", "Cybex", "Nautilus"],
      steps: [
        "무릎 위치가 기계 축에 맞도록 시트를 조정합니다.",
        "발목 패드를 걸고 무릎을 펴며 다리를 듭니다.",
        "올린 자세에서 잠깐 멈추고 천천히 내립니다.",
      ],
    },
    {
      name: "레그 컬",
      brands: ["Life Fitness", "Technogym", "Cybex", "Prime"],
      steps: [
        "무릎이 기계 축에 오도록 맞추고 발목 패드를 겁니다.",
        "뒤꿈치를 엉덩이 쪽으로 당깁니다.",
        "허벅지 뒤쪽이 늘어나는 것을 느끼며 천천히 풉니다.",
      ],
    },
  ],
  팔: [
    {
      name: "바이셉 컬",
      brands: ["Life Fitness", "Technogym", "Cybex", "Nautilus"],
      steps: [
        "팔꿈치를 패드에 고정하고 손잡이를 잡습니다.",
        "팔꿈치 위치를 유지한 채 손잡이를 어깨 쪽으로 말아 올립니다.",
        "내릴 때 팔을 끝까지 천천히 폅니다.",
      ],
    },
    {
      name: "트라이셉스 익스텐션",
      brands: ["Hammer Strength", "Life Fitness", "Gym80"],
      steps: [
        "팔꿈치를 패드에 붙이고 손잡이를 잡습니다.",
        "팔꿈치를 고정한 채 아래로 완전히 펴냅니다.",
        "돌아올 때 팔꿈치가 벌어지지 않게 천천히 접습니다.",
      ],
    },
  ],
};

/** 영상이 연결된 종목·브랜드 조합. */
const VIDEOS = new Set<string>([
  "렛풀다운|Hammer Strength",
  "렛풀다운|Life Fitness",
  "체스트 프레스|Hammer Strength",
]);

function findExercise(exercise: string): ExerciseEntry | undefined {
  for (const entries of Object.values(CATALOG)) {
    const found = entries.find((entry) => entry.name === exercise);
    if (found) return found;
  }
  return undefined;
}

export const PARTS = Object.keys(CATALOG);

export { CATEGORIES, type MachineCategory, type MachineModel };

export const KINDS = ["Machine", "Free Weight"] as const;
export type ExerciseKind = (typeof KINDS)[number];

/** 분류별로 고를 수 있는 부위. */
export function partsOf(kind: ExerciseKind): string[] {
  return kind === "Machine" ? PARTS : freeWeightParts();
}

/** 종목과 브랜드(프리웨이트는 장비)가 목록에 있는 조합이면 그 부위를, 아니면 undefined. */
export function partOfCombo(exercise: string, brand: string): string | undefined {
  if (isEquipment(brand)) return freeWeightPartOf(exercise, brand);
  return brandsOf(exercise).includes(brand) ? partOf(exercise) : undefined;
}

export function exercisesOf(part: string): string[] {
  return (CATALOG[part] ?? []).map((entry) => entry.name);
}

export function brandsOf(exercise: string): string[] {
  return findExercise(exercise)?.brands ?? [];
}

export function partOf(exercise: string): string | undefined {
  return PARTS.find((part) => exercisesOf(part).includes(exercise));
}

export function hasVideo(exercise: string, brand: string): boolean {
  return VIDEOS.has(`${exercise}|${brand}`);
}

/** 운동 방법. brand가 프리웨이트 장비(Dumbbell, Barbell)면 그 장비의 방법을 돌려준다. */
export function howToSteps(exercise: string, brand?: string): string[] {
  if (brand && isEquipment(brand)) return freeWeightSteps(exercise, brand);
  return findExercise(exercise)?.steps ?? [];
}

/** 종목·브랜드의 머신 모델. 모델 이름은 같은 브랜드의 같은 종목 안에서 구분된다. */
export function modelsOf(exercise: string, brand: string): MachineModel[] {
  return MODELS[`${exercise}|${brand}`] ?? [];
}

/**
 * 종목·브랜드·모델의 머신 이미지. 모델 이름을 생략하면 첫 모델을 쓴다.
 * 사진이 없는 모델은 undefined이고, 화면은 자리표시 이미지를 보여준다.
 */
export function imageOf(exercise: string, brand: string, model?: string): { src: string; clip?: string } | undefined {
  if (isEquipment(brand)) {
    const src = freeWeightImage(exercise, brand);
    return src ? { src } : undefined;
  }
  const models = modelsOf(exercise, brand);
  const found = (model ? models.find((m) => m.name === model) : models[0]) ?? undefined;
  return found?.src ? { src: found.src, clip: found.clip } : undefined;
}

/** 종목에서 고를 수 있는 머신 카테고리(모델이 하나라도 있는 것만, Pin이 먼저). */
export function categoriesOf(exercise: string): MachineCategory[] {
  const brands = brandsOf(exercise);
  return CATEGORIES.filter((category) => brands.some((brand) => modelsOf(exercise, brand).some((m) => m.category === category)));
}

/** 종목의 한 카테고리에 속한 모델이 있는 브랜드. */
export function brandsIn(exercise: string, category: MachineCategory): string[] {
  return brandsOf(exercise).filter((brand) => modelsOf(exercise, brand).some((m) => m.category === category));
}

/** 종목·브랜드의 한 카테고리에 속한 모델. */
export function modelsIn(exercise: string, brand: string, category: MachineCategory): MachineModel[] {
  return modelsOf(exercise, brand).filter((m) => m.category === category);
}
