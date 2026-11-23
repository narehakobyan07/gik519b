(function () {
    "use strict";

    const items = [
        { id: 1, title: "Կանաչ Երևան 2025", category: "Էկոլոգիա", value: 3, location: "Երևան" },
        { id: 2, title: "Կրթական կամուրջ", category: "Կրթություն", value: 5, location: "Գորիս" },
        { id: 3, title: "Հոգատար ձեռք", category: "Սոցիալական", value: 4, location: "Երևան" },
        { id: 4, title: "Արյան կաթիլ", category: "Առողջություն", value: 2, location: "Երևան" },
        { id: 5, title: "Ազգային ժառանգություն", category: "Մշակույթ", value: 6, location: "Գառնի" },
        { id: 6, title: "Առողջ ապրելակերպ", category: "Սպորտ", value: 4, location: "Երևան" }
    ];

    const jsonString = JSON.stringify(items, null, 2);
    const parsedItems = JSON.parse(jsonString);

    function getProgramSummaries(list) {
        return list.map(item => `${item.title} [${item.category}] — ${item.value} ժամ`);
    }

    function filterByMinHours(list, minHours) {
        return list.filter(item => item.value >= minHours);
    }

    function findByCategory(list, targetCategory) {
        return list.find(item => item.category === targetCategory);
    }

    function calculateStats(list, threshold) {
        const values = list.map(item => item.value);
        const total = values.reduce((acc, val) => acc + val, 0);
        const max = values.length ? Math.max(...values) : 0;
        const aboveThresholdCount = list.filter(item => item.value > threshold).length;

        return { total, max, aboveThresholdCount };
    }

    const threshold = 3;
    const summaries = getProgramSummaries(parsedItems);
    const longPrograms = filterByMinHours(parsedItems, 4);
    const cultureProgram = findByCategory(parsedItems, "Մշակույթ");
    const stats = calculateStats(parsedItems, threshold);

    console.log("№14 Կամավորական կենտրոն — JSON տող:", jsonString);
    console.log("Ծրագրերի ցանկ (map):", summaries);
    console.log("4 և ավելի ժամ տևողությամբ ծրագրեր (filter):", longPrograms);
    console.log("Մշակույթ ոլորտի ծրագիրը (find):", cultureProgram);
    console.log("Վիճակագրություն:", stats);

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
        const longTitles = longPrograms.map(p => `${p.title} (${p.value} ժամ)`).join(", ") || "Չկան";
        const foundText = cultureProgram
            ? `${cultureProgram.title} (${cultureProgram.value} ժամ)`
            : "Չի գտնվել";

        statsSection.innerHTML = `
            <div style="background: #eaf4fd; padding: 20px; border-radius: 8px; border: 2px solid #2e86c1; margin-top: 20px;">
                <h3 style="color: #1a5276; margin-bottom: 10px;">📊 №14 Կամավորական կենտրոն — Ծրագրերի վերլուծություն</h3>
                <p><strong>Ընդհանուր տևողություն (գումար):</strong> ${stats.total} ժամ</p>
                <p><strong>Առավելագույն տևողություն:</strong> ${stats.max} ժամ</p>
                <p><strong>${threshold} ժամից մեծ տևողությամբ ծրագրերի քանակ:</strong> ${stats.aboveThresholdCount} հատ</p>
                <p><strong>4+ ժամ տևողությամբ ծրագրեր (filter + map):</strong> ${longTitles}</p>
                <p><strong>«Մշակույթ» ոլորտի ծրագիր (find):</strong> ${foundText}</p>
                <details style="margin-top: 12px;">
                    <summary style="cursor: pointer; font-weight: 600; color: #1a5276;">JSON տվյալների տեսք (JSON.stringify / JSON.parse)</summary>
                    <pre style="background: #fff; padding: 12px; border-radius: 6px; margin-top: 8px; overflow-x: auto; font-size: 0.82rem;">${jsonString}</pre>
                </details>
            </div>
        `;
    }

    document.querySelectorAll(".dv-toggle").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var target = document.getElementById(btn.dataset.target);
            var hidden = target.classList.toggle(btn.dataset.class);
            btn.textContent = hidden ? "Ցույց տալ «Տարր 2»-ը" : "Թաքցնել «Տարր 2»-ը";
        });
    });
})();