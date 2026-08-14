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

function photoCard(member, extraClass = '') {
    return `
      <div class="kkn-photo-card ${extraClass}">
        <div class="kkn-photo-frame">
          <img src="${member.img}" alt="Foto ${member.role} Tim KKN Unissula Kelompok 36" class="kkn-photo-img" loading="lazy" />
        </div>
        <div class="kkn-photo-info">
          <h3 class="kkn-photo-role">${member.role}</h3>
          <p class="kkn-photo-desc">${member.desc}</p>
        </div>
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
        <div class="section-header">
          <h2 class="text-h2 section-title">Struktur Organisasi</h2>
          <p class="section-desc">
            Susunan kepengurusan Tim KKN Unissula Kelompok 36 Banjardowo.
          </p>
        </div>

        <div class="kkn-org">

          <div class="kkn-org-level">
            ${photoCard(ORG_DPL, 'kkn-photo-card--dpl')}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level">
            ${photoCard(ORG_KETUA, 'kkn-photo-card--ketua')}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level kkn-org-level--duo">
            ${ORG_DUO.map((m) => photoCard(m)).join('')}
          </div>

          <div class="kkn-org-link" aria-hidden="true"></div>

          <div class="kkn-org-level kkn-org-level--sie">
            ${ORG_SIE.map((m) => photoCard(m)).join('')}
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initStrukturKKN() {
    initKKNMotion();
}

export function cleanupStrukturKKN() {
    cleanupKKNMotion();
}
