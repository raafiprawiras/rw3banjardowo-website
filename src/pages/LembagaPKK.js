/**
 * Halaman Lembaga PKK - RW 03 Banjardowo
 */

export function renderLembagaPKK() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <div class="flex items-center gap-2 mb-2">
          <a href="/lembaga" class="inline-flex items-center gap-1 text-body-sm text-accent-300 hover:text-white font-medium transition-colors">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Lembaga Desa
          </a>
        </div>
        <span class="badge">Lembaga Kemasyarakatan Desa</span>
        <h1 class="text-h1 page-title mt-3">PKK (Pemberdayaan Kesejahteraan Keluarga)</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Wadah partisipasi perempuan di RW 03 Banjardowo dalam meningkatkan kesejahteraan keluarga, kesehatan, pendidikan, serta ketahanan ekonomi warga.
        </p>
      </div>
    </section>

    <!-- Stat Summary Bar -->
    <section class="section pt-8 pb-4 bg-surface border-b border-line">
      <div class="container-site">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="stat-card" data-reveal>
            <div class="stat-label">Ketua PKK</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Ibu Sutrisno</div>
            <div class="stat-desc mt-1">Periode 2024–2029</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 80ms">
            <div class="stat-label">Jadwal Pertemuan</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Minggu I</div>
            <div class="stat-desc mt-1">Pukul 09.00 WIB / Bulan</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 160ms">
            <div class="stat-label">Kelompok Kerja</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">4 Pokja</div>
            <div class="stat-desc mt-1">Pokja I - Pokja IV</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 240ms">
            <div class="stat-label">Lokasi Kegiatan</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Balai RW 03</div>
            <div class="stat-desc mt-1">Banjardowo, Genuk</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section TUPOKSI -->
    <section class="section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <span class="badge">Tugas & Fungsi</span>
          <h2 class="text-h2 section-title mt-2">TUPOKSI PKK RW 03</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Tugas Pokok dan Fungsi Pengurus Pemberdayaan Kesejahteraan Keluarga di lingkungan RW 03 Banjardowo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <!-- Card Tugas Pokok -->
          <div class="card p-6 card-hover" data-reveal>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xl font-bold">
                <i class="ph ph-clipboard-text" aria-hidden="true"></i>
              </div>
              <h3 class="text-h3 text-primary-800">Tugas Pokok</h3>
            </div>
            <ul class="lembaga-activity-list">
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Menyusun rencana kerja PKK RW 03 sesuai dengan hasil Rakerda dan kebutuhan masyarakat lingkungan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Melaksanakan dan memasyarakatkan 10 Program Pokok PKK di tingkat lingkungan RT 01 hingga RT 06.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Menggerakkan dan membina peran serta masyarakat, khususnya kaum perempuan, dalam pembangunan kesejahteraan keluarga.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Melakukan koordinasi, konsultasi, dan fasilitasi kegiatan pemberdayaan perempuan dengan TP PKK Kelurahan dan Balai RW.</span>
              </li>
            </ul>
          </div>

          <!-- Card Fungsi Utama -->
          <div class="card p-6 card-hover" data-reveal style="--reveal-delay: 100ms">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center text-xl font-bold">
                <i class="ph ph-target" aria-hidden="true"></i>
              </div>
              <h3 class="text-h3 text-primary-800">Fungsi Utama</h3>
            </div>
            <ul class="lembaga-activity-list">
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Wadah pembinaan partisipasi perempuan dan peningkatan kualitas hidup serta kesehatan keluarga di RW 03.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Fasilitator penyuluhan gizi balita, kesehatan reproduksi, kebersihan lingkungan, dan ketahanan keluarga.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Penampung dan penyalur aspirasi warga terkait pengembangan ekonomi kreatif dan keterampilan UMKM perempuan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pengelola dan penggerak kegiatan Taman Obat Keluarga (TOGA) serta kegiatan sosial kemasyarakatan warga.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 10 Program Pokok PKK -->
        <div class="mt-12">
          <div class="text-center mb-6" data-reveal>
            <span class="badge badge-neutral">Program Kerja Dasar</span>
            <h3 class="text-h3 text-primary-800 mt-2">10 Program Pokok PKK</h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div class="card p-4 text-center card-hover" data-reveal>
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-heart" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">1. Pengamalan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Pancasila</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 40ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-hands-clasp" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">2. Kerjasama</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Gotong Royong</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-bowl-food" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">3. Pemenuhan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Pangan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 120ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-t-shirt" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">4. Kelayakan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Sandang</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-house-line" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">5. Tatalaksana</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Perumahan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 200ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">6. Keterampilan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Pendidikan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-first-aid" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">7. Pembinaan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Kesehatan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 280ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-storefront" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">8. Penguatan</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Koperasi</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 320ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-tree-evergreen" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">9. Kelestarian</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Lingkungan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 360ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-chart-line-up" aria-hidden="true"></i>
              </div>
              <p class="text-caption text-ink-muted">10. Tata Kelola</p>
              <p class="text-body-sm font-semibold text-ink mt-1">Perencanaan Sehat</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section STRUKTUR KEPENGURUSAN -->
    <section class="section bg-surface">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <span class="badge">Bagan Organisasi</span>
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan PKK RW 03</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan pengurus PKK RW 03 Banjardowo periode 2024–2029.
          </p>
        </div>

        <div class="org-chart-container mt-8">
          <!-- Level 1: Ketua -->
          <div class="org-level text-center" data-reveal>
            <div class="org-card-wrapper mx-auto">
              <div class="card org-card primary-leader">
                <div class="org-avatar">
                  <i class="ph ph-user-circle-gear" aria-hidden="true"></i>
                </div>
                <div class="org-info">
                  <h3 class="text-h3">Ibu Sutrisno</h3>
                  <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua TP PKK RW 03</p>
                  <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Umum</p>
                </div>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 2: Wakil, Sekretaris, Bendahara -->
          <div class="org-level grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Mulyani</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Wakil Ketua</p>
                <p class="text-caption text-ink-muted mt-1">Koordinasi Antar Pokja</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Nur Hayati</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Sekretaris</p>
                <p class="text-caption text-ink-muted mt-1">Administrasi & Notulensi</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Siti Aminah</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bendahara</p>
                <p class="text-caption text-ink-muted mt-1">Keuangan & Kas Organisasi</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 3: Ketua Pokja I - IV -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Kelompok Kerja (Pokja)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-hands-clasp" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Wahyuni</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Pokja I</p>
                <p class="text-caption text-ink-muted mt-1">Pancasila & Gotong Royong</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-book-open" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Sri Supatmi</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Pokja II</p>
                <p class="text-caption text-ink-muted mt-1">Pendidikan & Koperasi</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-house" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Retno</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Pokja III</p>
                <p class="text-caption text-ink-muted mt-1">Pangan, Sandang, Perumahan</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="org-avatar">
                <i class="ph ph-heart-beat" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Rahmawati</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Pokja IV</p>
                <p class="text-caption text-ink-muted mt-1">Kesehatan & Lingkungan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Kerja Utama & Jadwal -->
    <section class="section">
      <div class="container-site max-w-4xl">
        <div class="card p-6 md:p-8" data-reveal>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-600 text-accent-400 flex items-center justify-center text-2xl">
              <i class="ph ph-calendar-check" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-h3 text-primary-800">Kegiatan Rutin PKK RW 03</h3>
              <p class="text-body-sm text-ink-muted">Program unggulan dan agenda berkala warga perempuan RW 03</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pertemuan Rutin Bulanan & Arisan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Evaluasi program kerja, penyampaian informasi desa, dan silaturahmi warga.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Minggu I / Pkl 09.00
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Penyuluhan Kesehatan & Pembinaan Gizi</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Kerjasama dengan Posyandu dan Puskesmas Genuk dalam pencegahan stunting.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Tanggal 15 / Bulan
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pelatihan Keterampilan Usaha Mikro (UP2K)</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Pelatihan pembuatan olahan kuliner, kerajinan tangan, dan tata kelola keuangan rumah tangga.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Setiap 2 Bulan
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pengelolaan Kebun Taman Obat Keluarga (TOGA)</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Penanaman dan perawatan tanaman obat serta sayuran hijau di area Balai RW 03.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Minggu II & IV
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
