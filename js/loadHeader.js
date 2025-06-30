document.addEventListener('DOMContentLoaded', () => {
  fetch('partials/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o header: ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = html;
      } else {
        console.error('Elemento com ID "header-placeholder" não encontrado para inserir o cabeçalho.');
      }
    })
    .catch(error => {
      console.error('Não foi possível carregar o cabeçalho:', error);
    });
});
