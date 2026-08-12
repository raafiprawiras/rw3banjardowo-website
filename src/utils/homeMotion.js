/* Beranda page motion — GSAP + ScrollTrigger.
   Composes a few atomic patterns from the hyperframes-animation skill:
   - spring-pop entrances (news cards, CTA) — power3.out settle, no overshoot
   - scroll-scrubbed hero fade/dim (hero melts into the canvas below)
   - bounded idle (portrait float, ornament sway) at the LOW end of amplitude
   Wired into Home.js init/cleanup lifecycle; honors prefers-reduced-motion.
*/

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let motionCtx = null;

export function initHomeMotion() {
  cleanupHomeMotion();

  const root = document.getElementById('main');
  if (!root) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  motionCtx = gsap.context(() => {
    /* Hero — dim + fade as it scrolls out, blending into the green canvas.
       Transform-free (opacity + filter only) so it never fights the Ken Burns
       zoom or the text-entry transitions owned by the carousel. */
    const hero = document.querySelector('.hero-carousel');
    if (hero && !reducedMotion) {
      gsap.to(hero, {
        opacity: 0.35,
        filter: 'brightness(0.7)',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    /* News cards — spring-pop stagger, one arriving beat (3 × 0.1 = 0.3s).
       clearProps hands the transform back to CSS after landing so the
       card-hover lift still works. */
    const newsItems = gsap.utils.toArray('.home-news-item');
    if (newsItems.length && !reducedMotion) {
      gsap.fromTo(
        newsItems,
        { y: 36, scale: 0.96, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: document.querySelector('.news-section .grid') || newsItems[0],
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        },
      );
    }

    /* CTA — spring-pop settle, smooth long tail, no bounce. */
    const ctaContent = document.querySelector('.cta-section .cta-content');
    if (ctaContent && !reducedMotion) {
      gsap.fromTo(
        ctaContent,
        { y: 28, scale: 0.97, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: document.querySelector('.cta-section') || ctaContent,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      );
    }

    /* Portrait — subtle bounded float (low-end amplitude), starts where the
       CSS reveal settles. Idle only, never a full breathing loop. */
    const portrait = document.querySelector('.sambutan-media .hero-card');
    if (portrait && !reducedMotion) {
      gsap.to(portrait, {
        y: -4,
        duration: 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });
    }

    /* Ornament — gentle sway, accent scale, not a spinner. */
    const ornament = document.querySelector('.cta-ornament');
    if (ornament && !reducedMotion) {
      gsap.to(ornament, {
        rotation: 6,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, root);

  if (!reducedMotion) {
    ScrollTrigger.refresh();
  }
}

export function cleanupHomeMotion() {
  if (motionCtx) {
    motionCtx.revert();
    motionCtx = null;
  }
}
