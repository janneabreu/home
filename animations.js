document.addEventListener('DOMContentLoaded', () => {
    // 1. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('section, .mechanic-card, .emotion-item, .audience-box');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal-init');
        revealOnScroll.observe(el);
    });

    // 2. STICKY MOBILE CTA (OPTIONAL BUT RECOMMENDED)
    // Create the button element
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta-mobile';
    stickyCTA.innerHTML = `<a href="https://pay.hotmart.com/M105400032Q" class="btn btn-primary">COMPRAR EBOOK</a>`;
    document.body.appendChild(stickyCTA);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 800 && window.innerWidth < 768) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.add('visible', false); // Clean toggle
            stickyCTA.classList.remove('visible');
        }
    });
});
