function orderNow() {
    window.location.href = "https://wa.me/6289535947182";
}

function daftarSekarang() {
    window.location.href = "https://wa.me/62895359471852";
}

/* DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* TANGAN */
const hands = ["👉", "👇", "👆", "👈"];
let handIndex = 0;

setInterval(() => {
    document.querySelector(".hand").innerText = hands[handIndex];
    handIndex = (handIndex + 1) % hands.length;
}, 500);

/* SLIDER */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 2500);
