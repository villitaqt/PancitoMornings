// JavaScript para Lazy Loading de Imágenes y Videos
document.addEventListener('DOMContentLoaded', function() {
    const lazyLoadElements = document.querySelectorAll('img.lazy-load, video.lazy-load');

    if ('IntersectionObserver' in window) {
        let lazyLoadObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let element = entry.target;
                    if (element.tagName === 'IMG') {
                        element.src = element.dataset.src;
                    } else if (element.tagName === 'VIDEO') {
                        // For video, set the source and then load/play
                        const sourceElement = element.querySelector('source');
                        if (sourceElement && sourceElement.dataset.src) {
                            sourceElement.src = sourceElement.dataset.src;
                            element.load(); // Load the video
                            element.play(); // Play the video
                        }
                    }
                    element.classList.remove('lazy-load');
                    element.classList.add('loaded'); // Add 'loaded' class for fade-in effect
                    observer.unobserve(element);
                }
            });
        });

        lazyLoadElements.forEach(function(el) {
            lazyLoadObserver.observe(el);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyLoadElements.forEach(function(el) {
            if (el.tagName === 'IMG') {
                el.src = el.dataset.src;
            } else if (el.tagName === 'VIDEO') {
                const sourceElement = el.querySelector('source');
                if (sourceElement && sourceElement.dataset.src) {
                    sourceElement.src = sourceElement.dataset.src;
                    el.load();
                    el.play();
                }
            }
            el.classList.add('loaded'); // Add 'loaded' class even without observer
        });
    }
});
