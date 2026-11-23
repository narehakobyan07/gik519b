// 1. Կայքի անուն և տարբերակ
const siteName = "Երաժշտական դպրոց «Մելոդիա»";
const version = "1.0";
console.log(`Կայք՝ ${siteName}, տարբերակ՝ ${version}`);

// 2. Տևողությունները՝ րոպեներով (index.html-ի 6 դասերի քարտերը՝
// դաշնամուր, կիթառ, ջութակ, վոկալ, ֆլեյտա, թմբուկ)
const durations = [60, 45, 60, 50, 45, 45];

// 3. Շեմային արժեքի ստացում և ստուգում
const rawInput = prompt("Մուտքագրեք շեմային տևողությունը (րոպե):");
let threshold = null; // մնում է null, եթե մուտքը անվավեր է
let errorMessage = "";

if (rawInput === null) {
  errorMessage = "Մուտքը չեղարկվել է (Cancel):";
} else if (rawInput === "") {
  errorMessage = "Դատարկ մուտք. մուտքագրեք թիվ:";
} else if (rawInput.trim() === "") {
  errorMessage = "Մուտքը պարունակում է միայն բացատներ:";
} else {
  const value = Number(rawInput.trim());
  if (!Number.isFinite(value)) {
    errorMessage = "Մուտքը թիվ չէ:";
  } else if (value < 0) {
    errorMessage = "Շեմը չի կարող բացասական լինել:";
  } else {
    threshold = value;
  }
}

if (threshold === null) {
  console.log("Անվավեր մուտք. " + errorMessage + " Հաշվարկը չի կատարվել:");
} else {
  console.log(`Շեմ՝ ${threshold} րոպե`);

  // 4. Առաջին քարտի համեմատումը շեմի հետ
  const first = durations[0];
  if (first > threshold) {
    console.log(`Քարտ 1-ի տևողությունը (${first} ր) մեծ է շեմից:`);
  } else if (first === threshold) {
    console.log(`Քարտ 1-ի տևողությունը (${first} ր) հավասար է շեմին:`);
  } else {
    console.log(`Քարտ 1-ի տևողությունը (${first} ր) փոքր է շեմից:`);
  }

  // 5. Գումար, առավելագույն, շեմից մեծերի քանակ
  let total = 0;
  let max = durations[0];
  let countAbove = 0;
  for (const d of durations) {
    total += d;
    if (d > max) {
      max = d;
    }
    if (d > threshold) {
      countAbove++;
    }
  }
  console.log(`Գումարը՝ ${total} ր`);
  console.log(`Առավելագույնը՝ ${max} ր`);
  console.log(`Շեմից մեծ արժեքների քանակը՝ ${countAbove}`);

  // 6. Յուրաքանչյուր քարտի արտածում
  for (let i = 0; i < durations.length; i++) {
    console.log(`Քարտ ${i + 1}՝ ${durations[i]} ր`);
  }

  // Հատուկ դեպքեր
  let allEqual = true;
  for (const d of durations) {
    if (d !== durations[0]) {
      allEqual = false;
    }
  }
  if (allEqual) {
    console.log("Բոլոր արժեքները հավասար են:");
  }
  if (countAbove === 0) {
    console.log("Շեմից մեծ արժեք չկա:");
  }
}