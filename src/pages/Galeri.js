import { initReveals } from '../utils/reveal.js';

const GALLERY_DATA = [
    {
        id: 1,
        title: 'Kerja Bakti Warga RW 03',
        category: 'Kerja Bakti',
        date: '3 Agustus 2026',
        image: '/assets/galeri/galeri1.jpg',
        desc: 'Warga RW 03 Banjardowo bergotong royong dalam kegiatan kerja bakti membersihkan lingkungan.',
    },
    {
        id: 2,
        title: 'Posyandu Balita RW 03',
        category: 'Posyandu',
        date: '28 Juli 2026',
        image: '/assets/galeri/galeri2.jpg',
        desc: 'Pemeriksaan kesehatan rutin dan pemberian makanan tambahan bergizi untuk balita di Balai RW.',
    },
    {
        id: 3,
        title: 'Gotong Royong Bersihkan Lingkungan',
        category: 'Kerja Bakti',
        date: '10 Agustus 2026',
        image: '/assets/galeri/galeri3.jpg',
        desc: 'Kegiatan gotong royong warga membersihkan selokan dan pekarangan di kawasan RW 03.',
    },
    {
        id: 4,
        title: 'Pembinaan oleh Tim KKN',
        category: 'Kegiatan KKN',
        date: '5 Agustus 2026',
        image: '/assets/galeri/galeri4.jpg',
        desc: 'Tim KKN memberikan pembinaan dan pendampingan kepada warga RW 03 Banjardowo.',
    },
    {
        id: 5,
        title: 'Pertemuan Warga RW 03',
        category: 'Kegiatan Warga',
        date: '20 Juli 2026',
        image: '/assets/galeri/galeri5.jpg',
        desc: 'Pertemuan rutin warga untuk membahas program kerja dan kegiatan kemasyarakatan.',
    },
    {
        id: 6,
        title: 'Pengecatan Fasilitas Umum',
        category: 'Kerja Bakti',
        date: '1 Agustus 2026',
        image: '/assets/galeri/galeri6.jpg',
        desc: 'Pengecatan ulang fasilitas umum agar terlihat bersih, rapi, dan nyaman untuk warga.',
    },
];

const CATEGORIES = ['Semua', 'Kerja Bakti', 'Posyandu', 'Kegiatan KKN', 'Kegiatan Warga'];

export function renderGaleri() {
    return `
    <section class="section gallery-page">
      <div class="container-site">
        <div class="section-header gallery-header">
          <span class="badge">Dokumentasi</span>
          <h1 class="text-h1 section-title">Galeri Kegiatan</h1>
          <p class="section-desc">
            Kumpulan foto dokumentasi berbagai kegiatan sosial, gotong royong, kesehatan, dan kolaborasi warga di RW 3 Banjardowo.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="gallery-controls mt-12">
          <div class="gallery-filters" role="group" aria-label="Filter kategori galeri">
            ${CATEGORIES.map((cat, idx) => `
              <button class="btn btn-secondary btn-sm gallery-filter-btn ${idx === 0 ? 'is-active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Gallery Grid -->
        <div id="gallery-grid" class="gallery-grid mt-12">
          <!-- Items will be rendered dynamically -->
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-label="Detail Foto">
      <button class="lightbox-close" aria-label="Tutup detail foto">
        <i class="ph ph-x" aria-hidden="true"></i>
      </button>
      <button class="lightbox-nav lightbox-prev" aria-label="Foto sebelumnya">
        <i class="ph ph-caret-left" aria-hidden="true"></i>
      </button>
      <button class="lightbox-nav lightbox-next" aria-label="Foto berikutnya">
        <i class="ph ph-caret-right" aria-hidden="true"></i>
      </button>
      <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="" class="lightbox-image" />
        <div class="lightbox-caption">
          <span id="lightbox-category" class="badge badge-accent"></span>
          <h2 id="lightbox-title" class="text-h3 text-bone mt-2"></h2>
          <p id="lightbox-desc" class="text-body-sm text-primary-100 mt-1"></p>
          <p id="lightbox-date" class="text-caption text-primary-200 mt-2"></p>
        </div>
      </div>
    </div>
  `;
}

export function initGaleri() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const grid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxDate = document.getElementById('lightbox-date');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!grid) return;

    let activeCategory = 'Semua';
    let currentFilteredItems = [...GALLERY_DATA];
    let currentIdx = 0;

    function renderGallery() {
        currentFilteredItems = GALLERY_DATA.filter(item => {
            return activeCategory === 'Semua' || item.category === activeCategory;
        });

        grid.innerHTML = currentFilteredItems.map((item, idx) => `
      <article class="gallery-item card card-hover" data-idx="${idx}" data-reveal style="--reveal-delay: ${(idx % 3) * 80}ms">
        <div class="gallery-img-wrap">
          <img src="${item.image}" alt="Foto ${item.title}" class="gallery-img" loading="lazy" />
          <div class="gallery-overlay">
            <span class="badge gallery-item-badge">${item.category}</span>
            <h3 class="text-h4 text-bone mt-2">${item.title}</h3>
            <p class="text-caption text-primary-100 mt-1">${item.date}</p>
          </div>
        </div>
      </article>
    `).join('');

        initReveals();

        // Add click listeners to items
        grid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.getAttribute('data-idx'), 10);
                openLightbox(idx);
            });
        });
    }

    function openLightbox(idx) {
        currentIdx = idx;
        const item = currentFilteredItems[currentIdx];
        if (!item) return;

        lightboxImg.src = item.image;
        lightboxImg.alt = `Foto ${item.title}`;
        lightboxCategory.textContent = item.category;
        lightboxTitle.textContent = item.title;
        lightboxDesc.textContent = item.desc;
        lightboxDate.textContent = item.date;

        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function showPrev() {
        if (currentFilteredItems.length <= 1) return;
        currentIdx = (currentIdx - 1 + currentFilteredItems.length) % currentFilteredItems.length;
        openLightbox(currentIdx);
    }

    function showNext() {
        if (currentFilteredItems.length <= 1) return;
        currentIdx = (currentIdx + 1) % currentFilteredItems.length;
        openLightbox(currentIdx);
    }

    // Filter listener
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            activeCategory = btn.getAttribute('data-category');
            renderGallery();
        });
    });

    // Lightbox listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    // Close on outside click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && !lightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        }
    });

    // Initial render
    renderGallery();
}
