import { UMKM_DATA, umkmCardMarkup } from './UMKM.js';
import { loadRw3GeoJson, createMap, createGeoJsonLayer, addRw3PolygonLabel } from './PetaDesa.js';
import { initHomeMotion, cleanupHomeMotion } from '../utils/homeMotion.js';

/* ── Hero carousel slides ────────────────────────────────────────────
   Local assets from public/assets/beranda/ for premium visual quality.
   ──────────────────────────────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    variant: 'photo',
    image: '/assets/beranda/asset_beranda1.jpg',
    alt: 'Suasana lingkungan RW 3 Banjardowo',
    badge: 'Portal Resmi Warga',
    title: 'Selamat Datang di Website Resmi RW 3',
    text: 'Portal informasi resmi warga RW 3 Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang.',
    ctaPrimary: {
      label: 'Layanan Surat WA',
      href: 'https://wa.me/6281234567890?text=Halo%20Pengurus%20RW%203%20Banjardowo%2C%20saya%20ingin%20mengajukan%20layanan%20surat.%20Nama%3A%20%0ANIK%3A%20%0AAlamat%2FRT%3A%20%0AJenis%20surat%3A%20',
      icon: 'ph-whatsapp-logo',
    },
    ctaSecondary: {
      label: 'Jelajahi Peta',
      href: '/peta',
      icon: 'ph-map-trifold',
    },
  },
  {
    variant: 'photo',
    image: '/assets/beranda/asset_beranda2.jpg',
    alt: 'Kegiatan warga RW 3 Banjardowo',
    badge: 'Kegiatan Warga',
    title: 'Kegiatan & Kabar Warga RW 3',
    text: 'Dari posyandu, kerja bakti, hingga agenda bersama, semua informasi warga terpusat di sini.',
    ctaPrimary: {
      label: 'Lihat Galeri Kegiatan',
      href: '/galeri',
      icon: 'ph-images',
    },
    ctaSecondary: null,
  },
  {
    variant: 'photo',
    image: '/assets/beranda/asset_beranda3.jpg',
    alt: 'Wilayah RW 3 Banjardowo',
    badge: 'Peta Wilayah',
    title: 'Kenali Wilayah RW 3',
    text: 'Jelajahi batas wilayah RW 3 Kelurahan Banjardowo pada peta interaktif.',
    ctaPrimary: {
      label: 'Lihat Peta',
      href: '/peta',
      icon: 'ph-map-trifold',
    },
    ctaSecondary: null,
  },
];

const icon = (c) => (c && c.icon ? `<i class="ph ${c.icon}" aria-hidden="true"></i>` : '');

function heroSlideMarkup(slide, index) {
  const total = HERO_SLIDES.length;
  const slideLabel = `Slide ${index + 1} dari ${total}`;

  return `
      <div class="hero-slide" role="group" aria-roledescription="slide" aria-label="${slideLabel}" aria-hidden="true">
        <img src="${slide.image}" alt="${slide.alt}" class="hero-slide-bg" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} />
        <div class="hero-slide-overlay" aria-hidden="true"></div>
        <div class="hero-slide-content">
          <div class="hero-slide-copy">
            ${slide.badge ? `<span class="badge hero-slide-badge">${slide.badge}</span>` : ''}
            <h2 class="text-h1 text-bone">${slide.title}</h2>
            <p class="hero-slide-text">${slide.text}</p>
            <div class="hero-actions">
              ${slide.ctaPrimary ? `
              <a href="${slide.ctaPrimary.href}" class="btn btn-primary btn-lg">
                ${icon(slide.ctaPrimary)}
                ${slide.ctaPrimary.label}
              </a>` : ''}
              ${slide.ctaSecondary ? `
              <a href="${slide.ctaSecondary.href}" class="btn btn-outline btn-lg">
                ${icon(slide.ctaSecondary)}
                ${slide.ctaSecondary.label}
              </a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
}

export function renderHome() {
  return `
    <!-- Hero Carousel -->
    <section class="hero-section" aria-label="Sorotan utama RW 3 Banjardowo">
      <div class="container-site">
        <div class="hero-carousel" id="home-hero" aria-roledescription="carousel" aria-label="Sorotan utama RW 3 Banjardowo">
          <h1 class="sr-only">RW 3 Banjardowo - Portal Warga</h1>
          <div class="hero-carousel-track">
            ${HERO_SLIDES.map(heroSlideMarkup).join('')}
          </div>
          <button type="button" class="hero-carousel-arrow hero-carousel-prev" aria-label="Slide sebelumnya">
            <i class="ph ph-caret-left" aria-hidden="true"></i>
          </button>
          <button type="button" class="hero-carousel-arrow hero-carousel-next" aria-label="Slide berikutnya">
            <i class="ph ph-caret-right" aria-hidden="true"></i>
          </button>
          <div class="hero-carousel-dots" aria-label="Pilih slide">
            ${HERO_SLIDES.map((_, i) => `
              <button type="button" class="hero-carousel-dot" data-hero-dot="${i}" aria-label="Ke slide ${i + 1} dari ${HERO_SLIDES.length}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Sambutan Ketua RW -->
    <section class="section home-sambutan">
      <div class="container-site">
        <div class="sambutan-grid">
          <div class="sambutan-media">
            <figure class="hero-card">
              <img src="https://banjar-connect.lovable.app/assets/ketua-rw-C_cHXzzT.jpg" alt="Potret Bapak Sutrisno, S.Sos., Ketua RW 3 Banjardowo" class="hero-img" loading="lazy" />
              <figcaption class="hero-card-badge">
                <p class="hero-card-title">Bapak Sutrisno, S.Sos.</p>
                <p class="hero-card-subtitle">Ketua RW 3 Banjardowo (2024-2029)</p>
              </figcaption>
            </figure>
          </div>
          <div class="sambutan-text">
            <h2 class="text-h2">Sambutan Ketua RW</h2>
            <p class="sambutan-signature">Bapak Sutrisno, S.Sos.</p>
            <p class="sambutan-role">Ketua RW 3 Banjardowo (2024-2029)</p>
            <p class="text-body-lg text-ink-muted sambutan-body">
              Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di portal resmi RW 3 Banjardowo. Website ini kami hadirkan sebagai jembatan informasi antara pengurus dan warga, mulai dari data kependudukan, layanan surat, katalog UMKM, hingga agenda kegiatan. Mari bersama menjaga guyub rukun dan membangun lingkungan yang aman, sehat, dan mandiri.
            </p>
            <div class="hero-actions mt-8">
              <a href="/profil/struktur" class="btn btn-secondary btn-lg">
                <i class="ph ph-users-three" aria-hidden="true"></i>
                Struktur Kepengurusan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pengumuman & Agenda -->
    <section class="news-section">
      <div class="container-site" style="position: relative; z-index: 1;">
        <div class="section-header">
          <h2 class="text-h2 section-title">Informasi Terbaru Warga</h2>
          <p class="section-desc">
            Kabar kegiatan, jadwal posyandu, dan pengumuman keamanan lingkungan di wilayah RW 3 Banjardowo.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <article class="card card-hover news-card home-news-item">
            <div class="news-badge-wrap">
              <span class="badge badge-accent">Kerja Bakti</span>
              <span class="text-caption text-ink-muted">3 Agustus 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Kerja Bakti Bersih Saluran Air Jelang Musim Hujan</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Seluruh warga RT 01-06 diharapkan hadir untuk normalisasi saluran air dan pengecatan poskamling.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
          <article class="card card-hover news-card home-news-item">
            <div class="news-badge-wrap">
              <span class="badge">Posyandu</span>
              <span class="text-caption text-ink-muted">28 Juli 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Jadwal Posyandu Balita Agustus & Program PMT</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Penimbangan balita dan pemberian makanan tambahan bergizi digelar di Posyandu Melati RT 02.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
          <article class="card card-hover news-card home-news-item">
            <div class="news-badge-wrap">
              <span class="badge badge-neutral">Keamanan</span>
              <span class="text-caption text-ink-muted">21 Juli 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Penguatan Ronda Malam & Nomor Darurat Baru</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Jadwal ronda diperbarui per RT dan nomor koordinator keamanan kini aktif 24 jam.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Peta Wilayah RW 3 -->
    <section class="section home-map-section blur-gradient-bg">
      <div class="container-site" style="position: relative; z-index: 1;">
        <div class="section-header">
          <h2 class="text-h2 section-title">Wilayah RW 3 Kelurahan Banjardowo</h2>
          <p class="section-desc">
            Jelajahi batas wilayah RW 3 di Kecamatan Genuk, Kota Semarang, melalui peta interaktif berikut.
          </p>
        </div>
        <div class="home-map-card card" id="home-map-card">
          <div class="home-map-shell" id="home-map-shell">
            <div id="home-map-loading" class="map-state" role="status" aria-live="polite">
              <div class="map-state-icon">
                <i class="ph ph-spinner-gap map-spin" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm text-ink-muted">Peta wilayah sedang dimuat...</p>
            </div>
            <div id="home-map-error" class="map-state hidden" role="alert">
              <div class="map-state-icon map-state-icon-error">
                <i class="ph ph-warning-circle" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm text-ink-muted">Peta wilayah RW 3 tidak dapat dimuat. Silakan coba lagi.</p>
            </div>
            <div id="home-map" class="map-element" aria-label="Peta interaktif wilayah RW 3 Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang"></div>
          </div>
          <div class="home-map-footer">
            <p class="text-body-sm text-ink-muted">
              Geser dan perbesar untuk menjelajah. Batas wilayah ditampilkan dari data GeoJSON RW 3.
            </p>
            <a href="/peta-desa" class="btn btn-accent">
              <i class="ph ph-map-trifold" aria-hidden="true"></i>
              Lihat Peta Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- UMKM RW 3 -->
    <section class="section home-umkm-section">
      <div class="container-site" style="position: relative; z-index: 1;">
        <div class="section-header">
          <h2 class="text-h2 section-title">UMKM RW 3</h2>
          <p class="section-desc">
            Dukung perekonomian lokal dengan berbelanja di usaha mikro, kecil, dan menengah milik warga RW 3 Banjardowo.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          ${UMKM_DATA.slice(0, 3).map((item) => `
            <div class="h-full">
              ${umkmCardMarkup(item)}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Lihat Semua UMKM -->
    <section class="cta-section text-bone">
      <div class="container-site cta-container">
        <div class="cta-content text-center max-w-[36rem] mx-auto">
          <span class="cta-ornament" aria-hidden="true">✦</span>
          <h2 class="text-h2 text-bone">Dukung usaha warga RW 3 Banjardowo</h2>
          <p class="text-body-lg mt-4" style="color: rgb(243 234 217 / 0.82);">
            Temukan kuliner, kerajinan, jasa, dan sembako dari pelaku usaha warga RW 3.
          </p>
          <div class="mt-8">
            <a href="/umkm" class="btn btn-accent btn-lg">
              <i class="ph ph-storefront" aria-hidden="true"></i>
              Lihat Semua UMKM
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── Module-level state (cleaned up on route change) ──────────────── */
let heroCleanup = null;
let homeMap = null;
let homeMapResizeHandler = null;
let lazyMapObserver = null;

