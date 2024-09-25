// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}


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
    carouselContainer.scrollLeft = (index * (eachCarousel + 10)); // Ajuste de espaçamento de 10px entre slides
    currentSlide = index;
}

// Função para iniciar a troca automática dos slides
const startAutoSlide = () => {
    setInterval(() => {
        // Atualiza para o próximo slide
        const nextSlide = (currentSlide + 1) % totalSlides; // Reinicia no primeiro slide após o último
        slideCarousel(nextSlide);
    }, 3000); // Troca de slide a cada 3 segundos
}

// Inicializa o primeiro slide
slideCarousel(currentSlide);

// Inicia a troca automática dos slides
startAutoSlide();
