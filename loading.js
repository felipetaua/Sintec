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