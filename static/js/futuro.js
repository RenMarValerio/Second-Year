document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos cards
    const dreamCards = document.querySelectorAll('.dream-card');
    
    dreamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.dream-image img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.dream-image img').style.transform = 'scale(1)';
        });
    });

    // Lightbox para as imagens
    dreamCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const title = this.querySelector('.dream-title').textContent;
            
            Swal.fire({
                imageUrl: imgSrc,
                imageAlt: title,
                showConfirmButton: false,
                background: 'none',
                backdrop: `
                    rgba(0,0,0,0.8)
                    url("${imgSrc}")
                    center center
                    no-repeat
                `,
                showCloseButton: true,
                width: '80%'
            });
        });
    });
});