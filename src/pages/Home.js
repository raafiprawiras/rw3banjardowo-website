export function renderHome() {
    return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container-site hero-grid">
        <div class="hero-content">
          <span class="badge badge-accent">Portal Resmi Warga</span>
          <h1 class="text-display mt-4">Selamat Datang di Portal Warga RW 3 Banjardowo</h1>
          <p class="text-body-lg text-ink-muted mt-6">
            Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di portal resmi RW 3 Banjardowo. Website ini kami hadirkan sebagai jembatan informasi antara pengurus dan warga - mulai dari data kependudukan, layanan surat, katalog UMKM, hingga agenda kegiatan. Mari bersama menjaga guyub rukun dan membangun lingkungan yang aman, sehat, dan mandiri.
          </p>
          <div class="hero-actions mt-8">
            <a href="https://wa.me/6281234567890?text=Halo%20Pengurus%20RW%203%20Banjardowo%2C%20saya%20ingin%20mengajukan%20layanan%20surat.%20Nama%3A%20%0ANIK%3A%20%0AAlamat%2FRT%3A%20%0AJenis%20surat%3A%20" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
              Layanan Surat WA
            </a>
            <a href="/peta" class="btn btn-secondary btn-lg">
              <i class="ph ph-map-trifold" aria-hidden="true"></i>
              Jelajahi Peta
            </a>
          </div>
        </div>
        <div class="hero-image-container">
          <div class="hero-card">
            <img src="https://banjar-connect.lovable.app/assets/ketua-rw-C_cHXzzT.jpg" alt="Potret Bapak Sutrisno, S.Sos., Ketua RW 3 Banjardowo" class="hero-img" />
            <div class="hero-card-badge">
              <p class="hero-card-title">Bapak Sutrisno, S.Sos.</p>
              <p class="hero-card-subtitle">Ketua RW 3 Banjardowo (2024-2029)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section bg-surface-muted">
      <div class="container-site">
        <div class="section-header text-center mx-auto">
          <span class="badge">Data Warga Sekilas</span>
          <h2 class="text-h2 section-title">Ringkasan Kependudukan</h2>
          <p class="section-desc mx-auto">
            Ringkasan kependudukan RW 3 Banjardowo per triwulan terakhir untuk transparansi data.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div class="card stat-card">
            <div class="stat-icon-wrap">
              <i class="ph ph-users" aria-hidden="true"></i>
            </div>
            <p class="stat-value">2.847</p>
            <p class="stat-label">Total Penduduk</p>
            <p class="stat-desc">jiwa terdaftar</p>
          </div>
          <div class="card stat-card">
            <div class="stat-icon-wrap">
              <i class="ph ph-article" aria-hidden="true"></i>
            </div>
            <p class="stat-value">812</p>
            <p class="stat-label">Total Kepala Keluarga</p>
            <p class="stat-desc">kartu keluarga</p>
          </div>
          <div class="card stat-card">
            <div class="stat-icon-wrap">
              <i class="ph ph-map-pin" aria-hidden="true"></i>
            </div>
            <p class="stat-value">6</p>
            <p class="stat-label">Jumlah RT</p>
            <p class="stat-desc">RT 01 - RT 06</p>
          </div>
          <div class="card stat-card">
            <div class="stat-icon-wrap">
              <i class="ph ph-gender-neuter" aria-hidden="true"></i>
            </div>
            <p class="stat-value">51% / 49%</p>
            <p class="stat-label">Komposisi Gender</p>
            <p class="stat-desc">laki-laki / perempuan</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <a href="/data" class="link">Lihat data lengkap kependudukan</a>
        </div>
      </div>
    </section>

    <!-- News & Announcements Section -->
    <section class="news-section">
      <div class="container-site">
        <div class="section-header">
          <span class="badge">Pengumuman & Agenda</span>
          <h2 class="text-h2 section-title">Informasi Terbaru Warga</h2>
          <p class="section-desc">
            Kabar kegiatan, jadwal posyandu, dan pengumuman keamanan lingkungan di wilayah RW 3 Banjardowo.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <article class="card card-hover news-card">
            <div class="news-badge-wrap">
              <span class="badge badge-accent">Kerja Bakti</span>
              <span class="text-caption text-ink-muted">3 Agustus 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Kerja Bakti Bersih Saluran Air Jelang Musim Hujan</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Seluruh warga RT 01-06 diharapkan hadir untuk normalisasi saluran air dan pengecatan poskamling.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
          <article class="card card-hover news-card">
            <div class="news-badge-wrap">
              <span class="badge">Posyandu</span>
              <span class="text-caption text-ink-muted">28 Juli 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Jadwal Posyandu Balita Agustus & Program PMT</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Penimbangan balita dan pemberian makanan tambahan bergizi digelar di Posyandu Melati RT 02.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
          <article class="card card-hover news-card">
            <div class="news-badge-wrap">
              <span class="badge badge-neutral">Keamanan</span>
              <span class="text-caption text-ink-muted">21 Juli 2026</span>
            </div>
            <h3 class="text-h3 mt-4">Penguatan Ronda Malam & Nomor Darurat Baru</h3>
            <p class="text-body-sm text-ink-muted mt-3">
              Jadwal ronda diperbarui per RT dan nomor koordinator keamanan kini aktif 24 jam.
            </p>
            <div class="news-footer mt-6">
              <a href="#" class="link text-body-sm">Baca Detail</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-primary-900 text-white">
      <div class="container-site cta-container">
        <div class="cta-content text-center max-w-[36rem] mx-auto">
          <h2 class="text-h2 text-white">Butuh layanan surat pengantar?</h2>
          <p class="text-body-lg text-primary-100 mt-4">
            Ajukan lewat WhatsApp pengurus RW 3, diproses pada jam layanan Balai RW.
          </p>
          <div class="mt-8">
            <a href="https://wa.me/6281234567890?text=Halo%20Pengurus%20RW%203%20Banjardowo%2C%20saya%20ingin%20mengajukan%20surat%20pengantar." class="btn btn-primary btn-lg bg-white text-primary-900 hover:bg-primary-50" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-whatsapp-logo" aria-hidden="true"></i>
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
