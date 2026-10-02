// Carrossel principal
const heroImages = [
  "assets/hero.jpg",
  "assets/mechas.jpg",
  "assets/penteados.jpg",
  "assets/escova.jpg",
  "assets/sobrancelhas.jpg"
];
let heroIndex = 0;
const heroImage = document.getElementById("heroImage");
const heroDots = document.getElementById("heroDots");

heroImages.forEach((_, i) => {
  const b = document.createElement("button");
  b.className = i === 0 ? "active" : "";
  b.setAttribute("aria-label", `Ir para foto ${i + 1}`);
  b.addEventListener("click", () => showHero(i));
  heroDots.appendChild(b);
});

function showHero(i) {
  heroIndex = (i + heroImages.length) % heroImages.length;
  heroImage.style.opacity = "0.2";
  setTimeout(() => {
    heroImage.src = heroImages[heroIndex];
    heroImage.style.opacity = "1";
  }, 100);
  [...heroDots.children].forEach((d, n) => d.classList.toggle("active", n === heroIndex));
}
document.getElementById("heroPrev").onclick = () => showHero(heroIndex - 1);
document.getElementById("heroNext").onclick = () => showHero(heroIndex + 1);

// Carrossel de resultados: botões + arrastar no mouse/touch.
function makeDraggable(slider) {
  let down = false, startX = 0, startScroll = 0;
  slider.addEventListener("pointerdown", e => {
    down = true;
    slider.classList.add("dragging");
    startX = e.clientX;
    startScroll = slider.scrollLeft;
    slider.setPointerCapture(e.pointerId);
  });
  slider.addEventListener("pointermove", e => {
    if (!down) return;
    slider.scrollLeft = startScroll - (e.clientX - startX);
  });
  const stop = () => { down = false; slider.classList.remove("dragging"); };
  slider.addEventListener("pointerup", stop);
  slider.addEventListener("pointercancel", stop);
  slider.addEventListener("lostpointercapture", stop);
}
const resultsTrack = document.getElementById("resultsTrack");
makeDraggable(resultsTrack);

document.getElementById("prevResults").onclick = () => resultsTrack.scrollBy({left:-250, behavior:"smooth"});
document.getElementById("nextResults").onclick = () => resultsTrack.scrollBy({left:250, behavior:"smooth"});

// Avaliações também podem ser arrastadas no celular.
makeDraggable(document.getElementById("reviewSlider"));

// Menu mobile
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => mobileNav.classList.toggle("open"));
document.querySelectorAll(".mobile-nav a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

// Auto-play discreto no hero
setInterval(() => showHero(heroIndex + 1), 6500);
