document.addEventListener('DOMContentLoaded', () => {
    fetch('partials/header.html')
        .then(Response => {
            if(!Response.ok){
                throw new Error('Erro ao carregar a header: ' + response.statusText);
            }
            return Response.text();    
        })
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if(headerPlaceholder){
                headerPlaceholder.innerHTML = html;
            } else {
                console.error('Elemento com ID "header-placeholder" não encontrado para inserir o cabeçalho.');
            }
        })
        .catch (error => {
            console.error('não foi possivel carregar o cabeçalho:', error);
        }) 
            
})