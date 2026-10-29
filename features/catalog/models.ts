export const CATEGORIES = ["Pin", "Plate"] as const;
export type MachineCategory = (typeof CATEGORIES)[number];

export type MachineModel = {
  /** 제품 이름(브랜드 공식 사이트나 판매처 표기). 같은 브랜드의 같은 종목에서 머신을 구분한다. */
  name: string;
  /** Pin은 핀을 꽂는 선택식, Plate는 원판을 끼우는 플레이트식. */
  category: MachineCategory;
  /** 제품 사진 주소. 아직 구하지 못했으면 없다. */
  src?: string;
  /** 사진에 판매처 배지가 겹친 경우 그 부분을 가리는 clip-path 값. */
  clip?: string;
};

/**
 * 종목|브랜드별 머신 모델. 한 브랜드가 같은 종목에 여러 머신을 만들면 목록에 모델을 여러 개 둔다.
 * 사진은 브랜드 공식 사이트와 판매처의 제품 사진을 내려받아 public/machines에 둔다.
 */
export const MODELS: Record<string, MachineModel[]> = {
  "렛풀다운|Hammer Strength": [{ name: "Select Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-hammer-strength.jpg" }],
  "렛풀다운|Life Fitness": [{ name: "Insignia Series Pulldown", category: "Pin", src: "/machines/lat-pulldown-life-fitness.jpg" }],
  "렛풀다운|Technogym": [{ name: "Selection 900 Lat Machine", category: "Pin", src: "/machines/lat-pulldown-technogym.jpg" }],
  "렛풀다운|Cybex": [{ name: "Prestige VRS Pulldown", category: "Pin", src: "/machines/lat-pulldown-cybex.png", clip: "polygon(0 0, 66.5% 0, 66.5% 45%, 100% 45%, 100% 100%, 0 100%)" }],
  "렛풀다운|Gym80": [{ name: "Pure Kraft Lat Pulldown Dual", category: "Plate", src: "/machines/lat-pulldown-gym80.png" }],
  "렛풀다운|Prime": [{ name: "Hybrid Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-prime.jpg" }],
  "렛풀다운|Nautilus": [{ name: "Impact Lat Pull Down", category: "Pin", src: "/machines/lat-pulldown-nautilus.png" }],
  "체스트 프레스|Cybex": [
    { name: "Prestige VRS Chest Press", category: "Pin", src: "/machines/chest-press-cybex.png" },
    { name: "Eagle NX Chest Press", category: "Pin", src: "/machines/chest-press-cybex-eagle-nx.png" },
    { name: "Ion Series Chest Press", category: "Pin", src: "/machines/chest-press-cybex-ion.png" },
  ],
  "체스트 프레스|Gym80": [
    { name: "Pure Kraft Seated Chest Press", category: "Plate", src: "/machines/chest-press-gym80.png" },
    { name: "Sygnum Seated Chest Press", category: "Pin", src: "/machines/chest-press-gym80-sygnum.jpg" },
    { name: "Sygnum Dual Chest Press", category: "Pin", src: "/machines/chest-press-gym80-sygnum-dual.jpg" },
  ],
  "체스트 프레스|Hammer Strength": [
    { name: "Select Chest Press", category: "Pin", src: "/machines/chest-press-hammer-strength.jpg" },
    { name: "MTS Iso-Lateral Chest Press", category: "Pin", src: "/machines/chest-press-hammer-strength-mts.jpg" },
    { name: "Plate-Loaded Iso-Lateral Wide Chest", category: "Plate", src: "/machines/chest-press-hammer-strength-wide.jpg" },
    { name: "Plate-Loaded Iso-Lateral Bench Press", category: "Plate", src: "/machines/chest-press-hammer-strength-bench.jpg" },
    { name: "Plate-Loaded Iso-Lateral Horizontal Bench Press", category: "Plate", src: "/machines/chest-press-hammer-strength-horizontal-bench.jpg" },
  ],
  "체스트 프레스|Life Fitness": [
    { name: "Insignia Series Chest Press", category: "Pin", src: "/machines/chest-press-life-fitness.jpg" },
    { name: "Insignia Series Dual Axis Chest Press", category: "Pin", src: "/machines/chest-press-life-fitness-dual-axis.jpg" },
    { name: "Axiom Series Chest Press", category: "Pin", src: "/machines/chest-press-life-fitness-axiom.jpg" },
  ],
  "체스트 프레스|Technogym": [{ name: "Selection Chest Press", category: "Pin", src: "/machines/chest-press-technogym.png" }],
  "인클라인 프레스|Gym80": [{ name: "Pure Kraft Incline Chest Press", category: "Plate", src: "/machines/incline-press-gym80.png" }],
  "인클라인 프레스|Cybex": [{ name: "Eagle Incline Press", category: "Pin", src: "/machines/incline-press-cybex.jpg", clip: "polygon(0 0, 100% 0, 100% 90%, 60% 90%, 60% 100%, 0 100%)" }],
  "인클라인 프레스|Hammer Strength": [{ name: "Iso-Lateral Incline Press", category: "Plate", src: "/machines/incline-press-hammer-strength.jpg" }],
  "펙덱 플라이|Life Fitness": [{ name: "Insignia Series Pectoral Fly / Rear Deltoid", category: "Pin", src: "/machines/pec-deck-life-fitness.jpg" }],
  "펙덱 플라이|Nautilus": [{ name: "Impact Pec Fly / Rear Deltoid", category: "Pin", src: "/machines/pec-deck-nautilus.png" }],
  "펙덱 플라이|Prime": [{ name: "Hybrid Pec Fly", category: "Pin", src: "/machines/pec-deck-prime.jpg" }],
  "펙덱 플라이|Technogym": [{ name: "Selection Pectoral", category: "Pin", src: "/machines/pec-deck-technogym.png" }],
  "시티드 로우|Cybex": [{ name: "Prestige VRS Row", category: "Pin", src: "/machines/seated-row-cybex.jpg" }],
  "시티드 로우|Hammer Strength": [{ name: "Select Seated Row", category: "Pin", src: "/machines/seated-row-hammer-strength.jpg" }],
  "시티드 로우|Life Fitness": [{ name: "Insignia Series Row", category: "Pin", src: "/machines/seated-row-life-fitness.jpg" }],
  "시티드 로우|Nautilus": [{ name: "Impact Low Row", category: "Pin", src: "/machines/seated-row-nautilus.png" }],
  "시티드 로우|Technogym": [{ name: "Selection 900 Low Row", category: "Pin", src: "/machines/seated-row-technogym.jpg" }],
  "T바 로우|Gym80": [{ name: "Pure Kraft T-Bar Row", category: "Plate", src: "/machines/t-bar-row-gym80.png" }],
  "T바 로우|Hammer Strength": [{ name: "Plate-Loaded T-Bar Row", category: "Plate", src: "/machines/t-bar-row-hammer-strength.jpg" }],
  "레터럴 레이즈|Gym80": [{ name: "Pure Kraft Shoulder Lateral Raise Dual", category: "Plate", src: "/machines/lateral-raise-gym80.jpeg" }],
  "레터럴 레이즈|Life Fitness": [{ name: "Insignia Series Lateral Raise", category: "Pin", src: "/machines/lateral-raise-life-fitness.png" }],
  "레터럴 레이즈|Nautilus": [{ name: "Inspiration Deltoid Raise", category: "Pin", src: "/machines/lateral-raise-nautilus.png" }],
  "숄더 프레스|Cybex": [{ name: "Prestige VRS Overhead Press", category: "Pin", src: "/machines/shoulder-press-cybex.png" }],
  "숄더 프레스|Hammer Strength": [{ name: "MTS Iso-Lateral Shoulder Press", category: "Plate", src: "/machines/shoulder-press-hammer-strength.jpg" }],
  "숄더 프레스|Life Fitness": [{ name: "Insignia Series Shoulder Press", category: "Pin", src: "/machines/shoulder-press-life-fitness.png" }],
  "숄더 프레스|Prime": [{ name: "Plate-Loaded Shoulder Press", category: "Plate", src: "/machines/shoulder-press-prime.jpg" }],
  "숄더 프레스|Technogym": [{ name: "Selection Pro Shoulder Press", category: "Pin", src: "/machines/shoulder-press-technogym.jpg" }],
  "레그 컬|Cybex": [{ name: "Ion Series Leg Curl", category: "Pin", src: "/machines/leg-curl-cybex.png" }],
  "레그 컬|Life Fitness": [{ name: "Insignia Series Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-life-fitness.jpg" }],
  "레그 컬|Prime": [{ name: "Evolution Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-prime.jpg" }],
  "레그 컬|Technogym": [{ name: "Selection Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-technogym.png" }],
  "레그 익스텐션|Cybex": [{ name: "Ion Series Leg Extension", category: "Pin", src: "/machines/leg-extension-cybex.png" }],
  "레그 익스텐션|Life Fitness": [{ name: "Insignia Series Leg Extension", category: "Pin", src: "/machines/leg-extension-life-fitness.jpg" }],
  "레그 익스텐션|Nautilus": [{ name: "Instinct Leg Extension", category: "Pin", src: "/machines/leg-extension-nautilus.png" }],
  "레그 익스텐션|Technogym": [{ name: "Selection Leg Extension", category: "Pin", src: "/machines/leg-extension-technogym.png" }],
  "레그 프레스|Gym80": [{ name: "Pure Kraft 45° Linear Leg Press", category: "Plate", src: "/machines/leg-press-gym80.png" }],
  "레그 프레스|Hammer Strength": [{ name: "Plate-Loaded Linear Leg Press", category: "Plate", src: "/machines/leg-press-hammer-strength.jpg" }],
  "레그 프레스|Life Fitness": [{ name: "Insignia Series Leg Press", category: "Pin", src: "/machines/leg-press-life-fitness.jpg" }],
  "레그 프레스|Prime": [{ name: "Plate-Loaded Leg Press", category: "Plate", src: "/machines/leg-press-prime.jpg" }],
  "레그 프레스|Technogym": [{ name: "Selection Leg Press", category: "Pin", src: "/machines/leg-press-technogym.png" }],
  "바이셉 컬|Cybex": [{ name: "Prestige VRS Arm Curl", category: "Pin", src: "/machines/biceps-curl-cybex.png" }],
  "바이셉 컬|Life Fitness": [{ name: "Insignia Series Biceps Curl", category: "Pin", src: "/machines/biceps-curl-life-fitness.png" }],
  "바이셉 컬|Nautilus": [{ name: "Impact Biceps Curl", category: "Pin", src: "/machines/biceps-curl-nautilus.png" }],
  "바이셉 컬|Technogym": [{ name: "Selection Arm Curl", category: "Pin", src: "/machines/biceps-curl-technogym.png" }],
  "트라이셉스 익스텐션|Gym80": [{ name: "Pure Kraft Triceps Machine", category: "Plate", src: "/machines/triceps-extension-gym80.png" }],
  "트라이셉스 익스텐션|Hammer Strength": [{ name: "Select Triceps Extension", category: "Pin", src: "/machines/triceps-extension-hammer-strength.jpg" }],
  "트라이셉스 익스텐션|Life Fitness": [{ name: "Insignia Series Triceps Extension", category: "Pin", src: "/machines/triceps-extension-life-fitness.png" }],
  "레터럴 레이즈|Technogym": [{ name: "Selection Lateral Raise", category: "Pin" }],
  "T바 로우|Prime": [{ name: "Plate-Loaded T-Bar Row", category: "Plate" }],
};
