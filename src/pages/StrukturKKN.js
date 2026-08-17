import { initKKNMotion, cleanupKKNMotion } from '../utils/kknMotion.js';

const ORG_DPL = {
    img: '/assets/struktur-kkn/dpl-klp36.jpg',
    role: 'DPL',
    desc: 'Dosen Pembimbing Lapangan',
};

const ORG_KETUA = {
    img: '/assets/struktur-kkn/ketua-klp36.jpg',
    role: 'Ketua Tim',
    desc: 'Koordinator Utama KKN',
};

const ORG_DUO = [
    { img: '/assets/struktur-kkn/bendahara-klp36.jpg', role: 'Bendahara', desc: 'Pengelola Keuangan Tim' },
    { img: '/assets/struktur-kkn/sekre-klp36.jpg', role: 'Sekretaris', desc: 'Administrasi & Notulensi' },
];

const ORG_SIE = [
    { img: '/assets/struktur-kkn/acara-klp36.jpg', role: 'Seksi Acara', desc: 'Program & Kegiatan' },
    { img: '/assets/struktur-kkn/perkap-klp36.jpg', role: 'Seksi Perkap', desc: 'Perlengkapan & Logistik' },
    { img: '/assets/struktur-kkn/humas-klp36.jpg', role: 'Seksi Humas', desc: 'Publikasi & Hubungan Warga' },
    { img: '/assets/struktur-kkn/pdd-klp36.jpg', role: 'Seksi PDD', desc: 'Pendataan & Dokumentasi' },
];

function photoCard(member, extraClass = '', delay = 0) {
    return `
      <div class="kkn-photo-card ${extraClass}" data-reveal style="--reveal-delay: ${delay}ms"
           data-kkn-img="${member.img}" data-kkn-role="${member.role}" data-kkn-desc="${member.desc}"
           role="button" tabindex="0" aria-label="Perbesar foto ${member.role}">
        <div class="kkn-photo-frame">
          <img src="${member.img}" alt="Foto ${member.role} Tim KKN Unissula Kelompok 36" class="kkn-photo-img" loading="lazy" />
        </div>
        <span class="kkn-photo-zoom" aria-hidden="true">
          <i class="ph ph-magnifying-glass-plus"></i>
        </span>
      </div>
    `;
}

export function renderStrukturKKN() {
    return `
    <section class="kkn-hero-section">
      <div class="container-site">
        <div class="kkn-hero">
          <img src="/assets/struktur-kkn/all-kelompok36.jpg" alt="Foto bersama Tim KKN Unissula Kelompok 36" class="kkn-hero-img" fetchpriority="high" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <div class="section-header" data-reveal>
          <h2 class="text-h2 section-title">Struktur Organisasi</h2>
          <p class="section-desc">
            Susunan kepengurusan Tim KKN Unissula Kelompok 36 Banjardowo.
          </p>
        </div>

        <div class="kkn-org">

          <div class="kkn-org-level">
            ${photoCard(ORG_DPL, '', 0)}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level">
            ${photoCard(ORG_KETUA, 'kkn-photo-card--ketua', 90)}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level kkn-org-level--duo">
            ${ORG_DUO.map((m, i) => photoCard(m, '', i * 90)).join('')}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level kkn-org-level--sie">
            ${ORG_SIE.map((m, i) => photoCard(m, '', i * 90)).join('')}
          </div>

        </div>
      </div>
    </section>

    <div id="kkn-lightbox" class="kkn-lightbox hidden" role="dialog" aria-modal="true" aria-label="Detail foto struktur KKN">
      <button type="button" class="kkn-lightbox-close" aria-label="Tutup detail foto">
        <i class="ph ph-x" aria-hidden="true"></i>
      </button>
      <div class="kkn-lightbox-content">
        <img id="kkn-lightbox-img" src="" alt="" class="kkn-lightbox-image" />
        <div class="kkn-lightbox-caption">
          <span id="kkn-lightbox-role" class="badge badge-accent"></span>
          <p id="kkn-lightbox-desc" class="text-body-sm text-primary-100 mt-2"></p>
        </div>
      </div>
    </div>
  `;
}

export function initStrukturKKN() {
    initKKNMotion();
    initKKNLightbox();
}

export function cleanupStrukturKKN() {
    cleanupKKNMotion();
    cleanupKKNLightbox();
}

let lightboxCleanup = null;

function initKKNLightbox() {
    const lightbox = document.getElementById('kkn-lightbox');
    const lightboxImg = document.getElementById('kkn-lightbox-img');
    const lightboxRole = document.getElementById('kkn-lightbox-role');
    const lightboxDesc = document.getElementById('kkn-lightbox-desc');
    const closeBtn = document.querySelector('.kkn-lightbox-close');

    if (!lightbox || !lightboxImg) return;

    const cards = Array.from(document.querySelectorAll('.kkn-photo-card'));

    function open(img, role, desc) {
        lightboxImg.src = img;
        lightboxImg.alt = `Foto ${role} Tim KKN Unissula Kelompok 36`;
        if (lightboxRole) lightboxRole.textContent = role;
        if (lightboxDesc) lightboxDesc.textContent = desc;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    const onCardClick = (e) => {
        const card = e.currentTarget;
        open(card.dataset.kknImg, card.dataset.kknRole, card.dataset.kknDesc);
    };

    const onCardKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const card = e.currentTarget;
            open(card.dataset.kknImg, card.dataset.kknRole, card.dataset.kknDesc);
        }
    };

    cards.forEach((card) => {
        card.addEventListener('click', onCardClick);
        card.addEventListener('keydown', onCardKey);
    });

    const onCloseClick = () => close();
    const onBackdropClick = (e) => {
        if (e.target === lightbox) close();
    };
    const onKeyDown = (e) => {
        if (!lightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') close();
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', onCloseClick);
    lightbox.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onKeyDown);

    lightboxCleanup = () => {
        cards.forEach((card) => {
            card.removeEventListener('click', onCardClick);
            card.removeEventListener('keydown', onCardKey);
        });
        if (closeBtn) closeBtn.removeEventListener('click', onCloseClick);
        lightbox.removeEventListener('click', onBackdropClick);
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = '';
    };
}

function cleanupKKNLightbox() {
    if (lightboxCleanup) {
        lightboxCleanup();
        lightboxCleanup = null;
    }
}
