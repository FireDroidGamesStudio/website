document.addEventListener("DOMContentLoaded", () => {
  const logoFiredroid = document.getElementById("logoFiredroid");
  const telaDeCarregamento = document.getElementById("telaDeCarregamento");
  setTimeout(() => {
    logoFiredroid.classList.add("zoom-out");
    telaDeCarregamento.style.zIndex = "-100";
  }, 600);
});

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000);
