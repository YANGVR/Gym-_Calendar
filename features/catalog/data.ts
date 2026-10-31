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
  "Matrix",
  "Precor",
  "Atlantis",
  "Hoist",
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
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "손잡이가 가슴 중간 높이에 오도록 시트를 맞춥니다.",
        "어깨를 뒤로 모은 채 팔을 앞으로 밀어냅니다.",
        "팔꿈치를 완전히 펴기 직전까지 밀고 천천히 돌아옵니다.",
      ],
    },
    {
      name: "펙덱 플라이",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "팔꿈치가 어깨 높이가 되도록 시트를 맞춥니다.",
        "가슴을 연 채 두 팔을 앞으로 모읍니다.",
        "모았을 때 잠깐 멈추고 천천히 벌립니다.",
      ],
    },
    {
      name: "인클라인 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "시트에 등을 붙이고 손잡이가 윗가슴 높이에 오게 합니다.",
        "대각선 위쪽으로 팔을 밀어 올립니다.",
        "돌아올 때 가슴이 늘어나는 느낌을 확인합니다.",
      ],
    },
    {
      name: "디클라인 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Gym80", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "시트에 등을 붙이고 손잡이가 아랫가슴 높이에 오게 합니다.",
        "대각선 아래쪽으로 팔을 밀어냅니다.",
        "팔꿈치를 완전히 펴기 직전에 멈추고 천천히 돌아옵니다.",
      ],
    },
    {
      name: "스미스 머신 벤치 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Cybex", "Gym80", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "벤치를 바 아래에 놓고 눈이 바 바로 아래 오도록 누운 뒤 어깨너비보다 넓게 바를 잡고 바를 돌려 랙에서 풉니다.",
        "어깨를 뒤로 모아 가슴을 편 채 바를 가슴 중간 위로 곧게 밀어 올립니다.",
        "팔꿈치를 천천히 굽혀 바를 가슴 가까이까지 내린 뒤 다시 밀어 올리고, 끝나면 바를 돌려 랙에 겁니다.",
      ],
    },
    {
      name: "케이블 크로스오버",
      brands: ["Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "양쪽 도르래를 어깨 높이 이상으로 맞추고 손잡이를 잡은 채 한 발을 앞으로 내딛어 상체를 살짝 숙입니다.",
        "팔꿈치를 약간 굽힌 상태로 양팔을 아래 앞쪽으로 모아 가슴 앞에서 두 손을 맞댑니다.",
        "가슴 근육이 늘어나는 느낌이 들 때까지 천천히 팔을 벌려 시작 자세로 돌아갑니다.",
      ],
    },
  ],
  등: [
    {
      name: "렛풀다운",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "무릎 패드를 허벅지에 고정하고 가슴을 살짝 열어 줍니다.",
        "손잡이를 쇄골 쪽으로 당기며 팔꿈치를 몸통 옆으로 내립니다.",
        "올라갈 때는 어깨가 들리지 않게 천천히 풉니다.",
      ],
    },
    {
      name: "시티드 로우",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "가슴 패드에 몸을 붙이고 손잡이를 잡습니다.",
        "견갑골을 모으며 팔꿈치를 뒤로 당깁니다.",
        "당긴 자세에서 잠깐 멈추고 천천히 풉니다.",
      ],
    },
    {
      name: "T바 로우",
      brands: ["Hammer Strength", "Technogym", "Cybex", "Gym80", "Prime", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "가슴 패드에 상체를 기대고 손잡이를 잡습니다.",
        "팔꿈치를 몸 옆으로 붙여 뒤로 당깁니다.",
        "허리를 쓰지 않고 등 힘으로만 당깁니다.",
      ],
    },
    {
      name: "하이 로우",
      brands: ["Hammer Strength", "Life Fitness", "Gym80", "Prime", "Nautilus", "Matrix"],
      steps: [
        "가슴 패드에 가슴을 붙이고 앉아 발판에 발을 단단히 고정한 뒤 머리 위쪽 손잡이를 잡습니다.",
        "팔꿈치를 몸통 옆으로 끌어내리듯이 손잡이를 아래로 당기며 날개뼈를 모읍니다.",
        "등 근육의 긴장을 유지한 채 천천히 팔을 펴며 시작 위치로 돌아옵니다.",
      ],
    },
    {
      name: "로우 로우",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Gym80", "Nautilus", "Matrix", "Precor", "Atlantis"],
      steps: [
        "가슴 패드에 가슴을 기대고 앉아 양손으로 낮은 위치의 손잡이를 잡습니다.",
        "팔꿈치를 뒤로 보내며 손잡이를 배 쪽으로 당겨 날개뼈를 모읍니다.",
        "등을 곧게 편 채로 천천히 팔을 펴며 시작 위치로 돌아옵니다.",
      ],
    },
    {
      name: "풀오버 머신",
      brands: ["Hammer Strength", "Technogym", "Gym80", "Prime", "Nautilus", "Atlantis"],
      steps: [
        "좌석 높이를 맞추고 벨트를 채운 뒤 팔꿈치를 패드에 올리고 시작 자세를 잡습니다.",
        "팔꿈치로 패드를 밀어 팔을 머리 위에서 몸 앞쪽으로 크게 호를 그리며 내립니다.",
        "광배근이 늘어나는 느낌을 유지하며 천천히 머리 위쪽 시작 위치로 돌아옵니다.",
      ],
    },
    {
      name: "어시스티드 풀업/딥",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "무릎 패드에 무릎을 올리고 필요한 보조 무게를 설정한 뒤 손잡이를 잡습니다.",
        "가슴을 펴고 팔꿈치를 아래로 당기며 턱이 손잡이 높이에 오도록 몸을 끌어올립니다.",
        "버티는 힘을 유지하며 천천히 팔을 펴 시작 위치로 내려옵니다.",
      ],
    },
    {
      name: "백 익스텐션 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "등받이 패드와 발판 위치를 맞추고 상체를 패드에 기대어 앉습니다.",
        "허리와 등 근육의 힘으로 상체를 천천히 뒤로 젖혀 몸이 곧게 펴지도록 합니다.",
        "과하게 젖히지 말고 천천히 시작 위치로 돌아옵니다.",
      ],
    },
  ],
  어깨: [
    {
      name: "숄더 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "손잡이가 어깨 높이에 오도록 시트를 맞춥니다.",
        "머리 위로 팔을 밀어 올립니다.",
        "귀 옆까지 천천히 내리며 어깨가 솟지 않게 합니다.",
      ],
    },
    {
      name: "레터럴 레이즈",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Hoist"],
      steps: [
        "팔꿈치를 살짝 굽혀 패드 안쪽에 댑니다.",
        "팔을 옆으로 어깨 높이까지 듭니다.",
        "내릴 때도 반동 없이 천천히 내립니다.",
      ],
    },
    {
      name: "리어 델트 머신",
      brands: ["Hammer Strength", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "가슴 패드에 가슴을 붙이고 앉아 손잡이를 어깨 높이로 맞춘 뒤 양손으로 잡습니다.",
        "팔꿈치를 살짝 굽힌 채 양팔을 뒤쪽 옆으로 벌리며 어깨 뒤쪽을 모읍니다.",
        "끝에서 잠깐 멈추고 같은 경로로 천천히 앞으로 돌아옵니다.",
      ],
    },
    {
      name: "숄더 슈러그 머신",
      brands: ["Hammer Strength", "Nautilus", "Atlantis", "Hoist"],
      steps: [
        "손잡이를 잡고 서거나 앉아 팔을 곧게 편 채 어깨 힘을 뺍니다.",
        "팔을 굽히지 않고 어깨를 귀 쪽으로 수직으로 끌어올려 승모근을 조입니다.",
        "정점에서 잠깐 멈춘 뒤 어깨를 천천히 내려 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "이소 래터럴 숄더 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Gym80", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "등받이에 허리와 등을 붙이고 앉아 양손으로 손잡이를 어깨 높이에서 잡습니다.",
        "양팔이 따로 움직이도록 머리 위쪽으로 팔을 곧게 뻗으며 밀어 올립니다.",
        "팔꿈치를 완전히 잠그지 않고 멈춘 뒤 천천히 어깨 높이까지 내립니다.",
      ],
    },
  ],
  하체: [
    {
      name: "레그 프레스",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "등과 엉덩이를 시트에 붙이고 발을 어깨너비로 놓습니다.",
        "무릎이 안으로 모이지 않게 발판을 밉니다.",
        "무릎을 완전히 펴지 말고 천천히 돌아옵니다.",
      ],
    },
    {
      name: "레그 익스텐션",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "무릎 위치가 기계 축에 맞도록 시트를 조정합니다.",
        "발목 패드를 걸고 무릎을 펴며 다리를 듭니다.",
        "올린 자세에서 잠깐 멈추고 천천히 내립니다.",
      ],
    },
    {
      name: "레그 컬",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "무릎이 기계 축에 오도록 맞추고 발목 패드를 겁니다.",
        "뒤꿈치를 엉덩이 쪽으로 당깁니다.",
        "허벅지 뒤쪽이 늘어나는 것을 느끼며 천천히 풉니다.",
      ],
    },
    {
      name: "핵 스쿼트",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "발판에 발을 어깨너비로 올리고 등과 어깨를 패드에 단단히 붙인 뒤 안전 핸들을 풉니다.",
        "발로 발판을 밀어 무릎을 펴며 몸을 위로 밀어 올립니다.",
        "무릎을 천천히 굽혀 허벅지가 평행이 될 때까지 내려가며 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "힙 어브덕션",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "패드에 등을 기대고 앉아 무릎 바깥쪽을 다리 패드에 대고 시작 폭으로 맞춥니다.",
        "엉덩이 바깥쪽에 힘을 주며 두 다리를 양옆으로 벌립니다.",
        "잠깐 멈춘 뒤 천천히 다리를 모아 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "힙 어덕션",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Hoist"],
      steps: [
        "패드에 등을 기대고 앉아 무릎 안쪽을 다리 패드에 대고 두 다리를 벌린 시작 폭으로 맞춥니다.",
        "허벅지 안쪽에 힘을 주며 두 다리를 가운데로 모읍니다.",
        "잠깐 멈춘 뒤 천천히 다리를 벌려 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "스탠딩 카프 레이즈",
      brands: ["Hammer Strength", "Cybex", "Gym80", "Nautilus", "Matrix", "Hoist"],
      steps: [
        "어깨 패드 아래에 서서 발 앞쪽을 발판에 올리고 뒤꿈치는 내려둡니다.",
        "뒤꿈치를 최대한 높이 들어 올리며 종아리를 수축합니다.",
        "잠깐 멈춘 뒤 뒤꿈치를 천천히 내려 종아리를 늘려주며 돌아옵니다.",
      ],
    },
    {
      name: "시티드 카프 레이즈",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "의자에 앉아 무릎 위에 패드를 맞추고 발 앞쪽을 발판에 올립니다.",
        "발끝으로 밀어 뒤꿈치를 높이 들어 올리며 종아리를 수축합니다.",
        "잠깐 멈춘 뒤 뒤꿈치를 천천히 내려 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "글루트 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "가슴 패드에 몸을 기대고 한쪽 발을 발판 패드에 올려 엉덩이 높이를 맞춥니다.",
        "엉덩이에 힘을 주며 다리를 뒤쪽으로 곧게 밀어 올립니다.",
        "잠깐 멈춘 뒤 천천히 다리를 앞으로 돌려 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "힙 쓰러스트 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Gym80", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "등 윗부분을 패드에 기대고 허리 위쪽에 벨트나 바를 걸쳐 발을 바닥에 둡니다.",
        "엉덩이에 힘을 주어 골반을 위로 밀어 올려 몸통이 일직선이 되게 합니다.",
        "엉덩이를 천천히 내려 시작 자세로 돌아옵니다.",
      ],
    },
  ],
  팔: [
    {
      name: "바이셉 컬",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "팔꿈치를 패드에 고정하고 손잡이를 잡습니다.",
        "팔꿈치 위치를 유지한 채 손잡이를 어깨 쪽으로 말아 올립니다.",
        "내릴 때 팔을 끝까지 천천히 폅니다.",
      ],
    },
    {
      name: "트라이셉스 익스텐션",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "팔꿈치를 패드에 붙이고 손잡이를 잡습니다.",
        "팔꿈치를 고정한 채 아래로 완전히 펴냅니다.",
        "돌아올 때 팔꿈치가 벌어지지 않게 천천히 접습니다.",
      ],
    },
    {
      name: "프리처 컬 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Prime", "Matrix", "Atlantis", "Hoist"],
      steps: [
        "좌석 높이를 조절해 겨드랑이 아래가 패드 윗면에 닿도록 앉고 손잡이를 잡습니다.",
        "팔꿈치를 패드에 붙인 채 손잡이를 어깨 쪽으로 천천히 말아 올립니다.",
        "이두근을 꽉 조인 뒤 반동 없이 천천히 시작 자세로 내려옵니다.",
      ],
    },
    {
      name: "트라이셉스 딥 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Nautilus", "Matrix", "Precor", "Hoist"],
      steps: [
        "좌석 높이를 조절하고 등받이에 기대어 앉아 양손으로 손잡이를 잡습니다.",
        "팔꿈치를 몸 옆에 붙인 채 손잡이를 아래로 끝까지 밀어 내립니다.",
        "삼두근 긴장을 유지하며 천천히 시작 위치로 돌아옵니다.",
      ],
    },
  ],
  복근: [
    {
      name: "어브도미널 크런치 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Atlantis", "Hoist"],
      steps: [
        "등받이에 허리를 붙여 앉고 발받침과 핸들 또는 가슴 패드를 몸에 맞게 잡습니다.",
        "숨을 내쉬며 복근을 수축해 상체를 앞으로 말아 내립니다.",
        "숨을 들이마시며 복근 긴장을 유지한 채 천천히 시작 자세로 돌아옵니다.",
      ],
    },
    {
      name: "토르소 로테이션 머신",
      brands: ["Hammer Strength", "Life Fitness", "Technogym", "Cybex", "Gym80", "Prime", "Nautilus", "Matrix", "Precor", "Hoist"],
      steps: [
        "의자에 앉아 무릎과 허벅지를 패드에 고정하고 가슴 패드와 핸들을 잡습니다.",
        "골반은 고정한 채 상체만 한쪽으로 천천히 회전해 옆구리를 수축합니다.",
        "수축을 잠깐 유지한 뒤 천천히 정면으로 돌아오고 반대쪽도 같은 방식으로 합니다.",
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