export function initHome() {
  heroCleanup = initHeroCarousel();
  setupLazyMap();
  initHomeMotion();
}

export function cleanupHome() {
  cleanupHomeMotion();
  if (heroCleanup) {
    heroCleanup();
    heroCleanup = null;
  }
  if (lazyMapObserver) {
    lazyMapObserver.disconnect();
    lazyMapObserver = null;
  }
  if (homeMapResizeHandler) {
    window.removeEventListener('resize', homeMapResizeHandler);
    homeMapResizeHandler = null;
  }
  if (homeMap) {
    try {
      homeMap.remove();
    } catch (_) {
      /* noop */
    }
    homeMap = null;
  }
}

/* ── Hero carousel ────────────────────────────────────────────────── */
function initHeroCarousel() {
  const root = document.getElementById('home-hero');
  if (!root) return null;

  const slides = Array.from(root.querySelectorAll('.hero-slide'));
  const dots = Array.from(root.querySelectorAll('.hero-carousel-dot'));
  const prevBtn = root.querySelector('.hero-carousel-prev');
  const nextBtn = root.querySelector('.hero-carousel-next');
  const count = slides.length;
  if (!count) return null;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_MS = 6000;
  let index = 0;
  let timer = null;

  function updateAria() {
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      if (i === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  function go(i) {
    index = (i + count) % count;
    updateAria();
  }

  function next() {
    go(index + 1);
  }

  function prev() {
    go(index - 1);
  }

  function start() {
    if (reducedMotion) return;
    stop();
    timer = window.setInterval(next, AUTOPLAY_MS);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stop();
      prev();
      start();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stop();
      next();
      start();
    });
  }
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const i = Number(dot.getAttribute('data-hero-dot'));
      stop();
      go(i);
      start();
    });
  });

  // Pause on hover / focus, resume after
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', () => {
    if (!root.contains(document.activeElement)) start();
  });

  // Touch swipe
  let pointerDown = false;
  let startX = 0;
  let startY = 0;
  let swipeLock = false;

  root.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    pointerDown = true;
    startX = e.clientX;
    startY = e.clientY;
    stop();
  });

  root.addEventListener('pointermove', (e) => {
    if (!pointerDown || e.pointerType !== 'touch') return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 20 && Math.abs(dx) > Math.abs(dy)) {
      swipeLock = true;
    }
  });

  root.addEventListener('pointerup', (e) => {
    if (!pointerDown || e.pointerType !== 'touch') {
      pointerDown = false;
      return;
    }
    pointerDown = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
    // Suppress the click that follows a swipe, then release the lock.
    setTimeout(() => {
      swipeLock = false;
    }, 0);
    start();
  });

  root.addEventListener('pointercancel', () => {
    pointerDown = false;
  });

  root.addEventListener('click', (e) => {
    if (swipeLock) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  updateAria();
  start();

  return () => stop();
}

/* ── Lazy map preview ─────────────────────────────────────────────── */
function setupLazyMap() {
  const target = document.getElementById('home-map-shell');
  if (!target) return;

  if (!('IntersectionObserver' in window)) {
    initHomeMap();
    return;
  }

  lazyMapObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initHomeMap();
        if (lazyMapObserver) {
          lazyMapObserver.disconnect();
          lazyMapObserver = null;
        }
      }
    });
  }, { rootMargin: '240px 0px' });

  lazyMapObserver.observe(target);
}

