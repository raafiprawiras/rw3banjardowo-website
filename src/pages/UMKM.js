import { initReveals } from '../utils/reveal.js';

const UMKM_DATA = [
  {
    id: 'umkm-dipal-donuts',
    name: 'Dipal Donuts',
    category: 'Kuliner',
    owner: 'Dipal Donuts',
    location: 'RT 04',
    desc: 'Donat empuk dan lezat buatan rumahan dengan aneka topping cokelat, gula halus, dan keju. Diproduksi segar setiap hari.',
    price: 'Mulai dari Harga Rp 2.000',
    phone: '6285641385171',
    image: '/assets/umkm/donat1.jpg',
    images: [
      '/assets/umkm/donat1.jpg',
      '/assets/umkm/donat2.jpg',
      '/assets/umkm/donat3.jpg',
      '/assets/umkm/donat4.jpg',
    ],
  },
  {
    id: 'kerajinan-bambu-joko',
    name: 'Kerajinan Bambu Pak Joko',
    category: 'Kerajinan',
    owner: 'Bapak Joko Susilo',
    location: 'RT 01',
    desc: 'Memproduksi aneka anyaman bambu tradisional seperti tampah, keranjang belanja, dan hiasan dinding berkualitas tinggi.',
    price: 'Mulai Rp 15.000',
    phone: '6281234567891',
    image: 'https://picsum.photos/seed/bamboo-craft/600/400',
    images: [
      'https://picsum.photos/seed/bamboo-craft/1200/800',
      'https://picsum.photos/seed/bamboo-craft-baskets/1200/800',
      'https://picsum.photos/seed/bamboo-craft-workshop/1200/800',
    ],
  },
  {
    id: 'jasa-jahit-sri',
    name: 'Jasa Jahit Rapi Ibu Sri',
    category: 'Jasa',
    owner: 'Ibu Sri Wahyuni',
    location: 'RT 02',
    desc: 'Melayani pembuatan pakaian pria/wanita, seragam sekolah, kebaya, serta permak pakaian dengan jahitan rapi dan cepat.',
    price: 'Harga menyesuaikan',
    phone: '6281234567892',
    image: 'https://picsum.photos/seed/sewing-service/600/400',
    images: [
      'https://picsum.photos/seed/sewing-service/1200/800',
      'https://picsum.photos/seed/sewing-fabric/1200/800',
      'https://picsum.photos/seed/sewing-machine/1200/800',
    ],
  },
  {
    id: 'umkm-busa-bapak-agus',
    name: 'Busa Bapak Agus',
    category: 'Kerajinan',
    owner: 'Bapak Agus',
    location: 'RT 04',
    desc: 'Memproduksi kasur dan springbed berkualitas dengan bahan pilihan, jahitan rapi, dan harga terjangkau. Melayani pesanan custom ukuran.',
    price: 'Harga Hubungi Penjual',
    phone: '6281325938451',
    image: '/assets/umkm/umkm-kasur1.jpg',
    images: [
      '/assets/umkm/umkm-kasur1.jpg',
      '/assets/umkm/umkm-kasur2.jpg',
      '/assets/umkm/umkm-kasur3.jpg',
      '/assets/umkm/umkm-kasur4.jpg',
    ],
  },
  {
    id: 'bakso-mie-melati',
    name: 'Bakso & Mie Ayam Melati',
    category: 'Kuliner',
    owner: 'Ibu Rahmawati',
    location: 'RT 02',
    desc: 'Menyajikan bakso urat sapi asli dan mie ayam ceker dengan kuah kaldu gurih tanpa bahan pengawet.',
    price: 'Mulai Rp 12.000',
    phone: '6281234567894',
    image: 'https://picsum.photos/seed/meatball-noodles/600/400',
    images: [
      'https://picsum.photos/seed/meatball-noodles/1200/800',
      'https://picsum.photos/seed/meatball-bowl/1200/800',
      'https://picsum.photos/seed/meatball-soup/1200/800',
    ],
  },
];

