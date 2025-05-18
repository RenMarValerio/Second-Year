const messages = [
    "Construindo jogos incríveis...",
    "Preparando surpresas...",
    "Quase lá..."
];

let currentMessage = 0;
let charIndex = 0;
const typingElement = document.getElementById('typing-effect');

function typeWriter() {
    if (charIndex < messages[currentMessage].length) {
        typingElement.textContent += messages[currentMessage].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = messages[currentMessage].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        currentMessage = (currentMessage + 1) % messages.length;
        setTimeout(typeWriter, 500);
    }
}

// Iniciar o efeito quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) {
        setTimeout(typeWriter, 1000);
    }
});