async function initHomeMap() {
  const mapEl = document.getElementById('home-map');
  const loadingEl = document.getElementById('home-map-loading');
  const errorEl = document.getElementById('home-map-error');
  if (!mapEl || homeMap) return;

  setMapState('loading', loadingEl, errorEl, mapEl);

  try {
    const geojson = await loadRw3GeoJson();
    homeMap = createMap(mapEl, { scrollWheelZoom: false });
    const layer = createGeoJsonLayer(geojson).addTo(homeMap);
    const bounds = layer.getBounds();
    homeMap.fitBounds(bounds, { padding: [20, 20] });
    addRw3PolygonLabel(homeMap, bounds);

    window.requestAnimationFrame(() => {
      if (homeMap) homeMap.invalidateSize();
    });
    window.setTimeout(() => {
      if (homeMap) homeMap.invalidateSize();
    }, 700);

    // Re-measure once the section reveal transition has finished
    const card = document.getElementById('home-map-card');
    if (card) {
      card.addEventListener('transitionend', function onRevealEnd(e) {
        if (e.propertyName !== 'opacity') return;
        card.removeEventListener('transitionend', onRevealEnd);
        if (homeMap) homeMap.invalidateSize();
      });
    }

    if (!homeMapResizeHandler) {
      homeMapResizeHandler = () => {
        if (homeMap) {
          window.requestAnimationFrame(() => homeMap.invalidateSize());
        }
      };
      window.addEventListener('resize', homeMapResizeHandler);
    }

    setMapState('ready', loadingEl, errorEl, mapEl);
  } catch (error) {
    console.error('Failed to initialize homepage RW 3 map:', error);
    setMapState('error', loadingEl, errorEl, mapEl);
  }
}

function setMapState(state, loadingEl, errorEl, mapEl) {
  if (!loadingEl || !errorEl || !mapEl) return;
  loadingEl.classList.toggle('hidden', state !== 'loading');
  errorEl.classList.toggle('hidden', state !== 'error');
  mapEl.classList.toggle('is-hidden', state !== 'ready');
}
