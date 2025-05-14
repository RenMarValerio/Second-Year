document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline-horizontal');
    const prevBtn = document.querySelector('.timeline-prev');
    const nextBtn = document.querySelector('.timeline-next');
    
    // Scroll Suave
    nextBtn.addEventListener('click', () => {
        timeline.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', () => {
        timeline.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });
    
    // Efeito de Arrastar
    let isDown = false;
    let startX;
    let scrollLeft;
    
    timeline.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - timeline.offsetLeft;
        scrollLeft = timeline.scrollLeft;
        timeline.style.cursor = 'grabbing';
    });
    
    timeline.addEventListener('mouseleave', () => {
        isDown = false;
        timeline.style.cursor = 'grab';
    });
    
    timeline.addEventListener('mouseup', () => {
        isDown = false;
        timeline.style.cursor = 'grab';
    });
    
    timeline.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - timeline.offsetLeft;
        const walk = (x - startX) * 2;
        timeline.scrollLeft = scrollLeft - walk;
    });
});