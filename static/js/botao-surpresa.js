document.getElementById('botao-surpresa').addEventListener('click', function() {
    const frases = [
        "Te amo daqui ao infinito",
        "Te amo nesse e em todos os universos.",
        "Te amo Mil Milhões",
    ];
    
    const randomIndex = Math.floor(Math.random() * frases.length);
    
    // Cria efeito de confete
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // Alerta com mensagem
    Swal.fire({
        title: 'Uma das lembranças de quando começamos a namorar',
        text: frases[randomIndex],
        imageUrl: '/static/image/surpresa.jpg',
        imageWidth: 300,
        imageAlt: 'Nosso momento especial',
        confirmButtonColor: '#E83F6F'
    });
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Posição horizontal aleatória
    confetti.style.left = Math.random() * 100 + 'vw';
    
    // Tamanho aleatório
    const size = Math.floor(Math.random() * 8) + 4;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Cor aleatória
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Duração aleatória
    const duration = Math.random() * 2 + 2; // entre 2s e 4s
    confetti.style.animationDuration = `${duration}s, ${duration}s`;

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}
