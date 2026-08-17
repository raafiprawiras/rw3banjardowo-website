/* Beranda page motion — GSAP + ScrollTrigger.
   Premium scroll experience with intentional, varied reveals:
   - Hero: static (no scroll effect — remains in normal document flow)
   - Sambutan: directional portrait reveal + text fade/blur-to-sharp
   - News: spring-pop stagger (cards arrive one beat apart)
   - Map: soft rise reveal (no scale — keeps Leaflet raster crisp)
   - UMKM: fade-up stagger with light scale, handed back to CSS hover
   - CTA: spring-pop settle + gentle ornament sway
   - Navbar: smooth scrolled-state transition (background + shadow)
   Honors prefers-reduced-motion: no scroll animation at all.
*/

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let motionCtx = null;
let navScrollHandler = null;

export function initHomeMotion() {
  cleanupHomeMotion();

  const root = document.getElementById('main');
  if (!root) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Navbar scroll state — smooth, transitioned in CSS. Works only on Beranda. */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const updateNav = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    updateNav();
    navScrollHandler = updateNav;
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  if (reducedMotion) return;

  motionCtx = gsap.context(() => {
    /* ── Sambutan: portrait image reveal (directional, no final shift) ── */
    const portrait = document.querySelector('.sambutan-media .hero-card');
    if (portrait) {
      gsap.fromTo(portrait,
        { x: -48, scale: 1.05, opacity: 0 },
        {
          x: 0, scale: 1, opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: '.sambutan-media', start: 'top 78%', toggleActions: 'play none none none' },
        },
      );
    }

    /* ── Sambutan: text fade + soft blur-to-sharp ─────────────────── */
    const sambutanText = document.querySelector('.sambutan-text');
    if (sambutanText) {
      gsap.fromTo(sambutanText,
        { y: 32, opacity: 0, filter: 'blur(6px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: sambutanText, start: 'top 82%', toggleActions: 'play none none none' },
        },
      );
    }

    /* ── News cards — spring-pop stagger (one arriving beat) ──────── */
    const newsItems = gsap.utils.toArray('.home-news-item');
    if (newsItems.length) {
      gsap.fromTo(
        newsItems,
        { y: 36, scale: 0.96, opacity: 0 },
        {
          y: 0, scale: 1, opacity: 1,
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

    /* ── Section headers (news / map / umkm): fade-up + blur-to-sharp ── */
    const headers = gsap.utils.toArray('.news-section .section-header, .home-map-section .section-header, .home-umkm-section .section-header');
    if (headers.length) {
      headers.forEach((h, i) => {
        gsap.fromTo(h,
          { y: 24, opacity: 0, filter: 'blur(4px)' },
          {
            y: 0, opacity: 1, filter: 'blur(0px)',
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.05,
            clearProps: 'all',
            scrollTrigger: { trigger: h, start: 'top 85%', toggleActions: 'play none none none' },
          },
        );
      });
    }

    /* ── Map card: soft rise (opacity + y only, keeps raster crisp) ── */
    const mapCard = document.querySelector('.home-map-card');
    if (mapCard) {
      gsap.fromTo(mapCard,
        { y: 44, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: mapCard, start: 'top 84%', toggleActions: 'play none none none' },
        },
      );
    }

    /* ── UMKM cards: fade-up stagger, hands transform back to hover ── */
    const umkmCards = gsap.utils.toArray('.home-umkm-section .umkm-card');
    if (umkmCards.length) {
      gsap.fromTo(
        umkmCards,
        { y: 40, scale: 0.97, opacity: 0 },
        {
          y: 0, scale: 1, opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: document.querySelector('.home-umkm-section .grid') || umkmCards[0],
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        },
      );
    }

    /* ── CTA: spring-pop settle, smooth long tail, no bounce ──────── */
    const ctaContent = document.querySelector('.cta-section .cta-content');
    if (ctaContent) {
      gsap.fromTo(
        ctaContent,
        { y: 28, scale: 0.97, opacity: 0 },
        {
          y: 0, scale: 1, opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: '.cta-section', start: 'top 85%', toggleActions: 'play none none none' },
        },
      );
    }

    /* ── Portrait float + ornament sway — bounded idle, low amplitude ── */
    if (portrait) {
      gsap.to(portrait, {
        y: -4,
        duration: 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.9,
      });
    }

    const ornament = document.querySelector('.cta-ornament');
    if (ornament) {
      gsap.to(ornament, {
        rotation: 6,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    ScrollTrigger.refresh();
  }, root);
}

export function cleanupHomeMotion() {
  if (navScrollHandler) {
    window.removeEventListener('scroll', navScrollHandler);
    navScrollHandler = null;
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('is-scrolled');
  }
  if (motionCtx) {
    motionCtx.revert();
    motionCtx = null;
  }
}
