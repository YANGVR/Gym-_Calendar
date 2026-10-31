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
  "렛풀다운|Hammer Strength": [
    { name: "Select Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-hammer-strength.jpg" },
    { name: "Plate-Loaded Iso-Lateral Front Lat Pulldown", category: "Plate", src: "/machines/lat-pulldown-hammer-strength-plate-front.jpg" },
    { name: "Plate-Loaded Iso-Lateral Wide Pulldown", category: "Plate", src: "/machines/lat-pulldown-hammer-strength-plate-wide.jpg" },
    { name: "MTS Iso-Lateral Front Pulldown", category: "Pin", src: "/machines/lat-pulldown-hammer-strength-mts.jpg" },
  ],
  "렛풀다운|Life Fitness": [
    { name: "Insignia Series Pulldown", category: "Pin", src: "/machines/lat-pulldown-life-fitness.jpg" },
    { name: "Axiom Series Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-life-fitness-axiom.jpg" },
  ],
  "렛풀다운|Technogym": [
    { name: "Selection 900 Lat Machine", category: "Pin", src: "/machines/lat-pulldown-technogym.jpg" },
    { name: "Pure Strength Pulldown", category: "Plate", src: "/machines/lat-pulldown-technogym-pure-strength.jpg" },
    { name: "Selection 700 Lat Machine", category: "Pin", src: "/machines/lat-pulldown-technogym-selection-700.jpg" },
    { name: "Artis Lat Machine", category: "Pin", src: "/machines/lat-pulldown-technogym-artis.jpg" },
  ],
  "렛풀다운|Cybex": [
    { name: "Prestige VRS Pulldown", category: "Pin", src: "/machines/lat-pulldown-cybex.png", clip: "polygon(0 0, 66.5% 0, 66.5% 45%, 100% 45%, 100% 100%, 0 100%)" },
    { name: "Eagle NX Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-cybex-eagle-nx.jpg" },
    { name: "Ion Series Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-cybex-ion.jpg" },
    { name: "Prestige Strength Total Access Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-cybex-total-access.jpg" },
  ],
  "렛풀다운|Gym80": [
    { name: "Pure Kraft Lat Pulldown Dual", category: "Plate", src: "/machines/lat-pulldown-gym80.png" },
    { name: "Sygnum Lat Pulldown Machine", category: "Pin", src: "/machines/lat-pulldown-gym80-sygnum-3020.jpg" },
    { name: "Sygnum Dual Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-gym80-sygnum-3044.jpg" },
    { name: "Sygnum Lat Pull Station", category: "Pin", src: "/machines/lat-pulldown-gym80-sygnum-4116.jpg" },
  ],
  "렛풀다운|Prime": [
    { name: "Hybrid Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-prime.jpg" },
    { name: "Evolution Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-prime-evolution.jpg" },
    { name: "Plate-Loaded Lat Pulldown", category: "Plate", src: "/machines/lat-pulldown-prime-plate-p104.jpg" },
    { name: "Plate-Loaded Pulldown", category: "Plate", src: "/machines/lat-pulldown-prime-plate-p127.jpg" },
  ],
  "렛풀다운|Nautilus": [
    { name: "Impact Lat Pull Down", category: "Pin", src: "/machines/lat-pulldown-nautilus.png" },
    { name: "Instinct Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-nautilus-instinct.jpg" },
    { name: "Inspiration Lat Pulldown", category: "Pin", src: "/machines/lat-pulldown-nautilus-inspiration.jpg" },
    { name: "Leverage Lat Pull Down", category: "Plate", src: "/machines/lat-pulldown-nautilus-leverage.jpg" },
  ],
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
  "디클라인 프레스|Hammer Strength": [
    { name: "Plate-Loaded Iso-Lateral Decline Press", category: "Plate", src: "/machines/decline-press-hammer-strength-plate.jpg" },
    { name: "MTS Iso-Lateral Decline Press", category: "Pin", src: "/machines/decline-press-hammer-strength-mts.jpg" },
  ],
  "디클라인 프레스|Life Fitness": [
    { name: "Signature Series Plate-Loaded Decline Chest Press", category: "Plate", src: "/machines/decline-press-life-fitness-signature.jpg" },
  ],
  "디클라인 프레스|Gym80": [
    { name: "Pure Kraft-Strong Decline Bench Press Dual", category: "Plate", src: "/machines/decline-press-gym80-pure-kraft.jpg" },
  ],
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
  "스미스 머신 벤치 프레스|Hammer Strength": [
    { name: "Hammer Strength Smith Machine", category: "Plate", src: "/machines/chest-hammer-strength-smith-machine.jpg" },
  ],
  "스미스 머신 벤치 프레스|Life Fitness": [
    { name: "Signature Series Smith Machine", category: "Plate", src: "/machines/chest-lf-signature-smith-machine.jpg" },
  ],
  "스미스 머신 벤치 프레스|Hoist": [
    { name: "CF-3755 Dual Angle Smith", category: "Plate", src: "/machines/chest-hoist-cf-3755-dual-angle-smith.jpg" },
  ],
  "케이블 크로스오버|Life Fitness": [
    { name: "Adjustable Cable Crossover", category: "Pin", src: "/machines/chest-lf-adjustable-cable-crossover.jpg" },
  ],
  "케이블 크로스오버|Matrix": [
    { name: "Aura Adjustable Cable Crossover (G3-MS20)", category: "Pin", src: "/machines/chest-matrix-aura-cable-crossover.jpg" },
  ],
  "케이블 크로스오버|Hoist": [
    { name: "CMD-6180 Commercial Cable Crossover", category: "Pin", src: "/machines/chest-hoist-cmd-6180-cable-crossover.jpg" },
  ],
  "하이 로우|Hammer Strength": [
    { name: "Iso-Lateral High Row", category: "Plate", src: "/machines/back-hammer-strength-iso-lateral-high-row.jpg" },
  ],
  "하이 로우|Matrix": [
    { name: "Magnum High Row (MG-PL37)", category: "Plate", src: "/machines/back-matrix-mg-pl37-high-row.jpg" },
  ],
  "로우 로우|Hammer Strength": [
    { name: "Plate-Loaded Iso-Lateral Low Row", category: "Plate", src: "/machines/back-hammer-strength-iso-lateral-low-row.jpg" },
  ],
  "로우 로우|Matrix": [
    { name: "Magnum Low Row (MG-PL38)", category: "Plate", src: "/machines/back-matrix-mg-pl38-low-row.jpg" },
  ],
  "로우 로우|Atlantis": [
    { name: "Low Row (D124)", category: "Pin", src: "/machines/back-atlantis-d124-low-row.jpg" },
  ],
  "풀오버 머신|Hammer Strength": [
    { name: "Plate-Loaded Pullover (PL-PO)", category: "Plate", src: "/machines/back-hammer-strength-plate-loaded-pullover.jpg" },
  ],
  "풀오버 머신|Atlantis": [
    { name: "Pullover (P144)", category: "Pin", src: "/machines/back-atlantis-p144-pullover.jpg" },
  ],
  "어시스티드 풀업/딥|Hammer Strength": [
    { name: "Select Assist Dip Chin (HS-ADC)", category: "Pin", src: "/machines/back-hammer-strength-select-assist-dip-chin.jpg" },
  ],
  "어시스티드 풀업/딥|Technogym": [
    { name: "Kneeling Easy Chin Dip (MB91)", category: "Pin", src: "/machines/back-technogym-kneeling-easy-chin-dip.jpg" },
  ],
  "백 익스텐션 머신|Life Fitness": [
    { name: "Signature Series Back Extension", category: "Plate", src: "/machines/back-life-fitness-signature-back-extension.jpg" },
  ],
  "백 익스텐션 머신|Matrix": [
    { name: "Ultra Back Extension (G7-S52)", category: "Pin", src: "/machines/back-matrix-g7-s52-back-extension.jpg" },
  ],
  "백 익스텐션 머신|Technogym": [
    { name: "Selection 900 Lower Back", category: "Pin", src: "/machines/back-technogym-selection-900-lower-back.jpg" },
  ],
  "리어 델트 머신|Matrix": [
    { name: "G3 Rear Delt / Fly", category: "Pin", src: "/machines/shoulder-matrix-g3-rear-delt-fly.jpg" },
  ],
  "리어 델트 머신|Hoist": [
    { name: "HD-3900 Pec Fly/Rear Delt", category: "Pin", src: "/machines/shoulder-hoist-hd-3900-pec-fly-rear-delt.jpg" },
  ],
  "리어 델트 머신|Precor": [
    { name: "Resolute Rear Delt / Pec Fly (RSL0505)", category: "Pin", src: "/machines/shoulder-precor-rsl0505.jpg" },
  ],
  "숄더 슈러그 머신|Hammer Strength": [
    { name: "Plate-Loaded Seated/Standing Shrug (PL-SH)", category: "Plate", src: "/machines/shoulder-hammer-strength-plate-loaded-seated-standing-shrug.jpg" },
  ],
  "숄더 슈러그 머신|Nautilus": [
    { name: "Leverage Deadlift Shrug", category: "Plate", src: "/machines/shoulder-nautilus-leverage-deadlift-shrug.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Hammer Strength": [
    { name: "Plate-Loaded Iso-Lateral Shoulder Press (IL-SP)", category: "Plate", src: "/machines/shoulder-hammer-strength-plate-loaded-iso-lateral-shoulder-press.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Hoist": [
    { name: "RPL-5501 Shoulder Press", category: "Plate", src: "/machines/shoulder-hoist-rpl-5501-shoulder-press.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Atlantis": [
    { name: "E449 Converging Shoulder Press", category: "Plate", src: "/machines/shoulder-atlantis-e449-converging-shoulder-press.jpg" },
  ],
  "핵 스쿼트|Precor": [
    { name: "Discovery Plate Loaded Hack Squat (DPL0603)", category: "Plate", src: "/machines/legs-precor-discovery-plate-loaded-hack-squat.jpg" },
  ],
  "핵 스쿼트|Hoist": [
    { name: "Commercial Hack Squat (CF-3356)", category: "Plate", src: "/machines/legs-hoist-cf-3356-hack-squat.jpg" },
  ],
  "핵 스쿼트|Matrix": [
    { name: "Magnum Hack Squat (MG-PL71)", category: "Plate", src: "/machines/legs-matrix-magnum-hack-squat.jpg" },
  ],
  "힙 어브덕션|Matrix": [
    { name: "Ultra Hip Abductor (G7-S75)", category: "Pin", src: "/machines/legs-matrix-ultra-hip-abductor.jpg" },
  ],
  "힙 어브덕션|Hoist": [
    { name: "Outer Thigh (RS-2407)", category: "Pin", src: "/machines/legs-hoist-rs-2407-outer-thigh.jpg" },
  ],
  "힙 어브덕션|Atlantis": [
    { name: "Adductor / Abductor combo (C329)", category: "Pin", src: "/machines/legs-atlantis-adductor-abductor-combo.jpg" },
  ],
  "힙 어덕션|Matrix": [
    { name: "Ultra Hip Adductor (G7-S74)", category: "Pin", src: "/machines/legs-matrix-ultra-hip-adductor.jpg" },
  ],
  "힙 어덕션|Hoist": [
    { name: "Inner Thigh (RS-2406)", category: "Pin", src: "/machines/legs-hoist-rs-2406-inner-thigh.jpg" },
  ],
  "스탠딩 카프 레이즈|Hoist": [
    { name: "Standing Calf Raise (RPL-5405)", category: "Plate", src: "/machines/legs-hoist-rpl-5405-standing-calf-raise.jpg" },
  ],
  "스탠딩 카프 레이즈|Matrix": [
    { name: "Magnum Standing Calf (MG-PL76)", category: "Plate", src: "/machines/legs-matrix-magnum-standing-calf.jpg" },
  ],
  "시티드 카프 레이즈|Precor": [
    { name: "Discovery Plate Loaded Calf Raise (DPL0616)", category: "Plate", src: "/machines/legs-precor-discovery-plate-loaded-calf-raise.jpg" },
  ],
  "시티드 카프 레이즈|Hoist": [
    { name: "Seated Calf Raise (RPL-5363)", category: "Plate", src: "/machines/legs-hoist-rpl-5363-seated-calf-raise.jpg" },
  ],
  "시티드 카프 레이즈|Matrix": [
    { name: "Magnum Seated Calf (MG-PL77)", category: "Plate", src: "/machines/legs-matrix-magnum-seated-calf.jpg" },
  ],
  "글루트 머신|Matrix": [
    { name: "Ultra Glute (G7-S78)", category: "Pin", src: "/machines/legs-matrix-ultra-glute.jpg" },
  ],
  "글루트 머신|Precor": [
    { name: "Resolute Glute Extension (RSL0618)", category: "Pin", src: "/machines/legs-precor-resolute-glute-extension.jpg" },
  ],
  "글루트 머신|Hoist": [
    { name: "Glute Master (RS-2412)", category: "Pin", src: "/machines/legs-hoist-rs-2412-glute-master.jpg" },
  ],
  "힙 쓰러스트 머신|Matrix": [
    { name: "Ultra Hip Thrust (G7-S79)", category: "Pin", src: "/machines/legs-matrix-ultra-hip-thrust.jpg" },
  ],
  "힙 쓰러스트 머신|Hoist": [
    { name: "Commercial Glute Thrust (CF-3416)", category: "Plate", src: "/machines/legs-hoist-cf-3416-glute-thrust.jpg" },
  ],
  "힙 쓰러스트 머신|Atlantis": [
    { name: "Hip Thruster Pro (PW702)", category: "Plate", src: "/machines/legs-atlantis-hip-thruster-pro.jpg" },
  ],
  "프리처 컬 머신|Hammer Strength": [
    { name: "Plate Loaded Seated Biceps", category: "Plate", src: "/machines/arms-hammer-strength-plate-loaded-seated-biceps.jpg" },
  ],
  "프리처 컬 머신|Hoist": [
    { name: "RPL-5102 Preacher Curl (ROC-IT)", category: "Plate", src: "/machines/arms-hoist-rpl-5102-preacher-curl.jpg" },
  ],
  "프리처 컬 머신|Atlantis": [
    { name: "B856 Poliquin Seated Preacher Curl", category: "Plate", src: "/machines/arms-atlantis-poliquin-seated-preacher-curl.jpg" },
  ],
  "트라이셉스 딥 머신|Hammer Strength": [
    { name: "Plate Loaded Seated Dip", category: "Plate", src: "/machines/arms-hammer-strength-plate-loaded-seated-dip.jpg" },
  ],
  "트라이셉스 딥 머신|Hoist": [
    { name: "RS-2101 Seated Dip (ROC-IT)", category: "Pin", src: "/machines/arms-hoist-rs-2101-seated-dip.jpg" },
  ],
  "트라이셉스 딥 머신|Matrix": [
    { name: "Ultra Triceps Press (G7-S42)", category: "Pin", src: "/machines/arms-matrix-ultra-triceps-press.jpg" },
  ],
  "어브도미널 크런치 머신|Hammer Strength": [
    { name: "Hammer Strength Select Abdominal Crunch", category: "Pin", src: "/machines/core-hammer-strength-select-abdominal-crunch.jpg" },
  ],
  "어브도미널 크런치 머신|Life Fitness": [
    { name: "Insignia Series Abdominal", category: "Pin", src: "/machines/core-life-fitness-insignia-abdominal.jpg" },
  ],
  "어브도미널 크런치 머신|Hoist": [
    { name: "ROC-IT Abdominals (RS-2601)", category: "Pin", src: "/machines/core-hoist-roc-it-abdominals.jpg" },
  ],
  "어브도미널 크런치 머신|Technogym": [
    { name: "Selection Abdominal Crunch", category: "Pin", src: "/machines/core-technogym-selection-abdominal-crunch.jpg" },
  ],
  "토르소 로테이션 머신|Life Fitness": [
    { name: "Insignia Series Torso Rotation", category: "Pin", src: "/machines/core-life-fitness-insignia-torso-rotation.jpg" },
  ],
  "토르소 로테이션 머신|Hoist": [
    { name: "ROC-IT Rotary Torso (RS-2602)", category: "Pin", src: "/machines/core-hoist-roc-it-rotary-torso.jpg" },
  ],
  "토르소 로테이션 머신|Technogym": [
    { name: "Selection Rotary Torso", category: "Pin", src: "/machines/core-technogym-selection-rotary-torso.jpg" },
  ],
  "체스트 프레스|Matrix": [
    { name: "Ultra Converging Chest Press (G7-S13)", category: "Pin", src: "/machines/chest-matrix-ultra-converging-chest-press.jpg" },
  ],
  "펙덱 플라이|Matrix": [
    { name: "Ultra Pec Fly / Rear Delt (G7-S22)", category: "Pin", src: "/machines/chest-matrix-ultra-pec-fly.jpg" },
  ],
  "체스트 프레스|Hoist": [
    { name: "ROC-IT Chest Press (RPL-5301)", category: "Plate", src: "/machines/chest-hoist-roc-it-chest-press.jpg" },
  ],
  "인클라인 프레스|Hoist": [
    { name: "ROC-IT Incline Chest Press (RPL-5303)", category: "Plate", src: "/machines/chest-hoist-roc-it-incline-chest-press.jpg" },
  ],
  "펙덱 플라이|Hoist": [
    { name: "ROC-IT Pec Fly (RS-2302)", category: "Pin", src: "/machines/chest-hoist-roc-it-pec-fly.jpg" },
  ],
  "렛풀다운|Matrix": [
    { name: "Ultra Diverging Lat Pulldown (G7-S33)", category: "Pin", src: "/machines/back-matrix-g7-s33-lat-pulldown.jpg" },
  ],
  "시티드 로우|Matrix": [
    { name: "Ultra Diverging Seated Row (G7-S34)", category: "Pin", src: "/machines/back-matrix-g7-s34-seated-row.jpg" },
  ],
  "T바 로우|Matrix": [
    { name: "Magnum T-bar Row (MG-PL35)", category: "Plate", src: "/machines/back-matrix-mg-pl35-t-bar-row.jpg" },
  ],
  "렛풀다운|Precor": [
    { name: "Resolute Diverging Lat Pulldown (RSL0314)", category: "Pin", src: "/machines/back-precor-rsl0314-lat-pulldown.jpg" },
  ],
  "시티드 로우|Precor": [
    { name: "Resolute Diverging Seated Row (RSL0310)", category: "Pin", src: "/machines/back-precor-rsl0310-seated-row.jpg" },
  ],
  "렛풀다운|Atlantis": [
    { name: "Unilateral Lat Pulldown (PW623)", category: "Plate", src: "/machines/back-atlantis-pw623-lat-pulldown.jpg" },
  ],
  "시티드 로우|Atlantis": [
    { name: "Diverging Row (D337)", category: "Pin", src: "/machines/back-atlantis-d337-seated-row.jpg" },
  ],
  "T바 로우|Atlantis": [
    { name: "Incline T-Bar Row (PW625)", category: "Plate", src: "/machines/back-atlantis-pw625-t-bar-row.jpg" },
  ],
  "렛풀다운|Hoist": [
    { name: "ROC-IT RPL-5201 Lat Pulldown", category: "Plate", src: "/machines/back-hoist-rpl-5201-lat-pulldown.jpg" },
  ],
  "시티드 로우|Hoist": [
    { name: "ROC-IT RPL-5203 Mid Row", category: "Plate", src: "/machines/back-hoist-rpl-5203-mid-row.jpg" },
  ],
  "숄더 프레스|Matrix": [
    { name: "Ultra G7-S23 Converging Shoulder Press", category: "Pin", src: "/machines/shoulder-matrix-ultra-converging-shoulder-press.jpg" },
  ],
  "레터럴 레이즈|Matrix": [
    { name: "Ultra G7-S21 Lateral Raise", category: "Pin", src: "/machines/shoulder-matrix-ultra-lateral-raise.jpg" },
  ],
  "숄더 프레스|Precor": [
    { name: "Resolute Converging Shoulder Press (RSL0515)", category: "Pin", src: "/machines/shoulder-precor-rsl0515.jpg" },
  ],
  "레터럴 레이즈|Precor": [
    { name: "Resolute Lateral Raise (RSL0504)", category: "Pin", src: "/machines/shoulder-precor-rsl0504.jpg" },
  ],
  "숄더 프레스|Hoist": [
    { name: "CL-3501 Shoulder Press", category: "Pin", src: "/machines/shoulder-hoist-cl-3501-shoulder-press.jpg" },
  ],
  "레터럴 레이즈|Hoist": [
    { name: "RS-1502 Lateral Raise", category: "Pin", src: "/machines/shoulder-hoist-rs-1502-lateral-raise.jpg" },
  ],
  "숄더 프레스|Atlantis": [
    { name: "E149 Converging Shoulder Press", category: "Pin", src: "/machines/shoulder-atlantis-e149-converging-shoulder-press.jpg" },
  ],
  "레그 프레스|Matrix": [
    { name: "Ultra Leg Press (G7-S70)", category: "Pin", src: "/machines/legs-matrix-ultra-leg-press.jpg" },
  ],
  "레그 익스텐션|Matrix": [
    { name: "Ultra Leg Extension (G7-S71)", category: "Pin", src: "/machines/legs-matrix-ultra-leg-extension.jpg" },
  ],
  "레그 컬|Matrix": [
    { name: "Ultra Seated Leg Curl (G7-S72)", category: "Pin", src: "/machines/legs-matrix-ultra-seated-leg-curl.jpg" },
  ],
  "레그 프레스|Precor": [
    { name: "Resolute Leg Press (RSL0602)", category: "Pin", src: "/machines/legs-precor-resolute-leg-press.jpg" },
  ],
  "레그 익스텐션|Precor": [
    { name: "Resolute Leg Extension (RSL0605)", category: "Pin", src: "/machines/legs-precor-resolute-leg-extension.jpg" },
  ],
  "레그 컬|Precor": [
    { name: "Resolute Seated Leg Curl (RSL0619)", category: "Pin", src: "/machines/legs-precor-resolute-seated-leg-curl.jpg" },
  ],
  "레그 프레스|Hoist": [
    { name: "Leg Press (RS-2403)", category: "Pin", src: "/machines/legs-hoist-rs-2403-leg-press.jpg" },
  ],
  "레그 익스텐션|Hoist": [
    { name: "Leg Extension (RS-2401)", category: "Pin", src: "/machines/legs-hoist-rs-2401-leg-extension.jpg" },
  ],
  "레그 컬|Hoist": [
    { name: "Leg Curl (RS-2402)", category: "Pin", src: "/machines/legs-hoist-rs-2402-leg-curl.jpg" },
  ],
  "레그 프레스|Atlantis": [
    { name: "40 Degree Leg Press (C401)", category: "Plate", src: "/machines/legs-atlantis-40-degree-leg-press.jpg" },
  ],
  "레그 익스텐션|Atlantis": [
    { name: "Leg Extension (C105)", category: "Pin", src: "/machines/legs-atlantis-leg-extension.jpg" },
  ],
  "레그 컬|Atlantis": [
    { name: "Seated Leg Curl (C108)", category: "Pin", src: "/machines/legs-atlantis-seated-leg-curl.jpg" },
  ],
  "바이셉 컬|Matrix": [
    { name: "Ultra Independent Biceps Curl (G7-S40)", category: "Pin", src: "/machines/arms-matrix-ultra-independent-biceps-curl.jpg" },
  ],
  "트라이셉스 익스텐션|Matrix": [
    { name: "Ultra Triceps Extension", category: "Pin", src: "/machines/arms-matrix-ultra-triceps-extension.jpg" },
  ],
  "바이셉 컬|Hoist": [
    { name: "RS-2102 Biceps Curl (ROC-IT)", category: "Pin", src: "/machines/arms-hoist-rs-2102-biceps-curl.jpg" },
  ],
  "트라이셉스 익스텐션|Hoist": [
    { name: "RS-1103 Triceps Extension (ROC-IT)", category: "Pin", src: "/machines/arms-hoist-rs-1103-triceps-extension.jpg" },
  ],
  "바이셉 컬|Precor": [
    { name: "Discovery Series Selectorized Biceps Curl (DSL0204)", category: "Pin", src: "/machines/arms-precor-discovery-biceps-curl.jpg" },
  ],
  "트라이셉스 익스텐션|Precor": [
    { name: "Discovery Series Selectorized Triceps Extension (DSL0208)", category: "Pin", src: "/machines/arms-precor-discovery-triceps-extension.jpg" },
  ],
  "바이셉 컬|Atlantis": [
    { name: "B160 Biceps Isolator", category: "Pin", src: "/machines/arms-atlantis-biceps-isolator.jpg" },
  ],
  "체스트 프레스|Precor": [
    { name: "Resolute RSL0414 Converging Chest Press", category: "Pin", src: "/machines/chest-press-precor-rsl0414.jpg" },
    { name: "Discovery Plate Loaded DPL0540 Chest Press", category: "Plate", src: "/machines/chest-press-precor-dpl0540.jpg" },
  ],
  "펙덱 플라이|Precor": [
    { name: "Resolute RSL0505 Rear Delt / Pec Fly", category: "Pin", src: "/machines/pec-deck-precor-rsl0505.jpg" },
  ],
  "인클라인 프레스|Precor": [
    { name: "Discovery Plate Loaded DPL0541 Incline Press", category: "Plate", src: "/machines/incline-press-precor-dpl0541.jpg" },
  ],
  "디클라인 프레스|Precor": [
    { name: "Discovery Plate Loaded DPL0543 Decline Chest Press", category: "Plate", src: "/machines/decline-press-precor-dpl0543.jpg" },
  ],
};
