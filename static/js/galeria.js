document.addEventListener('DOMContentLoaded', function() {
    // Elementos da DOM
    const yearFilters = document.querySelectorAll('.year-filter');
    const polaroidItems = document.querySelectorAll('.polaroid-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Filtros por ano
    yearFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Ativar botão clicado
            document.querySelector('.year-filter.active').classList.remove('active');
            this.classList.add('active');
            
            const year = this.dataset.year;
            
            // Remover destaque de todas as fotos
            polaroidItems.forEach(item => {
                item.classList.remove('highlighted');
                
                // Mostrar todas as fotos (se filtro "all")
                if (year === 'all') {
                    item.style.display = 'block';
                } 
                // Destacar fotos do ano selecionado
                else if (item.dataset.year === year) {
                    item.classList.add('highlighted');
                }
            });
        });
    });
    
    // Lightbox - abrir ao clicar na foto
    polaroidItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const caption = this.querySelector('.polaroid-caption').textContent;
            
            lightboxImage.src = imgSrc;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('show');
        });
    });
    
    // Fechar lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('show');
    }
    
    // Tecla ESC fecha lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });
    
    // Arrastar polaroides (opcional)
    let draggedItem = null;
    
    polaroidItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        
        item.addEventListener('dragstart', function() {
            draggedItem = this;
            setTimeout(() => this.style.opacity = '0.5', 0);
        });
        
        item.addEventListener('dragend', function() {
            this.style.opacity = '1';
        });
        
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            if (draggedItem !== this) {
                const grid = this.parentNode;
                const indexThis = [...grid.children].indexOf(this);
                const indexDragged = [...grid.children].indexOf(draggedItem);
                
                if (indexThis > indexDragged) {
                    grid.insertBefore(draggedItem, this.nextSibling);
                } else {
                    grid.insertBefore(draggedItem, this);
                }
            }
        });
    });
});