// Article Interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Article interactions loaded');
});

// Enhanced Reveal Animation
function setupRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.transitionDelay = `${Math.random() * 0.3}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Floating Elements Enhanced Interaction
function setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = null;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'none';
        });
    });
}

// Smooth Scroll with Easing
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
}

// Performance Optimized Event Listeners
function safeAddEventListener(selector, eventType, callback) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(eventType, callback, { passive: true });
    }
}

// Initialize Enhanced Interactions
document.addEventListener('DOMContentLoaded', () => {
    setupRevealAnimations();
    setupFloatingElements();
    setupSmoothScroll();
});
