export function renderStrukturKKN() {
    return `
    <section class="section bg-surface">
      <div class="container-site">
        <div class="section-header text-center mx-auto">
          <span class="badge">Kolaborasi</span>
          <h1 class="text-h1 section-title mt-4">Struktur Tim KKN UNDIP</h1>
          <p class="section-desc mx-auto">
            Tim Kuliah Kerja Nyata (KKN) Universitas Diponegoro yang berkontribusi dalam pengembangan portal warga RW 3 Banjardowo.
          </p>
        </div>

        <!-- KKN Team Layout -->
        <div class="kkn-container mt-16">
          <!-- Leader: Kormades -->
          <div class="text-center mb-12">
            <span class="badge badge-accent mb-4">Koordinator Mahasiswa Desa</span>
            <div class="card p-5 max-w-sm mx-auto text-center card-hover">
              <div class="kkn-avatar mx-auto">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <h3 class="text-h3 mt-4">Muhammad Alif</h3>
              <p class="text-body-sm text-primary-600 font-semibold mt-1">S1 Teknik Elektro</p>
              <p class="text-caption text-ink-muted mt-1">Koordinator Utama Tim KKN</p>
            </div>
          </div>

          <!-- Members Grid -->
          <div class="text-center mb-8">
            <span class="badge badge-neutral">Anggota Tim KKN</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="card p-5 text-center card-hover">
              <div class="kkn-avatar mx-auto">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <h3 class="text-h4 mt-4">Sarah Amelia</h3>
              <p class="text-body-sm text-primary-600 font-semibold mt-1">S1 Kedokteran</p>
              <p class="text-caption text-ink-muted mt-1">Program Kesehatan & Posyandu</p>
            </div>
            <div class="card p-5 text-center card-hover">
              <div class="kkn-avatar mx-auto">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <h3 class="text-h4 mt-4">Rian Hidayat</h3>
              <p class="text-body-sm text-primary-600 font-semibold mt-1">S1 Informatika</p>
              <p class="text-caption text-ink-muted mt-1">Pengembangan Website & Sistem</p>
            </div>
            <div class="card p-5 text-center card-hover">
              <div class="kkn-avatar mx-auto">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <h3 class="text-h4 mt-4">Nabila Putri</h3>
              <p class="text-body-sm text-primary-600 font-semibold mt-1">S1 Ilmu Komunikasi</p>
              <p class="text-caption text-ink-muted mt-1">Publikasi & Hubungan Warga</p>
            </div>
            <div class="card p-5 text-center card-hover">
              <div class="kkn-avatar mx-auto">
                <i class="ph ph-student" aria-hidden="true"></i>
              </div>
              <h3 class="text-h4 mt-4">Fajar Ramadhan</h3>
              <p class="text-body-sm text-primary-600 font-semibold mt-1">S1 Arsitektur</p>
              <p class="text-caption text-ink-muted mt-1">Pemetaan Wilayah & Infrastruktur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
