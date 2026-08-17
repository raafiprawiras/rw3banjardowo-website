/* Struktur KKN page motion.
   Hero: image cinematic reveal (scale + blur → sharp). Team structure
   cards + section header are revealed by the vanilla IntersectionObserver
   reveal system (data-reveal) — no scroll-linked animation here.
   Honors prefers-reduced-motion.
*/

import gsap from 'gsap';

let motionCtx = null;

export function initKKNMotion() {
  cleanupKKNMotion();

  const root = document.getElementById('main');
  if (!root) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  motionCtx = gsap.context(() => {
    const hero = document.querySelector('.kkn-hero');
    const heroImg = document.querySelector('.kkn-hero-img');

    if (hero && heroImg && !reducedMotion) {
      /* Hero fade-in. */
      gsap.fromTo(hero,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
        },
      );

      /* Smooth zoom-in: quick single pass so the real photo is visible
         almost immediately — no scroll-linked parallax. */
      gsap.fromTo(heroImg,
        { scale: 1.06, filter: 'blur(4px)' },
        {
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power2.out',
        },
      );
    }
  }, root);
}

export function cleanupKKNMotion() {
  if (motionCtx) {
    motionCtx.revert();
    motionCtx = null;
  }
}
