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
        name: "디클라인 프레스",
        steps: ["벤치를 아래로 기울여 발을 고정하고 덤벨을 가슴 옆에 둡니다.", "아랫가슴 쪽으로 덤벨을 밀어 올립니다.", "덤벨이 흔들리지 않게 천천히 내립니다."],
      },
      {
        name: "플라이",
        steps: ["벤치에 누워 팔꿈치를 살짝 굽힌 채 덤벨을 위로 듭니다.", "팔을 큰 원을 그리듯 옆으로 벌려 내립니다.", "가슴 힘으로 덤벨을 다시 모아 올립니다."],
      },
      {
        name: "인클라인 플라이",
        steps: ["벤치를 30~45도로 올리고 덤벨을 가슴 위로 듭니다.", "팔꿈치를 살짝 굽힌 채 팔을 옆으로 벌려 내립니다.", "가슴 윗부분 힘으로 덤벨을 다시 모읍니다."],
      },
      {
        name: "디클라인 플라이",
        steps: ["벤치를 아래로 기울이고 누워 덤벨을 가슴 위로 듭니다.", "팔꿈치를 살짝 굽힌 채 팔을 옆으로 벌려 내립니다.", "아랫가슴 힘으로 덤벨을 모아 올립니다."],
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
      {
        name: "클로즈 그립 벤치 프레스",
        steps: ["벤치에 누워 어깨너비보다 좁게 바를 잡습니다.", "팔꿈치를 몸에 붙이며 바를 가슴 아래로 내립니다.", "삼두 힘으로 바를 위로 밀어 올립니다."],
      },
      {
        name: "와이드 그립 벤치 프레스",
        steps: ["벤치에 누워 어깨너비보다 훨씬 넓게 바를 잡습니다.", "바를 가슴 중간까지 천천히 내립니다.", "가슴 바깥쪽 힘으로 바를 밀어 올립니다."],
      },
      {
        name: "풀오버",
        steps: ["벤치에 누워 바를 가슴 위에서 팔을 편 채 잡습니다.", "팔을 편 채 바를 머리 뒤로 내립니다.", "가슴과 등 힘으로 바를 가슴 위로 되돌립니다."],
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
      {
        name: "리버스 그립 벤트오버 로우",
        steps: ["상체를 숙여 등을 평평하게 하고 손바닥이 위로 오게 바를 잡습니다.", "팔꿈치를 몸에 붙인 채 바를 아랫배 쪽으로 당깁니다.", "허리를 고정한 채 천천히 내립니다."],
      },
      {
        name: "굿모닝",
        steps: ["바를 어깨 뒤에 얹고 무릎을 살짝 굽혀 섭니다.", "허리를 편 채 엉덩이를 뒤로 빼며 상체를 숙입니다.", "햄스트링 힘으로 상체를 일으켜 세웁니다."],
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
      {
        name: "언더핸드 풀다운",
        steps: ["높은 케이블 바를 손바닥이 몸쪽으로 오게 어깨너비로 잡고 앉습니다.", "팔꿈치를 몸 옆으로 내리며 바를 가슴 위로 당깁니다.", "등이 늘어나도록 천천히 올라옵니다."],
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
      {
        name: "업라이트 로우",
        steps: ["덤벨을 양손에 들고 허벅지 앞에 둡니다.", "팔꿈치를 위로 끌며 덤벨을 가슴 높이까지 올립니다.", "천천히 내립니다."],
      },
      {
        name: "인클라인 숄더 프레스",
        steps: ["벤치를 70~80도로 세우고 덤벨을 어깨 옆에 둡니다.", "머리 위로 덤벨을 밀어 올립니다.", "어깨 높이까지 천천히 내립니다."],
      },
      {
        name: "원암 숄더 프레스",
        steps: ["덤벨 하나를 어깨 옆에 들고 반대 손은 허리에 둡니다.", "몸통이 기울지 않게 덤벨을 머리 위로 밀어 올립니다.", "천천히 어깨 높이로 내립니다."],
      },
      {
        name: "슈러그",
        steps: ["덤벨을 양손에 들고 팔을 편 채 섭니다.", "팔은 편 채 어깨를 귀 쪽으로 으쓱 올립니다.", "잠깐 멈추고 천천히 내립니다."],
      },
      {
        name: "라잉 리어 레터럴 레이즈",
        steps: ["벤치에 엎드려 덤벨을 양손에 들고 팔을 아래로 늘어뜨립니다.", "팔꿈치를 살짝 굽힌 채 팔을 옆으로 들어 올립니다.", "뒷어깨에 힘을 준 채 천천히 내립니다."],
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
      {
        name: "시티드 밀리터리 프레스",
        steps: ["벤치에 등을 붙이고 앉아 바를 쇄골 앞에서 잡습니다.", "머리 위로 바를 밀어 올립니다.", "턱 높이까지 천천히 내립니다."],
      },
      {
        name: "슈러그",
        steps: ["바를 어깨너비로 잡고 허벅지 앞에 둡니다.", "팔은 편 채 어깨를 귀 쪽으로 으쓱 올립니다.", "잠깐 멈추고 천천히 내립니다."],
      },
      {
        name: "리어 델트 로우",
        steps: ["상체를 숙이고 바를 넓게 잡습니다.", "팔꿈치를 옆으로 벌려 바를 가슴 쪽으로 당깁니다.", "뒷어깨에 힘을 준 채 천천히 내립니다."],
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
      {
        name: "슈러그",
        steps: ["낮은 케이블 바를 허벅지 앞에서 잡고 섭니다.", "팔은 편 채 어깨를 귀 쪽으로 으쓱 올립니다.", "잠깐 멈추고 천천히 내립니다."],
      },
      {
        name: "벤트오버 레터럴 레이즈",
        steps: ["상체를 숙이고 양손으로 케이블을 교차해 잡습니다.", "팔꿈치를 살짝 굽힌 채 팔을 옆으로 들어 올립니다.", "천천히 모아 돌아옵니다."],
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
      {
        name: "스텝업",
        steps: ["덤벨을 양손에 들고 벤치 앞에 섭니다.", "한 발을 올려 그 다리 힘으로 몸을 끌어올립니다.", "천천히 내려와 발을 바꿉니다."],
      },
      {
        name: "리어 런지",
        steps: ["덤벨을 양손에 들고 바르게 섭니다.", "한 발을 뒤로 내딛으며 무릎이 90도가 되게 내려갑니다.", "앞다리로 바닥을 밀며 일어납니다."],
      },
      {
        name: "시티드 원레그 카프 레이즈",
        steps: ["벤치에 앉아 한 무릎 위에 덤벨을 얹고 앞꿈치로 바닥을 짚습니다.", "발뒤꿈치를 끝까지 들어 올립니다.", "천천히 내려 종아리를 늘립니다."],
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
      {
        name: "프론트 스쿼트",
        steps: ["바를 어깨 앞에 얹고 팔꿈치를 높이 듭니다.", "상체를 세운 채 허벅지가 바닥과 평행해질 때까지 앉습니다.", "발로 바닥을 밀며 일어납니다."],
      },
      {
        name: "오버헤드 스쿼트",
        steps: ["바를 머리 위로 넓게 잡고 팔을 편 채 섭니다.", "상체를 세운 채 천천히 앉습니다.", "바를 머리 위에 고정한 채 일어납니다."],
      },
      {
        name: "스텝업",
        steps: ["바를 어깨 뒤에 얹고 벤치 앞에 섭니다.", "한 발을 올려 그 다리 힘으로 몸을 끌어올립니다.", "천천히 내려와 발을 바꿉니다."],
      },
      {
        name: "리어 런지",
        steps: ["바를 어깨 뒤에 얹고 바르게 섭니다.", "한 발을 뒤로 내딛으며 무릎이 90도가 되게 내려갑니다.", "앞다리로 바닥을 밀며 일어납니다."],
      },
      {
        name: "와이드 스탠스 스쿼트",
        steps: ["바를 어깨 뒤에 얹고 발을 어깨보다 넓게 벌립니다.", "무릎을 바깥으로 보내며 천천히 앉습니다.", "엉덩이와 허벅지 안쪽 힘으로 일어납니다."],
      },
      {
        name: "핵 스쿼트",
        steps: ["바를 뒤꿈치 뒤에서 등 뒤로 잡고 섭니다.", "상체를 세운 채 천천히 앉습니다.", "발로 바닥을 밀며 일어납니다."],
      },
      {
        name: "스탠딩 카프 레이즈",
        steps: ["바를 어깨 뒤에 얹고 앞꿈치를 발판에 올립니다.", "발뒤꿈치를 끝까지 들어 올립니다.", "천천히 내려 종아리를 늘립니다."],
      },
      {
        name: "시티드 카프 레이즈",
        steps: ["벤치에 앉아 바를 무릎 위에 얹고 앞꿈치로 바닥을 짚습니다.", "발뒤꿈치를 끝까지 들어 올립니다.", "천천히 내려 종아리를 늘립니다."],
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
      {
        name: "컨센트레이션 컬",
        steps: ["벤치에 앉아 팔꿈치를 허벅지 안쪽에 고정하고 덤벨을 듭니다.", "팔꿈치를 고정한 채 덤벨을 어깨 쪽으로 말아 올립니다.", "천천히 팔을 펴며 내립니다."],
      },
      {
        name: "얼터네이팅 컬",
        steps: ["덤벨을 양손에 들고 팔꿈치를 몸에 붙입니다.", "한 팔씩 번갈아 덤벨을 어깨 쪽으로 말아 올립니다.", "천천히 내리며 반대 팔로 반복합니다."],
      },
      {
        name: "인클라인 컬",
        steps: ["벤치를 45~60도로 세우고 기대어 팔을 아래로 늘어뜨립니다.", "팔꿈치를 고정한 채 덤벨을 말아 올립니다.", "이두가 늘어나도록 천천히 내립니다."],
      },
      {
        name: "크로스 바디 해머 컬",
        steps: ["덤벨을 양손에 들고 손바닥이 마주 보게 합니다.", "한 팔씩 덤벨을 반대쪽 어깨를 향해 비스듬히 올립니다.", "천천히 내리며 반대 팔로 반복합니다."],
      },
      {
        name: "조트먼 컬",
        steps: ["덤벨을 들고 손바닥이 위로 오게 올립니다.", "맨 위에서 손목을 돌려 손바닥이 아래로 오게 합니다.", "그 자세로 천천히 내립니다."],
      },
      {
        name: "원암 프리처 컬",
        steps: ["프리처 벤치에 팔꿈치와 윗팔을 대고 덤벨을 잡습니다.", "덤벨을 어깨 쪽으로 말아 올립니다.", "팔이 거의 펴질 때까지 천천히 내립니다."],
      },
      {
        name: "킥백",
        steps: ["벤치에 한 손과 무릎을 짚고 덤벨을 든 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 덤벨을 뒤로 곧게 폅니다.", "천천히 팔을 굽혀 돌아옵니다."],
      },
      {
        name: "라잉 트라이셉스 익스텐션",
        steps: ["벤치에 누워 덤벨을 얼굴 위에서 듭니다.", "윗팔을 고정한 채 팔꿈치를 굽혀 덤벨을 머리 옆으로 내립니다.", "삼두 힘으로 팔을 펴 올립니다."],
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
      {
        name: "EZ바 컬",
        steps: ["EZ바의 굽은 부분을 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 어깨 쪽으로 말아 올립니다.", "천천히 내립니다."],
      },
      {
        name: "프리처 컬",
        steps: ["프리처 벤치에 팔과 겨드랑이를 대고 바를 잡습니다.", "바를 어깨 쪽으로 말아 올립니다.", "팔이 거의 펴질 때까지 천천히 내립니다."],
      },
      {
        name: "스파이더 컬",
        steps: ["벤치에 가슴을 대고 엎드려 팔을 아래로 늘어뜨리고 바를 잡습니다.", "바를 어깨 쪽으로 말아 올립니다.", "천천히 내립니다."],
      },
      {
        name: "드래그 컬",
        steps: ["바를 잡고 허벅지 앞에 둡니다.", "팔꿈치를 뒤로 보내며 바를 몸에 붙여 끌어올립니다.", "같은 길로 천천히 내립니다."],
      },
      {
        name: "와이드 그립 컬",
        steps: ["어깨보다 넓게 바를 잡고 섭니다.", "팔꿈치를 몸에 붙인 채 바를 말아 올립니다.", "이두 안쪽의 긴장을 유지하며 내립니다."],
      },
      {
        name: "스탠딩 오버헤드 트라이셉스 익스텐션",
        steps: ["바를 머리 위로 들고 팔을 폅니다.", "팔꿈치를 고정한 채 바를 머리 뒤로 내립니다.", "삼두 힘으로 팔을 펴 올립니다."],
      },
      {
        name: "JM 프레스",
        steps: ["벤치에 누워 바를 좁게 잡고 가슴 위로 듭니다.", "팔꿈치를 앞으로 모으며 바를 턱 쪽으로 내립니다.", "삼두 힘으로 바를 밀어 올립니다."],
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
      {
        name: "프리처 컬",
        steps: ["프리처 벤치에 팔을 대고 낮은 케이블 바를 잡습니다.", "바를 어깨 쪽으로 말아 올립니다.", "팔이 거의 펴질 때까지 천천히 내립니다."],
      },
      {
        name: "하이 케이블 컬",
        steps: ["양쪽 높은 케이블 손잡이를 잡고 팔을 옆으로 폅니다.", "팔꿈치를 어깨 높이에 둔 채 손잡이를 귀 쪽으로 당깁니다.", "천천히 팔을 폅니다."],
      },
      {
        name: "오버헤드 컬",
        steps: ["낮은 케이블 바를 잡고 머리 위로 팔을 듭니다.", "팔꿈치를 고정한 채 바를 이마 쪽으로 말아 내립니다.", "천천히 팔을 폅니다."],
      },
      {
        name: "라잉 트라이셉스 익스텐션",
        steps: ["벤치에 누워 낮은 케이블 바를 머리 위에서 잡습니다.", "윗팔을 고정한 채 바를 이마 쪽으로 내립니다.", "삼두 힘으로 팔을 펴 올립니다."],
      },
      {
        name: "리버스 그립 푸시다운",
        steps: ["높은 케이블 바를 손바닥이 위로 오게 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 아래로 폅니다.", "천천히 올라옵니다."],
      },
      {
        name: "V바 푸시다운",
        steps: ["높은 케이블에 V바를 걸고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 바를 아래로 폅니다.", "천천히 올라옵니다."],
      },
      {
        name: "원암 푸시다운",
        steps: ["높은 케이블 손잡이를 한 손으로 잡고 팔꿈치를 몸에 붙입니다.", "팔꿈치를 고정한 채 손잡이를 아래로 폅니다.", "천천히 올라오고 반대 손으로 반복합니다."],
      },
    ],
  },
  복근: {
    Dumbbell: [
      {
        name: "사이드 벤드",
        steps: ["덤벨 하나를 한 손에 들고 바르게 섭니다.", "허리를 옆으로 굽혀 덤벨 쪽 몸통을 내립니다.", "옆구리 힘으로 일어나고 반대편도 반복합니다."],
      },
    ],
    Barbell: [
      {
        name: "앱 롤아웃",
        steps: ["바벨을 잡고 무릎을 꿇어 몸을 곧게 폅니다.", "허리가 꺾이지 않게 바를 앞으로 굴려 나갑니다.", "복근으로 바를 당겨 시작 자세로 돌아옵니다."],
      },
    ],
    Cable: [
      {
        name: "시티드 앱 크런치",
        steps: ["케이블 로프를 머리 옆에서 잡고 무릎을 꿇거나 앉습니다.", "복근을 말아 상체를 아래로 숙입니다.", "천천히 상체를 펴며 돌아옵니다."],
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
  "Dumbbell|디클라인 프레스": "/free-weight/dumbbell-decline-press.png",
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
  "Dumbbell|인클라인 플라이": "/free-weight/dumbbell-incline-fly.png",
  "Dumbbell|디클라인 플라이": "/free-weight/dumbbell-decline-fly.png",
  "Barbell|클로즈 그립 벤치 프레스": "/free-weight/barbell-close-grip-bench-press.png",
  "Barbell|와이드 그립 벤치 프레스": "/free-weight/barbell-wide-grip-bench-press.png",
  "Barbell|풀오버": "/free-weight/barbell-pullover.png",
  "Barbell|리버스 그립 벤트오버 로우": "/free-weight/barbell-reverse-grip-bent-over-row.png",
  "Barbell|굿모닝": "/free-weight/barbell-good-morning.png",
  "Cable|언더핸드 풀다운": "/free-weight/cable-underhand-pulldown.png",
  "Dumbbell|업라이트 로우": "/free-weight/dumbbell-upright-row.png",
  "Dumbbell|인클라인 숄더 프레스": "/free-weight/dumbbell-incline-shoulder-press.png",
  "Dumbbell|원암 숄더 프레스": "/free-weight/dumbbell-one-arm-shoulder-press.png",
  "Dumbbell|슈러그": "/free-weight/dumbbell-shrug.png",
  "Dumbbell|라잉 리어 레터럴 레이즈": "/free-weight/dumbbell-lying-rear-lateral-raise.png",
  "Barbell|시티드 밀리터리 프레스": "/free-weight/barbell-seated-military-press.png",
  "Barbell|슈러그": "/free-weight/barbell-shrug.png",
  "Barbell|리어 델트 로우": "/free-weight/barbell-rear-deltoid-row.png",
  "Cable|슈러그": "/free-weight/cable-shrug.png",
  "Cable|벤트오버 레터럴 레이즈": "/free-weight/cable-bent-over-lateral-raise.png",
  "Dumbbell|스텝업": "/free-weight/dumbbell-step-up.png",
  "Dumbbell|리어 런지": "/free-weight/dumbbell-rear-lunge.png",
  "Dumbbell|시티드 원레그 카프 레이즈": "/free-weight/dumbbell-seated-one-leg-calf-raise.png",
  "Barbell|프론트 스쿼트": "/free-weight/barbell-front-squat.png",
  "Barbell|오버헤드 스쿼트": "/free-weight/barbell-overhead-squat.png",
  "Barbell|스텝업": "/free-weight/barbell-step-up.png",
  "Barbell|리어 런지": "/free-weight/barbell-rear-lunge.png",
  "Barbell|와이드 스탠스 스쿼트": "/free-weight/barbell-wide-stance-squat.png",
  "Barbell|핵 스쿼트": "/free-weight/barbell-hack-squat.png",
  "Barbell|스탠딩 카프 레이즈": "/free-weight/barbell-standing-calf-raise.png",
  "Barbell|시티드 카프 레이즈": "/free-weight/barbell-seated-calf-raise.png",
  "Dumbbell|컨센트레이션 컬": "/free-weight/dumbbell-concentration-curl.png",
  "Dumbbell|얼터네이팅 컬": "/free-weight/dumbbell-alternating-curl.png",
  "Dumbbell|인클라인 컬": "/free-weight/dumbbell-incline-curl.png",
  "Dumbbell|크로스 바디 해머 컬": "/free-weight/dumbbell-cross-body-hammer-curl.png",
  "Dumbbell|조트먼 컬": "/free-weight/dumbbell-zottman-curl.png",
  "Dumbbell|원암 프리처 컬": "/free-weight/dumbbell-one-arm-preacher-curl.png",
  "Dumbbell|킥백": "/free-weight/dumbbell-triceps-kickback.png",
  "Dumbbell|라잉 트라이셉스 익스텐션": "/free-weight/dumbbell-lying-triceps-extension.png",
  "Barbell|EZ바 컬": "/free-weight/barbell-ez-bar-curl.png",
  "Barbell|프리처 컬": "/free-weight/barbell-preacher-curl.png",
  "Barbell|스파이더 컬": "/free-weight/barbell-spider-curl.png",
  "Barbell|드래그 컬": "/free-weight/barbell-drag-curl.png",
  "Barbell|와이드 그립 컬": "/free-weight/barbell-wide-grip-curl.png",
  "Barbell|스탠딩 오버헤드 트라이셉스 익스텐션": "/free-weight/barbell-standing-overhead-triceps-extension.png",
  "Barbell|JM 프레스": "/free-weight/barbell-jm-press.png",
  "Cable|프리처 컬": "/free-weight/cable-preacher-curl.png",
  "Cable|하이 케이블 컬": "/free-weight/cable-high-curl.png",
  "Cable|오버헤드 컬": "/free-weight/cable-overhead-curl.png",
  "Cable|라잉 트라이셉스 익스텐션": "/free-weight/cable-lying-triceps-extension.png",
  "Cable|리버스 그립 푸시다운": "/free-weight/cable-reverse-grip-pushdown.png",
  "Cable|V바 푸시다운": "/free-weight/cable-v-bar-pushdown.png",
  "Cable|원암 푸시다운": "/free-weight/cable-one-arm-extension.png",
  "Dumbbell|사이드 벤드": "/free-weight/dumbbell-side-bend.png",
  "Barbell|앱 롤아웃": "/free-weight/barbell-ab-rollout.png",
  "Cable|시티드 앱 크런치": "/free-weight/cable-seated-ab-crunch.png",
};

/** 프리웨이트 운동 사진 주소. 없으면 undefined. */
export function freeWeightImage(exercise: string, equipment: Equipment): string | undefined {
  return FREE_WEIGHT_IMAGES[`${equipment}|${exercise}`];
}
