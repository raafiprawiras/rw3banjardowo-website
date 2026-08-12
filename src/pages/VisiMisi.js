export function renderVisiMisi() {
    return `
    <section class="page-banner">
      <div class="container-site page-banner-inner">
        <span class="badge">Profil Wilayah</span>
        <h1 class="text-h1 page-title mt-4">Visi & Misi RW 3 Banjardowo</h1>
        <p class="page-desc mt-4 max-w-2xl">
          Arah dan komitmen bersama dalam membangun lingkungan rukun, mandiri, dan sejahtera.
        </p>
      </div>
    </section>

    <section class="section bg-surface">
      <div class="container-site">

        <!-- Visi Section (Focal Point) -->
        <div class="visi-container mt-4">
          <div class="visi-card text-center" data-reveal>
            <span class="badge badge-accent">Visi Utama</span>
            <blockquote class="text-display text-bone mt-6">
              "Mewujudkan RW 3 Banjardowo yang Guyub Rukun, Aman, Sehat, Sejahtera, dan Mandiri Berbasis Gotong Royong."
            </blockquote>
            <p class="text-body-lg text-ink-muted mt-6 max-w-[65ch] mx-auto">
              Visi ini menjadi kompas bagi seluruh program kerja kepengurusan dan partisipasi aktif warga dalam pembangunan lingkungan.
            </p>
          </div>
        </div>

        <!-- Misi Section -->
        <div class="misi-section mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-4" data-reveal>
              <h2 class="text-h2 text-bone">Misi Pembangunan</h2>
              <p class="text-body text-ink-muted mt-4">
                Langkah nyata yang dijalankan secara konsisten oleh pengurus bersama seluruh elemen warga RW 3 Banjardowo.
              </p>
            </div>
            <div class="lg:col-span-8 space-y-5">
              <div class="card p-5 flex gap-4 items-start card-hover" data-reveal>
                <div class="misi-num">1</div>
                <div>
                  <h3 class="text-h3 text-ink">Meningkatkan Kerukunan dan Gotong Royong</h3>
                  <p class="text-body-sm text-ink-muted mt-2">
                    Membangun komunikasi yang harmonis antar warga melalui kegiatan sosial, keagamaan, dan kebudayaan secara berkala.
                  </p>
                </div>
              </div>
              <div class="card p-5 flex gap-4 items-start card-hover" data-reveal style="--reveal-delay: 80ms">
                <div class="misi-num">2</div>
                <div>
                  <h3 class="text-h3 text-ink">Menjaga Keamanan dan Ketertiban Lingkungan</h3>
                  <p class="text-body-sm text-ink-muted mt-2">
                    Mengoptimalkan sistem keamanan lingkungan (Siskamling) terpadu dan koordinasi aktif dengan aparat keamanan setempat.
                  </p>
                </div>
              </div>
              <div class="card p-5 flex gap-4 items-start card-hover" data-reveal style="--reveal-delay: 160ms">
                <div class="misi-num">3</div>
                <div>
                  <h3 class="text-h3 text-ink">Mewujudkan Lingkungan Bersih dan Sehat</h3>
                  <p class="text-body-sm text-ink-muted mt-2">
                    Menggalakkan program kebersihan lingkungan, pengelolaan sampah mandiri, serta pos pelayanan kesehatan terpadu (Posyandu).
                  </p>
                </div>
              </div>
              <div class="card p-5 flex gap-4 items-start card-hover" data-reveal style="--reveal-delay: 240ms">
                <div class="misi-num">4</div>
                <div>
                  <h3 class="text-h3 text-ink">Mendorong Kesejahteraan dan Kemandirian Ekonomi</h3>
                  <p class="text-body-sm text-ink-muted mt-2">
                    Mendukung pengembangan usaha mikro, kecil, dan menengah (UMKM) lokal warga serta pelatihan keterampilan produktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
