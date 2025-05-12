document.addEventListener('DOMContentLoaded', function () {
    const dataInicio = new Date('2023-05-18');
    const elementoContador = document.getElementById('dias-juntos');

    if (!elementoContador) {
        console.error("Elemento 'dias-juntos' não encontrado!");
        return;
    }

    function atualizarContador() {
        const hoje = new Date();
        const diffTempo = hoje - dataInicio;
        const diffDias = Math.floor(diffTempo / (1000 * 60 * 60 * 24));

        elementoContador.textContent = diffDias;

        // Efeito especial no aniversário
        if (hoje.getDate() === dataInicio.getDate() && hoje.getMonth() === dataInicio.getMonth()) {
            elementoContador.classList.add('animacao-aniversario');
        }
    }

    atualizarContador();
    setInterval(atualizarContador, 86400000); // Atualiza a cada 24h
});
