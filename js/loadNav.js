document.addEventListener('DOMContentLoaded', () => {
    fetch('../partials/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a navegação: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            const navPlaceholder = document.getElementById('nav-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = html;
            } else {
                console.error('Elemento com ID "nav-placeholder" não encontrado para inserir a navegação.');
            }
        })
        .catch(error => {
            console.error('Não foi possível carregar a navegação:', error);
        });
});