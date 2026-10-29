export const EQUIPMENT = ["Dumbbell", "Barbell", "Cable"] as const;
export type Equipment = (typeof EQUIPMENT)[number];

type FreeWeightEntry = { name: string; steps: string[] };

/**
 * 프리웨이트 대표 운동. 부위는 머신과 같고, 장비(Dumbbell, Barbell, Cable)별로 나눈다.
 * 기록에서는 장비 이름이 머신 브랜드 자리에 들어가서, 같은 운동이라도 장비가 다르면 따로 기록한다.
 */
const FREE_WEIGHT: Record<string, Record<Equipment, FreeWeightEntry[]>> = {
  가슴: {
    Dumbbell: [
      {
        name: "벤치 프레스",
        steps: ["벤치에 누워 덤벨을 가슴 옆에 둡니다.", "어깨를 모은 채 덤벨을 위로 밀어 올립니다.", "가슴이 늘어나는 깊이까지 천천히 내립니다."],
      },
      {
        name: "인클라인 프레스",
        steps: ["벤치를 30~45도로 올리고 덤벨을 윗가슴 옆에 둡니다.", "팔꿈치를 몸에서 살짝 벌려 위로 밀어 올립니다.", "내릴 때 덤벨이 흔들리지 않게 천천히 내립니다."],
      },
      {
        name: "플라이",
        steps: ["벤치에 누워 팔꿈치를 살짝 굽힌 채 덤벨을 위로 듭니다.", "팔을 큰 원을 그리듯 옆으로 벌려 내립니다.", "가슴 힘으로 덤벨을 다시 모아 올립니다."],
      },
    ],
    Barbell: [
      {
        name: "벤치 프레스",
        steps: ["벤치에 누워 어깨너비보다 넓게 바를 잡습니다.", "바를 가슴 중간까지 천천히 내립니다.", "발로 바닥을 밀며 바를 위로 밀어 올립니다."],
      },
      {
        name: "인클라인 벤치 프레스",
        steps: ["벤치를 30~45도로 올리고 바를 잡습니다.", "바를 윗가슴까지 내립니다.", "어깨가 솟지 않게 위로 밀어 올립니다."],
      },
      {
        name: "디클라인 벤치 프레스",
        steps: ["벤치를 아래로 기울여 발을 고정하고 바를 잡습니다.", "바를 아랫가슴까지 내립니다.", "팔꿈치를 펴며 위로 밀어 올립니다."],
      },
    ],
    Cable: [
      {
        name: "크로스오버",
        steps: ["양쪽 케이블을 머리 위 높이로 두고 한 발을 앞으로 내딛습니다.", "가슴을 연 채 두 손을 몸 앞으로 모읍니다.", "천천히 벌려 시작 자세로 돌아갑니다."],
      },
      {
        name: "플랫 플라이",
        steps: ["벤치에 누워 양손으로 케이블 손잡이를 잡고 팔을 위로 모읍니다.", "팔꿈치를 살짝 굽힌 채 팔을 옆으로 벌려 내립니다.", "가슴 힘으로 다시 모아 올립니다."],
      },
      {
        name: "인클라인 플라이",
        steps: ["벤치를 30~45도로 올리고 양손으로 케이블 손잡이를 잡습니다.", "팔꿈치를 살짝 굽힌 채 팔을 위로 모읍니다.", "천천히 벌려 내립니다."],
      },
    ],
  },
  등: {
    Dumbbell: [
      {
        name: "벤트오버 로우",
        steps: ["덤벨을 양손에 들고 상체를 숙여 등을 평평하게 합니다.", "팔꿈치를 벌려 덤벨을 가슴 쪽으로 당겨 올립니다.", "등이 늘어나도록 천천히 내립니다."],
      },
      {
        name: "덤벨 풀오버",
        steps: ["벤치에 어깨를 대고 누워 덤벨 하나를 두 손으로 잡습니다.", "팔을 편 채 덤벨을 머리 뒤로 내립니다.", "가슴과 등 힘으로 덤벨을 가슴 위로 되돌립니다."],
      },
    ],
    Barbell: [
      {
        name: "데드리프트",
        steps: ["바 앞에 발을 어깨너비로 서고 허리를 편 채 바를 잡습니다.", "엉덩이와 무릎을 함께 펴며 바를 몸 가까이 끌어 올립니다.", "허리를 편 채 천천히 바닥으로 내립니다."],
      },
      {
        name: "벤트오버 로우",
        steps: ["상체를 숙여 등을 평평하게 하고 바를 잡습니다.", "바를 배꼽 쪽으로 팔꿈치를 당겨 올립니다.", "허리를 고정한 채 천천히 내립니다."],
      },
    ],
    Cable: [
      {
        name: "시티드 로우",
        steps: ["발판에 발을 대고 앉아 허리를 편 채 손잡이를 잡습니다.", "견갑골을 모으며 손잡이를 배 쪽으로 당깁니다.", "등이 늘어나도록 천천히 돌아갑니다."],
      },
      {
        name: "스트레이트 암 풀다운",
        steps: ["높은 케이블 앞에 서서 팔을 편 채 바를 잡습니다.", "팔을 편 채 바를 허벅지 쪽으로 끌어내립니다.", "등이 늘어나도록 천천히 올립니다."],
      },
      {
        name: "V바 풀다운",
        steps: ["높은 케이블에 V바를 걸고 다리를 패드에 고정해 앉습니다.", "팔꿈치를 몸 옆으로 내리며 손잡이를 가슴 쪽으로 당깁니다.", "천천히 팔을 펴며 올라옵니다."],
      },
    ],
  },
  어깨: {
    Dumbbell: [
      {
        name: "숄더 프레스",
        steps: ["덤벨을 어깨 높이에 두고 앉거나 섭니다.", "머리 위로 덤벨을 밀어 올립니다.", "귀 옆까지 천천히 내립니다."],
      },
      {
        name: "레터럴 레이즈",
        steps: ["덤벨을 몸 옆에 두고 팔꿈치를 살짝 굽힙니다.", "팔을 옆으로 어깨 높이까지 듭니다.", "반동 없이 천천히 내립니다."],
      },
      {
        name: "프론트 레이즈",
        steps: ["덤벨을 허벅지 앞에 두고 섭니다.", "팔을 앞으로 어깨 높이까지 듭니다.", "천천히 내립니다."],
      },
    ],
    Barbell: [
      {
        name: "오버헤드 프레스",
        steps: ["바를 쇄골 위에 두고 어깨너비로 잡습니다.", "머리를 살짝 피하며 바를 머리 위로 밀어 올립니다.", "쇄골 위로 천천히 내립니다."],
      },
      {
        name: "업라이트 로우",
        steps: ["바를 허벅지 앞에 두고 좁게 잡습니다.", "팔꿈치를 위로 끌며 바를 가슴 높이까지 올립니다.", "천천히 내립니다."],
      },
    ],
    Cable: [
      {
        name: "프론트 레이즈",
        steps: ["낮은 케이블에 등을 돌리고 서서 손잡이를 허벅지 앞에서 잡습니다.", "팔을 앞으로 어깨 높이까지 듭니다.", "천천히 내립니다."],
      },
      {
        name: "리어 레터럴 레이즈",
        steps: ["앉아서 양팔을 교차해 케이블 손잡이를 잡습니다.", "팔을 옆으로 벌려 어깨 높이까지 당깁니다.", "천천히 모아 돌아옵니다."],
      },
      {
        name: "업라이트 로우",
        steps: ["낮은 케이블 앞에서 바를 허벅지 앞에 잡습니다.", "팔꿈치를 위로 끌며 바를 가슴 높이까지 올립니다.", "천천히 내립니다."],
      },
    ],
  },
  하체: {
    Dumbbell: [
      {
        name: "스쿼트",
        steps: ["덤벨을 양손에 들고 몸 옆에 둡니다.", "엉덩이를 뒤로 빼며 허벅지가 바닥과 나란해질 때까지 앉습니다.", "발바닥으로 바닥을 밀며 일어납니다."],
      },
      {
        name: "런지",
        steps: ["덤벨을 양손에 들고 한 발을 앞으로 내딛습니다.", "뒤쪽 무릎이 바닥에 닿기 직전까지 내려갑니다.", "앞발로 밀어 제자리로 돌아옵니다."],
      },
      {
        name: "데드리프트",
        steps: ["덤벨을 양손에 들고 발을 어깨너비로 섭니다.", "허리를 편 채 엉덩이를 뒤로 빼며 덤벨을 정강이 쪽으로 내립니다.", "엉덩이를 앞으로 밀며 일어납니다."],
      },
    ],
    Barbell: [
      {
        name: "스쿼트",
        steps: ["바를 어깨 뒤에 얹고 발을 어깨너비로 섭니다.", "엉덩이를 뒤로 빼며 허벅지가 바닥과 나란해질 때까지 앉습니다.", "발바닥으로 바닥을 밀며 일어납니다."],
      },
      {
        name: "루마니안 데드리프트",
        steps: ["바를 허벅지 앞에 두고 무릎을 살짝 굽힙니다.", "엉덩이를 뒤로 빼며 바를 정강이 쪽으로 내립니다.", "엉덩이를 앞으로 밀며 일어납니다."],
      },
      {
        name: "런지",
        steps: ["바를 어깨 뒤에 얹고 한 발을 앞으로 내딛습니다.", "뒤쪽 무릎이 바닥에 닿기 직전까지 내려갑니다.", "앞발로 밀어 제자리로 돌아옵니다."],
      },
    ],
    Cable: [
      {
        name: "킥백",
        steps: ["발목 스트랩을 걸고 케이블 머신에 손을 짚고 섭니다.", "엉덩이 힘으로 다리를 뒤로 뻗어 올립니다.", "천천히 돌아옵니다."],
      },
      {
        name: "힙 어덕션",
        steps: ["케이블 머신 옆에서 안쪽 다리를 발목 스트랩에 겁니다.", "다리를 몸 안쪽으로 가로질러 모읍니다.", "천천히 시작 자세로 돌아갑니다."],
      },
    ],
  },
  팔: {
    Dumbbell: [
      {
        name: "덤벨 컬",
        steps: ["덤벨을 몸 옆에 들고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 덤벨을 어깨 쪽으로 말아 올립니다.", "천천히 내립니다."],
      },
      {
        name: "해머 컬",
        steps: ["손바닥이 서로 마주 보게 덤벨을 듭니다.", "팔꿈치를 고정한 채 덤벨을 어깨 쪽으로 올립니다.", "천천히 내립니다."],
      },
      {
        name: "오버헤드 트라이셉스 익스텐션",
        steps: ["덤벨 하나를 두 손으로 잡아 머리 위로 듭니다.", "팔꿈치를 고정한 채 덤벨을 머리 뒤로 내립니다.", "팔꿈치를 펴며 위로 올립니다."],
      },
    ],
    Barbell: [
      {
        name: "바벨 컬",
        steps: ["바를 어깨너비로 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 어깨 쪽으로 말아 올립니다.", "천천히 내립니다."],
      },
      {
        name: "라잉 트라이셉스 익스텐션",
        steps: ["벤치에 누워 바를 가슴 위로 듭니다.", "팔꿈치를 고정한 채 바를 이마 쪽으로 내립니다.", "팔꿈치를 펴며 다시 올립니다."],
      },
    ],
    Cable: [
      {
        name: "바이셉 컬",
        steps: ["낮은 케이블 앞에 서서 바를 어깨너비로 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 어깨 쪽으로 말아 올립니다.", "천천히 내립니다."],
      },
      {
        name: "로프 해머 컬",
        steps: ["낮은 케이블에 로프를 걸고 손바닥이 마주 보게 잡습니다.", "팔꿈치를 고정한 채 로프를 어깨 쪽으로 올립니다.", "천천히 내립니다."],
      },
      {
        name: "트라이셉스 푸시다운",
        steps: ["높은 케이블 앞에 서서 바를 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 아래로 완전히 펴 내립니다.", "천천히 올라옵니다."],
      },
    ],
  },
};

