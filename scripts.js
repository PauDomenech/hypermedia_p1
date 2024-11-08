document.addEventListener('DOMContentLoaded', function() {
    
    const closeButton = document.querySelector('.app_bar .left img:first-child');
    closeButton.addEventListener('click', function() {
        window.close();
    });

    const searchButton = document.querySelector('.search button');
    searchButton.addEventListener('click', function() {
        const searchTerm = document.querySelector('.search input[type="text"]').value;
        const container = document.querySelector('.container');

        // Desmarcar text anterior
        container.innerHTML = container.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');

        // Marcar nou text
        if (searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            container.innerHTML = container.innerHTML.replace(regex, '<mark>$1</mark>');
        }
    });

    document.querySelector('.container .logo .info_bar img:first-child').addEventListener('click', function() {
        var info = document.querySelector('.container .logo .info');
        var img = document.querySelector('.container .logo .info_bar img:first-child');
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = 'block';
            img.src = 'arrow_down.png'; // Canvia a la imatge original
        } else {
            info.style.display = 'none';
            img.src = 'arrow_up.png'; // Canvia a la nova imatge
        }
    });
});