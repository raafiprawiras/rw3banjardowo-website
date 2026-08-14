/* Struktur KKN page motion — GSAP + ScrollTrigger.
   Premium hero: image cinematic reveal (scale + blur → sharp), a slow
   Ken Burns settle, and a gentle scroll parallax. Team cards stagger in
   with a soft rise. Honors prefers-reduced-motion.
*/

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let motionCtx = null;

export function initKKNMotion() {
  cleanupKKNMotion();

  const root = document.getElementById('main');
  if (!root) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  motionCtx = gsap.context(() => {
    const hero = document.querySelector('.kkn-hero');
    const heroImg = document.querySelector('.kkn-hero-img');

    if (hero && heroImg) {
      if (!reducedMotion) {
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
    }

    /* Photo structure cards — stagger rise, one beat per level. */
    const cards = gsap.utils.toArray('.kkn-photo-card');
    if (cards.length && !reducedMotion) {
      gsap.fromTo(
        cards,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.09,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: document.querySelector('.kkn-org') || cards[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      );
    }

    if (!reducedMotion) ScrollTrigger.refresh();
  }, root);
}

export function cleanupKKNMotion() {
  if (motionCtx) {
    motionCtx.revert();
    motionCtx = null;
  }
}
