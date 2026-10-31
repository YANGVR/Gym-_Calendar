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
  "체스트 프레스|Technogym": [
    { name: "Selection Chest Press", category: "Pin", src: "/machines/chest-press-technogym.png" },
  ],
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
  "인클라인 프레스|Gym80": [
    { name: "Pure Kraft Incline Chest Press", category: "Plate", src: "/machines/incline-press-gym80.png" },
  ],
  "인클라인 프레스|Cybex": [
    { name: "Eagle Incline Press", category: "Pin", src: "/machines/incline-press-cybex.jpg", clip: "polygon(0 0, 100% 0, 100% 90%, 60% 90%, 60% 100%, 0 100%)" },
  ],
  "인클라인 프레스|Hammer Strength": [
    { name: "Iso-Lateral Incline Press", category: "Plate", src: "/machines/incline-press-hammer-strength.jpg" },
  ],
  "펙덱 플라이|Life Fitness": [
    { name: "Insignia Series Pectoral Fly / Rear Deltoid", category: "Pin", src: "/machines/pec-deck-life-fitness.jpg" },
  ],
  "펙덱 플라이|Nautilus": [
    { name: "Impact Pec Fly / Rear Deltoid", category: "Pin", src: "/machines/pec-deck-nautilus.png" },
  ],
  "펙덱 플라이|Prime": [
    { name: "Hybrid Pec Fly", category: "Pin", src: "/machines/pec-deck-prime.jpg" },
  ],
  "펙덱 플라이|Technogym": [
    { name: "Selection Pectoral", category: "Pin", src: "/machines/pec-deck-technogym.png" },
  ],
  "시티드 로우|Cybex": [
    { name: "Prestige VRS Row", category: "Pin", src: "/machines/seated-row-cybex.jpg" },
  ],
  "시티드 로우|Hammer Strength": [
    { name: "Select Seated Row", category: "Pin", src: "/machines/seated-row-hammer-strength.jpg" },
  ],
  "시티드 로우|Life Fitness": [
    { name: "Insignia Series Row", category: "Pin", src: "/machines/seated-row-life-fitness.jpg" },
  ],
  "시티드 로우|Nautilus": [
    { name: "Impact Low Row", category: "Pin", src: "/machines/seated-row-nautilus.png" },
  ],
  "시티드 로우|Technogym": [
    { name: "Selection 900 Low Row", category: "Pin", src: "/machines/seated-row-technogym.jpg" },
  ],
  "T바 로우|Gym80": [
    { name: "Pure Kraft T-Bar Row", category: "Plate", src: "/machines/t-bar-row-gym80.png" },
  ],
  "T바 로우|Hammer Strength": [
    { name: "Plate-Loaded T-Bar Row", category: "Plate", src: "/machines/t-bar-row-hammer-strength.jpg" },
  ],
  "레터럴 레이즈|Gym80": [
    { name: "Pure Kraft Shoulder Lateral Raise Dual", category: "Plate", src: "/machines/lateral-raise-gym80.jpeg" },
  ],
  "레터럴 레이즈|Life Fitness": [
    { name: "Insignia Series Lateral Raise", category: "Pin", src: "/machines/lateral-raise-life-fitness.png" },
  ],
  "레터럴 레이즈|Nautilus": [
    { name: "Inspiration Deltoid Raise", category: "Pin", src: "/machines/lateral-raise-nautilus.png" },
  ],
  "숄더 프레스|Cybex": [
    { name: "Prestige VRS Overhead Press", category: "Pin", src: "/machines/shoulder-press-cybex.png" },
  ],
  "숄더 프레스|Hammer Strength": [
    { name: "MTS Iso-Lateral Shoulder Press", category: "Plate", src: "/machines/shoulder-press-hammer-strength.jpg" },
  ],
  "숄더 프레스|Life Fitness": [
    { name: "Insignia Series Shoulder Press", category: "Pin", src: "/machines/shoulder-press-life-fitness.png" },
  ],
  "숄더 프레스|Prime": [
    { name: "Plate-Loaded Shoulder Press", category: "Plate", src: "/machines/shoulder-press-prime.jpg" },
  ],
  "숄더 프레스|Technogym": [
    { name: "Selection Pro Shoulder Press", category: "Pin", src: "/machines/shoulder-press-technogym.jpg" },
  ],
  "레그 컬|Cybex": [
    { name: "Ion Series Leg Curl", category: "Pin", src: "/machines/leg-curl-cybex.png" },
  ],
  "레그 컬|Life Fitness": [
    { name: "Insignia Series Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-life-fitness.jpg" },
  ],
  "레그 컬|Prime": [
    { name: "Evolution Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-prime.jpg" },
  ],
  "레그 컬|Technogym": [
    { name: "Selection Seated Leg Curl", category: "Pin", src: "/machines/leg-curl-technogym.png" },
  ],
  "레그 익스텐션|Cybex": [
    { name: "Ion Series Leg Extension", category: "Pin", src: "/machines/leg-extension-cybex.png" },
  ],
  "레그 익스텐션|Life Fitness": [
    { name: "Insignia Series Leg Extension", category: "Pin", src: "/machines/leg-extension-life-fitness.jpg" },
  ],
  "레그 익스텐션|Nautilus": [
    { name: "Instinct Leg Extension", category: "Pin", src: "/machines/leg-extension-nautilus.png" },
  ],
  "레그 익스텐션|Technogym": [
    { name: "Selection Leg Extension", category: "Pin", src: "/machines/leg-extension-technogym.png" },
  ],
  "레그 프레스|Gym80": [
    { name: "Pure Kraft 45° Linear Leg Press", category: "Plate", src: "/machines/leg-press-gym80.png" },
  ],
  "레그 프레스|Hammer Strength": [
    { name: "Plate-Loaded Linear Leg Press", category: "Plate", src: "/machines/leg-press-hammer-strength.jpg" },
  ],
  "레그 프레스|Life Fitness": [
    { name: "Insignia Series Leg Press", category: "Pin", src: "/machines/leg-press-life-fitness.jpg" },
  ],
  "레그 프레스|Prime": [
    { name: "Plate-Loaded Leg Press", category: "Plate", src: "/machines/leg-press-prime.jpg" },
  ],
  "레그 프레스|Technogym": [
    { name: "Selection Leg Press", category: "Pin", src: "/machines/leg-press-technogym.png" },
  ],
  "바이셉 컬|Cybex": [
    { name: "Prestige VRS Arm Curl", category: "Pin", src: "/machines/biceps-curl-cybex.png" },
  ],
  "바이셉 컬|Life Fitness": [
    { name: "Insignia Series Biceps Curl", category: "Pin", src: "/machines/biceps-curl-life-fitness.png" },
  ],
  "바이셉 컬|Nautilus": [
    { name: "Impact Biceps Curl", category: "Pin", src: "/machines/biceps-curl-nautilus.png" },
  ],
  "바이셉 컬|Technogym": [
    { name: "Selection Arm Curl", category: "Pin", src: "/machines/biceps-curl-technogym.png" },
  ],
  "트라이셉스 익스텐션|Gym80": [
    { name: "Pure Kraft Triceps Machine", category: "Plate", src: "/machines/triceps-extension-gym80.png" },
  ],
  "트라이셉스 익스텐션|Hammer Strength": [
    { name: "Select Triceps Extension", category: "Pin", src: "/machines/triceps-extension-hammer-strength.jpg" },
  ],
  "트라이셉스 익스텐션|Life Fitness": [
    { name: "Insignia Series Triceps Extension", category: "Pin", src: "/machines/triceps-extension-life-fitness.png" },
  ],
  "레터럴 레이즈|Technogym": [
    { name: "Selection Lateral Raise", category: "Pin" },
  ],
  "T바 로우|Prime": [
    { name: "Plate-Loaded T-Bar Row", category: "Plate" },
  ],
  "스미스 머신 벤치 프레스|Hammer Strength": [
    { name: "Hammer Strength Smith Machine", category: "Plate", src: "/machines/chest-hammer-strength-smith-machine.jpg" },
  ],
  "스미스 머신 벤치 프레스|Life Fitness": [
    { name: "Signature Series Smith Machine", category: "Plate", src: "/machines/chest-lf-signature-smith-machine.jpg" },
  ],
  "스미스 머신 벤치 프레스|Hoist": [
    { name: "CF-3755 Dual Angle Smith", category: "Plate", src: "/machines/chest-hoist-cf-3755-dual-angle-smith.jpg" },
    { name: "CF-3754 Dual Action Smith", category: "Plate", src: "/machines/x-hoist-hoist-cf-3754-dual-action-smith-dfe5bf.jpg" },
    { name: "MiSMITH Dual Action Smith (Mi-SMITH)", category: "Plate", src: "/machines/x-hoist-hoist-mismith-dual-action-smith-3f5c9f.jpg" },
    { name: "Mi7SMITH Functional Training System", category: "Plate", src: "/machines/x-hoist-hoist-mi7smith-functional-training-system-4b44cb.jpg" },
  ],
  "케이블 크로스오버|Life Fitness": [
    { name: "Adjustable Cable Crossover", category: "Pin", src: "/machines/chest-lf-adjustable-cable-crossover.jpg" },
  ],
  "케이블 크로스오버|Matrix": [
    { name: "Aura Adjustable Cable Crossover (G3-MS20)", category: "Pin", src: "/machines/chest-matrix-aura-cable-crossover.jpg" },
  ],
  "케이블 크로스오버|Hoist": [
    { name: "CMD-6180 Commercial Cable Crossover", category: "Pin", src: "/machines/chest-hoist-cmd-6180-cable-crossover.jpg" },
    { name: "HD-3000 Dual Pulley Functional Trainer", category: "Pin", src: "/machines/x-hoist-hoist-hd-3000-dual-pulley-functional-trainer-ac5449.jpg" },
    { name: "Mi5 Functional Trainer", category: "Pin", src: "/machines/x-hoist-hoist-mi5-functional-trainer-f2ba00.jpg" },
    { name: "Mi6 Functional Trainer", category: "Pin", src: "/machines/x-hoist-hoist-mi6-functional-trainer-4c81f7.jpg" },
    { name: "Mi7 Functional Training System", category: "Pin", src: "/machines/x-hoist-hoist-mi7-functional-training-system-7b5665.jpg" },
    { name: "CMS-6175 Stand Alone Hi-Lo Pulley", category: "Pin", src: "/machines/x-hoist-hoist-cms-6175-stand-alone-hi-lo-pulley-43cdc3.jpg" },
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
    { name: "Technogym Selection Chin / Dip Assist (M987)", category: "Pin", src: "/machines/x-technogym-technogym-selection-chin-dip-assist-f98617.jpg" },
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
    { name: "CL Series Pec Fly / Rear Delt (CL-3309)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3309-pec-fly-rear-delt-3b4bc9.jpg" },
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
    { name: "RPL-5356 Hack Squat/Dead Lift/Shrug", category: "Plate", src: "/machines/x-hoist-hoist-rpl-5356-hack-squat-dead-lift-shrug-97d82f.jpg" },
    { name: "HF-4357 Leg Press Hack Combo", category: "Plate", src: "/machines/x-hoist-hoist-hf-4357-leg-press-hack-combo-aa824e.jpg" },
    { name: "CF-3359 Commercial Power Squat", category: "Plate", src: "/machines/x-hoist-hoist-cf-3359-power-squat-9894a2.jpg" },
  ],
  "핵 스쿼트|Matrix": [
    { name: "Magnum Hack Squat (MG-PL71)", category: "Plate", src: "/machines/legs-matrix-magnum-hack-squat.jpg" },
  ],
  "힙 어브덕션|Matrix": [
    { name: "Ultra Hip Abductor (G7-S75)", category: "Pin", src: "/machines/legs-matrix-ultra-hip-abductor.jpg" },
  ],
  "힙 어브덕션|Hoist": [
    { name: "Outer Thigh (RS-2407)", category: "Pin", src: "/machines/legs-hoist-rs-2407-outer-thigh.jpg" },
    { name: "CL-3800 Inner/Outer Thigh", category: "Pin", src: "/machines/x-hoist-hoist-cl-3800-inner-outer-thigh-3d10b4.jpg" },
    { name: "HD-3800 Inner/Outer Thigh", category: "Pin", src: "/machines/x-hoist-hoist-hd-3800-inner-outer-thigh-d44b3f.jpg" },
  ],
  "힙 어브덕션|Atlantis": [
    { name: "Adductor / Abductor combo (C329)", category: "Pin", src: "/machines/legs-atlantis-adductor-abductor-combo.jpg" },
  ],
  "힙 어덕션|Matrix": [
    { name: "Ultra Hip Adductor (G7-S74)", category: "Pin", src: "/machines/legs-matrix-ultra-hip-adductor.jpg" },
  ],
  "힙 어덕션|Hoist": [
    { name: "Inner Thigh (RS-2406)", category: "Pin", src: "/machines/legs-hoist-rs-2406-inner-thigh.jpg" },
    { name: "CL-3800 Inner/Outer Thigh", category: "Pin", src: "/machines/x-hoist-hoist-cl-3800-inner-outer-thigh-3d10b4.jpg" },
    { name: "HD-3800 Inner/Outer Thigh", category: "Pin", src: "/machines/x-hoist-hoist-hd-3800-inner-outer-thigh-d44b3f.jpg" },
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
    { name: "ROC-IT Selectorized Rotary Calf (RS-2415)", category: "Pin", src: "/machines/x-hoist-hoist-rotary-calf-f7102a.jpg" },
    { name: "HD-3403 Leg Press/Calf Raise", category: "Pin", src: "/machines/x-hoist-hoist-hd-3403-leg-press-calf-raise-1fb5d2.jpg" },
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
    { name: "HD-3100 Preacher Curl/Triceps Extension", category: "Pin", src: "/machines/x-hoist-hoist-hd-3100-preacher-curl-triceps-extension-9669e3.jpg" },
  ],
  "프리처 컬 머신|Atlantis": [
    { name: "B856 Poliquin Seated Preacher Curl", category: "Plate", src: "/machines/arms-atlantis-poliquin-seated-preacher-curl.jpg" },
  ],
  "트라이셉스 딥 머신|Hammer Strength": [
    { name: "Plate Loaded Seated Dip", category: "Plate", src: "/machines/arms-hammer-strength-plate-loaded-seated-dip.jpg" },
  ],
  "트라이셉스 딥 머신|Hoist": [
    { name: "RS-2101 Seated Dip (ROC-IT)", category: "Pin", src: "/machines/arms-hoist-rs-2101-seated-dip.jpg" },
    { name: "Hoist ROC-IT Plate Loaded Seated Dip RPL-5101", category: "Plate", src: "/machines/x-hoist-hoist-roc-it-rpl-5101-ffe250.jpg" },
  ],
  "트라이셉스 딥 머신|Matrix": [
    { name: "Ultra Triceps Press (G7-S42)", category: "Pin", src: "/machines/arms-matrix-ultra-triceps-press.jpg" },
    { name: "Matrix Aura Seated Dip G3-S42 (Aura Triceps Press)", category: "Pin", src: "/machines/x-matrix-matrix-aura-seated-dip-g3-s42-594360.jpg" },
    { name: "Matrix Versa Triceps Press VS-S42", category: "Pin", src: "/machines/x-matrix-matrix-versa-triceps-press-vs-s42-36fc12.jpg" },
  ],
  "어브도미널 크런치 머신|Hammer Strength": [
    { name: "Hammer Strength Select Abdominal Crunch", category: "Pin", src: "/machines/core-hammer-strength-select-abdominal-crunch.jpg" },
  ],
  "어브도미널 크런치 머신|Life Fitness": [
    { name: "Insignia Series Abdominal", category: "Pin", src: "/machines/core-life-fitness-insignia-abdominal.jpg" },
  ],
  "어브도미널 크런치 머신|Hoist": [
    { name: "ROC-IT Abdominals (RS-2601)", category: "Pin", src: "/machines/core-hoist-roc-it-abdominals.jpg" },
    { name: "CL Series Abdominals (CL-3601)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3601-abdominals-fa0b2f.jpg" },
    { name: "RPL-5601 Abdominals", category: "Plate", src: "/machines/x-hoist-hoist-rpl-5601-abdominals-5ec971.jpg" },
    { name: "HD-3600 Ab Crunch/Low Back", category: "Pin", src: "/machines/x-hoist-hoist-hd-3600-ab-crunch-low-back-e96a10.jpg" },
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
    { name: "ROC-IT Selectorized Chest Press (RS-2301)", category: "Pin", src: "/machines/x-hoist-hoist-rs-2301-chest-press-a2bd3a.jpg" },
    { name: "CL Series Chest Press (CL-3301)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3301-chest-press-df8b30.jpg" },
    { name: "HD Series Chest/Shoulder Press (HD-3300)", category: "Pin", src: "/machines/x-hoist-hoist-hd-3300-chest-shoulder-press-34fdf8.jpg" },
  ],
  "인클라인 프레스|Hoist": [
    { name: "ROC-IT Incline Chest Press (RPL-5303)", category: "Plate", src: "/machines/chest-hoist-roc-it-incline-chest-press.jpg" },
  ],
  "펙덱 플라이|Hoist": [
    { name: "ROC-IT Pec Fly (RS-2302)", category: "Pin", src: "/machines/chest-hoist-roc-it-pec-fly.jpg" },
    { name: "CL Series Pec Fly / Rear Delt (CL-3309)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3309-pec-fly-rear-delt-3b4bc9.jpg" },
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
    { name: "ROC-IT Selectorized Lat Pulldown (RS-2201)", category: "Pin", src: "/machines/x-hoist-hoist-rs-2201-lat-pulldown-57a76a.jpg" },
    { name: "CL Series Lat Pulldown (CL-3201)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3201-lat-pulldown-050080.jpg" },
    { name: "HD-3200 Lat Pulldown/Mid Row", category: "Pin", src: "/machines/x-hoist-hoist-hd-3200-lat-pulldown-mid-row-323a03.jpg" },
  ],
  "시티드 로우|Hoist": [
    { name: "ROC-IT RPL-5203 Mid Row", category: "Plate", src: "/machines/back-hoist-rpl-5203-mid-row.jpg" },
    { name: "ROC-IT Selectorized Seated Mid Row (RS-2203)", category: "Pin", src: "/machines/x-hoist-hoist-seated-mid-row-1d06aa.jpg" },
    { name: "CL Series Mid Row (CL-3203)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3203-mid-row-874034.jpg" },
    { name: "HD-3200 Lat Pulldown/Mid Row", category: "Pin", src: "/machines/x-hoist-hoist-hd-3200-lat-pulldown-mid-row-323a03.jpg" },
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
    { name: "ROC-IT Selectorized Shoulder Press (RS-2501)", category: "Pin", src: "/machines/x-hoist-hoist-shoulder-press-4ee005.jpg" },
    { name: "HD-3300 Chest/Shoulder Press", category: "Pin", src: "/machines/x-hoist-hoist-hd-3300-chest-shoulder-press-34fdf8.jpg" },
    { name: "CF-3860 Commercial Military Press", category: "Plate", src: "/machines/x-hoist-hoist-cf-3860-military-press-1b1c3d.jpg" },
  ],
  "레터럴 레이즈|Hoist": [
    { name: "RS-1502 Lateral Raise", category: "Pin", src: "/machines/shoulder-hoist-rs-1502-lateral-raise.jpg" },
    { name: "CL Series Lateral Raise (CL-3502)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3502-lateral-raise-5fc4aa.jpg" },
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
    { name: "RPL-5403 Dual Action Leg Press", category: "Plate", src: "/machines/x-hoist-hoist-rpl-5403-dual-action-leg-press-44c3ec.jpg" },
    { name: "CF-3355 Commercial Angled Linear Leg Press", category: "Plate", src: "/machines/x-hoist-hoist-cf-3355-angled-linear-leg-press-bb53a4.jpg" },
    { name: "CL Series Leg Press (CL-3403)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3403-cl-3403-hs-leg-press-5d9543.jpg" },
    { name: "HD-3403 Leg Press/Calf Raise", category: "Pin", src: "/machines/x-hoist-hoist-hd-3403-leg-press-calf-raise-1fb5d2.jpg" },
    { name: "HF-4357 Leg Press Hack Combo", category: "Plate", src: "/machines/x-hoist-hoist-hf-4357-leg-press-hack-combo-aa824e.jpg" },
    { name: "Freestanding Ride Leg Press (HV-LP-FSK / HV-RLP)", category: "Pin", src: "/machines/x-hoist-hoist-hv-lp-fsk-rlp-freestanding-ride-leg-press-d547d5.jpg" },
  ],
  "레그 익스텐션|Hoist": [
    { name: "Leg Extension (RS-2401)", category: "Pin", src: "/machines/legs-hoist-rs-2401-leg-extension.jpg" },
    { name: "CL Series Leg Extension (CL-3401)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3401-leg-extension-e9ea4e.jpg" },
    { name: "HD-3400 Leg Extension/Leg Curl", category: "Pin", src: "/machines/x-hoist-hoist-hd-3400-leg-extension-leg-curl-7fd0ca.jpg" },
  ],
  "레그 컬|Hoist": [
    { name: "Leg Curl (RS-2402)", category: "Pin", src: "/machines/legs-hoist-rs-2402-leg-curl.jpg" },
    { name: "ROC-IT Selectorized Prone Leg Curl (RS-2408)", category: "Pin", src: "/machines/x-hoist-hoist-rs-2408-prone-leg-curl-43e481.jpg" },
    { name: "CL Series Leg Curl (CL-3402)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3402-leg-curl-f26a7a.jpg" },
    { name: "CL-3408 Standing/Prone Leg Curl", category: "Pin", src: "/machines/x-hoist-hoist-cl-3408-standing-prone-leg-curl-83bad3.jpg" },
    { name: "HD-3400 Leg Extension/Leg Curl", category: "Pin", src: "/machines/x-hoist-hoist-hd-3400-leg-extension-leg-curl-7fd0ca.jpg" },
    { name: "CF-3411 Commercial Kneeling Leg Curl", category: "Plate", src: "/machines/x-hoist-hoist-cf-3411-kneeling-leg-press-700634.jpg" },
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
    { name: "CL Series Biceps Curl (CL-3102)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3102-biceps-curl-77e795.jpg" },
  ],
  "트라이셉스 익스텐션|Hoist": [
    { name: "RS-1103 Triceps Extension (ROC-IT)", category: "Pin", src: "/machines/arms-hoist-rs-1103-triceps-extension.jpg" },
    { name: "CL Series Triceps Extension (CL-3103)", category: "Pin", src: "/machines/x-hoist-hoist-cl-3103-triceps-extension-60f3f5.jpg" },
    { name: "HD-3100 Preacher Curl/Triceps Extension", category: "Pin", src: "/machines/x-hoist-hoist-hd-3100-preacher-curl-triceps-extension-9669e3.jpg" },
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
  "펙덱 플라이|Hammer Strength": [
    { name: "Hammer Strength Select Pectoral Fly", category: "Pin", src: "/machines/x-hammer-strength-hs-select-pectoral-fly-f7f2d6.jpg" },
    { name: "Hammer Strength Plate Loaded Super Fly", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-super-fly-283d04.jpg" },
  ],
  "백 익스텐션 머신|Hammer Strength": [
    { name: "Hammer Strength Select Back Extension", category: "Pin", src: "/machines/x-hammer-strength-hs-select-back-extension-9478f6.jpg" },
  ],
  "레터럴 레이즈|Hammer Strength": [
    { name: "Hammer Strength Select Lateral Raise", category: "Pin", src: "/machines/x-hammer-strength-hs-select-lateral-raise-a1509c.jpg" },
    { name: "Hammer Strength Plate Loaded Lateral Raise", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-lateral-raise-0ec8dd.jpg" },
  ],
  "리어 델트 머신|Hammer Strength": [
    { name: "Hammer Strength Select Pectoral Fly / Rear Deltoid", category: "Pin", src: "/machines/x-hammer-strength-hs-select-pec-fly-rear-delt-7b92a7.jpg" },
  ],
  "레그 익스텐션|Hammer Strength": [
    { name: "Hammer Strength Select Leg Extension", category: "Pin", src: "/machines/x-hammer-strength-hs-select-leg-extension-1bf394.jpg" },
    { name: "Hammer Strength Plate Loaded Iso-Lateral Leg Extension", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-iso-leg-extension-56bde3.jpg" },
  ],
  "레그 컬|Hammer Strength": [
    { name: "Hammer Strength Select Seated Leg Curl", category: "Pin", src: "/machines/x-hammer-strength-hs-select-seated-leg-curl-64b011.jpg" },
    { name: "Hammer Strength Select Leg Curl", category: "Pin", src: "/machines/x-hammer-strength-hs-select-lying-leg-curl-b7da95.jpg" },
    { name: "Hammer Strength Plate Loaded Iso-Lateral Kneeling Leg Curl", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-kneeling-leg-curl-dcf176.jpg" },
  ],
  "핵 스쿼트|Hammer Strength": [
    { name: "Hammer Strength Plate Loaded Hack Squat", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-hack-squat-c97292.jpg" },
  ],
  "힙 어브덕션|Hammer Strength": [
    { name: "Hammer Strength Select Hip Abduction", category: "Pin", src: "/machines/x-hammer-strength-hs-select-hip-abduction-f287d5.jpg" },
  ],
  "힙 어덕션|Hammer Strength": [
    { name: "Hammer Strength Select Hip Adduction", category: "Pin", src: "/machines/x-hammer-strength-hs-select-hip-adduction-c3def6.jpg" },
  ],
  "스탠딩 카프 레이즈|Hammer Strength": [
    { name: "Hammer Strength Select Standing Calf", category: "Pin", src: "/machines/x-hammer-strength-hs-select-standing-calf-50b8b3.jpg" },
  ],
  "시티드 카프 레이즈|Hammer Strength": [
    { name: "Hammer Strength Plate Loaded Seated Calf Raise", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-seated-calf-raise-07d41c.jpg" },
  ],
  "글루트 머신|Hammer Strength": [
    { name: "Hammer Strength Select Hip and Glute", category: "Pin", src: "/machines/x-hammer-strength-hs-select-hip-and-glute-9b4e24.jpg" },
  ],
  "힙 쓰러스트 머신|Hammer Strength": [
    { name: "Hammer Strength Plate Loaded Glute Drive", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-glute-drive-fb4524.jpg" },
  ],
  "바이셉 컬|Hammer Strength": [
    { name: "Hammer Strength Select Biceps Curl", category: "Pin", src: "/machines/x-hammer-strength-hs-select-biceps-curl-c42017.jpg" },
    { name: "Hammer Strength Plate Loaded Seated Biceps", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-seated-biceps-797135.jpg" },
  ],
  "토르소 로테이션 머신|Hammer Strength": [
    { name: "Hammer Strength Plate Loaded Combo Twist", category: "Plate", src: "/machines/x-hammer-strength-hs-pl-combo-twist-29545a.jpg" },
  ],
  "인클라인 프레스|Life Fitness": [
    { name: "Signature Series Plate-Loaded Incline Press", category: "Plate", src: "/machines/x-life-fitness-life-fitness-incline-press-53bd66.jpg" },
  ],
  "하이 로우|Life Fitness": [
    { name: "Signature Series Plate-Loaded High Row", category: "Plate", src: "/machines/x-life-fitness-life-fitness-high-row-9eeacd.jpg" },
  ],
  "로우 로우|Life Fitness": [
    { name: "Axiom Series Lat Pulldown / Low Row", category: "Pin", src: "/machines/x-life-fitness-axiom-series-lat-pulldown-low-row-93f26f.jpg" },
  ],
  "어시스티드 풀업/딥|Life Fitness": [
    { name: "Insignia Series Assist Dip / Chin", category: "Pin", src: "/machines/x-life-fitness-insignia-series-assist-dip-chin-a5bcf7.jpg" },
    { name: "Life Fitness Pro1 Assisted Chin Dip", category: "Pin", src: "/machines/x-life-fitness-lf-pro1-assisted-chin-dip-4fe9d8.jpg" },
    { name: "Life Fitness Pro2 Assisted Chin Dip", category: "Pin", src: "/machines/x-life-fitness-lf-pro2-assisted-chin-dip-7ef548.jpg" },
    { name: "Life Fitness Signature Series Assist Dip Chin", category: "Pin", src: "/machines/x-life-fitness-lf-signature-assist-dip-chin-639e7b.jpg" },
    { name: "Life Fitness Insignia Series Assist Dip Chin", category: "Pin", src: "/machines/x-life-fitness-lf-insignia-assist-dip-chin-8d484c.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Life Fitness": [
    { name: "Signature Series Plate-Loaded Shoulder Press", category: "Plate", src: "/machines/x-life-fitness-life-fitness-shoulder-press-cc5885.jpg" },
  ],
  "핵 스쿼트|Life Fitness": [
    { name: "Plate-Loaded Hack Squat", category: "Plate", src: "/machines/x-life-fitness-hack-squat-2be3c1.jpg" },
  ],
  "힙 어브덕션|Life Fitness": [
    { name: "Insignia Series Hip Abductor / Adductor", category: "Pin", src: "/machines/x-life-fitness-insignia-series-hip-abductor-adductor-ee910e.jpg" },
    { name: "Insignia Series Sit / Stand Hip Abductor", category: "Pin", src: "/machines/x-life-fitness-insignia-series-sit-stand-hip-abductor-3857d9.jpg" },
  ],
  "힙 어덕션|Life Fitness": [
    { name: "Insignia Series Hip Adduction", category: "Pin", src: "/machines/x-life-fitness-insignia-series-hip-adduction-fed0e9.jpg" },
  ],
  "시티드 카프 레이즈|Life Fitness": [
    { name: "Signature Series Plate-Loaded Calf Raise", category: "Plate", src: "/machines/x-life-fitness-life-fitness-calf-raise-7779f4.jpg" },
    { name: "Insignia Series Calf Extension", category: "Pin", src: "/machines/x-life-fitness-insignia-series-calf-extension-92f281.jpg" },
  ],
  "글루트 머신|Life Fitness": [
    { name: "Insignia Series Glute", category: "Pin", src: "/machines/x-life-fitness-insignia-series-glute-2c566e.jpg" },
  ],
  "힙 쓰러스트 머신|Life Fitness": [
    { name: "Insignia Series Glute Bridge", category: "Pin", src: "/machines/x-life-fitness-insignia-series-glute-bridge-df49ef.jpg" },
  ],
  "프리처 컬 머신|Life Fitness": [
    { name: "Signature Series Plate-Loaded Biceps Curl", category: "Plate", src: "/machines/x-life-fitness-life-fitness-biceps-curl-24a16d.jpg" },
  ],
  "트라이셉스 딥 머신|Life Fitness": [
    { name: "Signature Series Plate-Loaded Seated Dip", category: "Plate", src: "/machines/x-life-fitness-life-fitness-seated-dip-c52b42.jpg" },
    { name: "Life Fitness Plate Loaded Seated Dip", category: "Plate", src: "/machines/x-life-fitness-lf-plate-loaded-seated-dip-cad825.jpg" },
    { name: "Life Fitness Pro1 Seated Dip", category: "Pin", src: "/machines/x-life-fitness-lf-pro1-seated-dip-ed1212.jpg" },
    { name: "Life Fitness Signature Series Triceps Press / Seated Dip", category: "Pin", src: "/machines/x-life-fitness-lf-signature-triceps-press-seated-dip-987702.jpg" },
    { name: "Life Fitness Insignia Series Triceps Press", category: "Pin", src: "/machines/x-life-fitness-lf-insignia-triceps-press-587421.jpg" },
  ],
  "인클라인 프레스|Technogym": [
    { name: "Pure Strength Incline Chest Press (MG1500)", category: "Plate", src: "/machines/x-technogym-pure-incline-chest-press-mg1500-adb975.jpg" },
  ],
  "T바 로우|Technogym": [
    { name: "Pure Strength T-Bar Row (PG12)", category: "Plate", src: "/machines/x-technogym-pure-t-bar-row-pg12-9ca8e9.jpg" },
  ],
  "로우 로우|Technogym": [
    { name: "Pure Strength Low Row (MG2500)", category: "Plate", src: "/machines/x-technogym-pure-low-row-mg2500-a9331b.jpg" },
  ],
  "풀오버 머신|Technogym": [
    { name: "Pure Strength Pullover (MG9000)", category: "Plate", src: "/machines/x-technogym-pure-pullover-mg9000-20fee0.jpg" },
  ],
  "케이블 크로스오버|Technogym": [
    { name: "Selection Radiant (Inclusive Functional Trainer)", category: "Pin", src: "/machines/x-technogym-selection-radiant-functional-trainer-332c81.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Technogym": [
    { name: "Pure Strength Shoulder Press (MG3500)", category: "Plate", src: "/machines/x-technogym-pure-shoulder-press-5e2897.jpg" },
  ],
  "핵 스쿼트|Technogym": [
    { name: "Pure Strength Hack Squat (MG8500)", category: "Plate", src: "/machines/x-technogym-pure-hack-squat-mg8500-daca0d.jpg" },
  ],
  "힙 어브덕션|Technogym": [
    { name: "Selection Abductor (M918)", category: "Pin", src: "/machines/x-technogym-selection-abductor-c4289d.jpg" },
  ],
  "힙 어덕션|Technogym": [
    { name: "Selection Adductor (M917)", category: "Pin", src: "/machines/x-technogym-selection-adductor-500efa.jpg" },
  ],
  "시티드 카프 레이즈|Technogym": [
    { name: "Pure Strength Calf (MG4500, seated)", category: "Plate", src: "/machines/x-technogym-pure-calf-mg4500-910d03.jpg" },
  ],
  "글루트 머신|Technogym": [
    { name: "Selection Glute (M979)", category: "Pin", src: "/machines/x-technogym-selection-glute-ddfc20.jpg" },
    { name: "Pure Strength Rear Kick (MG4000)", category: "Plate", src: "/machines/x-technogym-pure-rear-kick-mg4000-a15f3c.jpg" },
  ],
  "힙 쓰러스트 머신|Technogym": [
    { name: "Pure Strength Hip Thrust (MG8000)", category: "Plate", src: "/machines/x-technogym-pure-hip-thrust-mg8000-80384d.jpg" },
  ],
  "트라이셉스 익스텐션|Technogym": [
    { name: "Selection Arm Extension (M945)", category: "Pin", src: "/machines/x-technogym-selection-arm-extension-99c6b2.jpg" },
  ],
  "프리처 컬 머신|Technogym": [
    { name: "Pure Strength Biceps (MG6000)", category: "Plate", src: "/machines/x-technogym-pure-biceps-mg6000-5f9f7e.jpg" },
  ],
  "트라이셉스 딥 머신|Technogym": [
    { name: "Pure Strength Seated Dip (MG5500)", category: "Plate", src: "/machines/x-technogym-pure-seated-dip-mg5500-887727.jpg" },
  ],
  "펙덱 플라이|Cybex": [
    { name: "Cybex Ion Series Pectoral Fly/Rear Deltoid", category: "Pin", src: "/machines/x-cybex-pec-fly-ion-1456d4.jpg" },
  ],
  "스미스 머신 벤치 프레스|Cybex": [
    { name: "Cybex Plate Loaded Smith Press", category: "Plate", src: "/machines/x-cybex-smith-press-plate-c9b77e.jpg" },
  ],
  "케이블 크로스오버|Cybex": [
    { name: "Cybex Attached Cable Crossover Station", category: "Pin", src: "/machines/x-cybex-cable-crossover-811dd1.jpg" },
  ],
  "T바 로우|Cybex": [
    { name: "Cybex Plate Loaded T-Bar Row", category: "Plate", src: "/machines/x-cybex-t-bar-row-246ee6.jpg" },
  ],
  "어시스티드 풀업/딥|Cybex": [
    { name: "Cybex Prestige Strength VRS Dip/Chin Assist", category: "Pin", src: "/machines/x-cybex-dip-chin-assist-prestige-3743c8.jpg" },
    { name: "Cybex VR3 Dip/Chin Assist", category: "Pin", src: "/machines/x-cybex-cybex-vr3-dip-chin-assist-333abd.jpg" },
    { name: "Cybex Modular 5345-91 Assisted Chin-Up Dip", category: "Pin", src: "/machines/x-cybex-cybex-modular-assisted-chin-up-dip-4bf471.jpg" },
    { name: "Cybex Free Standing Dip/Chin Assist", category: "Pin", src: "/machines/x-cybex-cybex-free-standing-dip-chin-assist-5f4a89.jpg" },
  ],
  "백 익스텐션 머신|Cybex": [
    { name: "Cybex Prestige Strength VRS Back Extension", category: "Pin", src: "/machines/x-cybex-back-extension-vrs-caa267.jpg" },
  ],
  "레터럴 레이즈|Cybex": [
    { name: "Cybex Prestige Strength VRS Lateral Raise", category: "Pin", src: "/machines/x-cybex-lateral-raise-vrs-bda275.jpg" },
  ],
  "리어 델트 머신|Cybex": [
    { name: "Cybex Prestige Strength Total Access Row/Rear Delt", category: "Pin", src: "/machines/x-cybex-row-rear-delt-total-access-f21c37.jpg" },
  ],
  "레그 프레스|Cybex": [
    { name: "Cybex Prestige Strength VRS Leg Press", category: "Pin", src: "/machines/x-cybex-leg-press-vrs-361127.jpg" },
  ],
  "핵 스쿼트|Cybex": [
    { name: "Cybex Plate Loaded Hack Squat", category: "Plate", src: "/machines/x-cybex-hack-squat-plate-4973c7.jpg" },
  ],
  "힙 어브덕션|Cybex": [
    { name: "Cybex Prestige Strength VRS Hip Abduction", category: "Pin", src: "/machines/x-cybex-hip-abduction-vrs-f08fe6.jpg" },
  ],
  "힙 어덕션|Cybex": [
    { name: "Cybex Prestige Strength VRS Hip Adduction", category: "Pin", src: "/machines/x-cybex-hip-adduction-vrs-47b7dd.jpg" },
  ],
  "스탠딩 카프 레이즈|Cybex": [
    { name: "Cybex Prestige Strength VRS Standing Calf", category: "Pin", src: "/machines/x-cybex-standing-calf-vrs-2ad65c.jpg" },
  ],
  "시티드 카프 레이즈|Cybex": [
    { name: "Cybex Plate Loaded Seated Calf", category: "Plate", src: "/machines/x-cybex-seated-calf-plate-af69a1.jpg" },
  ],
  "글루트 머신|Cybex": [
    { name: "Cybex Prestige Strength VRS Glute", category: "Pin", src: "/machines/x-cybex-glute-vrs-c8feee.jpg" },
  ],
  "트라이셉스 익스텐션|Cybex": [
    { name: "Cybex Eagle NX Arm Extension", category: "Pin", src: "/machines/x-cybex-arm-extension-eagle-nx-896081.jpg" },
  ],
  "프리처 컬 머신|Cybex": [
    { name: "Cybex Eagle NX Arm Curl", category: "Pin", src: "/machines/x-cybex-arm-curl-eagle-nx-f032ff.jpg" },
  ],
  "어브도미널 크런치 머신|Cybex": [
    { name: "Cybex Prestige Strength VRS Abdominal", category: "Pin", src: "/machines/x-cybex-abdominal-vrs-69b87e.jpg" },
  ],
  "토르소 로테이션 머신|Cybex": [
    { name: "Cybex Eagle NX Torso Rotation", category: "Pin", src: "/machines/x-cybex-torso-rotation-eagle-nx-6a42f4.jpg" },
  ],
  "펙덱 플라이|Gym80": [
    { name: "gym80 Butterfly", category: "Pin", src: "/machines/x-gym80-gym80-butterfly-3022-25b44d.jpg" },
    { name: "gym80 Pure Kraft Butterfly Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-butterfly-dual-4341-9d416d.jpg" },
  ],
  "스미스 머신 벤치 프레스|Gym80": [
    { name: "gym80 Multipress Station", category: "Plate", src: "/machines/x-gym80-gym80-multipress-station-4036-1e7658.jpg" },
  ],
  "케이블 크로스오버|Gym80": [
    { name: "gym80 Cable Crossover Station", category: "Pin", src: "/machines/x-gym80-gym80-cable-crossover-station-4004-5f3942.jpg" },
  ],
  "시티드 로우|Gym80": [
    { name: "gym80 Seated Row Machine", category: "Pin", src: "/machines/x-gym80-gym80-seated-row-machine-3040-22b040.jpg" },
    { name: "gym80 Pure Kraft Seated Row Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-seated-row-dual-4322-cb573c.jpg" },
  ],
  "하이 로우|Gym80": [
    { name: "gym80 Pure Kraft High Row Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-high-row-dual-4340-637ccc.jpg" },
  ],
  "로우 로우|Gym80": [
    { name: "gym80 Pure Kraft Low Row Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-low-row-dual-4319-244357.jpg" },
  ],
  "풀오버 머신|Gym80": [
    { name: "gym80 Pull Over Machine", category: "Pin", src: "/machines/x-gym80-gym80-pull-over-machine-3012n-9a83f4.jpg" },
    { name: "gym80 Pure Kraft Pullover", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-pullover-4350n-25cec8.jpg" },
  ],
  "어시스티드 풀업/딥|Gym80": [
    { name: "gym80 Kneeling / Chinning-Dipping Machine", category: "Pin", src: "/machines/x-gym80-gym80-kneeling-chinning-dipping-machine-3017-b13bf6.jpg" },
    { name: "gym80 Sygnum 3017 Kneeling / Chinning-Dipping Machine", category: "Pin", src: "/machines/x-gym80-gym80-3017-kneeling-chinning-dipping-machine-aee544.jpg" },
  ],
  "백 익스텐션 머신|Gym80": [
    { name: "gym80 Lower Back Machine", category: "Pin", src: "/machines/x-gym80-gym80-lower-back-machine-3007-a39c7e.jpg" },
  ],
  "숄더 프레스|Gym80": [
    { name: "gym80 Shoulder Press", category: "Pin", src: "/machines/x-gym80-gym80-shoulder-press-3032-029c8b.jpg" },
    { name: "gym80 Pure Kraft Shoulder Press Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-shoulder-press-dual-4320-b262ca.jpg" },
  ],
  "리어 델트 머신|Gym80": [
    { name: "gym80 Butterfly Reverse", category: "Pin", src: "/machines/x-gym80-gym80-butterfly-reverse-3025-408005.jpg" },
    { name: "gym80 Pure Kraft Butterfly Reverse Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-butterfly-reverse-dual-4344-e7eb12.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Gym80": [
    { name: "gym80 Dual Shoulder Press", category: "Pin", src: "/machines/x-gym80-gym80-dual-shoulder-press-3043-034044.jpg" },
    { name: "gym80 Pure Kraft-Strong Shoulder Press Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-strong-shoulder-press-dual-4363-37c71e.jpg" },
  ],
  "레그 익스텐션|Gym80": [
    { name: "gym80 Leg Extension", category: "Pin", src: "/machines/x-gym80-gym80-leg-extension-3001-b8a08d.jpg" },
  ],
  "레그 컬|Gym80": [
    { name: "gym80 Seated Leg Curl", category: "Pin", src: "/machines/x-gym80-gym80-seated-leg-curl-3003-8a1e2a.jpg" },
    { name: "gym80 Lying Leg Curl", category: "Pin", src: "/machines/x-gym80-gym80-lying-leg-curl-3002-be7d1c.jpg" },
  ],
  "핵 스쿼트|Gym80": [
    { name: "gym80 Pure Kraft Squat Machine", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-squat-machine-4038n-c43bb3.jpg" },
    { name: "gym80 Pure Kraft Pendulum Squat", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-pendulum-squat-4353n-211a70.jpg" },
  ],
  "힙 어브덕션|Gym80": [
    { name: "gym80 Abduction Machine", category: "Pin", src: "/machines/x-gym80-gym80-abduction-machine-3028-204887.jpg" },
  ],
  "힙 어덕션|Gym80": [
    { name: "gym80 Adduction Machine", category: "Pin", src: "/machines/x-gym80-gym80-adduction-machine-3029-a3e430.jpg" },
  ],
  "스탠딩 카프 레이즈|Gym80": [
    { name: "gym80 Standing Calf Raise Machine", category: "Pin", src: "/machines/x-gym80-gym80-standing-calf-raise-machine-3018-d206fd.jpg" },
    { name: "gym80 Pure Kraft 55 Degrees Standing Calf Raise", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-55-degrees-standing-calf-raise--f4e294.jpg" },
  ],
  "시티드 카프 레이즈|Gym80": [
    { name: "gym80 Seated Calf Press", category: "Pin", src: "/machines/x-gym80-gym80-seated-calf-press-3027-1ded17.jpg" },
    { name: "gym80 Pure Kraft Seated Calf Raise", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-seated-calf-raise-4026-5401fa.jpg" },
  ],
  "글루트 머신|Gym80": [
    { name: "gym80 Gluteus Kick Radial", category: "Pin", src: "/machines/x-gym80-gym80-gluteus-kick-radial-3005-ba475f.jpg" },
    { name: "gym80 Pure Kraft Gluteus Kick Machine", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-gluteus-kick-machine-4321-a279fc.jpg" },
  ],
  "힙 쓰러스트 머신|Gym80": [
    { name: "gym80 Pure Kraft Booty Booster", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-booty-booster-4352-185ce5.jpg" },
  ],
  "바이셉 컬|Gym80": [
    { name: "gym80 Biceps Machine", category: "Pin", src: "/machines/x-gym80-gym80-biceps-machine-3010-142f0e.jpg" },
    { name: "gym80 Pure Kraft Biceps Curl", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-biceps-curl-4338n-03c72b.jpg" },
  ],
  "트라이셉스 딥 머신|Gym80": [
    { name: "gym80 Dip Machine", category: "Pin", src: "/machines/x-gym80-gym80-dip-machine-3036-3b5409.jpg" },
    { name: "gym80 Pure Kraft Triceps Dip Dual", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-triceps-dip-dual-4335-9850e0.jpg" },
    { name: "gym80 Sygnum 3036 Dip Machine", category: "Pin", src: "/machines/x-gym80-gym80-3036-dip-machine-f2b8cc.jpg" },
    { name: "gym80 Pure Kraft 4335 Triceps Dip Dual", category: "Plate", src: "/machines/x-gym80-gym80-4335-pure-kraft-triceps-dip-dual-da8d77.jpg" },
    { name: "gym80 Standing 5904 Standing Triceps Dip", category: "Plate", src: "/machines/x-gym80-gym80-5904-standing-triceps-dip-6ed4fe.jpg" },
    { name: "gym80 80Athletics 80A00015 Triceps Dip", category: "Plate", src: "/machines/x-gym80-gym80-80a00015-triceps-dip-8ac161.jpg" },
  ],
  "어브도미널 크런치 머신|Gym80": [
    { name: "gym80 Abdominal Crunch", category: "Pin", src: "/machines/x-gym80-gym80-abdominal-crunch-3008-e9cfc5.jpg" },
    { name: "gym80 Pure Kraft Abdominal Crunch", category: "Plate", src: "/machines/x-gym80-gym80-pure-kraft-abdominal-crunch-4343-d6a48b.jpg" },
  ],
  "토르소 로테이션 머신|Gym80": [
    { name: "gym80 Rotary Machine", category: "Pin", src: "/machines/x-gym80-gym80-rotary-machine-3225-256fb2.jpg" },
  ],
  "체스트 프레스|Prime": [
    { name: "Plate Loaded Chest Press", category: "Plate", src: "/machines/x-prime-plate-loaded-chest-press-737c3a.jpg" },
    { name: "Hybrid Chest Press", category: "Pin", src: "/machines/x-prime-hybrid-chest-press-367f6a.jpg" },
  ],
  "인클라인 프레스|Prime": [
    { name: "Plate Loaded Incline Press", category: "Plate", src: "/machines/x-prime-plate-loaded-incline-press-3132d2.jpg" },
  ],
  "케이블 크로스오버|Prime": [
    { name: "Functional Trainer", category: "Pin", src: "/machines/x-prime-functional-trainer-a08a62.jpg" },
  ],
  "시티드 로우|Prime": [
    { name: "Evolution Seated Row", category: "Pin", src: "/machines/x-prime-evolution-seated-row-78cb40.jpg" },
  ],
  "하이 로우|Prime": [
    { name: "Plate Loaded Extreme Row", category: "Plate", src: "/machines/x-prime-plate-loaded-extreme-row-2a3a14.jpg" },
  ],
  "풀오버 머신|Prime": [
    { name: "Hybrid Pullover", category: "Pin", src: "/machines/x-prime-hybrid-pullover-67cf63.jpg" },
  ],
  "어시스티드 풀업/딥|Prime": [
    { name: "Chin/Dip Assist", category: "Pin", src: "/machines/x-prime-chin-dip-assist-9bca37.jpg" },
    { name: "Prime Fitness Chin/Dip Assist L-130", category: "Pin", src: "/machines/x-prime-prime-chin-dip-assist-l130-fae81e.jpg" },
  ],
  "백 익스텐션 머신|Prime": [
    { name: "Evolution Low Back Extension", category: "Pin", src: "/machines/x-prime-evolution-low-back-extension-1702d1.jpg" },
  ],
  "레터럴 레이즈|Prime": [
    { name: "Hybrid Lateral Raise", category: "Pin", src: "/machines/x-prime-hybrid-lateral-raise-388edd.jpg" },
  ],
  "리어 델트 머신|Prime": [
    { name: "Hybrid Pec/Rear Delt", category: "Pin", src: "/machines/x-prime-hybrid-pec-rear-delt-0afbca.jpg" },
  ],
  "레그 익스텐션|Prime": [
    { name: "Hybrid Leg Extension", category: "Pin", src: "/machines/x-prime-hybrid-leg-extension-6944fb.jpg" },
    { name: "Plate Loaded Leg Extension", category: "Plate", src: "/machines/x-prime-plate-loaded-leg-extension-46f8b2.jpg" },
  ],
  "핵 스쿼트|Prime": [
    { name: "Plate Loaded Hack Squat", category: "Plate", src: "/machines/x-prime-plate-loaded-hack-squat-22c975.jpg" },
  ],
  "힙 어브덕션|Prime": [
    { name: "Hybrid Outer Thigh", category: "Pin", src: "/machines/x-prime-hybrid-outer-thigh-f5e732.jpg" },
  ],
  "힙 어덕션|Prime": [
    { name: "Hybrid Inner Thigh", category: "Pin", src: "/machines/x-prime-hybrid-inner-thigh-52d23d.jpg" },
  ],
  "시티드 카프 레이즈|Prime": [
    { name: "Hybrid Seated Calf Press", category: "Pin", src: "/machines/x-prime-hybrid-seated-calf-press-3b0d26.jpg" },
  ],
  "글루트 머신|Prime": [
    { name: "Hybrid Multi-Hip", category: "Pin", src: "/machines/x-prime-hybrid-multi-hip-b85274.jpg" },
  ],
  "바이셉 컬|Prime": [
    { name: "Hybrid Arm Curl", category: "Pin", src: "/machines/x-prime-hybrid-arm-curl-b68f99.jpg" },
    { name: "Plate Loaded Arm Curl", category: "Plate", src: "/machines/x-prime-plate-loaded-arm-curl-8b363b.jpg" },
  ],
  "트라이셉스 익스텐션|Prime": [
    { name: "Hybrid Tricep Extension", category: "Pin", src: "/machines/x-prime-hybrid-tricep-extension-c49c51.jpg" },
  ],
  "프리처 컬 머신|Prime": [
    { name: "Double-Sided Preacher", category: "Plate", src: "/machines/x-prime-double-sided-preacher-8685e4.jpg" },
  ],
  "어브도미널 크런치 머신|Prime": [
    { name: "Evolution Abdominal Crunch", category: "Pin", src: "/machines/x-prime-evolution-abdominal-crunch-8c0dfd.jpg" },
  ],
  "토르소 로테이션 머신|Prime": [
    { name: "Hybrid Rotary Torso", category: "Pin", src: "/machines/x-prime-hybrid-rotary-torso-12a1f2.jpg" },
  ],
  "체스트 프레스|Nautilus": [
    { name: "Impact Chest Press", category: "Pin", src: "/machines/x-nautilus-chest-press-impact-67a17c.jpg" },
    { name: "Instinct Chest Press", category: "Pin", src: "/machines/x-nautilus-chest-press-instinct-34bdf1.jpg" },
    { name: "Inspiration Chest Press", category: "Pin", src: "/machines/x-nautilus-chest-press-inspiration-c6501d.jpg" },
    { name: "Leverage Chest Press", category: "Plate", src: "/machines/x-nautilus-chest-press-leverage-a7098b.jpg" },
  ],
  "인클라인 프레스|Nautilus": [
    { name: "Impact Incline Press", category: "Pin", src: "/machines/x-nautilus-incline-press-impact-99cd2c.jpg" },
    { name: "Leverage Incline Press", category: "Plate", src: "/machines/x-nautilus-incline-press-leverage-cfc581.jpg" },
  ],
  "디클라인 프레스|Nautilus": [
    { name: "Leverage Decline Press", category: "Plate", src: "/machines/x-nautilus-decline-press-leverage-723e67.jpg" },
  ],
  "케이블 크로스오버|Nautilus": [
    { name: "Multi-Station Cable Cross Over (NP-M9201)", category: "Pin", src: "/machines/x-nautilus-cable-crossover-m9201-26caae.jpg" },
    { name: "Inspiration Dual Adjustable Pulley", category: "Pin", src: "/machines/x-nautilus-cable-crossover-inspiration-dap-0323a9.jpg" },
  ],
  "하이 로우|Nautilus": [
    { name: "Leverage High Row", category: "Plate", src: "/machines/x-nautilus-high-row-leverage-6ac8b8.jpg" },
  ],
  "로우 로우|Nautilus": [
    { name: "Leverage Low Row", category: "Plate", src: "/machines/x-nautilus-low-row-leverage-0dc952.jpg" },
  ],
  "풀오버 머신|Nautilus": [
    { name: "Inspiration Pullover", category: "Pin", src: "/machines/x-nautilus-pullover-inspiration-80f56c.jpg" },
  ],
  "어시스티드 풀업/딥|Nautilus": [
    { name: "Impact Chin Dip Assist", category: "Pin", src: "/machines/x-nautilus-assisted-chin-dip-impact-c1231a.jpg" },
    { name: "Nautilus Impact Chin Dip Assist 9NA-S6334", category: "Pin", src: "/machines/x-nautilus-nautilus-impact-chin-dip-assist-faa0c6.jpg" },
  ],
  "백 익스텐션 머신|Nautilus": [
    { name: "Impact Low Back", category: "Pin", src: "/machines/x-nautilus-back-extension-impact-eae8de.jpg" },
    { name: "Inspiration Back Extension", category: "Pin", src: "/machines/x-nautilus-back-extension-inspiration-aa731e.jpg" },
  ],
  "숄더 프레스|Nautilus": [
    { name: "Impact Shoulder Press", category: "Pin", src: "/machines/x-nautilus-shoulder-press-impact-b8d035.jpg" },
    { name: "Instinct Shoulder Press", category: "Pin", src: "/machines/x-nautilus-shoulder-press-instinct-bd9842.jpg" },
    { name: "Inspiration Shoulder Press", category: "Pin", src: "/machines/x-nautilus-shoulder-press-inspiration-ebf586.jpg" },
    { name: "Leverage Shoulder Press", category: "Plate", src: "/machines/x-nautilus-shoulder-press-leverage-76ecf1.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Nautilus": [
    { name: "Leverage Shoulder Press", category: "Plate", src: "/machines/x-nautilus-shoulder-press-leverage-76ecf1.jpg" },
  ],
  "리어 델트 머신|Nautilus": [
    { name: "Impact Deltoid Fly", category: "Pin", src: "/machines/x-nautilus-rear-delt-impact-deltoid-fly-9cd222.jpg" },
    { name: "Inspiration Pec Fly / Rear Deltoid", category: "Pin", src: "/machines/x-nautilus-rear-delt-inspiration-bf200b.jpg" },
  ],
  "레그 프레스|Nautilus": [
    { name: "Impact Seated Leg Press", category: "Pin", src: "/machines/x-nautilus-leg-press-impact-be9378.jpg" },
    { name: "Inspiration Leg Press", category: "Pin", src: "/machines/x-nautilus-leg-press-inspiration-22444a.jpg" },
    { name: "Plate-Loaded Angled Leg Press (NP-L1141)", category: "Plate", src: "/machines/x-nautilus-leg-press-angled-l1141-d56174.jpg" },
    { name: "Instinct Dual Leg Press / Calf Raise", category: "Pin", src: "/machines/x-nautilus-leg-press-instinct-dual-ad8776.jpg" },
  ],
  "레그 컬|Nautilus": [
    { name: "Impact Seated Leg Curl", category: "Pin", src: "/machines/x-nautilus-leg-curl-impact-seated-a804b2.jpg" },
    { name: "Impact Prone Leg Curl", category: "Pin", src: "/machines/x-nautilus-leg-curl-impact-prone-41ee35.jpg" },
    { name: "Inspiration Leg Curl", category: "Pin", src: "/machines/x-nautilus-leg-curl-inspiration-b11dc7.jpg" },
    { name: "Instinct Leg Curl", category: "Pin", src: "/machines/x-nautilus-leg-curl-instinct-c65f69.jpg" },
  ],
  "핵 스쿼트|Nautilus": [
    { name: "Plate-Loaded Hack Squat (NP-L1130)", category: "Plate", src: "/machines/x-nautilus-hack-squat-l1130-23d46b.jpg" },
  ],
  "힙 어브덕션|Nautilus": [
    { name: "Impact Abductor", category: "Pin", src: "/machines/x-nautilus-hip-abduction-impact-e99e30.jpg" },
  ],
  "힙 어덕션|Nautilus": [
    { name: "Impact Adductor", category: "Pin", src: "/machines/x-nautilus-hip-adduction-impact-4fb8c0.jpg" },
  ],
  "스탠딩 카프 레이즈|Nautilus": [
    { name: "Impact Standing Calf", category: "Pin", src: "/machines/x-nautilus-standing-calf-impact-b03f58.jpg" },
  ],
  "시티드 카프 레이즈|Nautilus": [
    { name: "Plate-Loaded Tilt Seat Calf (NP-L1110)", category: "Plate", src: "/machines/x-nautilus-seated-calf-l1110-bf6ff2.jpg" },
  ],
  "글루트 머신|Nautilus": [
    { name: "Inspiration Glute Press", category: "Pin", src: "/machines/x-nautilus-glute-inspiration-067efd.jpg" },
    { name: "Instinct Glute Press", category: "Pin", src: "/machines/x-nautilus-glute-instinct-b07f51.jpg" },
  ],
  "힙 쓰러스트 머신|Nautilus": [
    { name: "Plate-Loaded Glute Drive (NP-L1131)", category: "Plate", src: "/machines/x-nautilus-hip-thrust-glute-drive-d9acdc.jpg" },
  ],
  "트라이셉스 익스텐션|Nautilus": [
    { name: "Impact Triceps Extension", category: "Pin", src: "/machines/x-nautilus-triceps-ext-impact-3f53e9.jpg" },
    { name: "Inspiration Triceps Extension", category: "Pin", src: "/machines/x-nautilus-triceps-ext-inspiration-0b2e5e.jpg" },
    { name: "Instinct Triceps Extension", category: "Pin", src: "/machines/x-nautilus-triceps-ext-instinct-dcbf0b.jpg" },
  ],
  "트라이셉스 딥 머신|Nautilus": [
    { name: "Impact Dip Machine", category: "Pin", src: "/machines/x-nautilus-triceps-dip-impact-88bc5e.jpg" },
    { name: "Inspiration Tricep Dip", category: "Pin", src: "/machines/x-nautilus-triceps-dip-inspiration-43339a.jpg" },
    { name: "Nautilus Impact Dip Machine 9NA-S5303", category: "Pin", src: "/machines/x-nautilus-nautilus-impact-dip-machine-70f1f5.jpg" },
    { name: "Nautilus Inspiration Tricep Dip IPTD4", category: "Pin", src: "/machines/x-nautilus-nautilus-inspiration-tricep-dip-2a95a9.jpg" },
  ],
  "어브도미널 크런치 머신|Nautilus": [
    { name: "Impact Abdominal", category: "Pin", src: "/machines/x-nautilus-abdominal-crunch-impact-983d7f.jpg" },
    { name: "Inspiration Abdominal Crunch", category: "Pin", src: "/machines/x-nautilus-abdominal-crunch-inspiration-cd4e6b.jpg" },
    { name: "Leverage Abdominal Crunch", category: "Plate", src: "/machines/x-nautilus-abdominal-crunch-leverage-a412d0.jpg" },
  ],
  "토르소 로테이션 머신|Nautilus": [
    { name: "Inspiration Rotary Torso", category: "Pin", src: "/machines/x-nautilus-torso-rotation-inspiration-ddef50.jpg" },
    { name: "Instinct Rotary Torso", category: "Pin", src: "/machines/x-nautilus-torso-rotation-instinct-f6beaf.jpg" },
  ],
  "인클라인 프레스|Matrix": [
    { name: "Magnum Incline Bench Press (MG-PL14)", category: "Plate", src: "/machines/x-matrix-incline-bench-press-c82eaf.jpg" },
  ],
  "디클라인 프레스|Matrix": [
    { name: "Magnum Vertical Decline Bench Press (MG-PL15)", category: "Plate", src: "/machines/x-matrix-decline-bench-press-acac90.jpg" },
  ],
  "스미스 머신 벤치 프레스|Matrix": [
    { name: "Aura Smith Machine (G3-PL62)", category: "Plate", src: "/machines/x-matrix-smith-machine-3e24fb.jpg" },
  ],
  "어브도미널 크런치 머신|Matrix": [
    { name: "Ultra G7-S51 Abdominal Crunch", category: "Pin", src: "/machines/x-matrix-abdominal-crunch-7c8060.jpg" },
  ],
  "토르소 로테이션 머신|Matrix": [
    { name: "Ultra G7-S55 Rotary Torso", category: "Pin", src: "/machines/x-matrix-rotary-torso-d57de1.jpg" },
  ],
  "프리처 컬 머신|Matrix": [
    { name: "Magnum Preacher Curl (MG-A62)", category: "Plate", src: "/machines/x-matrix-preacher-curl-23a758.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Matrix": [
    { name: "Magnum Shoulder Press (MG-PL23)", category: "Plate", src: "/machines/x-matrix-magnum-shoulder-press-d28ea5.jpg" },
  ],
  "스미스 머신 벤치 프레스|Precor": [
    { name: "Discovery Plate Loaded Smith Machine (DPL0802)", category: "Plate", src: "/machines/x-precor-smith-dpl0802-e35c0e.jpg" },
  ],
  "케이블 크로스오버|Precor": [
    { name: "Resolute Dual Adjustable Pulley (RUD0915)", category: "Pin", src: "/machines/x-precor-dual-adjustable-pulley-rud0915-2be3bf.jpg" },
  ],
  "T바 로우|Precor": [
    { name: "Discovery Plate Loaded Incline Lever Row (DPL0311)", category: "Plate", src: "/machines/x-precor-incline-lever-row-dpl0311-f3c239.jpg" },
  ],
  "로우 로우|Precor": [
    { name: "Resolute Diverging Low Row (RSL0324)", category: "Pin", src: "/machines/x-precor-low-row-rsl0324-536b2f.jpg" },
    { name: "Discovery Plate Loaded Low Row (DPL0308)", category: "Plate", src: "/machines/x-precor-low-row-dpl0308-e4a5fa.jpg" },
  ],
  "백 익스텐션 머신|Precor": [
    { name: "Resolute Back Extension (RSL0313)", category: "Pin", src: "/machines/x-precor-back-extension-rsl0313-96fe5c.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Precor": [
    { name: "Discovery Plate Loaded Shoulder Press (DPL0550)", category: "Plate", src: "/machines/x-precor-shoulder-press-dpl0550-3d767a.jpg" },
  ],
  "힙 어브덕션|Precor": [
    { name: "Resolute Outer Thigh (RSL0621)", category: "Pin", src: "/machines/x-precor-outer-thigh-rsl0621-82d8da.jpg" },
  ],
  "힙 어덕션|Precor": [
    { name: "Resolute Inner Thigh (RSL0620)", category: "Pin", src: "/machines/x-precor-inner-thigh-rsl0620-f15b28.jpg" },
  ],
  "힙 쓰러스트 머신|Precor": [
    { name: "Glutebuilder Plate Loaded Hip Thrust Elite", category: "Plate", src: "/machines/x-precor-hip-thrust-glutebuilder-11ab63.jpg" },
  ],
  "트라이셉스 딥 머신|Precor": [
    { name: "Resolute Seated Dip (RSL0215)", category: "Pin", src: "/machines/x-precor-seated-dip-rsl0215-141292.jpg" },
    { name: "Discovery Plate Loaded Seated Dip (DPL0521)", category: "Plate", src: "/machines/x-precor-seated-dip-dpl0521-97c416.jpg" },
    { name: "Precor Discovery Series Seated Dip DPL0521", category: "Plate", src: "/machines/x-precor-precor-discovery-seated-dip-plate-72d829.jpg" },
    { name: "Precor Discovery Series Seated Dip DSL0215", category: "Pin", src: "/machines/x-precor-precor-discovery-seated-dip-dsl0215-8308c1.jpg" },
    { name: "Precor Resolute Series Seated Dip RSL0215", category: "Pin", src: "/machines/x-precor-precor-resolute-seated-dip-rsl0215-6dace4.jpg" },
  ],
  "어브도미널 크런치 머신|Precor": [
    { name: "Resolute Abdominal (RSL0714)", category: "Pin", src: "/machines/x-precor-abdominal-rsl0714-21506d.jpg" },
  ],
  "토르소 로테이션 머신|Precor": [
    { name: "Resolute Rotary Torso (RSL0315)", category: "Pin", src: "/machines/x-precor-rotary-torso-rsl0315-e71e04.jpg" },
  ],
  "체스트 프레스|Atlantis": [
    { name: "Seated converging chest press (P140)", category: "Pin", src: "/machines/x-atlantis-p140-54bf11.jpg" },
    { name: "Vertical chest press (PW737)", category: "Plate", src: "/machines/x-atlantis-pw737-fc21ab.jpg" },
  ],
  "펙덱 플라이|Atlantis": [
    { name: "Pec / Rear delt fly combo (P156)", category: "Pin", src: "/machines/x-atlantis-p156-94d4f2.jpg" },
  ],
  "인클라인 프레스|Atlantis": [
    { name: "Incline Converging Chest Press (P143)", category: "Pin", src: "/machines/x-atlantis-p143-5f5d75.jpg" },
    { name: "Converging incline bench press (P443)", category: "Plate", src: "/machines/x-atlantis-p443-c9640f.jpg" },
  ],
  "디클라인 프레스|Atlantis": [
    { name: "Decline vertical chest press (PW739)", category: "Plate", src: "/machines/x-atlantis-pw739-59c7e2.jpg" },
  ],
  "스미스 머신 벤치 프레스|Atlantis": [
    { name: "Smith machine (E155)", category: "Plate", src: "/machines/x-atlantis-e155-45ef34.jpg" },
  ],
  "케이블 크로스오버|Atlantis": [
    { name: "Functional training system (NM200)", category: "Pin", src: "/machines/x-atlantis-nm200-991c13.jpg" },
  ],
  "백 익스텐션 머신|Atlantis": [
    { name: "Deluxe Incline Hyper Extension (D828)", category: "Plate", src: "/machines/x-atlantis-d828-0bee72.jpg" },
  ],
  "리어 델트 머신|Atlantis": [
    { name: "Seated side / Rear deltoid (E352)", category: "Pin", src: "/machines/x-atlantis-e352-5f4746.jpg" },
  ],
  "숄더 슈러그 머신|Atlantis": [
    { name: "Shrug and Deadlift Machine Pro (PW335)", category: "Plate", src: "/machines/x-atlantis-pw335-4d3a1d.jpg" },
  ],
  "핵 스쿼트|Atlantis": [
    { name: "Hack squat (C412)", category: "Plate", src: "/machines/x-atlantis-c412-5ed6c5.jpg" },
    { name: "Hack squat pro (PW412)", category: "Plate", src: "/machines/x-atlantis-pw412-21f0b3.jpg" },
  ],
  "시티드 카프 레이즈|Atlantis": [
    { name: "Seated calf (M219)", category: "Plate", src: "/machines/x-atlantis-m219-500131.jpg" },
    { name: "Seated Calf Press (PW319)", category: "Plate", src: "/machines/x-atlantis-pw319-8ceea4.jpg" },
  ],
  "글루트 머신|Atlantis": [
    { name: "Glute machine (C122)", category: "Pin", src: "/machines/x-atlantis-c122-e30248.jpg" },
  ],
  "트라이셉스 익스텐션|Atlantis": [
    { name: "Selectorized French press (T262)", category: "Pin", src: "/machines/x-atlantis-t262-83bca2.jpg" },
  ],
  "어브도미널 크런치 머신|Atlantis": [
    { name: "Dual seated crunch (A301)", category: "Pin", src: "/machines/x-atlantis-a301-7d51c9.jpg" },
  ],
  "디클라인 프레스|Hoist": [
    { name: "ROC-IT Decline Chest Press (RPL-5305)", category: "Plate", src: "/machines/x-hoist-hoist-rpl-5305-decline-chest-press-97a9a0.jpg" },
  ],
  "어시스티드 풀업/딥|Hoist": [
    { name: "ROC-IT Chin/Dip Assist (RS-2700)", category: "Pin", src: "/machines/x-hoist-hoist-rs-2700-chin-dip-assist-363e56.jpg" },
    { name: "Hoist HD-3700 Chin/Dip Assist (Dual Axis)", category: "Pin", src: "/machines/x-hoist-hoist-hd-3700-chin-dip-assist-559af0.jpg" },
  ],
  "백 익스텐션 머신|Hoist": [
    { name: "ROC-IT Lower Back (RS-2204)", category: "Pin", src: "/machines/x-hoist-hoist-rs-2204-low-back-8e809f.jpg" },
    { name: "HD-3600 Ab Crunch/Low Back", category: "Pin", src: "/machines/x-hoist-hoist-hd-3600-ab-crunch-low-back-e96a10.jpg" },
  ],
  "트라이셉스 딥 머신|Cybex": [
    { name: "Cybex VR3 Tricep Press / Seated Dip", category: "Pin", src: "/machines/x-cybex-cybex-vr3-tricep-press-seated-dip-c0e713.jpg" },
    { name: "Cybex Prestige Seated Dip", category: "Pin", src: "/machines/x-cybex-cybex-prestige-seated-dip-feffec.jpg" },
  ],
  "어시스티드 풀업/딥|Matrix": [
    { name: "Matrix Aura Dip / Chin Assist G3-S60", category: "Pin", src: "/machines/x-matrix-matrix-aura-dip-chin-assist-fc992d.jpg" },
    { name: "Matrix Versa Chin / Dip Assist VS-S601", category: "Pin", src: "/machines/x-matrix-matrix-versa-chin-dip-assist-3d7775.jpg" },
  ],
  "어시스티드 풀업/딥|Precor": [
    { name: "Precor Resolute Dip / Chin Assist RMS0320", category: "Pin", src: "/machines/x-precor-precor-resolute-dip-chin-assist-9695d5.jpg" },
  ],
  "어시스티드 풀업/딥|Atlantis": [
    { name: "Atlantis Strength D131 Assisted Chin/Dip", category: "Pin", src: "/machines/x-atlantis-atlantis-d131-assisted-chin-dip-6055eb.jpg" },
  ],
  "T바 로우|Hoist": [
    { name: "CF-3661 Commercial Incline Leverage Row", category: "Plate", src: "/machines/x-hoist-hoist-cf-3661-incline-leverage-row-a2ee16.jpg" },
  ],
  "숄더 슈러그 머신|Hoist": [
    { name: "RPL-5356 Hack Squat/Dead Lift/Shrug", category: "Plate", src: "/machines/x-hoist-hoist-rpl-5356-hack-squat-dead-lift-shrug-97d82f.jpg" },
  ],
};