/** 한 부위에서 운동이 있는 장비들. */
export function equipmentOf(part: string): Equipment[] {
  return EQUIPMENT.filter((equipment) => (FREE_WEIGHT[part]?.[equipment] ?? []).length > 0);
}

/** 한 부위·장비의 대표 운동 이름들. */
export function freeWeightExercises(part: string, equipment: Equipment): string[] {
  return (FREE_WEIGHT[part]?.[equipment] ?? []).map((entry) => entry.name);
}

export function freeWeightParts(): string[] {
  return Object.keys(FREE_WEIGHT).filter((part) => equipmentOf(part).length > 0);
}

export function isEquipment(value: string): value is Equipment {
  return (EQUIPMENT as readonly string[]).includes(value);
}

/** 프리웨이트 운동의 부위. 없으면 undefined. */
export function freeWeightPartOf(exercise: string, equipment: Equipment): string | undefined {
  return freeWeightParts().find((part) => freeWeightExercises(part, equipment).includes(exercise));
}

export function freeWeightSteps(exercise: string, equipment: Equipment): string[] {
  for (const part of Object.keys(FREE_WEIGHT)) {
    const found = FREE_WEIGHT[part][equipment].find((entry) => entry.name === exercise);
    if (found) return found.steps;
  }
  return [];
}

