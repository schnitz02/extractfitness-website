// ============================================
// EXTRACT FITNESS — Scripts
// ============================================

// --- Mobile nav toggle ---
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile nav on link click
mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// --- Scroll-triggered section reveals ---
const revealSections = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

revealSections.forEach(section => revealObserver.observe(section));

// --- Nav background on scroll ---
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
    } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.04)';
    }
    lastScroll = scrollY;
}, { passive: true });

// --- Form submission placeholder ---
const form = document.getElementById('ctaForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent! We\'ll be in touch.';
    btn.style.background = '#22c55e';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Send Enquiry';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
    }, 3000);
});
