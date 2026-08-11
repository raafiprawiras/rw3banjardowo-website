/* Shared scroll-reveal observer for the whole site.
   Honors prefers-reduced-motion via CSS (elements only hide under
   `no-preference`), so this util only toggles the revealed class. */

let revealObserver = null;

export function initReveals() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-revealed'));
        return;
    }

    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    items.forEach((el) => revealObserver.observe(el));
}

export function cleanupReveals() {
    if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
    }
}