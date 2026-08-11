const UMKM_DATA = [
    {
        name: 'Warung Makan Bu Sutrisno',
        category: 'Kuliner',
        owner: 'Ibu Sutrisno',
        location: 'RT 03',
        desc: 'Menyediakan nasi rames, ayam goreng, dan aneka masakan rumahan khas Jawa yang lezat dan higienis.',
        price: 'Mulai Rp 10.000',
        phone: '6281234567890',
        image: 'https://picsum.photos/seed/warung-makan/600/400',
    },
    {
        name: 'Kerajinan Bambu Pak Joko',
        category: 'Kerajinan',
        owner: 'Bapak Joko Susilo',
        location: 'RT 01',
        desc: 'Memproduksi aneka anyaman bambu tradisional seperti tampah, keranjang belanja, dan hiasan dinding berkualitas tinggi.',
        price: 'Mulai Rp 15.000',
        phone: '6281234567891',
        image: 'https://picsum.photos/seed/bamboo-craft/600/400',
    },
    {
        name: 'Jasa Jahit Rapi Ibu Sri',
        category: 'Jasa',
        owner: 'Ibu Sri Wahyuni',
        location: 'RT 02',
        desc: 'Melayani pembuatan pakaian pria/wanita, seragam sekolah, kebaya, serta permak pakaian dengan jahitan rapi dan cepat.',
        price: 'Harga menyesuaikan',
        phone: '6281234567892',
        image: 'https://picsum.photos/seed/sewing-service/600/400',
    },
    {
        name: 'Toko Kelontong Pak Budi',
        category: 'Sembako',
        owner: 'Bapak Budi Santoso',
        location: 'RT 04',
        desc: 'Menjual berbagai kebutuhan pokok sehari-hari seperti beras, minyak goreng, gula, telur, dan sabun dengan harga bersahabat.',
        price: 'Harga eceran murah',
        phone: '6281234567893',
        image: 'https://picsum.photos/seed/grocery-store/600/400',
    },
    {
        name: 'Bakso & Mie Ayam Melati',
        category: 'Kuliner',
        owner: 'Ibu Rahmawati',
        location: 'RT 02',
        desc: 'Menyajikan bakso urat sapi asli dan mie ayam ceker dengan kuah kaldu gurih tanpa bahan pengawet.',
        price: 'Mulai Rp 12.000',
        phone: '6281234567894',
        image: 'https://picsum.photos/seed/meatball-noodles/600/400',
    },
];

const CATEGORIES = ['Semua', 'Kuliner', 'Kerajinan', 'Jasa', 'Sembako'];

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
            grid.innerHTML = filtered.map(item => `
        <article class="card card-hover umkm-card">
          <div class="umkm-img-wrap">
            <img src="${item.image}" alt="Foto ${item.name}" class="umkm-img" loading="lazy" />
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
                <span class="font-semibold text-primary-700">${item.price}</span>
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
      `).join('');
        }
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
