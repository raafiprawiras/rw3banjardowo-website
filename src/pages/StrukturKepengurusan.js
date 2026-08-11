export function renderStrukturKepengurusan() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <span class="badge">Kepengurusan</span>
        <h1 class="text-h1 page-title mt-4">Struktur Kepengurusan RW 3</h1>
        <p class="page-desc mt-4 max-w-2xl">
          Susunan organisasi pengurus RW 3 Banjardowo periode 2024-2029 yang bertugas melayani warga.
        </p>
      </div>
    </section>

    <section class="section bg-surface">
      <div class="container-site">

        <!-- Org Chart Container -->
        <div class="org-chart-container mt-4">
          <!-- Level 1: Ketua RW -->
          <div class="org-level text-center" data-reveal>
            <div class="org-card-wrapper mx-auto">
              <div class="card org-card primary-leader">
                <div class="org-avatar">
                  <i class="ph ph-user" aria-hidden="true"></i>
                </div>
                <div class="org-info">
                  <h3 class="text-h3">Bapak Sutrisno, S.Sos.</h3>
                  <p class="text-body-sm text-primary-600 font-semibold mt-1">Ketua RW 3</p>
                  <p class="text-caption text-ink-muted mt-1">Penanggung Jawab Utama</p>
                </div>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 2: Sekretaris & Bendahara -->
          <div class="org-level grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h3">Ibu Sri Wahyuni</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Sekretaris</p>
                <p class="text-caption text-ink-muted mt-1">Administrasi & Surat Menyurat</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 90ms">
              <div class="org-avatar">
                <i class="ph ph-user" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h3">Bapak Joko Susilo</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Bendahara</p>
                <p class="text-caption text-ink-muted mt-1">Keuangan & Anggaran</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 3: Seksi-Seksi / Koordinator -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Seksi & Bidang Kerja</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card org-card card-hover" data-reveal>
              <div class="org-avatar">
                <i class="ph ph-shield" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Bapak Ahmad Fauzi</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Seksi Keamanan</p>
                <p class="text-caption text-ink-muted mt-1">Koordinator Ronda & Kamtibmas</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 80ms">
              <div class="org-avatar">
                <i class="ph ph-leaf" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Kartika Sari</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Seksi Kebersihan</p>
                <p class="text-caption text-ink-muted mt-1">Pengelolaan Lingkungan & Sampah</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 160ms">
              <div class="org-avatar">
                <i class="ph ph-heart-beat" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Ibu Rahmawati</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Seksi Kesehatan</p>
                <p class="text-caption text-ink-muted mt-1">Koordinator Posyandu & PMT</p>
              </div>
            </div>
            <div class="card org-card card-hover" data-reveal style="--reveal-delay: 240ms">
              <div class="org-avatar">
                <i class="ph ph-handshake" aria-hidden="true"></i>
              </div>
              <div class="org-info">
                <h3 class="text-h4">Bapak Budi Santoso</h3>
                <p class="text-body-sm text-primary-600 font-semibold mt-1">Seksi Pembangunan</p>
                <p class="text-caption text-ink-muted mt-1">Infrastruktur & Gotong Royong</p>
              </div>
            </div>
          </div>

          <div class="org-connector-vertical"></div>

          <!-- Level 4: Koordinator RT -->
          <div class="org-level-title text-center mb-8">
            <span class="badge badge-neutral">Koordinator Rukun Tetangga (RT)</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="card p-4 text-center card-hover" data-reveal>
              <p class="text-h4 text-primary-600">RT 01</p>
              <p class="text-body-sm font-semibold mt-2">Bapak M. Yusuf</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 01</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 60ms">
              <p class="text-h4 text-primary-600">RT 02</p>
              <p class="text-body-sm font-semibold mt-2">Bapak H. Slamet</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 02</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 120ms">
              <p class="text-h4 text-primary-600">RT 03</p>
              <p class="text-body-sm font-semibold mt-2">Bapak Supardi</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 03</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 180ms">
              <p class="text-h4 text-primary-600">RT 04</p>
              <p class="text-body-sm font-semibold mt-2">Bapak Wawan</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 04</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 240ms">
              <p class="text-h4 text-primary-600">RT 05</p>
              <p class="text-body-sm font-semibold mt-2">Bapak Sugeng</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 05</p>
            </div>
            <div class="card p-4 text-center card-hover" data-reveal style="--reveal-delay: 300ms">
              <p class="text-h4 text-primary-600">RT 06</p>
              <p class="text-body-sm font-semibold mt-2">Bapak Edi S.</p>
              <p class="text-caption text-ink-muted mt-1">Ketua RT 06</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
