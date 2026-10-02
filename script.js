// =========================
// CARROSSEL DE RESULTADOS
// =========================

const resultsTrack = document.getElementById("resultsTrack");
const prevResults = document.getElementById("prevResults");
const nextResults = document.getElementById("nextResults");

if (resultsTrack && prevResults && nextResults) {

    prevResults.addEventListener("click", () => {
        resultsTrack.scrollBy({
            left: -280,
            behavior: "smooth"
        });
    });

    nextResults.addEventListener("click", () => {
        resultsTrack.scrollBy({
            left: 280,
            behavior: "smooth"
        });
    });

    // Arrastar com mouse ou dedo
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    resultsTrack.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startScroll = resultsTrack.scrollLeft;

        resultsTrack.classList.add("dragging");
        resultsTrack.setPointerCapture(e.pointerId);
    });

    resultsTrack.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const distance = e.clientX - startX;

        resultsTrack.scrollLeft = startScroll - distance;
    });

    const stopDragging = () => {
        isDragging = false;
        resultsTrack.classList.remove("dragging");
    };

    resultsTrack.addEventListener("pointerup", stopDragging);
    resultsTrack.addEventListener("pointercancel", stopDragging);
}


// =========================
// AVALIAÇÕES
// =========================

const reviewSlider = document.getElementById("reviewSlider");

if (reviewSlider) {

    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    reviewSlider.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startScroll = reviewSlider.scrollLeft;

        reviewSlider.classList.add("dragging");
        reviewSlider.setPointerCapture(e.pointerId);
    });

    reviewSlider.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const distance = e.clientX - startX;

        reviewSlider.scrollLeft = startScroll - distance;
    });

    const stopReviewDragging = () => {
        isDragging = false;
        reviewSlider.classList.remove("dragging");
    };

    reviewSlider.addEventListener("pointerup", stopReviewDragging);
    reviewSlider.addEventListener("pointercancel", stopReviewDragging);
}


// =========================
// MENU MOBILE
// =========================

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });
    }
