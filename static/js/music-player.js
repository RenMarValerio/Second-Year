document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicTracks = {
        'home': 'make_you_mine.mp3',
        'timeline': 'too_sweet.mp3',
        'galeria': 'italiano.mp3',
        'cartas': 'mais_ninguem.mp3',
        'lugares':'electric_love.mp3',
        'futuros':'something_just_like_this.mp3',
        'jogos':'maria.mp3',
        'primeiro_encontro':'mi_fa_male.mp3'
        // Adicione mais páginas e músicas conforme necessário
    };

    // Configuração inicial
    music.volume = 0.2; // Volume reduzido para não ser intrusivo
    
    // Tocar música automaticamente (com tratamento para autoplay policies)
    function handleAutoplay() {
        const playPromise = music.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Mostrar botão de ativação para navegadores restritivos
                const musicButton = document.createElement('button');
                musicButton.innerHTML = '<i class="bi bi-music-note-beamed"></i> Ativar Música';
                musicButton.className = 'btn btn-sm btn-outline-light position-fixed bottom-0 end-0 m-3';
                musicButton.onclick = () => {
                    music.play();
                    musicButton.remove();
                };
                document.body.appendChild(musicButton);
            });
        }
    }

    // Iniciar música da página atual
    handleAutoplay();
});