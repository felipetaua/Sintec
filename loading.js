// Função para exibir a tela de carregamento
function loading() {
    const loadingElement = document.querySelector(".loading"); // Seleciona o elemento de carregamento
  
    // Exibe a tela de carregamento enquanto a página carrega
    loadingElement.style.display = 'block';
  
    // Quando toda a página estiver carregada, a tela de carregamento será removida
    window.onload = () => {
      loadingElement.style.display = 'none'; // Esconde a tela de carregamento
    };
}
  