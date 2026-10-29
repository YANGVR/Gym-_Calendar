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

/**
 * 머신 이미지(종목|브랜드). 브랜드 공식 사이트나 판매처의 제품 사진을 내려받아 public/machines에 둔다.
 * clip은 사진에 판매처 배지가 겹친 경우 그 부분을 가리는 clip-path 값이다.
 */
const IMAGES: Record<string, { src: string; clip?: string }> = {
  "렛풀다운|Hammer Strength": { src: "/machines/lat-pulldown-hammer-strength.jpg" },
  "렛풀다운|Life Fitness": { src: "/machines/lat-pulldown-life-fitness.jpg" },
  "렛풀다운|Technogym": { src: "/machines/lat-pulldown-technogym.jpg" },
  "렛풀다운|Cybex": {
    src: "/machines/lat-pulldown-cybex.png",
    clip: "polygon(0 0, 66.5% 0, 66.5% 45%, 100% 45%, 100% 100%, 0 100%)",
  },
  "렛풀다운|Gym80": { src: "/machines/lat-pulldown-gym80.png" },
  "렛풀다운|Prime": { src: "/machines/lat-pulldown-prime.jpg" },
  "렛풀다운|Nautilus": { src: "/machines/lat-pulldown-nautilus.png" },
  "체스트 프레스|Cybex": { src: "/machines/chest-press-cybex.png" },
  "체스트 프레스|Gym80": { src: "/machines/chest-press-gym80.png" },
  "체스트 프레스|Hammer Strength": { src: "/machines/chest-press-hammer-strength.jpg" },
  "체스트 프레스|Life Fitness": { src: "/machines/chest-press-life-fitness.jpg" },
  "체스트 프레스|Technogym": { src: "/machines/chest-press-technogym.png" },
  "인클라인 프레스|Gym80": { src: "/machines/incline-press-gym80.png" },
  "인클라인 프레스|Cybex": {
    src: "/machines/incline-press-cybex.jpg",
    clip: "polygon(0 0, 100% 0, 100% 90%, 60% 90%, 60% 100%, 0 100%)",
  },
  "인클라인 프레스|Hammer Strength": { src: "/machines/incline-press-hammer-strength.jpg" },
  "펙덱 플라이|Life Fitness": { src: "/machines/pec-deck-life-fitness.jpg" },
  "펙덱 플라이|Nautilus": { src: "/machines/pec-deck-nautilus.png" },
  "펙덱 플라이|Prime": { src: "/machines/pec-deck-prime.jpg" },
  "펙덱 플라이|Technogym": { src: "/machines/pec-deck-technogym.png" },
  "시티드 로우|Cybex": { src: "/machines/seated-row-cybex.jpg" },
  "시티드 로우|Hammer Strength": { src: "/machines/seated-row-hammer-strength.jpg" },
  "시티드 로우|Life Fitness": { src: "/machines/seated-row-life-fitness.jpg" },
  "시티드 로우|Nautilus": { src: "/machines/seated-row-nautilus.png" },
  "시티드 로우|Technogym": { src: "/machines/seated-row-technogym.jpg" },
  "T바 로우|Gym80": { src: "/machines/t-bar-row-gym80.png" },
  "T바 로우|Hammer Strength": { src: "/machines/t-bar-row-hammer-strength.jpg" },
  "레터럴 레이즈|Gym80": { src: "/machines/lateral-raise-gym80.jpeg" },
  "레터럴 레이즈|Life Fitness": { src: "/machines/lateral-raise-life-fitness.png" },
  "레터럴 레이즈|Nautilus": { src: "/machines/lateral-raise-nautilus.png" },
  "숄더 프레스|Cybex": { src: "/machines/shoulder-press-cybex.png" },
  "숄더 프레스|Hammer Strength": { src: "/machines/shoulder-press-hammer-strength.jpg" },
  "숄더 프레스|Life Fitness": { src: "/machines/shoulder-press-life-fitness.png" },
  "숄더 프레스|Prime": { src: "/machines/shoulder-press-prime.jpg" },
  "숄더 프레스|Technogym": { src: "/machines/shoulder-press-technogym.jpg" },
  "레그 컬|Cybex": { src: "/machines/leg-curl-cybex.png" },
  "레그 컬|Life Fitness": { src: "/machines/leg-curl-life-fitness.jpg" },
  "레그 컬|Prime": { src: "/machines/leg-curl-prime.jpg" },
  "레그 컬|Technogym": { src: "/machines/leg-curl-technogym.png" },
  "레그 익스텐션|Cybex": { src: "/machines/leg-extension-cybex.png" },
  "레그 익스텐션|Life Fitness": { src: "/machines/leg-extension-life-fitness.jpg" },
  "레그 익스텐션|Nautilus": { src: "/machines/leg-extension-nautilus.png" },
  "레그 익스텐션|Technogym": { src: "/machines/leg-extension-technogym.png" },
  "레그 프레스|Gym80": { src: "/machines/leg-press-gym80.png" },
  "레그 프레스|Hammer Strength": { src: "/machines/leg-press-hammer-strength.jpg" },
  "레그 프레스|Life Fitness": { src: "/machines/leg-press-life-fitness.jpg" },
  "레그 프레스|Prime": { src: "/machines/leg-press-prime.jpg" },
  "레그 프레스|Technogym": { src: "/machines/leg-press-technogym.png" },
  "바이셉 컬|Cybex": { src: "/machines/biceps-curl-cybex.png" },
  "바이셉 컬|Life Fitness": { src: "/machines/biceps-curl-life-fitness.png" },
  "바이셉 컬|Nautilus": { src: "/machines/biceps-curl-nautilus.png" },
  "바이셉 컬|Technogym": { src: "/machines/biceps-curl-technogym.png" },
  "트라이셉스 익스텐션|Gym80": { src: "/machines/triceps-extension-gym80.png" },
  "트라이셉스 익스텐션|Hammer Strength": { src: "/machines/triceps-extension-hammer-strength.jpg" },
  "트라이셉스 익스텐션|Life Fitness": { src: "/machines/triceps-extension-life-fitness.png" },
};

