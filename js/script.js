// ===========================
// SMOOTH PARALLAX EFFECT
// ===========================
class ParallaxScroller {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }

    init() {
        if (this.elements.length > 0) {
            window.addEventListener('scroll', () => this.update());
            window.addEventListener('touchmove', () => this.update());
        }
    }

    update() {
        // No scroll transform to avoid content shifting issues.
    }
}

// ===========================
// NAVIGATION FUNCTIONALITY
// ===========================
class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navbar = document.querySelector('.navbar');
        
        this.init();
    }

    init() {
        // Hamburger menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.classList.contains('search-btn')) {
                    e.preventDefault();
                    this.handleSearch();
                } else {
                    this.closeMenu();
                }
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                this.closeMenu();
            }
        });

        // Active link highlighting on scroll
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }

    handleSearch() {
        const searchTerm = prompt('Search for a menu item...');
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            alert(`Search functionality for "${searchTerm}" coming soon!`);
        }
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        const sections = [
            { id: 'home', offset: document.querySelector('#home')?.offsetTop || 0 },
            { id: 'about', offset: document.querySelector('#about')?.offsetTop || 0 },
            { id: 'contact', offset: document.querySelector('#contact')?.offsetTop || 0 }
        ];

        sections.forEach(section => {
            const link = document.querySelector(`a[href="#${section.id}"]`);
            if (link) {
                if (scrollPosition >= section.offset - 100) {
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
}

// Add active menu styles
const style = document.createElement('style');
style.textContent = `
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 2rem;
        gap: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 0 0 15px 15px;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
`;
document.head.appendChild(style);

// ===========================
// SCROLL ANIMATIONS
// ===========================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all feature cards and sections
        document.querySelectorAll('.feature-card, .chef-content').forEach(element => {
            element.classList.add('scroll-animate');
            observer.observe(element);
        });
    }
}

// Add scroll animation styles
const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .scroll-animate.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(scrollStyle);

// ===========================
// BUTTON INTERACTIONS
// ===========================
class ButtonInteractions {
    constructor() {
        this.ctaButtons = document.querySelectorAll('.cta-button');
        this.featureLinks = document.querySelectorAll('.feature-link');
        this.init();
    }

    init() {
        this.ctaButtons.forEach(button => {
            if (button.tagName.toLowerCase() !== 'a') {
                button.addEventListener('click', (e) => this.handleButtonClick(e));
            }
            button.addEventListener('mouseenter', () => this.addRipple(button));
        });

        this.featureLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.closest('.feature-card').className;
                this.handleCategoryClick(category);
            });
        });
    }

    handleButtonClick(e) {
        const button = e.target;
        const text = button.textContent.trim();

        if (text.includes('Contact')) {
            alert('Contact form modal will open here. Currently showing placeholder.');
        }
    }

    handleCategoryClick(category) {
        if (category.includes('appetizers')) {
            alert('Appetizers collection coming soon!');
        } else if (category.includes('pizzas')) {
            alert('Pizza collection coming soon!');
        } else if (category.includes('spuds')) {
            alert('Spuds collection coming soon!');
        }
    }

    addRipple(element) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
}

class FeatureSliders {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.feature-slider').forEach(slider => {
            const images = slider.querySelectorAll('img');
            if (!images.length) return;

            let currentIndex = 0;
            const updateSlider = () => {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            };

            const advance = () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider();
            };

            updateSlider();
            setInterval(advance, 3500);
        });
    }
}

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===========================
// LAZY LOADING IMAGES
// ===========================
class LazyLoadImages {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
        }
    }
}

// Add image loading styles
const imageStyle = document.createElement('style');
imageStyle.textContent = `
    img {
        transition: opacity 0.3s ease;
    }

    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(imageStyle);

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 100) {
                this.navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
            } else {
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }

            lastScrollTop = scrollTop;
        });
    }
}

// ===========================
// KEYBOARD ACCESSIBILITY
// ===========================
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const nav = document.querySelector('.nav-menu');
            if (nav) nav.classList.remove('active');
        }
    });
}

// ===========================
// INITIALIZATION
// ===========================
// Always reset scroll position so refresh starts at the top.
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    console.log('Fullplate Landing Page Initialized');
    
    // Initialize all components
    new ParallaxScroller();
    new Navigation();
    new ScrollAnimations();
    new ButtonInteractions();
    new FeatureSliders();
    new LazyLoadImages();
    new NavbarScrollEffect();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Scroll events are handled by classes above
        });
    });
});

// ===========================
// PERFORMANCE MONITORING
// ===========================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    });
}

// ===========================
// ERROR HANDLING
// ===========================
window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.error);
    // Gracefully handle errors without breaking the page
});

// Prevent console errors from breaking the site
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.log('Error: ' + msg + '\nUrl: ' + url + '\nLine: ' + lineNo);
    return false;
};
