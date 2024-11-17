// Função de carregamento
function loading() {
  document.querySelector('.loading').style.display = "none"; // Oculta a tela de carregamento
  document.querySelector('.site').style.display = "block"; // Exibe o site
}

// Aguarda o carregamento completo da página
window.onload = function () {
  // Oculta a tela de carregamento após 2 segundos
  setTimeout(() => {
    loading();
    initializeCarousel(); // Inicializa o carrossel após a tela de carregamento
  }, 2000);
};

// Função para inicializar o carrossel
function initializeCarousel() {
  // Seleção dos elementos do carousel
  const carouselContainer = document.querySelector(".carouselContainer");
  const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
  const allEachCarousel = document.querySelectorAll(".eachCarousel");
  const allIndicator = document.querySelectorAll(".indicator");

  let currentSlide = 0;
  const totalSlides = allEachCarousel.length;

  // Função para alternar os slides
  const slideCarousel = (index) => {
    for (let x = 0; x < totalSlides; x++) {
      if (x === index) {
        allEachCarousel[x].classList.add("eachCarouselBorder");
        allIndicator[x].classList.add("activeIndicator");
      } else {
        allEachCarousel[x].classList.remove("eachCarouselBorder");
        allIndicator[x].classList.remove("activeIndicator");
      }
    }
    // Ajusta a rolagem horizontal da div do carousel
    carouselContainer.scrollLeft = index * (eachCarousel + 10); // Ajuste de espaçamento de 10px entre slides
    currentSlide = index;
  };

  // Função para iniciar a troca automática dos slides
  const startAutoSlide = () => {
    setInterval(() => {
      // Atualiza para o próximo slide
      const nextSlide = (currentSlide + 1) % totalSlides; // Reinicia no primeiro slide após o último
      slideCarousel(nextSlide);
    }, 4000); // Troca de slide a cada 4 segundos
  };

  // Inicializa o primeiro slide
  slideCarousel(currentSlide);

  // Inicia a troca automática dos slides
  startAutoSlide();
}

// Header toggle
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
  const icon = e.target.getAttribute("class");
  if (icon == "fa-solid fa-bars") {
    e.target.setAttribute("class", "fa-solid fa-xmark");
  } else {
    e.target.setAttribute("class", "fa-solid fa-bars");
  }
  nav.classList.toggle("showNav");
};

// SCROLL REVEAL
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

ScrollReveal().reveal(".events-card", { delay: 500 });
ScrollReveal().reveal(".eachEvent", { delay: 500 });
