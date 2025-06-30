// Aguarda o carregamento completo do DOM (estrutura da página) antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Faz uma requisição para buscar o conteúdo do arquivo 'footer.html' que está na pasta 'partials'
    fetch('partials/footer.html')
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (código de status HTTP 200 OK)
            if (!response.ok) {
                // Se houve erro (ex: arquivo não encontrado), dispara uma exceção com a mensagem de erro
                throw new Error('Erro ao carregar o rodapé: ' + response.statusText);
            }
            // Se a resposta for válida, converte o conteúdo para texto (HTML bruto)
            return response.text();
        })
        .then(html => {
            // Procura na página o elemento com o ID 'footer-placeholder' (onde o rodapé será inserido)
            const footerPlaceholder = document.getElementById('footer-placeholder');

            // Se encontrou o elemento, insere o HTML carregado dentro dele
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html; // Substitui o conteúdo pelo HTML do rodapé
            } else {
                // Se o elemento com ID 'footer-placeholder' não existir, mostra erro no console
                console.error('Elemento com ID "footer-placeholder" não encontrado para inserir o rodapé.');
            }
        })
        .catch(error => {
            // Captura qualquer erro que tenha ocorrido durante o processo (fetch, transformação, etc.)
            console.error('Não foi possível carregar o rodapé:', error);
        });

});
