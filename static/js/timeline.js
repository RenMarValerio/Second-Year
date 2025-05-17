document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.diary-page');
    const prevBtn = document.querySelector('.timeline-nav .prev');
    const nextBtn = document.querySelector('.timeline-nav .next');
    let currentPage = 0;
    
    // Mostrar a primeira página
    showPage(currentPage);
    
    // Event listeners para navegação
    nextBtn.addEventListener('click', function() {
        if (currentPage < pages.length - 1) {
            changePage(currentPage, currentPage + 1);
            currentPage++;
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            changePage(currentPage, currentPage - 1);
            currentPage--;
        }
    });
    
    function changePage(oldIndex, newIndex) {
        // Animação de saída
        pages[oldIndex].classList.remove('active');
        pages[oldIndex].classList.add('exiting');
        
        // Depois da animação, mostrar nova página
        setTimeout(() => {
            pages[oldIndex].classList.remove('exiting');
            showPage(newIndex);
        }, 800);
    }
    
    function showPage(index) {
        // Esconder todas as páginas primeiro
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Mostrar a página atual
        pages[index].style.display = 'block';
        setTimeout(() => {
            pages[index].classList.add('active');
        }, 10);
        
        // Atualizar progresso
        updateProgress(index);
    }
    
    function updateProgress(index) {
        const progress = document.querySelector('.timeline-progress');
        const percentage = ((index + 1) / pages.length) * 100;
        progress.style.width = `${percentage}%`;
    }
    
    // Evento de clique nas datas
    const diaryDates = document.querySelectorAll('.diary-date');
    diaryDates.forEach(date => {
        date.addEventListener('click', function() {
            this.innerHTML = 'Dia em que minha vida mudou ❤️';
        });
    });
});