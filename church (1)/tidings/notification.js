// 공지사항 목록을 로드하고 화면에 표시하는 함수
function loadNotices() {
    const noticeList = document.getElementById("notice-list");
    noticeList.innerHTML = ""; // 기존 공지사항 목록 초기화
    const notices = JSON.parse(localStorage.getItem("notices") || "[]");

    notices.forEach((notice) => {
        const noticeItem = document.createElement("article");
        noticeItem.classList.add("notice-item");

        noticeItem.innerHTML = `
            <h2>${notice.title}</h2>
            <p class="date">${notice.date}</p>
            <p>${notice.content}</p>
        `;
        noticeList.appendChild(noticeItem);
    });
}

// 공지사항 추가 함수
function addNotice() {
    const title = document.getElementById("notice-title").value;
    const content = document.getElementById("notice-content").value;
    const date = new Date().toISOString().split("T")[0]; // 현재 날짜

    if (title && content) {
        const notices = JSON.parse(localStorage.getItem("notices") || "[]");
        notices.push({ title, content, date });
        localStorage.setItem("notices", JSON.stringify(notices));

        document.getElementById("notice-title").value = "";
        document.getElementById("notice-content").value = "";

        loadNotices();
    } else {
        alert("제목과 내용을 입력해주세요.");
    }
}

// 페이지가 로드될 때 공지사항을 표시
window.onload = loadNotices;
