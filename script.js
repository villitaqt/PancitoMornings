// JavaScript para Lazy Loading de Imágenes
document.addEventListener('DOMContentLoaded', function() {
    const lazyLoadImages = document.querySelectorAll('img.lazy-load');

    if ('IntersectionObserver' in window) {
        let lazyLoadObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    img.classList.add('loaded'); // Add 'loaded' class for fade-in effect
                    lazyLoadObserver.unobserve(img);
                }
            });
        });

        lazyLoadImages.forEach(function(img) {
            lazyLoadObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que no soportan Intersection Observer
        lazyLoadImages.forEach(function(img) {
            img.src = img.dataset.src;
            img.classList.add('loaded'); // Add 'loaded' class even without observer
        });
    }
});
