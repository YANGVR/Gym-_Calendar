-- 같은 브랜드의 같은 종목에 머신이 여러 개일 수 있어서, 기록에 머신 모델 이름을 더한다.
-- 프리웨이트 기록은 모델이 없어서 빈 문자열이다.
alter table public.workouts add column model text not null default '';

-- 모델이 생기기 전에 남긴 머신 기록은 그때 보여 주던 머신(종목·브랜드마다 첫 모델)의 기록이다.
update public.workouts set model = 'Select Lat Pulldown' where exercise = '렛풀다운' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Pulldown' where exercise = '렛풀다운' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Selection 900 Lat Machine' where exercise = '렛풀다운' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Prestige VRS Pulldown' where exercise = '렛풀다운' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Pure Kraft Lat Pulldown Dual' where exercise = '렛풀다운' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Hybrid Lat Pulldown' where exercise = '렛풀다운' and brand = 'Prime' and model = '';
update public.workouts set model = 'Impact Lat Pull Down' where exercise = '렛풀다운' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Prestige VRS Chest Press' where exercise = '체스트 프레스' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Pure Kraft Seated Chest Press' where exercise = '체스트 프레스' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Select Chest Press' where exercise = '체스트 프레스' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Chest Press' where exercise = '체스트 프레스' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Selection Chest Press' where exercise = '체스트 프레스' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Pure Kraft Incline Chest Press' where exercise = '인클라인 프레스' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Eagle Incline Press' where exercise = '인클라인 프레스' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Iso-Lateral Incline Press' where exercise = '인클라인 프레스' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Pectoral Fly / Rear Deltoid' where exercise = '펙덱 플라이' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Impact Pec Fly / Rear Deltoid' where exercise = '펙덱 플라이' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Hybrid Pec Fly' where exercise = '펙덱 플라이' and brand = 'Prime' and model = '';
update public.workouts set model = 'Selection Pectoral' where exercise = '펙덱 플라이' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Prestige VRS Row' where exercise = '시티드 로우' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Select Seated Row' where exercise = '시티드 로우' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Row' where exercise = '시티드 로우' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Impact Low Row' where exercise = '시티드 로우' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Selection 900 Low Row' where exercise = '시티드 로우' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Pure Kraft T-Bar Row' where exercise = 'T바 로우' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Plate-Loaded T-Bar Row' where exercise = 'T바 로우' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Pure Kraft Shoulder Lateral Raise Dual' where exercise = '레터럴 레이즈' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Insignia Series Lateral Raise' where exercise = '레터럴 레이즈' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Inspiration Deltoid Raise' where exercise = '레터럴 레이즈' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Prestige VRS Overhead Press' where exercise = '숄더 프레스' and brand = 'Cybex' and model = '';
update public.workouts set model = 'MTS Iso-Lateral Shoulder Press' where exercise = '숄더 프레스' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Shoulder Press' where exercise = '숄더 프레스' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Plate-Loaded Shoulder Press' where exercise = '숄더 프레스' and brand = 'Prime' and model = '';
update public.workouts set model = 'Selection Pro Shoulder Press' where exercise = '숄더 프레스' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Ion Series Leg Curl' where exercise = '레그 컬' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Insignia Series Seated Leg Curl' where exercise = '레그 컬' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Evolution Seated Leg Curl' where exercise = '레그 컬' and brand = 'Prime' and model = '';
update public.workouts set model = 'Selection Seated Leg Curl' where exercise = '레그 컬' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Ion Series Leg Extension' where exercise = '레그 익스텐션' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Insignia Series Leg Extension' where exercise = '레그 익스텐션' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Instinct Leg Extension' where exercise = '레그 익스텐션' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Selection Leg Extension' where exercise = '레그 익스텐션' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Pure Kraft 45° Linear Leg Press' where exercise = '레그 프레스' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Plate-Loaded Linear Leg Press' where exercise = '레그 프레스' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Leg Press' where exercise = '레그 프레스' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Plate-Loaded Leg Press' where exercise = '레그 프레스' and brand = 'Prime' and model = '';
update public.workouts set model = 'Selection Leg Press' where exercise = '레그 프레스' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Prestige VRS Arm Curl' where exercise = '바이셉 컬' and brand = 'Cybex' and model = '';
update public.workouts set model = 'Insignia Series Biceps Curl' where exercise = '바이셉 컬' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Impact Biceps Curl' where exercise = '바이셉 컬' and brand = 'Nautilus' and model = '';
update public.workouts set model = 'Selection Arm Curl' where exercise = '바이셉 컬' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Pure Kraft Triceps Machine' where exercise = '트라이셉스 익스텐션' and brand = 'Gym80' and model = '';
update public.workouts set model = 'Select Triceps Extension' where exercise = '트라이셉스 익스텐션' and brand = 'Hammer Strength' and model = '';
update public.workouts set model = 'Insignia Series Triceps Extension' where exercise = '트라이셉스 익스텐션' and brand = 'Life Fitness' and model = '';
update public.workouts set model = 'Selection Lateral Raise' where exercise = '레터럴 레이즈' and brand = 'Technogym' and model = '';
update public.workouts set model = 'Plate-Loaded T-Bar Row' where exercise = 'T바 로우' and brand = 'Prime' and model = '';

alter table public.workouts drop constraint workouts_one_per_day;
alter table public.workouts
  add constraint workouts_one_per_day unique (user_id, date, exercise, brand, model);
