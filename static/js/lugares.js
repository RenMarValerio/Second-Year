document.addEventListener('DOMContentLoaded', function() {
    // Apenas para garantir que o mapa ocupe toda a altura corretamente
    function adjustMapHeight() {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.querySelector('.fullscreen-map-container').style.height = `calc(100vh - ${navbarHeight}px)`;
    }

    // Ajustar quando a janela for redimensionada
    window.addEventListener('resize', adjustMapHeight);
    
    // Ajuste inicial
    adjustMapHeight();
});