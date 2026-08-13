/* UMKM gallery — card mini-carousel + detail popup with photo slider.
   Uses event delegation so it works with dynamically re-rendered cards
   (UMKM page search/filter) and both entry points (Home + UMKM page).
   Honors prefers-reduced-motion via CSS transitions. */

import { UMKM_DATA } from '../pages/UMKM.js';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AUTO_SLIDE_MS = 4000;
let autoSlideTimer = null;
let modalOpen = false;
let lastFocused = null;
let onKeydown = null;
let touchStart = null;
let lastSwipeAt = 0;

function imagesOf(item) {
  return item.images && item.images.length ? item.images : [item.image];
}

function findItem(id) {
  return UMKM_DATA.find((d) => d.id === id);
}

function slideTo(carousel, index) {
  const track = carousel.querySelector('.umkm-carousel-track');
  if (!track) return;
  const slides = Array.from(track.children).filter((el) => el.classList.contains('umkm-img'));
  const total = slides.length;
  if (!total) return;
  const next = ((index % total) + total) % total;

  track.style.transform = `translateX(-${next * 100}%)`;
  carousel.dataset.current = String(next);

  const dots = Array.from(carousel.querySelectorAll('.umkm-carousel-dot'));
  dots.forEach((dot, i) => {
    dot.classList.toggle('is-active', i === next);
    dot.setAttribute('aria-current', i === next ? 'true' : 'false');
  });

  const count = carousel.querySelector('.umkm-carousel-count');
  if (count) count.textContent = `${next + 1} / ${total}`;

  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === next ? 'false' : 'true');
  });
}

function nextSlide(carousel, delta) {
  const current = Number(carousel.dataset.current || 0);
  slideTo(carousel, current + delta);
}

/* ── Auto-slide ────────────────────────────────────────────────── */
function isVisible(el) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
}

function autoSlideTick() {
  if (document.hidden || reducedMotion) return;
  document.querySelectorAll('[data-umkm-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.umkm-carousel-track');
    if (!track) return;
    const slides = Array.from(track.children).filter((el) => el.classList.contains('umkm-img'));
    if (slides.length <= 1) return;
    if (carousel.dataset.paused === 'true') return;
    if (modalOpen && !carousel.closest('.umkm-modal')) return;
    if (!isVisible(carousel)) return;
    if (carousel.matches(':hover')) return;
    if (Date.now() - (Number(carousel.dataset.lastInteract) || 0) < AUTO_SLIDE_MS) return;
    nextSlide(carousel, 1);
  });
}

function startAutoSlide() {
  if (autoSlideTimer) return;
  autoSlideTimer = setInterval(autoSlideTick, AUTO_SLIDE_MS);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

/* ── Touch swipe (delegated, works for cards + modal) ──────────── */
function handleTouchStart(e) {
  const carousel = e.target.closest('[data-umkm-carousel]');
  if (!carousel) return;
  const touch = e.touches[0];
  touchStart = { x: touch.clientX, y: touch.clientY, carousel };
  carousel.dataset.paused = 'true';
}

function handleTouchEnd(e) {
  if (!touchStart) return;
  const touch = e.changedTouches[0];
  const dx = touch.clientX - touchStart.x;
  const dy = touch.clientY - touchStart.y;
  const { carousel } = touchStart;
  touchStart = null;
  carousel.dataset.paused = 'false';
  if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
    e.preventDefault();
    lastSwipeAt = Date.now();
    nextSlide(carousel, dx < 0 ? 1 : -1);
  }
}

/* ── Card carousel + click-to-open (delegated) ─────────────────── */
function handleDocumentClick(e) {
  if (modalOpen && e.target.closest('.umkm-modal')) {
    return; // modal has its own listener below
  }

  // suppress the synthetic click that follows a horizontal swipe
  if (Date.now() - lastSwipeAt < 350 && e.target.closest('[data-umkm-carousel]')) {
    return;
  }

  const carousel = e.target.closest('[data-umkm-carousel]');
  if (carousel) {
    const prev = e.target.closest('[data-umkm-prev]');
    const next = e.target.closest('[data-umkm-next]');
    const dot = e.target.closest('[data-umkm-dot]');
    if (prev || next) {
      e.stopPropagation();
      carousel.dataset.lastInteract = Date.now();
      nextSlide(carousel, prev ? -1 : 1);
      return;
    }
    if (dot) {
      e.stopPropagation();
      carousel.dataset.lastInteract = Date.now();
      slideTo(carousel, Number(dot.getAttribute('data-umkm-dot')));
      return;
    }
  }

  const card = e.target.closest('[data-umkm-id]');
  if (card && !e.target.closest('a')) {
    e.preventDefault();
    openUmkmModal(card.getAttribute('data-umkm-id'));
  }
}

export function initUmkmGallery() {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchend', handleTouchEnd, { passive: false });
  startAutoSlide();
}

export function cleanupUmkmGallery() {
  stopAutoSlide();
  document.removeEventListener('click', handleDocumentClick);
  document.removeEventListener('touchstart', handleTouchStart);
  document.removeEventListener('touchend', handleTouchEnd);
  closeUmkmModal();
}