/**
 * 프리웨이트 운동 그림(장비|운동). Everkinetic이 그린 일러스트(CC BY-SA 4.0,
 * github.com/everkinetic/data)를 public/free-weight에 내려받아 썼다. 앱 안에 출처를 표시해야 한다.
 */
const FREE_WEIGHT_IMAGES: Record<string, string> = {
  "Dumbbell|벤치 프레스": "/free-weight/dumbbell-bench-press.png",
  "Dumbbell|인클라인 프레스": "/free-weight/dumbbell-incline-press.png",
  "Dumbbell|플라이": "/free-weight/dumbbell-fly.png",
  "Dumbbell|벤트오버 로우": "/free-weight/dumbbell-bent-over-row.png",
  "Dumbbell|덤벨 풀오버": "/free-weight/dumbbell-pullover.png",
  "Dumbbell|숄더 프레스": "/free-weight/dumbbell-shoulder-press.png",
  "Dumbbell|레터럴 레이즈": "/free-weight/dumbbell-lateral-raise.png",
  "Dumbbell|프론트 레이즈": "/free-weight/dumbbell-front-raise.png",
  "Dumbbell|스쿼트": "/free-weight/dumbbell-squat.png",
  "Dumbbell|런지": "/free-weight/dumbbell-lunge.png",
  "Dumbbell|데드리프트": "/free-weight/dumbbell-deadlift.png",
  "Dumbbell|덤벨 컬": "/free-weight/dumbbell-curl.png",
  "Dumbbell|해머 컬": "/free-weight/dumbbell-hammer-curl.png",
  "Dumbbell|오버헤드 트라이셉스 익스텐션": "/free-weight/dumbbell-overhead-triceps-extension.png",
  "Barbell|벤치 프레스": "/free-weight/barbell-bench-press.png",
  "Barbell|인클라인 벤치 프레스": "/free-weight/barbell-incline-bench-press.png",
  "Barbell|디클라인 벤치 프레스": "/free-weight/barbell-decline-bench-press.png",
  "Barbell|데드리프트": "/free-weight/barbell-deadlift.png",
  "Barbell|벤트오버 로우": "/free-weight/barbell-bent-over-row.png",
  "Barbell|오버헤드 프레스": "/free-weight/barbell-overhead-press.png",
  "Barbell|업라이트 로우": "/free-weight/barbell-upright-row.png",
  "Barbell|스쿼트": "/free-weight/barbell-squat.png",
  "Barbell|루마니안 데드리프트": "/free-weight/barbell-romanian-deadlift.png",
  "Barbell|런지": "/free-weight/barbell-lunge.png",
  "Barbell|바벨 컬": "/free-weight/barbell-curl.png",
  "Barbell|라잉 트라이셉스 익스텐션": "/free-weight/barbell-lying-triceps-extension.png",
  "Cable|크로스오버": "/free-weight/cable-crossover.png",
  "Cable|플랫 플라이": "/free-weight/cable-flat-fly.png",
  "Cable|인클라인 플라이": "/free-weight/cable-incline-fly.png",
  "Cable|시티드 로우": "/free-weight/cable-seated-row.png",
  "Cable|스트레이트 암 풀다운": "/free-weight/cable-straight-arm-pulldown.png",
  "Cable|V바 풀다운": "/free-weight/cable-v-bar-pulldown.png",
  "Cable|프론트 레이즈": "/free-weight/cable-front-raise.png",
  "Cable|리어 레터럴 레이즈": "/free-weight/cable-rear-lateral-raise.png",
  "Cable|업라이트 로우": "/free-weight/cable-upright-row.png",
  "Cable|킥백": "/free-weight/cable-kickback.png",
  "Cable|힙 어덕션": "/free-weight/cable-hip-adduction.png",
  "Cable|바이셉 컬": "/free-weight/cable-curl.png",
  "Cable|로프 해머 컬": "/free-weight/cable-rope-hammer-curl.png",
  "Cable|트라이셉스 푸시다운": "/free-weight/cable-triceps-pushdown.png",
};

/** 프리웨이트 운동 사진 주소. 없으면 undefined. */
export function freeWeightImage(exercise: string, equipment: Equipment): string | undefined {
  return FREE_WEIGHT_IMAGES[`${equipment}|${exercise}`];
}
