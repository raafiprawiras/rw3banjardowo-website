/**
 * Halaman Lembaga Desa - Hub Overview (RW 03 Banjardowo)
 */

const LEMBAGA_DATA = [
    {
        id: 'pkk',
        name: 'PKK (Pemberdayaan Kesejahteraan Keluarga)',
        leader: 'Ibu Sutrisno',
        desc: 'Wadah partisipasi perempuan dalam pembangunan kesejahteraan keluarga dan masyarakat di wilayah RW 03.',
        activities: [
            'Pertemuan rutin bulanan dan arisan warga',
            'Penyuluhan kesehatan keluarga dan gizi balita',
            'Pelatihan keterampilan usaha mikro perempuan',
            'Pengelolaan taman obat keluarga (TOGA) wilayah',
        ],
        schedule: 'Hari Minggu pertama setiap bulan, pukul 09.00 WIB',
        icon: 'ph-users-three',
        href: '/lembaga/pkk',
    },
    {
        id: 'karang-taruna',
        name: 'Karang Taruna',
        leader: 'Mas Aditya',
        desc: 'Organisasi kepemudaan sebagai wadah pengembangan diri, kreativitas, dan kepedulian sosial generasi muda RW 03.',
        activities: [
            'Penyelenggaraan turnamen olahraga antar RT',
            'Koordinasi kerja bakti pemuda dan penghijauan',
            'Kepanitiaan peringatan HUT RI tingkat RW',
            'Kegiatan bakti sosial dan bantuan kebencanaan',
        ],
        schedule: 'Hari Sabtu malam minggu kedua, pukul 19.30 WIB',
        icon: 'ph-soccer-ball',
        href: '/lembaga/karang-taruna',
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
        href: '/lembaga/posyandu',
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
        href: '/lembaga/linmas',
    },
];

export function renderLembaga() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <span class="badge">Lembaga Kemasyarakatan</span>
        <h1 class="text-h1 page-title mt-3">Lembaga Desa RW 03</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Organisasi kemasyarakatan di RW 03 Banjardowo yang aktif bergerak dalam pelayanan sosial, kepemudaan, kesehatan, dan keamanan.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <div class="section-header text-center mb-8" data-reveal>
          <span class="badge">Daftar Lembaga</span>
          <h2 class="text-h2 section-title mt-2">Pilih Lembaga untuk Melihat Detail</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Klik salah satu kartu lembaga di bawah untuk melihat informasi lengkap mengenai Tugas Pokok & Fungsi (Tupoksi) beserta Struktur Kepengurusan.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${LEMBAGA_DATA.map((lem, idx) => `
            <a href="${lem.href}" class="card card-hover lembaga-hub-card p-0 overflow-hidden group" data-reveal style="--reveal-delay: ${idx * 80}ms">
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-14 h-14 rounded-xl bg-primary-600 text-accent-400 flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110">
                    <i class="ph ${lem.icon}" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 class="text-h3 text-primary-800 group-hover:text-primary-600 transition-colors">${lem.name}</h3>
                    <p class="text-body-sm text-ink-muted mt-0.5">Ketua: <strong class="text-ink">${lem.leader}</strong></p>
                  </div>
                </div>

                <p class="text-body text-ink-muted leading-relaxed">${lem.desc}</p>

                <hr class="divider my-4" />

                <div>
                  <h4 class="text-body-sm font-semibold text-ink mb-2">Kegiatan Utama</h4>
                  <ul class="space-y-1.5">
                    ${lem.activities.map(act => `
                      <li class="flex items-start gap-2 text-body-sm text-ink-muted">
                        <i class="ph ph-check-circle text-primary-600 mt-0.5 shrink-0" aria-hidden="true"></i>
                        <span>${act}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="flex items-center justify-between mt-6 pt-4 border-t border-line">
                  <div class="lembaga-schedule-card">
                    <i class="ph ph-calendar-blank" aria-hidden="true"></i>
                    <span>${lem.schedule}</span>
                  </div>
                  <span class="inline-flex items-center gap-1 text-body-sm text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    Selengkapnya <i class="ph ph-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initLembaga() {
    // Hub page — no special init required
}
