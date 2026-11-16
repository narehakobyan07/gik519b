(function () {
    "use strict";

    const hoursSpans = document.querySelectorAll(".program-hours");
    let hoursArray = [];

    hoursSpans.forEach(span => {
        const match = span.textContent.match(/\d+/);
        if (match) {
            hoursArray.push(parseInt(match[0], 10));
        }
    });

    if (hoursArray.length > 0) {
        const totalHours = hoursArray.reduce((sum, curr) => sum + curr, 0);
        const maxHours = Math.max(...hoursArray);
        const threshold = 3;
        const greaterThanThreshold = hoursArray.filter(h => h > threshold).length;

        const statsSection = document.getElementById("stats-section");
        if (statsSection) {
            statsSection.innerHTML = `
                <div style="background: #eaf4fd; padding: 20px; border-radius: 8px; border: 2px solid #2e86c1; margin-top: 20px;">
                    <h3 style="color: #1a5276; margin-bottom: 10px;">📊 Ծրագրերի ժամային վերլուծություն</h3>
                    <p><strong>Ընդհանուր գումարը:</strong> ${totalHours} ժամ</p>
                    <p><strong>Առավելագույն տևողությունը:</strong> ${maxHours} ժամ</p>
                    <p><strong>${threshold} ժամից ավել տևողությամբ ծրագրեր:</strong> ${greaterThanThreshold} հատ</p>
                </div>
            `;
        }
    }

    document.querySelectorAll(".dv-toggle").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var target = document.getElementById(btn.dataset.target);
            var hidden = target.classList.toggle(btn.dataset.class);
            btn.textContent = hidden ? "Ցույց տալ «Տարր 2»-ը" : "Թաքցնել «Տարր 2»-ը";
        });
    });
})();