/* ── Modal ─────────────────────────────────────────────────────── */
function openUmkmModal(id) {
  const item = findItem(id);
  if (!item || modalOpen) return;

  const images = imagesOf(item);
  const slides = images.map((src, i) => `
        <img src="${src}" alt="Foto ${i + 1} ${item.name}" class="umkm-img" loading="lazy" />
      `).join('');
  const dots = images.map((_, i) => `
        <button type="button" class="umkm-carousel-dot${i === 0 ? ' is-active' : ''}" data-umkm-dot="${i}" aria-label="Foto ${i + 1}"></button>
      `).join('');

  lastFocused = document.activeElement;

  const modal = document.createElement('div');
  modal.className = 'umkm-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', item.name);
  modal.innerHTML = `
      <div class="umkm-modal-backdrop" data-umkm-close aria-hidden="true"></div>
      <div class="umkm-modal-panel" role="document">
        <button type="button" class="umkm-modal-close" data-umkm-close aria-label="Tutup">
          <i class="ph ph-x" aria-hidden="true"></i>
        </button>
        <div class="umkm-modal-media" data-umkm-carousel data-current="0">
          <div class="umkm-carousel-track">
            ${slides}
          </div>
          ${images.length > 1 ? `
          <button type="button" class="umkm-carousel-arrow umkm-carousel-prev" data-umkm-prev aria-label="Foto sebelumnya">
            <i class="ph ph-caret-left" aria-hidden="true"></i>
          </button>
          <button type="button" class="umkm-carousel-arrow umkm-carousel-next" data-umkm-next aria-label="Foto berikutnya">
            <i class="ph ph-caret-right" aria-hidden="true"></i>
          </button>
          <span class="umkm-carousel-count">1 / ${images.length}</span>
          <div class="umkm-carousel-dots">${dots}</div>` : ''}
        </div>
        <div class="umkm-modal-body">
          <span class="badge umkm-modal-badge">${item.category}</span>
          <h3 class="text-h2 umkm-modal-title">${item.name}</h3>
          <p class="text-body-lg text-ink-muted umkm-modal-desc">${item.desc}</p>
          <div class="umkm-modal-meta">
            <div class="umkm-meta-item">
              <i class="ph ph-user" aria-hidden="true"></i>
              <span>${item.owner}</span>
            </div>
            <div class="umkm-meta-item">
              <i class="ph ph-map-pin" aria-hidden="true"></i>
              <span>${item.location}</span>
            </div>
            <div class="umkm-meta-item">
              <i class="ph ph-tag" aria-hidden="true"></i>
              <span class="font-semibold text-tan">${item.price}</span>
            </div>
          </div>
          <a href="https://wa.me/${item.phone}?text=Halo%20${encodeURIComponent(item.name)}%2C%20saya%20ingin%20menanyakan%20produk%2Fjasa%20Anda." class="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">
            <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
            Hubungi Penjual
          </a>
        </div>
      </div>
    `;

  document.body.appendChild(modal);
  modalOpen = true;
  document.body.classList.add('modal-open');

  modal.addEventListener('click', (e) => {
    const media = modal.querySelector('.umkm-modal-media');
    const prev = e.target.closest('[data-umkm-prev]');
    const next = e.target.closest('[data-umkm-next]');
    const dot = e.target.closest('[data-umkm-dot]');
    if (prev || next) {
      media.dataset.lastInteract = Date.now();
      nextSlide(media, prev ? -1 : 1);
      return;
    }
    if (dot) {
      media.dataset.lastInteract = Date.now();
      slideTo(media, Number(dot.getAttribute('data-umkm-dot')));
      return;
    }
    if (e.target.closest('[data-umkm-close]') || e.target.classList.contains('umkm-modal-backdrop')) {
      closeUmkmModal();
    }
  });

  onKeydown = (e) => {
    if (e.key === 'Escape') {
      closeUmkmModal();
      return;
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const media = modal.querySelector('.umkm-modal-media');
      const dots = media.querySelectorAll('.umkm-carousel-dot');
      if (dots.length <= 1) return;
      media.dataset.lastInteract = Date.now();
      nextSlide(media, e.key === 'ArrowLeft' ? -1 : 1);
    }
  };
  document.addEventListener('keydown', onKeydown);

  requestAnimationFrame(() => {
    modal.classList.add('is-open');
    const closeBtn = modal.querySelector('.umkm-modal-close');
    if (closeBtn) closeBtn.focus();
  });
}

export function closeUmkmModal() {
  if (!modalOpen) return;
  const modal = document.querySelector('.umkm-modal');
  if (!modal) {
    modalOpen = false;
    return;
  }

  if (onKeydown) {
    document.removeEventListener('keydown', onKeydown);
    onKeydown = null;
  }
  document.body.classList.remove('modal-open');

  if (reducedMotion) {
    modal.remove();
    modalOpen = false;
    if (lastFocused) lastFocused.focus();
    return;
  }

  modal.classList.remove('is-open');
  const panel = modal.querySelector('.umkm-modal-panel');
  if (panel) {
    const onEnd = (e) => {
      if (e.target !== panel) return;
      panel.removeEventListener('transitionend', onEnd);
      clearTimeout(fallback);
      modal.remove();
      if (lastFocused) lastFocused.focus();
    };
    const fallback = setTimeout(onEnd, 500);
    panel.addEventListener('transitionend', onEnd);
  } else {
    modal.remove();
    if (lastFocused) lastFocused.focus();
  }
  modalOpen = false;
}