const CATEGORIES = ['Semua', 'Kuliner', 'Kerajinan', 'Jasa', 'Sembako'];

export { UMKM_DATA, CATEGORIES };

export function umkmCardMarkup(item) {
  const images = item.images && item.images.length ? item.images : [item.image];
  const slides = images.map((src, i) => `
            <img src="${src}" alt="Foto ${i + 1} ${item.name}" class="umkm-img" loading="lazy" />
          `).join('');
  const dots = images.map((_, i) => `
            <button type="button" class="umkm-carousel-dot${i === 0 ? ' is-active' : ''}" data-umkm-dot="${i}" aria-label="Foto ${i + 1}"></button>
          `).join('');

  return `
        <article class="card card-hover umkm-card" data-umkm-id="${item.id}" data-reveal>
          <div class="umkm-img-wrap" data-umkm-carousel>
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
            <div class="umkm-carousel-dots">${dots}</div>
            <span class="umkm-carousel-count">1 / ${images.length}</span>` : ''}
            <span class="badge umkm-card-badge">${item.category}</span>
          </div>
          <div class="umkm-card-body">
            <h3 class="text-h3 umkm-card-title">${item.name}</h3>
            <p class="text-body-sm text-ink-muted mt-2 line-clamp-3">${item.desc}</p>

            <div class="umkm-meta-list mt-4">
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

            <div class="umkm-card-footer mt-6">
              <a href="https://wa.me/${item.phone}?text=Halo%20${encodeURIComponent(item.name)}%2C%20saya%20tertarik%20dengan%20produk%2Fjasa%20Anda." class="btn btn-primary w-full" target="_blank" rel="noopener noreferrer">
                <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
                Hubungi Penjual
              </a>
            </div>
          </div>
        </article>
      `;
}

export function renderUMKM() {
  return `
    <section class="section umkm-page">
      <div class="container-site">
        <div class="section-header umkm-header">
          <span class="badge">Katalog Usaha</span>
          <h1 class="text-h1 section-title">UMKM Desa RW 3</h1>
          <p class="section-desc">
            Dukung perekonomian lokal dengan berbelanja di usaha mikro, kecil, dan menengah milik warga RW 3 Banjardowo.
          </p>
        </div>

        <!-- Search & Filter Controls -->
        <div class="umkm-controls mt-12">
          <div class="umkm-search-wrap">
            <i class="ph ph-magnifying-glass umkm-search-icon" aria-hidden="true"></i>
            <input type="text" id="umkm-search" class="input umkm-search-input" placeholder="Cari nama usaha atau produk..." aria-label="Cari UMKM" />
          </div>
          <div class="umkm-filters" role="group" aria-label="Filter kategori UMKM">
            ${CATEGORIES.map((cat, idx) => `
              <button class="btn btn-secondary btn-sm umkm-filter-btn ${idx === 0 ? 'is-active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Grid List -->
        <div id="umkm-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <!-- Cards will be rendered dynamically -->
        </div>

        <!-- Empty State -->
        <div id="umkm-empty" class="umkm-empty-state card hidden" role="status">
          <div class="umkm-empty-icon">
            <i class="ph ph-storefront" aria-hidden="true"></i>
          </div>
          <h2 class="text-h3 mt-4">Usaha tidak ditemukan</h2>
          <p class="text-body-sm text-ink-muted mt-2">
            Coba cari dengan kata kunci lain atau pilih kategori yang berbeda.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function initUMKM() {
  const searchInput = document.getElementById('umkm-search');
  const filterBtns = document.querySelectorAll('.umkm-filter-btn');
  const grid = document.getElementById('umkm-grid');
  const emptyState = document.getElementById('umkm-empty');

  if (!grid) return;

  let activeCategory = 'Semua';
  let searchQuery = '';

  function renderCards() {
    const filtered = UMKM_DATA.filter(item => {
      const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(umkmCardMarkup).join('');
    }

    initReveals();
  }

  // Search listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }

  // Filter listener
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeCategory = btn.getAttribute('data-category');
      renderCards();
    });
  });

  // Initial render
  renderCards();
}
