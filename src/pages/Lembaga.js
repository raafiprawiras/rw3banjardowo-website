const LEMBAGA_DATA = [
    {
        id: 'pkk',
        name: 'PKK (Pemberdayaan Kesejahteraan Keluarga)',
        leader: 'Ibu Sutrisno',
        desc: 'Wadah partisipasi perempuan dalam pembangunan kesejahteraan keluarga dan masyarakat di wilayah RW 3.',
        activities: [
            'Pertemuan rutin bulanan dan arisan warga',
            'Penyuluhan kesehatan keluarga dan gizi balita',
            'Pelatihan keterampilan usaha mikro perempuan',
            'Pengelolaan taman obat keluarga (TOGA) wilayah',
        ],
        schedule: 'Hari Minggu pertama setiap bulan, pukul 09.00 WIB',
        icon: 'ph-users-three',
    },
    {
        id: 'karang-taruna',
        name: 'Karang Taruna',
        leader: 'Mas Aditya',
        desc: 'Organisasi kepemudaan sebagai wadah pengembangan diri, kreativitas, dan kepedulian sosial generasi muda RW 3.',
        activities: [
            'Penyelenggaraan turnamen olahraga antar RT',
            'Koordinasi kerja bakti pemuda dan penghijauan',
            'Kepanitiaan peringatan HUT RI tingkat RW',
            'Kegiatan bakti sosial dan bantuan kebencanaan',
        ],
        schedule: 'Hari Sabtu malam minggu kedua, pukul 19.30 WIB',
        icon: 'ph-soccer-ball',
    },
    {
        id: 'posyandu',
        name: 'Posyandu Melati',
        leader: 'Ibu Rahmawati',
        desc: 'Pusat pelayanan kesehatan terpadu tingkat RW untuk pemantauan tumbuh kembang balita dan kesehatan ibu.',
        activities: [
            'Penimbangan berat badan dan pengukuran tinggi balita',
            'Pemberian imunisasi dasar lengkap dan vitamin A',
            'Pemberian Makanan Tambahan (PMT) bergizi',
            'Konsultasi kesehatan ibu hamil dan menyusui',
        ],
        schedule: 'Tanggal 15 setiap bulan, pukul 08.00 - 11.00 WIB',
        icon: 'ph-heart-beat',
    },
    {
        id: 'linmas',
        name: 'Linmas (Perlindungan Masyarakat)',
        leader: 'Bapak Ahmad Fauzi',
        desc: 'Satuan perlindungan masyarakat yang bertugas menjaga keamanan, ketertiban, dan penanggulangan bencana di wilayah.',
        activities: [
            'Koordinasi jadwal ronda malam warga di pos kamling',
            'Pengamanan acara keagamaan dan hajatan warga',
            'Kesiapsiagaan penanganan banjir dan darurat wilayah',
            'Patroli keliling berkala di lingkungan RT 01-06',
        ],
        schedule: 'Setiap malam sesuai jadwal piket ronda RT',
        icon: 'ph-shield',
    },
];

export function renderLembaga() {
    return `
    <section class="section lembaga-page">
      <div class="container-site">
        <div class="section-header lembaga-header">
          <span class="badge">Lembaga Kemasyarakatan</span>
          <h1 class="text-h1 section-title">Lembaga Desa</h1>
          <p class="section-desc">
            Organisasi kemasyarakatan di RW 3 Banjardowo yang aktif bergerak dalam pelayanan sosial, kepemudaan, kesehatan, dan keamanan.
          </p>
        </div>

        <!-- Interactive Tabs Layout -->
        <div class="lembaga-layout mt-12">
          <!-- Tabs Navigation -->
          <nav class="lembaga-tabs-nav" aria-label="Daftar lembaga">
            <ul class="lembaga-tabs-list">
              ${LEMBAGA_DATA.map((lem, idx) => `
                <li>
                  <button class="lembaga-tab-btn ${idx === 0 ? 'is-active' : ''}" data-target="${lem.id}" role="tab" aria-selected="${idx === 0 ? 'true' : 'false'}" aria-controls="panel-${lem.id}">
                    <span class="lembaga-tab-icon-wrap">
                      <i class="ph ${lem.icon}" aria-hidden="true"></i>
                    </span>
                    <span class="lembaga-tab-name">${lem.name.split(' (')[0]}</span>
                  </button>
                </li>
              `).join('')}
            </ul>
          </nav>

          <!-- Panels Container -->
          <div class="lembaga-panels">
            ${LEMBAGA_DATA.map((lem, idx) => `
              <article id="panel-${lem.id}" class="card lembaga-panel ${idx === 0 ? '' : 'hidden'}" role="tabpanel" aria-labelledby="tab-${lem.id}">
                <div class="lembaga-panel-header">
                  <div class="lembaga-panel-icon-wrap">
                    <i class="ph ${lem.icon}" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2 class="text-h2 text-primary-800">${lem.name}</h2>
                    <p class="text-body-sm text-ink-muted mt-2">Ketua: <strong class="text-ink">${lem.leader}</strong></p>
                  </div>
                </div>

                <hr class="divider my-6" />

                <div class="lembaga-panel-body">
                  <div class="lembaga-info-block">
                    <h3 class="text-h4 text-ink">Tentang Lembaga</h3>
                    <p class="text-body text-ink-muted mt-2">${lem.desc}</p>
                  </div>

                  <div class="lembaga-info-block mt-6">
                    <h3 class="text-h4 text-ink">Kegiatan Utama</h3>
                    <ul class="lembaga-activity-list mt-3">
                      ${lem.activities.map(act => `
                        <li>
                          <i class="ph ph-check-circle" aria-hidden="true"></i>
                          <span>${act}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <div class="lembaga-info-block mt-6">
                    <h3 class="text-h4 text-ink">Jadwal Kegiatan</h3>
                    <div class="lembaga-schedule-card mt-3">
                      <i class="ph ph-calendar-blank" aria-hidden="true"></i>
                      <span>${lem.schedule}</span>
                    </div>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initLembaga() {
    const tabBtns = document.querySelectorAll('.lembaga-tab-btn');
    const panels = document.querySelectorAll('.lembaga-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset active states
            tabBtns.forEach(b => {
                b.classList.remove('is-active');
                b.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => p.classList.add('hidden'));

            // Set active state
            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');
            const targetId = btn.getAttribute('data-target');
            const targetPanel = document.getElementById(`panel-${targetId}`);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
            }
        });
    });
}
