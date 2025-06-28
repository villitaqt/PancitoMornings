// JavaScript para Lazy Loading de Imágenes y Videos
document.addEventListener('DOMContentLoaded', function() {
    // Navbar transparente con scroll
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Ejecutar al cargar la página
    handleScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', handleScroll);

    // Lazy loading de imágenes y videos
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

    // Intersection Observer for scroll animations - Mejorado para ambas direcciones
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Agregar clase cuando el elemento entra en el viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Remover clase cuando el elemento sale del viewport (solo en desktop)
                if (window.innerWidth > 768) {
                    entry.target.classList.remove('animate-in');
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    // Add scroll animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        animateOnScroll.observe(section);
    });

    // Animación mejorada para elementos individuales
    const animateElements = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Solo animar hacia atrás en desktop para mejor UX
                if (window.innerWidth > 768) {
                    entry.target.classList.remove('animate-in');
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                }
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px'
    });

    // Aplicar animación a elementos específicos con delays escalonados
    document.querySelectorAll('.benefit-item, .testimonial-item, .step-item, .carousel-card').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        animateElements.observe(element);
    });

    // Animación especial para elementos grandes
    document.querySelectorAll('.app-info-card, .final-cta-section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        animateElements.observe(element);
    });

    // Optimización para móvil - deshabilitar animaciones reversas
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        const elements = document.querySelectorAll('.benefit-item, .testimonial-item, .step-item, .carousel-card, .app-info-card, .final-cta-section');
        
        elements.forEach(element => {
            if (isMobile && element.classList.contains('animate-in')) {
                // En móvil, mantener elementos visibles una vez animados
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Ejecutar al cambiar tamaño de ventana
    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al cargar

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

    // Enhanced Typewriter Effect - Mejorado para texto multilínea
    function typeWriter(element, text, speed = 80) {
        // Limpiar el elemento
        element.innerHTML = '';
        element.style.borderRight = '3px solid #FF8C42';
        element.style.whiteSpace = 'pre-wrap'; // Permite saltos de línea
        element.style.wordWrap = 'break-word'; // Permite que las palabras se rompan
        element.style.overflow = 'visible'; // Permite que el texto se expanda
        
        // Dividir el texto en caracteres, preservando saltos de línea
        const characters = text.split('');
        let i = 0;
        
        function type() {
            if (i < characters.length) {
                // Agregar el siguiente carácter
                element.innerHTML += characters[i];
                i++;
                
                // Continuar con el siguiente carácter
                setTimeout(type, speed);
            } else {
                // Terminó de escribir, iniciar cursor parpadeante
                setTimeout(() => {
                    element.style.animation = 'blink-caret 0.75s step-end infinite';
                    // Detener el parpadeo después de 3 segundos
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                        element.style.animation = 'none';
                        // Activar otras animaciones
                        triggerDelayedAnimations();
                    }, 3000);
                }, 500);
            }
        }
        
        type();
    }

    function triggerDelayedAnimations() {
        const delayedElements = document.querySelectorAll('.fade-in-up');
        delayedElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = 'fadeInUp 1s ease forwards';
            }, index * 300); // Reducido el delay entre elementos
        });
    }

    // Inicializar efecto typewriter al cargar la página
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        const originalText = typewriterElement.textContent;
        // Remover animación CSS y usar JavaScript
        typewriterElement.style.animation = 'none';
        typewriterElement.style.borderRight = 'none';
        typewriterElement.style.whiteSpace = 'pre-wrap';
        typewriterElement.style.wordWrap = 'break-word';
        typewriterElement.style.overflow = 'visible';
        
        // Iniciar efecto typewriter después de un pequeño delay
        setTimeout(() => {
            typeWriter(typewriterElement, originalText, 70); // Velocidad ligeramente más rápida
        }, 1000);
    }

    // Swiper unificado para ambos carousels
    const unifiedSwiper = new Swiper('.unified-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        pagination: {
            el: '.unified-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            700: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});
