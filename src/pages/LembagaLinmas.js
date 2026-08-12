/**
 * Halaman Lembaga Linmas - RW 03 Banjardowo
 */

export function renderLembagaLinmas() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <div class="flex items-center gap-2 mb-2">
          <a href="/lembaga" class="inline-flex items-center gap-1 text-body-sm text-accent-300 hover:text-white font-medium transition-colors">
            <i class="ph ph-arrow-left" aria-hidden="true"></i> Lembaga Desa
          </a>
        </div>
        <span class="badge">Keamanan & Ketertiban Masyarakat</span>
        <h1 class="text-h1 page-title mt-3">Linmas (Perlindungan Masyarakat)</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Satuan Perlindungan Masyarakat di lingkungan RW 03 Banjardowo yang bertugas menjaga keamanan, ketertiban, dan kesiapsiagaan penanggulangan bencana warga.
        </p>
      </div>
    </section>

    <!-- Stat Summary Bar -->
    <section class="section pt-8 pb-4 bg-surface border-b border-line">
      <div class="container-site">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="stat-card" data-reveal>
            <div class="stat-label">Ketua Linmas</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Bpk. Ahmad Fauzi</div>
            <div class="stat-desc mt-1">Koordinator Keamanan</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 80ms">
            <div class="stat-label">Jadwal Ronda</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">Setiap Malam</div>
            <div class="stat-desc mt-1">Sesuai Jadwal Piket RT</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 160ms">
            <div class="stat-label">Pos Kamling</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">6 Pos</div>
            <div class="stat-desc mt-1">1 Pos per RT</div>
          </div>
          <div class="stat-card" data-reveal style="--reveal-delay: 240ms">
            <div class="stat-label">Jumlah Anggota</div>
            <div class="stat-value text-h3 text-primary-700 mt-1">24 Personil</div>
            <div class="stat-desc mt-1">4 Orang per RT</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section TUPOKSI -->
    <section class="section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <span class="badge">Tugas & Fungsi</span>
          <h2 class="text-h2 section-title mt-2">TUPOKSI LINMAS RW 03</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Tugas Pokok dan Fungsi Satuan Perlindungan Masyarakat dalam menjaga keamanan, ketertiban, dan kesiapsiagaan bencana RW 03 Banjardowo.
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
                <span>Melaksanakan ronda malam secara rutin di Pos Kamling RT 01–06 untuk menjaga keamanan warga dan mencegah kejahatan lingkungan.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Mengkoordinasikan jadwal piket ronda warga setiap malam agar tercipta rasa aman di seluruh wilayah lingkungan RW 03.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Melakukan pengamanan acara-acara keagamaan, hajatan warga, dan kegiatan kemasyarakatan lainnya di lingkungan RW 03.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Menjadi garda terdepan dalam kesiapsiagaan penanganan banjir, genangan air, dan bencana alam lainnya di wilayah RW 03.</span>
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
                <span>Wadah pelayanan keamanan dan ketertiban masyarakat di tingkat RW yang berkoordinasi dengan Bhabinkamtibmas.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Patroli keliling berkala untuk memastikan kondisi lingkungan RT 01 hingga RT 06 dalam keadaan aman dan kondusif.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Posko darurat bencana yang mengkoordinasikan evakuasi warga, distribusi bantuan, dan laporan ke Kelurahan saat banjir.</span>
              </li>
              <li>
                <i class="ph ph-check-circle" aria-hidden="true"></i>
                <span>Penerima dan penyampai informasi penting dari pemerintah Kelurahan, Polsek, dan Koramil kepada warga RW 03.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Area Tanggung Jawab -->
        <div class="mt-12">
          <div class="text-center mb-6" data-reveal>
            <span class="badge badge-neutral">Area Tanggung Jawab</span>
            <h3 class="text-h3 text-primary-800 mt-2">Pos Kamling & Wilayah Ronda</h3>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div class="card p-4 text-center card-hover" data-reveal>
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 01</p>
              <p class="text-caption text-ink-muted mt-1">Pos Depan Masjid</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 60ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 02</p>
              <p class="text-caption text-ink-muted mt-1">Pos Samping Balai RW</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 120ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 03</p>
              <p class="text-caption text-ink-muted mt-1">Pos Gang Utama</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 180ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 04</p>
              <p class="text-caption text-ink-muted mt-1">Pos Persimpangan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 05</p>
              <p class="text-caption text-ink-muted mt-1">Pos RW Setempat</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 300ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield-check" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 06</p>
              <p class="text-caption text-ink-muted mt-1">Pos Ujung Barat</p>
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
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan Linmas RW 03</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan pengurus dan personil Satuan Perlindungan Masyarakat RW 03 periode 2024–2029.
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
                  <h3 class="text-h3">Bapak Ahmad Fauzi</h3>
                  <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua Linmas RW 03</p>
                  <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Keamanan</p>
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
                <h3 class="text-h4">Bapak Hendra Wijaya</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Wakil Ketua</p>
                <p class="text-caption text-ink-muted mt-1">Koordinator Ronda & Patroli</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Bapak Rudi Hartono</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Sekretaris</p>
                <p class="text-caption text-ink-muted mt-1">Administrasi & Laporan</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Bapak Sugeng Prasetyo</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bendahara</p>
                <p class="text-caption text-ink-muted mt-1">Keuangan & Operasional</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 3: Koordinator RT -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Koordinator Keamanan RT</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="card p-4 text-center card-hover" data-reveal>
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 01</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. M. Yusuf</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 60ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 02</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. H. Slamet</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 120ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 03</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. Supardi</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 180ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 04</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. Wawan</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 05</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. Sugeng</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 300ms">
              <div class="w-10 h-10 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-lg mb-2">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <p class="text-body-sm font-semibold text-ink">RT 06</p>
              <p class="text-caption text-ink-muted mt-1">Bpk. Edi S.</p>
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
              <h3 class="text-h3 text-primary-800">Agenda Keamanan RW 03</h3>
              <p class="text-body-sm text-ink-muted">Jadwal rutin dan program kerja Satuan Linmas Banjardowo</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Ronda Malam Pos Kamling</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Piket jaga pos secara bergantian setiap malam sesuai jadwal RT masing-masing.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-moon" aria-hidden="true"></i> Setiap Malam
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Patroli Keliling Lingkungan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Rute patroli di seluruh RT 01–06 untuk memastikan situasi aman di lingkungan warga.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-route" aria-hidden="true"></i> Setiap Minggu Malam
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Pengamanan Acara Keagamaan & Hajatan</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Penjagaan lokasi acara warga seperti pengajian, hajatan pernikahan, dan kegiatan kematian.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-calendar" aria-hidden="true"></i> Sesuai Jadwal Warga
              </span>
            </div>

            <div class="p-4 rounded-lg bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 class="font-semibold text-ink">Kesiapsiagaan Banjir & Tanggap Darurat</h4>
                <p class="text-body-sm text-ink-muted mt-0.5">Penempatan anggota posko darurat, distribusi karung, dan evakuasi warga terdampak banjir.</p>
              </div>
              <span class="lembaga-schedule-card whitespace-nowrap">
                <i class="ph ph-warning" aria-hidden="true"></i> Musim Hujan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
