// ======================================================
// CARROSSEL DE RESULTADOS REAIS
// ======================================================

const resultsTrack = document.querySelector(".results-track");
const resultsButtons = document.querySelectorAll(".round-controls button");


// Botão ANTERIOR
if (resultsTrack && resultsButtons.length >= 2) {

    resultsButtons[0].addEventListener("click", function () {

        const card = resultsTrack.querySelector(".result-card");

        if (card) {
            const cardWidth = card.getBoundingClientRect().width;
            const gap = 15;

            resultsTrack.scrollBy({
                left: -(cardWidth + gap),
                behavior: "smooth"
            });
        }

    });


    // Botão PRÓXIMO
    resultsButtons[1].addEventListener("click", function () {

        const card = resultsTrack.querySelector(".result-card");

        if (card) {
            const cardWidth = card.getBoundingClientRect().width;
            const gap = 15;

            resultsTrack.scrollBy({
                left: cardWidth + gap,
                behavior: "smooth"
            });
        }

    });

}


// ======================================================
// ARRASTAR CARROSSEL COM O DEDO / MOUSE
// ======================================================

function makeDraggable(slider) {

    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    slider.addEventListener("pointerdown", function (e) {

        isDragging = true;

        startX = e.clientX;
        startScroll = slider.scrollLeft;

        slider.classList.add("dragging");

        slider.setPointerCapture(e.pointerId);

    });


    slider.addEventListener("pointermove", function (e) {

        if (!isDragging) return;

        const distance = e.clientX - startX;

        slider.scrollLeft = startScroll - distance;

    });


    function stopDragging() {

        isDragging = false;

        slider.classList.remove("dragging");

    }


    slider.addEventListener("pointerup", stopDragging);
    slider.addEventListener("pointercancel", stopDragging);
    slider.addEventListener("lostpointercapture", stopDragging);

}


// Ativa o arraste dos resultados
makeDraggable(resultsTrack);


// ======================================================
// CARROSSEL DE AVALIAÇÕES
// ======================================================

const reviewSlider = document.querySelector(".review-slider");

makeDraggable(reviewSlider);


// ======================================================
// MENU MOBILE
// ======================================================

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", function () {

        mobileNav.classList.toggle("open");

    });


    document.querySelectorAll(".mobile-nav a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("open");

        });

    });

}
