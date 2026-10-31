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
  "체스트 프레스|Panatta": [
    { name: "Panatta Fit Evo Vertical Chest Press (1FE036)", category: "Pin", src: "/machines/x-panatta-fit-evo-vertical-chest-press-1fe036-85b1e5.jpg" },
    { name: "Panatta Fit Evo Vertical Chest Press Circular (1FE033)", category: "Pin", src: "/machines/x-panatta-fit-evo-vertical-chest-press-circular-1fe033-72a6ea.jpg" },
    { name: "Panatta Monolith Vertical Chest Press Circular (1MTH033)", category: "Pin", src: "/machines/x-panatta-monolith-vertical-chest-press-circular-1mth033-b99f21.jpg" },
    { name: "Panatta Sec1 Vertical Chest Press Convergent (1SC034)", category: "Pin", src: "/machines/x-panatta-sec1-vertical-chest-press-convergent-1sc034-9067c3.jpg" },
    { name: "Panatta Freeweight One Vertical Chest Press (1FO036)", category: "Plate", src: "/machines/x-panatta-freeweight-one-vertical-chest-press-1fo036-261f96.jpg" },
    { name: "Panatta Freeweight Special Super Vertical Chest Press (1FW045)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-vertical-chest-press-1f-692a33.jpg" },
    { name: "Panatta Freeweight Special Super Horizontal Bench Press (1FW037)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-horizontal-bench-press--fa81d4.jpg" },
    { name: "Panatta Fit Evo Total Press (1FE032)", category: "Pin", src: "/machines/x-panatta-fit-evo-total-press-1fe032-aed976.jpg" },
    { name: "Panatta Sec1 Multi Press (1SCD030)", category: "Pin", src: "/machines/x-panatta-sec1-multi-press-1scd030-d93895.jpg" },
    { name: "Panatta Freeweight HP Super Vertical Chest Press (1HP536)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-vertical-chest-press-1hp536-ddae2b.jpg" },
    { name: "Panatta Freeweight HP Super Horizontal Bench Press (1HP537)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-horizontal-bench-press-1hp53-fa8167.jpg" },
  ],
  "펙덱 플라이|Panatta": [
    { name: "Panatta Fit Evo Pectoral Machine (1FE035)", category: "Pin", src: "/machines/x-panatta-fit-evo-pectoral-machine-1fe035-641391.jpg" },
    { name: "Panatta Monolith Pectoral Machine (1MTH035)", category: "Pin", src: "/machines/x-panatta-monolith-pectoral-machine-1mth035-968f67.jpg" },
    { name: "Panatta Sec1 Pectoral Machine (1SC035)", category: "Pin", src: "/machines/x-panatta-sec1-pectoral-machine-1sc035-92c475.jpg" },
    { name: "Panatta Fantastic Vertical Pek Dek (1FT036)", category: "Pin", src: "/machines/x-panatta-fantastic-vertical-pek-dek-1ft036-232813.jpg" },
    { name: "Panatta Freeweight One Middle Chest Flight Machine (1FO043)", category: "Plate", src: "/machines/x-panatta-freeweight-one-middle-chest-flight-machine-1fo04-9134ba.jpg" },
    { name: "Panatta Freeweight Special Super Middle Chest Flight Machine (1FW043)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-middle-chest-flight-mac-28b0a9.jpg" },
    { name: "Panatta Freeweight One Upper Chest Flight Machine (1FO038)", category: "Plate", src: "/machines/x-panatta-freeweight-one-upper-chest-flight-machine-1fo038-a58b12.jpg" },
    { name: "Panatta Freeweight Special Super Lower Chest Flight Machine (1FW044)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-lower-chest-flight-mach-814a2b.jpg" },
    { name: "Panatta Freeweight HP Inclined Flight Machine (1HP538)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-inclined-flight-machine-1hp538-5c52a6.jpg" },
  ],
  "인클라인 프레스|Panatta": [
    { name: "Panatta Fit Evo Inclined Chest Press (1FE037)", category: "Pin", src: "/machines/x-panatta-fit-evo-inclined-chest-press-1fe037-e5d9b7.jpg" },
    { name: "Panatta Fit Evo Inclined Chest Press Circular (1FE034)", category: "Pin", src: "/machines/x-panatta-fit-evo-inclined-chest-press-circular-1fe034-23d8cd.jpg" },
    { name: "Panatta Monolith Inclined Chest Press Circular (1MTH034)", category: "Pin", src: "/machines/x-panatta-monolith-inclined-chest-press-circular-1mth034-009f80.jpg" },
    { name: "Panatta Sec1 Inclined Chest Press Convergent (1SC037)", category: "Pin", src: "/machines/x-panatta-sec1-inclined-chest-press-convergent-1sc037-071be0.jpg" },
    { name: "Panatta Freeweight One Inclined Chest Press (1FO035)", category: "Plate", src: "/machines/x-panatta-freeweight-one-inclined-chest-press-1fo035-4ba626.jpg" },
    { name: "Panatta Freeweight Special Super Inclined Chest Press (1FW035)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-inclined-chest-press-1f-1bb20d.jpg" },
    { name: "Panatta Freeweight HP Super Inclined Chest Press (1HP535)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-inclined-chest-press-1hp535-d959d0.jpg" },
    { name: "Panatta Freeweight HP Super Inclined Bench Press (1HP533)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-inclined-bench-press-1hp533-809d11.jpg" },
  ],
  "디클라인 프레스|Panatta": [
    { name: "Panatta Freeweight Special Super Declined Chest Press (1FW041)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-declined-chest-press-1f-edc3c0.jpg" },
    { name: "Panatta Freeweight HP Declined Chest Press (1HP541)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-declined-chest-press-1hp541-236f01.jpg" },
  ],
  "스미스 머신 벤치 프레스|Panatta": [
    { name: "Panatta Sec1 Smith Machine Linear Bearings (1SC113A)", category: "Plate", src: "/machines/x-panatta-sec1-smith-machine-linear-bearings-1sc113a-0caa3e.jpg" },
    { name: "Panatta Sec1 Smith Machine Selectorized (1SC110)", category: "Pin", src: "/machines/x-panatta-sec1-smith-machine-selectorized-1sc110-f921d6.jpg" },
    { name: "Panatta Freeweight Special Power Smith Machine Dual System (1FW121)", category: "Plate", src: "/machines/x-panatta-freeweight-special-power-smith-machine-dual-syst-02f772.jpg" },
    { name: "Panatta Freeweight One Power Smith Machine Multi Angles (1FO120)", category: "Plate", src: "/machines/x-panatta-freeweight-one-power-smith-machine-multi-angles--d3d65a.jpg" },
    { name: "Panatta Freeweight HP Smith Machine Counterbalanced (1HP120)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-smith-machine-counterbalanced-1hp1-2db754.jpg" },
    { name: "Panatta Freeweight HP Power Smith Machine Dual System (1HP121)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-power-smith-machine-dual-system-1h-f097b5.jpg" },
  ],
  "케이블 크로스오버|Panatta": [
    { name: "Panatta Monolith Cable Crossover (1MTH111)", category: "Pin", src: "/machines/x-panatta-monolith-cable-crossover-1mth111-c7dc37.jpg" },
    { name: "Panatta Monolith Adjustable Cable Crossover (1MTH125)", category: "Pin", src: "/machines/x-panatta-monolith-adjustable-cable-crossover-1mth125-81f617.jpg" },
    { name: "Panatta Sec1 Cable Crossover (1SC111)", category: "Pin", src: "/machines/x-panatta-sec1-cable-crossover-1sc111-0400ca.jpg" },
    { name: "Panatta Sec1 Adjustable Cable Crossover (1SC120)", category: "Pin", src: "/machines/x-panatta-sec1-adjustable-cable-crossover-1sc120-c0589c.jpg" },
    { name: "Panatta Sec1 High Low Pulley (1SC114)", category: "Pin", src: "/machines/x-panatta-sec1-high-low-pulley-1sc114-d130c3.jpg" },
    { name: "Panatta Monolith Jungle Machine (1MTH115)", category: "Pin", src: "/machines/x-panatta-monolith-jungle-machine-1mth115-0f3195.jpg" },
    { name: "Panatta Fit Evo Cable Crossover (1FE111)", category: "Pin", src: "/machines/x-panatta-fit-evo-cable-crossover-1fe111-d81b38.jpg" },
    { name: "Panatta Fit Evo Adjustable Cable Crossover (1FE125)", category: "Pin", src: "/machines/x-panatta-fit-evo-adjustable-cable-crossover-1fe125-e7f0d8.jpg" },
    { name: "Panatta Fit Evo High Low Pulley (1FE114B)", category: "Pin", src: "/machines/x-panatta-fit-evo-high-low-pulley-1fe114b-45284c.jpg" },
  ],
  "렛풀다운|Panatta": [
    { name: "Panatta Fit Evo Lat Pulldown (1FE001)", category: "Pin", src: "/machines/x-panatta-fit-evo-lat-pulldown-1fe001-4f48e0.jpg" },
    { name: "Panatta Fit Evo Lat Pulldown Circular (1FE002)", category: "Pin", src: "/machines/x-panatta-fit-evo-lat-pulldown-circular-1fe002-4233ef.jpg" },
    { name: "Panatta Fit Evo Lat Pulldown Convergent (1FE007)", category: "Pin", src: "/machines/x-panatta-fit-evo-lat-pulldown-convergent-1fe007-b5a8bb.jpg" },
    { name: "Panatta Monolith Lat Pulldown (1MTH001)", category: "Pin", src: "/machines/x-panatta-monolith-lat-pulldown-1mth001-2a1582.jpg" },
    { name: "Panatta Monolith Lat Pulldown Circular (1MTH002)", category: "Pin", src: "/machines/x-panatta-monolith-lat-pulldown-circular-1mth002-e8a25b.jpg" },
    { name: "Panatta Monolith Lat Pulldown Convergent (1MTH007)", category: "Pin", src: "/machines/x-panatta-monolith-lat-pulldown-convergent-1mth007-e4582b.jpg" },
    { name: "Panatta Sec1 Lat Pulldown (1SC001)", category: "Pin", src: "/machines/x-panatta-sec1-lat-pulldown-1sc001-cb3020.jpg" },
    { name: "Panatta Fantastic Lat Machine (1FT001)", category: "Pin", src: "/machines/x-panatta-fantastic-lat-machine-1ft001-95a13b.jpg" },
    { name: "Panatta Freeweight One Lat Machine Convergent (1FO001)", category: "Plate", src: "/machines/x-panatta-freeweight-one-lat-machine-convergent-1fo001-205aa7.jpg" },
    { name: "Panatta Freeweight One Lat Pulldown Circular (1FO101)", category: "Plate", src: "/machines/x-panatta-freeweight-one-lat-pulldown-circular-1fo101-00566f.jpg" },
    { name: "Panatta Freeweight Special Super Lat Machine Convergent (1FW001)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-lat-machine-convergent--dc66b3.jpg" },
    { name: "Panatta Freeweight Special Super Lat Pulldown Circular (1FW101)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-lat-pulldown-circular-1-221011.jpg" },
    { name: "Panatta Freeweight HP Lat Pulldown Machine Convergent (1HP501)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-lat-pulldown-machine-convergent-1h-d47b81.jpg" },
  ],
  "시티드 로우|Panatta": [
    { name: "Panatta Fit Evo Pulley Row (1FE003)", category: "Pin", src: "/machines/x-panatta-fit-evo-pulley-row-1fe003-8c3661.jpg" },
    { name: "Panatta Fit Evo Rowing Machine Circular (1FE004A)", category: "Pin", src: "/machines/x-panatta-fit-evo-rowing-machine-circular-1fe004a-5ef45d.jpg" },
    { name: "Panatta Monolith Pulley Row (1MTH003)", category: "Pin", src: "/machines/x-panatta-monolith-pulley-row-1mth003-500944.jpg" },
    { name: "Panatta Monolith Rowing Machine Circular (1MTH004A)", category: "Pin", src: "/machines/x-panatta-monolith-rowing-machine-circular-1mth004a-d6781c.jpg" },
    { name: "Panatta Sec1 Pulley Row (1SC003)", category: "Pin", src: "/machines/x-panatta-sec1-pulley-row-1sc003-c7363a.jpg" },
    { name: "Panatta Sec1 Rowing Machine (1SC004)", category: "Pin", src: "/machines/x-panatta-sec1-rowing-machine-1sc004-96364d.jpg" },
    { name: "Panatta Freeweight One Rowing Machine (1FO004)", category: "Plate", src: "/machines/x-panatta-freeweight-one-rowing-machine-1fo004-16c960.jpg" },
    { name: "Panatta Freeweight Special Super Rowing Circular (1FW204)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-rowing-circular-1fw204-5ccd0c.jpg" },
    { name: "Panatta Freeweight One Power Row (1FO102)", category: "Plate", src: "/machines/x-panatta-freeweight-one-power-row-1fo102-a81eb6.jpg" },
    { name: "Panatta Freeweight One Dorsy Bar (1FO005)", category: "Plate", src: "/machines/x-panatta-freeweight-one-dorsy-bar-1fo005-323dec.jpg" },
    { name: "Panatta Freeweight HP Rowing Machine (1HP508)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-rowing-machine-1hp508-0031bf.jpg" },
    { name: "Panatta Freeweight HP Super Power Row (1HP502PRA)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-power-row-1hp502pra-fdd3fb.jpg" },
  ],
  "T바 로우|Panatta": [
    { name: "Panatta Freeweight Special T-Bar Row (1FW007)", category: "Plate", src: "/machines/x-panatta-freeweight-special-t-bar-row-1fw007-ca5d20.jpg" },
  ],
  "하이 로우|Panatta": [
    { name: "Panatta Fit Evo High Row Convergent (1FE006)", category: "Pin", src: "/machines/x-panatta-fit-evo-high-row-convergent-1fe006-ad666d.jpg" },
    { name: "Panatta Monolith High Row Convergent (1MTH006)", category: "Pin", src: "/machines/x-panatta-monolith-high-row-convergent-1mth006-380ab3.jpg" },
    { name: "Panatta Freeweight One High Row (1FO003)", category: "Plate", src: "/machines/x-panatta-freeweight-one-high-row-1fo003-287f65.jpg" },
    { name: "Panatta Freeweight Special Super High Row (1FW003)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-high-row-1fw003-ca0c96.jpg" },
    { name: "Panatta Freeweight HP High Row (1HP503)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-high-row-1hp503-535bd7.jpg" },
  ],
  "로우 로우|Panatta": [
    { name: "Panatta Freeweight One Low Row (1FO002)", category: "Plate", src: "/machines/x-panatta-freeweight-one-low-row-1fo002-cf4d39.jpg" },
    { name: "Panatta Freeweight Special Super Low Row (1FW002)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-low-row-1fw002-374391.jpg" },
    { name: "Panatta Freeweight HP Super Low Row (1HP502A)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-low-row-1hp502a-10e719.jpg" },
  ],
  "풀오버 머신|Panatta": [
    { name: "Panatta Fit Evo Pullover Machine (1FE039)", category: "Pin", src: "/machines/x-panatta-fit-evo-pullover-machine-1fe039-ed5c76.jpg" },
    { name: "Panatta Monolith Pullover Machine (1MTH039)", category: "Pin", src: "/machines/x-panatta-monolith-pullover-machine-1mth039-04ebd9.jpg" },
    { name: "Panatta Freeweight One Pullover Machine (1FO039)", category: "Plate", src: "/machines/x-panatta-freeweight-one-pullover-machine-1fo039-b451af.jpg" },
    { name: "Panatta Freeweight Special Super Pullover Machine (1FW039)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-pullover-machine-1fw039-2a5c9d.jpg" },
  ],
  "백 익스텐션 머신|Panatta": [
    { name: "Panatta Fit Evo Lower Back (1FE005)", category: "Pin", src: "/machines/x-panatta-fit-evo-lower-back-1fe005-24a1b5.jpg" },
    { name: "Panatta Monolith Lower Back (1MTH005)", category: "Pin", src: "/machines/x-panatta-monolith-lower-back-1mth005-47e348.jpg" },
    { name: "Panatta Sec1 Lower Back (1SC005)", category: "Pin", src: "/machines/x-panatta-sec1-lower-back-1sc005-4640f2.jpg" },
    { name: "Panatta Freeweight Special Reverse Hyperextension (1FW096)", category: "Plate", src: "/machines/x-panatta-freeweight-special-reverse-hyperextension-1fw096-4dba01.jpg" },
    { name: "Panatta Fit Evo Adjustable Back Extension (1FE200)", category: "Pin", src: "/machines/x-panatta-fit-evo-adjustable-back-extension-1fe200-a8e83f.jpg" },
  ],
  "숄더 프레스|Panatta": [
    { name: "Panatta Fit Evo Deltoid Press (1FE025)", category: "Pin", src: "/machines/x-panatta-fit-evo-deltoid-press-1fe025-275b95.jpg" },
    { name: "Panatta Freeweight One Deltoid Press (1FO025)", category: "Plate", src: "/machines/x-panatta-freeweight-one-deltoid-press-1fo025-fc0000.jpg" },
    { name: "Panatta Freeweight Special Super Deltoid Press (1FW025)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-deltoid-press-1fw025-2cfd79.jpg" },
    { name: "Panatta Freeweight HP Super Deltoid Press (1HP525)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-super-deltoid-press-1hp525-6c559c.jpg" },
  ],
  "이소 래터럴 숄더 프레스|Panatta": [
    { name: "Panatta Fit Evo Deltoid Press Circular (1FE024)", category: "Pin", src: "/machines/x-panatta-fit-evo-deltoid-press-circular-1fe024-786d9c.jpg" },
    { name: "Panatta Monolith Deltoid Press Circular (1MTH024)", category: "Pin", src: "/machines/x-panatta-monolith-deltoid-press-circular-1mth024-83ebc6.jpg" },
    { name: "Panatta Sec1 Deltoid Press Convergent (1SC024)", category: "Pin", src: "/machines/x-panatta-sec1-deltoid-press-convergent-1sc024-031be4.jpg" },
  ],
  "레터럴 레이즈|Panatta": [
    { name: "Panatta Fit Evo Lateral Deltoids (1FE026)", category: "Pin", src: "/machines/x-panatta-fit-evo-lateral-deltoids-1fe026-3be2ff.jpg" },
    { name: "Panatta Monolith Lateral Deltoids (1MTH026)", category: "Pin", src: "/machines/x-panatta-monolith-lateral-deltoids-1mth026-8c0252.jpg" },
    { name: "Panatta Freeweight Special Lateral Deltoids (1FW027)", category: "Plate", src: "/machines/x-panatta-freeweight-special-lateral-deltoids-1fw027-369d7f.jpg" },
  ],
  "리어 델트 머신|Panatta": [
    { name: "Panatta Monolith Peck Back (1MTH117)", category: "Pin", src: "/machines/x-panatta-monolith-peck-back-1mth117-6ee1c2.jpg" },
    { name: "Panatta Sec1 Peck Back (1SC117)", category: "Pin", src: "/machines/x-panatta-sec1-peck-back-1sc117-034a55.jpg" },
    { name: "Panatta Freeweight Special Super Peck Back (1FW117)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-peck-back-1fw117-7156fc.jpg" },
    { name: "Panatta Freeweight One Back Deltoids (1FO026)", category: "Plate", src: "/machines/x-panatta-freeweight-one-back-deltoids-1fo026-4a5c72.jpg" },
    { name: "Panatta Freeweight Special Back Deltoids (1FW026)", category: "Plate", src: "/machines/x-panatta-freeweight-special-back-deltoids-1fw026-815a4f.jpg" },
    { name: "Panatta Fit Evo Peck Back (1FE117)", category: "Pin", src: "/machines/x-panatta-fit-evo-peck-back-1fe117-6ee4f9.jpg" },
    { name: "Panatta Freeweight HP Back Deltoids (1HP526)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-back-deltoids-1hp526-45e5ec.jpg" },
  ],
  "숄더 슈러그 머신|Panatta": [
    { name: "Panatta Freeweight One Shrug Machine (1FO010)", category: "Plate", src: "/machines/x-panatta-freeweight-one-shrug-machine-1fo010-22c0d1.jpg" },
    { name: "Panatta Freeweight Special Super Shrug Machine (1FW010)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-shrug-machine-1fw010-a421be.jpg" },
  ],
  "레그 프레스|Panatta": [
    { name: "Panatta Monolith Horizontal Leg Press (1MTH085)", category: "Pin", src: "/machines/x-panatta-monolith-horizontal-leg-press-1mth085-2d63fe.jpg" },
    { name: "Panatta Sec1 Horizontal Leg Press (1SC085)", category: "Pin", src: "/machines/x-panatta-sec1-horizontal-leg-press-1sc085-180460.jpg" },
    { name: "Panatta Fantastic Leg Press 45 (1FT086)", category: "Pin", src: "/machines/x-panatta-fantastic-leg-press-45-1ft086-74a736.jpg" },
    { name: "Panatta Freeweight One Leg Press 45 (1FO086)", category: "Plate", src: "/machines/x-panatta-freeweight-one-leg-press-45-1fo086-5b3686.jpg" },
    { name: "Panatta Freeweight One Leg Press Bridge (1FO085)", category: "Plate", src: "/machines/x-panatta-freeweight-one-leg-press-bridge-1fo085-7243f9.jpg" },
    { name: "Panatta Freeweight Special Super Leg Press 45 Dual System (1FW090)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-leg-press-45-dual-syste-e16cfb.jpg" },
    { name: "Panatta Freeweight Special Super Horizontal Leg Press Dual System (1FW100)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-horizontal-leg-press-du-500a11.jpg" },
    { name: "Panatta Freeweight Special Super Vertical Leg Press (1FW093)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-vertical-leg-press-1fw0-339ca7.jpg" },
    { name: "Panatta Fit Evo Horizontal Leg Press (1FE085)", category: "Pin", src: "/machines/x-panatta-fit-evo-horizontal-leg-press-1fe085-4a2e06.jpg" },
    { name: "Panatta Fit Evo Dual System Horizontal Leg Press (1FE095)", category: "Pin", src: "/machines/x-panatta-fit-evo-dual-system-horizontal-leg-press-1fe095-dff28f.jpg" },
    { name: "Panatta Freeweight HP Leg Press 45 (1HP586)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-leg-press-45-1hp586-5b65ef.jpg" },
    { name: "Panatta Freeweight HP Leg Press Bridge (1HP583)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-leg-press-bridge-1hp583-ae188f.jpg" },
  ],
  "레그 익스텐션|Panatta": [
    { name: "Panatta Monolith Leg Extension (1MTH081)", category: "Pin", src: "/machines/x-panatta-monolith-leg-extension-1mth081-de59f5.jpg" },
    { name: "Panatta Sec1 Leg Extension (1SC081)", category: "Pin", src: "/machines/x-panatta-sec1-leg-extension-1sc081-7b232d.jpg" },
    { name: "Panatta Fantastic Leg Extension (1FT081)", category: "Pin", src: "/machines/x-panatta-fantastic-leg-extension-1ft081-fb0fb2.jpg" },
    { name: "Panatta Freeweight One Leg Extension (1FO181)", category: "Plate", src: "/machines/x-panatta-freeweight-one-leg-extension-1fo181-5e257f.jpg" },
    { name: "Panatta Freeweight Special Leg Extension (1FW181)", category: "Plate", src: "/machines/x-panatta-freeweight-special-leg-extension-1fw181-babe99.jpg" },
    { name: "Panatta Fit Evo Leg Extension (1FE081)", category: "Pin", src: "/machines/x-panatta-fit-evo-leg-extension-1fe081-2fb56b.jpg" },
    { name: "Panatta Freeweight HP Leg Extension (1HP581)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-leg-extension-1hp581-5ec98f.jpg" },
  ],
  "레그 컬|Panatta": [
    { name: "Panatta Fit Evo Leg Curling (1FE082)", category: "Pin", src: "/machines/x-panatta-fit-evo-leg-curling-1fe082-3fe029.jpg" },
    { name: "Panatta Monolith Leg Curling (1MTH082)", category: "Pin", src: "/machines/x-panatta-monolith-leg-curling-1mth082-22162f.jpg" },
    { name: "Panatta Monolith Seated Leg Curling (1MTH083)", category: "Pin", src: "/machines/x-panatta-monolith-seated-leg-curling-1mth083-3c2e99.jpg" },
    { name: "Panatta Sec1 Leg Curling (1SC082)", category: "Pin", src: "/machines/x-panatta-sec1-leg-curling-1sc082-a22e09.jpg" },
    { name: "Panatta Sec1 Seated Leg Curling (1SC083)", category: "Pin", src: "/machines/x-panatta-sec1-seated-leg-curling-1sc083-a097f4.jpg" },
    { name: "Panatta Freeweight One Seated Leg Curling (1FO183)", category: "Plate", src: "/machines/x-panatta-freeweight-one-seated-leg-curling-1fo183-127fb4.jpg" },
    { name: "Panatta Freeweight Special Seated Leg Curling (1FW183)", category: "Plate", src: "/machines/x-panatta-freeweight-special-seated-leg-curling-1fw183-9935ac.jpg" },
    { name: "Panatta Freeweight Special Leg Curling (1FW182)", category: "Plate", src: "/machines/x-panatta-freeweight-special-leg-curling-1fw182-6b0bca.jpg" },
    { name: "Panatta Freeweight One Kneeling Leg Curling (1FO094)", category: "Plate", src: "/machines/x-panatta-freeweight-one-kneeling-leg-curling-1fo094-20ca25.jpg" },
    { name: "Panatta Fit Evo Seated Leg Curling (1FE083)", category: "Pin", src: "/machines/x-panatta-fit-evo-seated-leg-curling-1fe083-75ad28.jpg" },
    { name: "Panatta Fit Evo Standing Leg Curling (1FE084)", category: "Pin", src: "/machines/x-panatta-fit-evo-standing-leg-curling-1fe084-321c43.jpg" },
    { name: "Panatta Freeweight HP Leg Curling (1HP582)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-leg-curling-1hp582-82a046.jpg" },
  ],
  "핵 스쿼트|Panatta": [
    { name: "Panatta Freeweight One Hack Squat (1FO087)", category: "Plate", src: "/machines/x-panatta-freeweight-one-hack-squat-1fo087-2f19aa.jpg" },
    { name: "Panatta Freeweight Special Super Hack Squat (1FW087)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-hack-squat-1fw087-2e667d.jpg" },
    { name: "Panatta Freeweight One Pendulum Squat (1FO080)", category: "Plate", src: "/machines/x-panatta-freeweight-one-pendulum-squat-1fo080-e52de3.jpg" },
    { name: "Panatta Freeweight Special Super Power Squat (1FW084)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-power-squat-1fw084-53fb6f.jpg" },
    { name: "Panatta Freeweight HP Hack Squat (1HP587)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-hack-squat-1hp587-ee4d8a.jpg" },
    { name: "Panatta Freeweight HP Power Squat (1HP584)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-power-squat-1hp584-6f7c64.jpg" },
  ],
  "힙 어브덕션|Panatta": [
    { name: "Panatta Monolith Abductor Machine (1MTH086)", category: "Pin", src: "/machines/x-panatta-monolith-abductor-machine-1mth086-039b65.jpg" },
    { name: "Panatta Sec1 Abductor Machine (1SC086)", category: "Pin", src: "/machines/x-panatta-sec1-abductor-machine-1sc086-899386.jpg" },
    { name: "Panatta Monolith Standing Abductor (1MTH096)", category: "Pin", src: "/machines/x-panatta-monolith-standing-abductor-1mth096-27fea3.jpg" },
    { name: "Panatta Sec1 Adductor/Abductor Machine (1SC093)", category: "Pin", src: "/machines/x-panatta-sec1-adductor-abductor-machine-1sc093-490aaf.jpg" },
    { name: "Panatta Freeweight Special 3D Abductor (1FW199)", category: "Plate", src: "/machines/x-panatta-freeweight-special-3d-abductor-1fw199-b1b1b8.jpg" },
    { name: "Panatta Fit Evo Abductor Machine (1FE086)", category: "Pin", src: "/machines/x-panatta-fit-evo-abductor-machine-1fe086-950c4d.jpg" },
    { name: "Panatta Fit Evo Standing Abductor Machine (1FE096)", category: "Pin", src: "/machines/x-panatta-fit-evo-standing-abductor-machine-1fe096-db5530.jpg" },
    { name: "Panatta Fit Evo Adductor/Abductor Machine (1FE093)", category: "Pin", src: "/machines/x-panatta-fit-evo-adductor-abductor-machine-1fe093-1ec438.jpg" },
  ],
  "힙 어덕션|Panatta": [
    { name: "Panatta Monolith Adductor Machine (1MTH087)", category: "Pin", src: "/machines/x-panatta-monolith-adductor-machine-1mth087-dd9033.jpg" },
    { name: "Panatta Sec1 Adductor Machine (1SC087)", category: "Pin", src: "/machines/x-panatta-sec1-adductor-machine-1sc087-6de2bf.jpg" },
    { name: "Panatta Fit Evo Adductor Machine (1FE087)", category: "Pin", src: "/machines/x-panatta-fit-evo-adductor-machine-1fe087-aa47a5.jpg" },
  ],
  "스탠딩 카프 레이즈|Panatta": [
    { name: "Panatta Sec1 Calf Machine (1SC089)", category: "Pin", src: "/machines/x-panatta-sec1-calf-machine-1sc089-c6b9ca.jpg" },
    { name: "Panatta Monolith Calf Hack Machine (1MTH092)", category: "Pin", src: "/machines/x-panatta-monolith-calf-hack-machine-1mth092-024e1b.jpg" },
    { name: "Panatta Freeweight Special Super Calf Hack (1FW092)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-calf-hack-1fw092-55994e.jpg" },
    { name: "Panatta Freeweight Special Donkey Calf (1FW089)", category: "Plate", src: "/machines/x-panatta-freeweight-special-donkey-calf-1fw089-b988dc.jpg" },
    { name: "Panatta Fit Evo Calf Machine (1FE089)", category: "Pin", src: "/machines/x-panatta-fit-evo-calf-machine-1fe089-a51fbd.jpg" },
    { name: "Panatta Freeweight HP Calf Hack Machine (1HP592)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-calf-hack-machine-1hp592-699459.jpg" },
  ],
  "시티드 카프 레이즈|Panatta": [
    { name: "Panatta Freeweight One Seated Calf (1FO088)", category: "Plate", src: "/machines/x-panatta-freeweight-one-seated-calf-1fo088-e75929.jpg" },
    { name: "Panatta Freeweight Special Super Seated Calf (1FW088)", category: "Plate", src: "/machines/x-panatta-freeweight-special-super-seated-calf-1fw088-0e1311.jpg" },
    { name: "Panatta Freeweight HP Seated Calf (1HP588)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-seated-calf-1hp588-a568b6.jpg" },
  ],
  "글루트 머신|Panatta": [
    { name: "Panatta Monolith Gluteus Machine (1MTH088)", category: "Pin", src: "/machines/x-panatta-monolith-gluteus-machine-1mth088-887891.jpg" },
    { name: "Panatta Monolith Master Gluteus Plus (1MTH094A)", category: "Pin", src: "/machines/x-panatta-monolith-master-gluteus-plus-1mth094a-09ae70.jpg" },
    { name: "Panatta Monolith Multi Hip (1MTH090)", category: "Pin", src: "/machines/x-panatta-monolith-multi-hip-1mth090-189584.jpg" },
    { name: "Panatta Sec1 Multi Hip (1SC090)", category: "Pin", src: "/machines/x-panatta-sec1-multi-hip-1sc090-e474ef.jpg" },
    { name: "Panatta Freeweight Special Power Runner (1FW098)", category: "Plate", src: "/machines/x-panatta-freeweight-special-power-runner-1fw098-042c3a.jpg" },
    { name: "Panatta Fit Evo Gluteus Machine (1FE088)", category: "Pin", src: "/machines/x-panatta-fit-evo-gluteus-machine-1fe088-9a97ef.jpg" },
    { name: "Panatta Fit Evo Master Gluteus Plus (1FE094A)", category: "Pin", src: "/machines/x-panatta-fit-evo-master-gluteus-plus-1fe094a-b50236.jpg" },
    { name: "Panatta Fit Evo Multi Hip (1FE090)", category: "Pin", src: "/machines/x-panatta-fit-evo-multi-hip-1fe090-5a3b24.jpg" },
    { name: "Panatta Fit Evo Power Runner (1FE098)", category: "Pin", src: "/machines/x-panatta-fit-evo-power-runner-1fe098-e78e07.jpg" },
  ],
  "힙 쓰러스트 머신|Panatta": [
    { name: "Panatta Monolith Hip Thrust (1MTH097)", category: "Pin", src: "/machines/x-panatta-monolith-hip-thrust-1mth097-50d1f7.jpg" },
    { name: "Panatta Freeweight One Hip Thrust (1FO097)", category: "Plate", src: "/machines/x-panatta-freeweight-one-hip-thrust-1fo097-2d8274.jpg" },
    { name: "Panatta Freeweight Special Hip Thrust (1FW097)", category: "Plate", src: "/machines/x-panatta-freeweight-special-hip-thrust-1fw097-0439be.jpg" },
    { name: "Panatta Freeweight One Standing Hip Thrust (1FO197)", category: "Plate", src: "/machines/x-panatta-freeweight-one-standing-hip-thrust-1fo197-fdab80.jpg" },
    { name: "Panatta Fit Evo Hip Thrust (1FE097)", category: "Pin", src: "/machines/x-panatta-fit-evo-hip-thrust-1fe097-2cd669.jpg" },
  ],
  "바이셉 컬|Panatta": [
    { name: "Panatta Monolith Alternate Arm Curl (1MTH056)", category: "Pin", src: "/machines/x-panatta-monolith-alternate-arm-curl-1mth056-7bfb34.jpg" },
    { name: "Panatta Monolith Curling Machine (1MTH051)", category: "Pin", src: "/machines/x-panatta-monolith-curling-machine-1mth051-e6b61a.jpg" },
    { name: "Panatta Sec1 Curling Machine (1SC051)", category: "Pin", src: "/machines/x-panatta-sec1-curling-machine-1sc051-ad78be.jpg" },
    { name: "Panatta Fantastic Biceps Machine (1FT051)", category: "Pin", src: "/machines/x-panatta-fantastic-biceps-machine-1ft051-821fe9.jpg" },
    { name: "Panatta Freeweight One Curling Machine (1FO151)", category: "Plate", src: "/machines/x-panatta-freeweight-one-curling-machine-1fo151-94a710.jpg" },
    { name: "Panatta Freeweight Special Curling Machine (1FW351)", category: "Plate", src: "/machines/x-panatta-freeweight-special-curling-machine-1fw351-a2629b.jpg" },
    { name: "Panatta Freeweight Special Alternate Curling Machine (1FW251)", category: "Plate", src: "/machines/x-panatta-freeweight-special-alternate-curling-machine-1fw-e4b13c.jpg" },
    { name: "Panatta Freeweight Special Three Angles Biceps Machine (1FW451)", category: "Plate", src: "/machines/x-panatta-freeweight-special-three-angles-biceps-machine-1-15eb59.jpg" },
    { name: "Panatta Fit Evo Curling Machine (1FE051)", category: "Pin", src: "/machines/x-panatta-fit-evo-curling-machine-1fe051-ce503c.jpg" },
    { name: "Panatta Fit Evo Alternate Arm Curl (1FE056)", category: "Pin", src: "/machines/x-panatta-fit-evo-alternate-arm-curl-1fe056-ae3cbf.jpg" },
    { name: "Panatta Fit Evo Alternate Arm Curl 120 (1FE356)", category: "Pin", src: "/machines/x-panatta-fit-evo-alternate-arm-curl-120-1fe356-9a9084.jpg" },
    { name: "Panatta Freeweight HP Alternate Curling Machine (1HP551)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-alternate-curling-machine-1hp551-113b40.jpg" },
  ],
  "트라이셉스 익스텐션|Panatta": [
    { name: "Panatta Fit Evo Triceps Machine (1FE053)", category: "Pin", src: "/machines/x-panatta-fit-evo-triceps-machine-1fe053-175110.jpg" },
    { name: "Panatta Monolith Triceps Machine (1MTH053)", category: "Pin", src: "/machines/x-panatta-monolith-triceps-machine-1mth053-a97f62.jpg" },
    { name: "Panatta Sec1 Triceps Machine (1SC053)", category: "Pin", src: "/machines/x-panatta-sec1-triceps-machine-1sc053-d90355.jpg" },
    { name: "Panatta Monolith Alternate Arm Extension (1MTH057)", category: "Pin", src: "/machines/x-panatta-monolith-alternate-arm-extension-1mth057-a0bf37.jpg" },
    { name: "Panatta Monolith French Press Machine (1MTH153)", category: "Pin", src: "/machines/x-panatta-monolith-french-press-machine-1mth153-e113ac.jpg" },
    { name: "Panatta Freeweight One French Press Machine (1FO053)", category: "Plate", src: "/machines/x-panatta-freeweight-one-french-press-machine-1fo053-6b6642.jpg" },
    { name: "Panatta Freeweight Special Triceps Machine (1FW352)", category: "Plate", src: "/machines/x-panatta-freeweight-special-triceps-machine-1fw352-1f24bf.jpg" },
    { name: "Panatta Freeweight Special Alternate Triceps Machine (1FW252)", category: "Plate", src: "/machines/x-panatta-freeweight-special-alternate-triceps-machine-1fw-16c0da.jpg" },
    { name: "Panatta Fit Evo Alternate Arm Extension (1FE057)", category: "Pin", src: "/machines/x-panatta-fit-evo-alternate-arm-extension-1fe057-fc004b.jpg" },
    { name: "Panatta Fit Evo French Press Machine (1FE153)", category: "Pin", src: "/machines/x-panatta-fit-evo-french-press-machine-1fe153-be02ec.jpg" },
    { name: "Panatta Freeweight HP Alternate Triceps Machine (1HP552)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-alternate-triceps-machine-1hp552-db4f11.jpg" },
  ],
  "프리처 컬 머신|Panatta": [
    { name: "Panatta Freeweight Special Alternate Preacher Curl Machine (1FW054)", category: "Plate", src: "/machines/x-panatta-freeweight-special-alternate-preacher-curl-machi-51b615.jpg" },
    { name: "Panatta Freeweight Special Preacher Curl Bench (1FW512)", category: "Plate", src: "/machines/x-panatta-freeweight-special-preacher-curl-bench-1fw512-f8e4f7.jpg" },
    { name: "Panatta Fit Evo Alternate Preacher Curl Machine (1FE052)", category: "Pin", src: "/machines/x-panatta-fit-evo-alternate-preacher-curl-machine-1fe052-d97271.jpg" },
  ],
  "트라이셉스 딥 머신|Panatta": [
    { name: "Panatta Monolith Dips Press (1MTH138)", category: "Pin", src: "/machines/x-panatta-monolith-dips-press-1mth138-5ab5f7.jpg" },
    { name: "Panatta Freeweight One Dips Press (1FO140)", category: "Plate", src: "/machines/x-panatta-freeweight-one-dips-press-1fo140-ee0167.jpg" },
    { name: "Panatta Freeweight Special Dips Press (1FW140)", category: "Plate", src: "/machines/x-panatta-freeweight-special-dips-press-1fw140-7b0f00.jpg" },
    { name: "Panatta Fit Evo Dips Press (1FE038)", category: "Pin", src: "/machines/x-panatta-fit-evo-dips-press-1fe038-1f5e97.jpg" },
    { name: "Panatta Freeweight HP Dips Press Dual System (1HP540)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-dips-press-dual-system-1hp540-2bd1d3.jpg" },
  ],
  "어브도미널 크런치 머신|Panatta": [
    { name: "Panatta Monolith Abdominal Crunch (1MTH067)", category: "Pin", src: "/machines/x-panatta-monolith-abdominal-crunch-1mth067-33aa38.jpg" },
    { name: "Panatta Sec1 Upper Abdominal Machine (1SC065)", category: "Pin", src: "/machines/x-panatta-sec1-upper-abdominal-machine-1sc065-c783bb.jpg" },
    { name: "Panatta Fit Evo Abdominal Crunch (1FE067)", category: "Pin", src: "/machines/x-panatta-fit-evo-abdominal-crunch-1fe067-4dc6f9.jpg" },
    { name: "Panatta Fit Evo Upper Abdominal (1FE065)", category: "Pin", src: "/machines/x-panatta-fit-evo-upper-abdominal-1fe065-e57575.jpg" },
    { name: "Panatta Freeweight HP Abdominal Crunch (1HP565)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-abdominal-crunch-1hp565-ec317b.jpg" },
  ],
  "어시스티드 풀업/딥|Panatta": [
    { name: "Panatta Fit Evo Chin and Dip Counterbalanced/Assist (1FE121)", category: "Pin", src: "/machines/x-panatta-fit-evo-chin-and-dip-counterbalanced-assist-1fe1-c2c1a6.jpg" },
  ],
  "토르소 로테이션 머신|Panatta": [
    { name: "Panatta Fit Evo Torsion Machine (1FE066)", category: "Pin", src: "/machines/x-panatta-fit-evo-torsion-machine-1fe066-9f6fdd.jpg" },
    { name: "Panatta Freeweight HP Combo Twist (1HP506)", category: "Plate", src: "/machines/x-panatta-freeweight-hp-combo-twist-1hp506-229b62.jpg" },
  ],
};
