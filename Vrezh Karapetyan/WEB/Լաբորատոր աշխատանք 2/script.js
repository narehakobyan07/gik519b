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
// =====================================================
// Երաժշտական դպրոց «Մելոդիա»
// Ֆունկցիաներ, օբյեկտներ, զանգվածներ և JSON
// =====================================================

// 1. Տվյալներ. երաժշտական դասեր (id-ները եզակի են)
//    category՝ գործիք, value՝ տևողություն (րոպե)
const items = [

  
  {

    id: 1,
    title: "Դաշնամուրի դաս",
    description: "Հիմնական հնչյուններ և պարզ մեղեդիներ սկսնակների համար։",
    image: "images/piano.jpg",
    alt: "Դաշնամուր",
    category: "Դաշնամուր",
    value: 45,
    isNew: true
  },
  {
    id: 2,
    title: "Կիթառի դաս",
    description: "Ակորդներ և ուղեկցություն երգին։",
    image: "images/guitar.jpg",
    alt: "Ակուստիկ կիթառ",
    category: "Կիթառ",
    value: 60,
    isNew: false
  },
  {
    id: 3,
    title: "Ջութակի դաս",
    description: "Աղեղի տեխնիկա և ինտոնացիա։",
    image: "images/violin.jpg",
    alt: "Ջութակ",
    category: "Ջութակ",
    value: 50,
    isNew: false
  },
  {
    id: 4,
    title: "Դհոլի դաս",
    description: "Ռիթմի զգացողություն և ավանդական հարվածներ։",
    image: "images/dhol.jpg",
    alt: "Դհոլ",
    category: "Հարվածային",
    value: 30,
    isNew: true
  },
  {
    id: 5,
    title: "Դուդուկի դաս",
    description: "Շնչառություն և ազգային մեղեդիների կատարում։",
    image: "images/duduk.jpg",
    alt: "Դուդուկ",
    category: "Փողային",
    value: 40,
    isNew: false
  },
  {
    id: 6,
    title: "Վոկալի դաս",
    description: "Ձայնի դրվածք, շնչառություն և արտահայտչականություն։",
    image: "images/vocal.jpg",
    alt: "Խոսափող",
    category: "Վոկալ",
    value: 45,
    isNew: true
  }
];

// 2. Սովորական function հայտարարություն. value դաշտերի գումար
function sumValues(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].value;
  }
  return sum;               // դատարկ զանգվածի համար՝ 0
}

// 3. Սլաքային ֆունկցիա. միջին արժեք
const averageValue = (list) =>
  list.length === 0 ? 0 : sumValues(list) / list.length;

// 4. map և filter (items-ը չի փոխվում)
const getTitles = (list) => list.map((item) => item.title);
const filterAbove = (list, threshold) =>
  list.filter((item) => item.value > threshold);

// 5. find. որոնում ըստ id-ի (չգտնելու դեպքում՝ undefined)
const findById = (list, id) => list.find((item) => item.id === id);

// Ցուցադրում է գտնված օբյեկտը կամ հաղորդագրություն՝ ստուգելով նախքան դաշտերին դիմելը
function showLesson(id) {
  const lesson = findById(items, id);
  if (lesson === undefined) {
    console.log(`id = ${id}. դաս չի գտնվել`);
    return;
  }
  console.log(`id = ${id}. ${lesson.title}, ${lesson.value} րոպե`);
}

// 6. JSON. stringify և parse
function jsonDemo() {
  const jsonText = JSON.stringify(items);
  const restored = JSON.parse(jsonText);

  console.log("items-ի տիպը:", typeof items, "| Array.isArray:", Array.isArray(items));
  console.log("jsonText-ի տիպը:", typeof jsonText);
  console.log("restored-ի տիպը:", typeof restored, "| Array.isArray:", Array.isArray(restored));
  console.log("JSON տողի սկիզբը:", jsonText.slice(0, 80) + "...");

  // Համեմատում ենք դաշտերով (օբյեկտները տարբեր հղումներ են, ուստի === չի օգտագործվում)
  let same = restored.length === items.length;
  for (let i = 0; i < items.length && same; i++) {
    if (
      restored[i].id !== items[i].id ||
      restored[i].title !== items[i].title ||
      restored[i].value !== items[i].value ||
      restored[i].isNew !== items[i].isNew
    ) {
      same = false;
    }
  }
  console.log("Վերականգնված տվյալները համընկնում են:", same);
  console.log("restored[0] === items[0]:", restored[0] === items[0], "(տարբեր օբյեկտներ)");
}


function demoBasics() {
  const input = prompt("Մուտքագրեք շեմը (րոպե):");
  if (input === null) {
    console.log("Չեղարկվեց (Cancel)");
    return;
  }
  if (input.trim() === "" || isNaN(Number(input))) {
    console.log("Սխալ մուտք. պետք է թիվ լինի");
    return;
  }
  const threshold = Number(input);
  const above = filterAbove(items, threshold);
  console.log(`Շեմ: ${threshold}`);
  console.log(`Գումար: ${sumValues(items)}`);
  console.log(`Առավելագույն: ${Math.max(...items.map((i) => i.value))}`);
  console.log(`Շեմից մեծ դասերի քանակ: ${above.length}`);
}

// ---------------- Փորձարկումներ (console) ----------------
function runTests() {
  console.log("=== Գումար և միջին ===");
  console.log("Գումար:", sumValues(items));                 // 270
  console.log("Միջին:", averageValue(items));               // 45
  console.log("Դատարկ զանգված, գումար:", sumValues([]));    // 0
  console.log("Դատարկ զանգված, միջին:", averageValue([]));  // 0

  console.log("=== map ===");
  console.log(getTitles(items));
  console.log("Դատարկ:", getTitles([]));

  console.log("=== filter (շեմ 40) ===");
  console.log(filterAbove(items, 40).map((i) => i.title));
  console.log("Շեմ 100:", filterAbove(items, 100));         // []

  console.log("=== find ===");
  showLesson(3);      // գտնվում է
  showLesson(99);     // չի գտնվում
  console.log("findById([], 1):", findById([], 1));        // undefined

  console.log("=== JSON ===");
  jsonDemo();

  console.log("items-ի երկարությունը (չի փոխվել):", items.length);
}

runTests();

// Կոճակ ցուցադրման համար (եթե էջում կա id="demoBtn")
const demoBtn = document.getElementById("demoBtn");
if (demoBtn) {
  demoBtn.addEventListener("click", demoBasics);
}