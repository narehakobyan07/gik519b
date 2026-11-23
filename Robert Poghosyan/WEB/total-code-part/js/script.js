"use strict";

// 1. Կայքի անվանումը և տարբերակը

const siteName = "Հայաստան Տուր";
const variant = "N3";

console.log("Կայքի անվանումը:", siteName);
console.log("Տարբերակը:", variant);


// 2. Տուրերի տևողությունները՝ օրերով

const tourDurations = [1, 1, 2, 1, 2, 2];

console.log("Տուրերի տևողությունները:", tourDurations);


// 3. Օգտվողից ստանում ենք շեմային արժեքը

const userInput = prompt(
    "Մուտքագրեք տուրի տևողության շեմը օրերով:"
);


// 4. Ստուգում ենք մուտքագրված արժեքը

if (userInput === null) {

    console.log("Օգտվողը չեղարկել է մուտքագրումը։");

} else if (userInput.trim() === "") {

    console.log("Սխալ․ մուտքագրված արժեքը դատարկ է։");

} else {

    const threshold = Number(userInput);

    if (!Number.isFinite(threshold)) {

        console.log("Սխալ․ անհրաժեշտ է մուտքագրել թիվ։");

    } else if (threshold < 0) {

        console.log("Սխալ․ տևողությունը չի կարող բացասական լինել։");

    } else {

        // 5. Համեմատում ենք առաջին տուրի տևողությունը շեմի հետ

        if (tourDurations[0] > threshold) {

            console.log(
                "Առաջին տուրի տևողությունը մեծ է մուտքագրված շեմից։"
            );

        } else if (tourDurations[0] < threshold) {

            console.log(
                "Առաջին տուրի տևողությունը փոքր է մուտքագրված շեմից։"
            );

        } else {

            console.log(
                "Առաջին տուրի տևողությունը հավասար է մուտքագրված շեմին։"
            );

        }

        // 6. Հաշվարկների նախապատրաստում

        let sum = 0;
        let maxDuration = tourDurations[0];
        let countAboveThreshold = 0;

        console.log("Տուրերի տևողությունները՝ առանձին:");
        
        // 7. for ցիկլ՝ բոլոր արժեքների մշակման համար

        for (let i = 0; i < tourDurations.length; i++) {

            const duration = tourDurations[i];

            sum += duration;

            if (duration > maxDuration) {
                maxDuration = duration;
            }

            if (duration > threshold) {
                countAboveThreshold++;
            }

            console.log(
                "Տուր",
                i + 1,
                "—",
                duration,
                "օր"
            );

        }


        // 8. for...of ցիկլ՝ արժեքները տպելու համար

        console.log("for...of ցիկլի արդյունքները:");

        for (const duration of tourDurations) {

            console.log("Տևողություն:", duration, "օր");

        }


        // 9. Ստուգում ենք՝ արդյոք բոլոր արժեքները հավասար են

        let allEqual = true;

        for (let i = 1; i < tourDurations.length; i++) {

            if (tourDurations[i] !== tourDurations[0]) {

                allEqual = false;
                break;

            }

        }

        if (allEqual) {

            console.log("Բոլոր տուրերի տևողությունները հավասար են։");

        } else {

            console.log("Տուրերի տևողությունները հավասար չեն։");

        }


        // 10. Ստուգում ենք՝ կա՞ արդյոք շեմից մեծ արժեք

        let noMatchingValues = true;

        for (const duration of tourDurations) {

            if (duration > threshold) {

                noMatchingValues = false;
                break;

            }

        }

        if (noMatchingValues) {

            console.log(
                "Շեմից մեծ տևողությամբ տուրեր չկան։"
            );

        } else {

            console.log(
                "Կան շեմից մեծ տևողությամբ տուրեր։"
            );

        }


        // 11. Վերջնական արդյունքներ

        console.log("========== ՀԱՇՎԱՐԿՆԵՐ ==========");

        console.log("Տուրերի ընդհանուր քանակը:", tourDurations.length);

        console.log("Տևողությունների գումարը:", sum, "օր");

        console.log("Առավելագույն տևողությունը:", maxDuration, "օր");

        console.log(
            "Շեմից մեծ տևողությամբ տուրերի քանակը:",
            countAboveThreshold
        );

        console.log("Մուտքագրված շեմը:", threshold, "օր");

        console.log("===============================");

    }

}
