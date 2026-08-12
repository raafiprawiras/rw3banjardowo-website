/**
 * Halaman Lembaga Karang Taruna - RW 03 Banjardowo
 */

export function renderLembagaKarangTaruna() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <div class="flex items-center gap-2 mb-2">
          <a href="/lembaga" class="inline-flex items-center gap-1 text-body-sm text-accent-300 hover:text-white font-medium transition-colors">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Lembaga Desa
          </a>
        </div>
        <span class="badge">Organisasi Kepemudaan</span>
        <h1 class="text-h1 page-title mt-3">Karang Taruna Tunas Muda</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Wadah pengembangan potensi, kreativitas, kepemimpinan, dan kesetiakawanan sosial generasi muda di lingkungan RW 03 Banjardowo.
        </p>
      </div>
    </section>

    <!-- Stat Summary Bar -->
    <section class="section pt-8 pb-4 bg-surface border-b border-line">
      <div class="container-site">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="stat-card" data-reveal>
            <div class="stat-label">Ketua Karang Taruna</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Mas Aditya P.</div>
            <div class="stat-desc mt-1">Periode 2024–2027</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 80ms">
            <div class="stat-label">Jadwal Pertemuan</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Sabtu Malam</div>
            <div class="stat-desc mt-1">Minggu II / Pkl 19.30 WIB</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 160ms">
            <div class="stat-label">Jumlah Anggota</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">35 Pemuda</div>
            <div class="stat-desc mt-1">Dari RT 01–06</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 240ms">
            <div class="stat-label">Basecamp</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Balai RW 03</div>
            <div class="stat-desc mt-1">Pos Pemuda Banjardowo</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section TUPOKSI -->
    <section class="section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <span class="badge">Tugas & Fungsi</span>
          <h2 class="text-h2 section-title mt-2">TUPOKSI KARANG TARUNA</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Tugas Pokok dan Fungsi Karang Taruna Tunas Muda dalam pembinaan kepemudaan RW 03 Banjardowo.
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
                <span>Menyelenggarakan kegiatan usaha kesejahteraan sosial bagi pemuda dan masyarakat di wilayah RW 03.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Membina dan mengembangkan potensi, kreativitas, kepemimpinan, serta jiwa kewirausahaan generasi muda.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Mencegah timbulnya masalah sosial di kalangan remaja seperti kenakalan remaja dan penyalahgunaan zat berbahaya.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Menggalang persatuan, persaudaraan, dan gotong royong pemuda dalam mendukung program-program pembangunan RW.</span>
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
                <span>Wadah penampungan dan penyaluran bakat olahraga, seni, kebudayaan, serta teknologi digital kepemudaan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pelaksana utama dan panitia penggerak peringatan Hari Kemerdekaan RI dan event kemasyarakatan tingkat RW.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Tim aksi cepat pemuda dalam tanggap bencana, aksi sosial, serta pembersihan saluran air dan kebersihan wilayah.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Pusat komunikasi dan koordinasi pemuda antar-RT 01 sampai RT 06 agar tercipta lingkungan yang rukun dan kondusif.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bidang Kerja Kepemudaan -->
        <div class="mt-12">
          <div class="text-center mb-6" data-reveal>
            <span class="badge badge-neutral">Fokus Bidang</span>
            <h3 class="text-h3 text-primary-800 mt-2">Fokus Pilar Kegiatan Pemuda</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div class="card p-5 card-hover text-center" data-reveal>
              <div class="w-12 h-12 mx-auto rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-trophy" aria-hidden="true"></i>
              </div>
              <h4 class="text-h4 text-primary-800">Olahraga & Rekreasi</h4>
              <p class="text-body-sm text-ink-muted mt-2">Penyelenggaraan turnamen voli, futsal, dan badminton antar-RT secara berkala.</p>
            </div>

            <div class="card p-5 card-hover text-center" data-reveal style="--reveal-delay: 80ms">
              <div class="w-12 h-12 mx-auto rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-palette" aria-hidden="true"></i>
              </div>
              <h4 class="text-h4 text-primary-800">Seni & Kebudayaan</h4>
              <p class="text-body-sm text-ink-muted mt-2">Pengembangan kesenian lokal, musik, serta pertunjukan panggung hiburan HUT RI.</p>
            </div>

            <div class="card p-5 card-hover text-center" data-reveal style="--reveal-delay: 160ms">
              <div class="w-12 h-12 mx-auto rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-hand-heart" aria-hidden="true"></i>
              </div>
              <h4 class="text-h4 text-primary-800">Sosial & Kebencanaan</h4>
              <p class="text-body-sm text-ink-muted mt-2">Bakti sosial, penanganan darurat genangan air, serta santunan warga membutuhkan.</p>
            </div>

            <div class="card p-5 card-hover text-center" data-reveal style="--reveal-delay: 240ms">
              <div class="w-12 h-12 mx-auto rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-3">
                <i class="ph ph-rocket-launch" aria-hidden="true"></i>
              </div>
              <h4 class="text-h4 text-primary-800">Kewirausahaan Pemuda</h4>
              <p class="text-body-sm text-ink-muted mt-2">Pelatihan usaha kreatif digital, pembuatan konten media sosial, dan bazar UMKM.</p>
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
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan Karang Taruna</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan pengurus Karang Taruna Tunas Muda RW 03 periode 2024–2027.
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
                  <h3 class="text-h3">Mas Aditya Pratama</h3>
                  <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Karang Taruna</p>
                  <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Utama Organisasi</p>
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
                <h3 class="text-h4">Mas Rizky Kurniawan</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Wakil Ketua</p>
                <p class="text-caption text-ink-muted mt-1">Koordinator Program Kerja</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mbak Annisa Rahma</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Sekretaris</p>
                <p class="text-caption text-ink-muted mt-1">Surat Menyurat & Arsip</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mas Dimas Setiawan</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bendahara</p>
                <p class="text-caption text-ink-muted mt-1">Keuangan & Dana Usaha</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 3: Koordinator Bidang -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Koordinator Bidang</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-soccer-ball" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mas Farhan</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bid. Olahraga</p>
                <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Turnamen</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-paint-brush" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mbak Dian</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bid. Seni & Budaya</p>
                <p class="text-caption text-ink-muted mt-1">Kepanitiaan Pentas Seni</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-broadcast" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mas Bayu</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bid. Humas & Social</p>
                <p class="text-caption text-ink-muted mt-1">Publikasi & Bakti Sosial</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="org-avatar">
                <i class="ph ph-storefront" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Mas Teguh</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bid. Kewirausahaan</p>
                <p class="text-caption text-ink-muted mt-1">Usaha Kreatif Pemuda</p>
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
              <h3 class="text-h3 text-primary-800">Agenda Kerja Pemuda RW 03</h3>
              <p class="text-body-sm text-ink-muted">Kegiatan rutin dan tahunan Karang Taruna Tunas Muda</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Turnamen Olahraga Antar-RT</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Pertandingan bola voli dan futsal mempererat silaturahmi antar pemuda RT 01-06.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-trophy" aria-hidden="true"></i> Berkala / Tiga Bulan
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Peringatan HUT Kemerdekaan RI</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Penyelenggaraan lomba anak-anak, jalan sehat, malam tirakatan, dan panggung seni warga.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-flag" aria-hidden="true"></i> Bulan Agustus
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Kerja Bakti Pemuda & Penghijauan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Pembersihan selokan, pengecatan fasilitas umum, dan penanaman pohon lingkungan.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-plant" aria-hidden="true"></i> Minggu IV / Bulan
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Aksi Bakti Sosial & Kesiapsiagaan Bencana</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Pembagian paket sembako warga membutuhkan serta kesiapan posko genangan air.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-shield-check" aria-hidden="true"></i> Sesuai Kondisi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
