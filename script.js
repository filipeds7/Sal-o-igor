// ================================
// PRI BRONGAR • INTERAÇÕES
// ================================

// Carrossel de resultados com botões + arraste no mouse/toque.
const resultsTrack = document.getElementById("resultsTrack");
const prevResults = document.getElementById("prevResults");
const nextResults = document.getElementById("nextResults");

function scrollResults(amount) {
  if (!resultsTrack) return;
  resultsTrack.scrollBy({ left: amount, behavior: "smooth" });
}

if (prevResults) {
  prevResults.addEventListener("click", () => scrollResults(-320));
}

if (nextResults) {
  nextResults.addEventListener("click", () => scrollResults(320));
}

function makeDraggable(slider) {
  if (!slider) return;

  let down = false;
  let startX = 0;
  let startScroll = 0;

  slider.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    down = true;
    startX = event.clientX;
    startScroll = slider.scrollLeft;
    slider.classList.add("dragging");

    if (slider.setPointerCapture) {
      slider.setPointerCapture(event.pointerId);
    }
  });

  slider.addEventListener("pointermove", (event) => {
    if (!down) return;
    slider.scrollLeft = startScroll - (event.clientX - startX);
  });

  const stopDragging = () => {
    down = false;
    slider.classList.remove("dragging");
  };

  slider.addEventListener("pointerup", stopDragging);
  slider.addEventListener("pointercancel", stopDragging);
  slider.addEventListener("lostpointercapture", stopDragging);
}

makeDraggable(resultsTrack);

// Menu mobile.
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Fecha o menu se a janela voltar para desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 760 && mobileNav) {
    mobileNav.classList.remove("open");
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
  }
});
