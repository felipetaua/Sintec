// Ativar o preload navigation quando o SW for ativado
self.addEventListener("activate", (event) => {
    event.waitUntil(self.registration.navigationPreload.enable());
  });
  
  // Interceptar requisições e usar preload navigation
  self.addEventListener("fetch", (event) => {
    // Se a requisição for para o Microsoft Forms, não interceptar
    if (event.request.url.includes("forms.office.com")) {
      return;
    }
  
    event.respondWith(
      (async () => {
        try {
          // Tenta usar a resposta pré-carregada
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
  
          // Se não houver preloadResponse, faz a requisição normal
          return fetch(event.request);
        } catch (error) {
          console.error("Erro ao buscar requisição:", error);
          return new Response("Erro ao carregar o conteúdo", { status: 500 });
        }
      })()
    );
  });
  