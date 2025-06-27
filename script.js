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

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            const isActive = mobileMenu.classList.contains('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
            hamburger.setAttribute('aria-expanded', isActive);
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission with loading state
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.textContent = 'Enviando...';
                
                // Remove loading state after 3 seconds (simulate processing)
                setTimeout(() => {
                    submitBtn.classList.remove('loading');
                    submitBtn.textContent = 'Suscribirme';
                }, 3000);
            }
        });
    });

    // Intersection Observer for scroll animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Add scroll animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(section);
    });

    // Error handling for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            try {
                // Add loading state to external links
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 1000);
            } catch (error) {
                console.log('External link clicked:', this.href);
            }
        });
    });
});
