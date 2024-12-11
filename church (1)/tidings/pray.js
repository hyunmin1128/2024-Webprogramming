// JavaScript - pray.js
function loadPrayers() {
    const prayList = document.getElementById("pray-list");
    prayList.innerHTML = ""; // Clear existing content
    const prayers = JSON.parse(localStorage.getItem("prayers") || "[]");

    if (prayers.length === 0) {
        prayList.innerHTML = "<p>등록된 기도 요청이 없습니다.</p>";
    }

    prayers.forEach((prayer) => {
        const prayerItem = document.createElement("article");
        prayerItem.classList.add("pray-item");

        prayerItem.innerHTML = `
            <h2><a href="pray-detail.html?id=${prayer.id}">${prayer.title}</a></h2>
            <p class="date">${prayer.date}</p>
            <button onclick="deletePrayer(${prayer.id})">삭제</button>
        `;
        prayList.appendChild(prayerItem);
    });
}

function deletePrayer(id) {
    let prayers = JSON.parse(localStorage.getItem("prayers") || "[]");
    prayers = prayers.filter(prayer => prayer.id !== id);
    localStorage.setItem("prayers", JSON.stringify(prayers));
    loadPrayers();
}

// Load prayers when the page loads
document.addEventListener('DOMContentLoaded', loadPrayers);