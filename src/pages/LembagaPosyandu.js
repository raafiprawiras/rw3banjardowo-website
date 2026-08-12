/**
 * Halaman Lembaga Posyandu - RW 03 Banjardowo
 */

export function renderLembagaPosyandu() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <div class="flex items-center gap-2 mb-2">
          <a href="/lembaga" class="inline-flex items-center gap-1 text-body-sm text-accent-300 hover:text-white font-medium transition-colors">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Lembaga Desa
          </a>
        </div>
        <span class="badge">Pelayanan Kesehatan Masyarakat</span>
        <h1 class="text-h1 page-title mt-3">Posyandu Melati RW 03</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Pos Pelayanan Terpadu tingkat RW 03 Banjardowo yang melayani pemantauan tumbuh kembang balita, imunisasi, konsultasi kesehatan ibu hamil, dan pemberian makanan tambahan bergizi.
        </p>
      </div>
    </section>

    <!-- Stat Summary Bar -->
    <section class="stat-band">
      <div class="container-site">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="stat-card" data-reveal>
            <div class="stat-label">Ketua Posyandu</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Ibu Rahmawati</div>
            <div class="stat-desc mt-1">Kader Kesehatan RW 03</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 80ms">
            <div class="stat-label">Jadwal Rutin</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Tanggal 15</div>
            <div class="stat-desc mt-1">Setiap Bulan / Pkl 08.00–11.00</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 160ms">
            <div class="stat-label">Jumlah Kader</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">12 Orang</div>
            <div class="stat-desc mt-1">Dari RT 01–06</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 240ms">
            <div class="stat-label">Lokasi</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Halaman Balai RW</div>
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
          <h2 class="text-h2 section-title mt-2">TUPOKSI POSYANDU MELATI</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Tugas Pokok dan Fungsi Pos Pelayanan Terpadu RW 03 Banjardowo dalam pelayanan kesehatan masyarakat.
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
                <span>Penimbangan berat badan, pengukuran tinggi badan, dan lingkar kepala balita secara rutin setiap bulan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pemberian imunisasi dasar lengkap (BCG, DPT, Campak, Polio) dan vitamin A kepada balita sesuai jadwal Kemenkes.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Penyuluhan kesehatan ibu hamil, menyusui, dan pasca persalinan melalui kelas ibu hamil.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pemberian Makanan Tambahan (PMT) bergizi bagi balita gizi kurang dan ibu hamil anemia.</span>
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
                <span>Wadah pelayanan kesehatan dasar yang melibatkan peran aktif kader dan tenaga kesehatan Puskesmas Genuk.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pusat penimbangan dan pemantauan pertumbuhan balita serta deteksi dini stunting di tingkat lingkungan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Media konsultasi gratis tentang kesehatan reproduksi, KB, ASI eksklusif, dan pengasuhan anak sehat.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pusat data kesehatan masyarakat RW 03 yang melaporkan perkembangan gizi balita dan kasus stunting ke Kelurahan.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 5 Meja Layanan -->
        <div class="mt-12">
          <div class="text-center mb-6" data-reveal>
            <span class="badge badge-neutral">Sistem Pelayanan</span>
            <h3 class="text-h3 text-primary-800 mt-2">5 Meja Layanan Posyandu</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div class="card p-5 text-center card-hover" data-reveal>
              <div class="w-12 h-12 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-clipboard" aria-hidden="true"></i>
              </div>
              <h4 class="text-body-sm font-semibold text-ink">Meja 1</h4>
              <p class="text-caption text-ink-muted mt-1">Pendaftaran & Pengisian KIA</p>
            </div>
            <div class="card p-5 text-center card-hover" data-reveal style="--reveal-delay: 60ms">
              <div class="w-12 h-12 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-scale" aria-hidden="true"></i>
              </div>
              <h4 class="text-body-sm font-semibold text-ink">Meja 2</h4>
              <p class="text-caption text-ink-muted mt-1">Penimbangan & Pengukuran</p>
            </div>
            <div class="card p-5 text-center card-hover" data-reveal style="--reveal-delay: 120ms">
              <div class="w-12 h-12 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-chart-bar" aria-hidden="true"></i>
              </div>
              <h4 class="text-body-sm font-semibold text-ink">Meja 3</h4>
              <p class="text-caption text-ink-muted mt-1">Pencatatan & Pengisian KMS</p>
            </div>
            <div class="card p-5 text-center card-hover" data-reveal style="--reveal-delay: 180ms">
              <div class="w-12 h-12 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-chalkboard-teacher" aria-hidden="true"></i>
              </div>
              <h4 class="text-body-sm font-semibold text-ink">Meja 4</h4>
              <p class="text-caption text-ink-muted mt-1">Penyuluhan Gizi & Kesehatan</p>
            </div>
            <div class="card p-5 text-center card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="w-12 h-12 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-first-aid-kit" aria-hidden="true"></i>
              </div>
              <h4 class="text-body-sm font-semibold text-ink">Meja 5</h4>
              <p class="text-caption text-ink-muted mt-1">Layanan Imunisasi & PMT</p>
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
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan Posyandu Melati</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan pengurus dan kader Posyandu Melati RW 03 periode 2024–2027.
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
                  <h3 class="text-h3">Ibu Rahmawati</h3>
                  <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Pengurus Posyandu</p>
                  <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Kegiatan</p>
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
                <h3 class="text-h4">Ibu Dewi Lestari</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Wakil Ketua</p>
                <p class="text-caption text-ink-muted mt-1">Koordinasi Kader</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Ratna Sari</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Sekretaris</p>
                <p class="text-caption text-ink-muted mt-1">Administrasi & Data Balita</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Endang S.</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bendahara</p>
                <p class="text-caption text-ink-muted mt-1">Keuangan & Bantuan Sosial</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 3: Bidang -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Bidang Pelayanan</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-scale" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Lina</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Kader Penimbangan</p>
                <p class="text-caption text-ink-muted mt-1">Penanganan Meja 2</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-syringe" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Putri</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Kader Imunisasi</p>
                <p class="text-caption text-ink-muted mt-1">Penanganan Meja 5</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-apple-logo" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Wati</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Kader Gizi & PMT</p>
                <p class="text-caption text-ink-muted mt-1">Penyuluhan & Distribusi PMT</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="org-avatar">
                <i class="ph ph-chalkboard-teacher" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Sari</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Kader Penyuluhan</p>
                <p class="text-caption text-ink-muted mt-1">Penanganan Meja 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Kerja & Jadwal -->
    <section class="section">
      <div class="container-site max-w-4xl">
        <div class="card p-6 md:p-8" data-reveal>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-primary-600 text-accent-400 flex items-center justify-center text-2xl">
              <i class="ph ph-calendar-check" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="text-h3 text-primary-800">Kegiatan Rutin Posyandu Melati</h3>
              <p class="text-body-sm text-ink-muted">Jadwal pelayanan kesehatan masyarakat RW 03 Banjardowo</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pelayanan Kesehatan Bulanan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Penimbangan balita, pengecekan KMS, pemberian vitamin A, dan pelayanan KB.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Tanggal 15 / Pkl 08.00–11.00
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Kelas Ibu Hamil & Penyuluhan Gizi</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Edukasi ASI eksklusif, MP-ASI bergizi, dan pencegahan stunting bersama kader Puskesmas.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Setiap 2 Minggu / Pkl 09.00
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pemberian PMT Bergizi</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Distribusi makanan tambahan bagi balita gizi kurang dan ibu hamil anemia di wilayah RW 03.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Tanggal 15 / Setiap Bulan
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Penyuluhan Kesehatan Lingkungan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Cara PHBS, pengolahan limbah rumah tangga, dan pencegahan DBD di musim hujan.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Semester I & II
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