export const CATEGORIES = ["선택식", "플레이트식"] as const;
export type MachineCategory = (typeof CATEGORIES)[number];

/**
 * 원판을 끼우는 플레이트식 조합(종목|브랜드). 여기 없는 조합은 핀을 꽂는 선택식이다.
 * 브랜드 공식 사이트와 판매처의 제품 정보를 보고 나눴다.
 */
const PLATE_LOADED = new Set<string>([
  "체스트 프레스|Gym80",
  "인클라인 프레스|Hammer Strength",
  "인클라인 프레스|Gym80",
  "렛풀다운|Gym80",
  "T바 로우|Hammer Strength",
  "T바 로우|Gym80",
  "숄더 프레스|Hammer Strength",
  "숄더 프레스|Prime",
  "레터럴 레이즈|Gym80",
  "레그 프레스|Hammer Strength",
  "레그 프레스|Gym80",
  "레그 프레스|Prime",
  "트라이셉스 익스텐션|Gym80",
]);

function findExercise(exercise: string): ExerciseEntry | undefined {
  for (const entries of Object.values(CATALOG)) {
    const found = entries.find((entry) => entry.name === exercise);
    if (found) return found;
  }
  return undefined;
}

export const PARTS = Object.keys(CATALOG);

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

export function howToSteps(exercise: string): string[] {
  return findExercise(exercise)?.steps ?? [];
}

/** 종목·브랜드 조합의 머신 이미지. 아직 구하지 못한 조합은 undefined이고, 화면은 자리표시 이미지를 보여준다. */
export function imageOf(exercise: string, brand: string): { src: string; clip?: string } | undefined {
  return IMAGES[`${exercise}|${brand}`];
}

/** 종목·브랜드 조합의 머신 카테고리. */
export function categoryOf(exercise: string, brand: string): MachineCategory {
  return PLATE_LOADED.has(`${exercise}|${brand}`) ? "플레이트식" : "선택식";
}

/** 종목에서 고를 수 있는 머신 카테고리(브랜드가 하나라도 있는 것만, 선택식이 먼저). */
export function categoriesOf(exercise: string): MachineCategory[] {
  const brands = brandsOf(exercise);
  return CATEGORIES.filter((category) => brands.some((brand) => categoryOf(exercise, brand) === category));
}

/** 종목의 한 카테고리에 속한 브랜드. */
export function brandsIn(exercise: string, category: MachineCategory): string[] {
  return brandsOf(exercise).filter((brand) => categoryOf(exercise, brand) === category);
}
