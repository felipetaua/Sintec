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

// Função para inicializar o carrossel (caso exista na página)
function initializeCarousel() {
  const carouselContainer = document.querySelector(".carouselContainer");
  const allEachCarousel = document.querySelectorAll(".eachCarousel");
  const allIndicator = document.querySelectorAll(".indicator");

  // Verifica se o carrossel existe na página antes de executar o código
  if (!carouselContainer || allEachCarousel.length === 0 || allIndicator.length === 0) {
    console.warn("Carrossel não encontrado na página. Ignorando inicialização.");
    return;
  }

  const eachCarouselWidth = allEachCarousel[0].clientWidth;
  let currentSlide = 0;
  const totalSlides = allEachCarousel.length;
  let autoSlideInterval;

  // Alterna os slides
  const slideCarousel = (index) => {
    allEachCarousel.forEach((slide, i) => {
      slide.classList.toggle("eachCarouselBorder", i === index);
      allIndicator[i]?.classList.toggle("activeIndicator", i === index);
    });

    // Ajusta a rolagem horizontal do carrossel
    carouselContainer.scrollLeft = index * (eachCarouselWidth + 10);
    currentSlide = index;
  };

  // Inicia a troca automática dos slides
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      slideCarousel(nextSlide);
    }, 4000);
  };

  // Para a troca automática ao passar o mouse
  const stopAutoSlide = () => clearInterval(autoSlideInterval);

  // Adiciona eventos para interatividade
  carouselContainer.addEventListener("mouseenter", stopAutoSlide);
  carouselContainer.addEventListener("mouseleave", startAutoSlide);

  // Inicializa o carrossel
  slideCarousel(currentSlide);
  startAutoSlide();
}

// Executa a função apenas quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initializeCarousel);


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


// resolvendo a promisse erro do console
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso!", registration);
      })
      .catch((error) => {
        console.log("Falha ao registrar o Service Worker:", error);
      });
  });
}
