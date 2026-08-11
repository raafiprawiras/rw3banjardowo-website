export function renderDataDesa() {
    const rtRows = [
        { rt: 'RT 01', kk: 136, penduduk: 472, laki: 239, perempuan: 233 },
        { rt: 'RT 02', kk: 129, penduduk: 451, laki: 226, perempuan: 225 },
        { rt: 'RT 03', kk: 141, penduduk: 486, laki: 248, perempuan: 238 },
        { rt: 'RT 04', kk: 132, penduduk: 459, laki: 234, perempuan: 225 },
        { rt: 'RT 05', kk: 138, penduduk: 493, laki: 252, perempuan: 241 },
        { rt: 'RT 06', kk: 136, penduduk: 486, laki: 253, perempuan: 233 },
    ];

    return `
    <section class="section data-page">
      <div class="container-site">
        <div class="section-header data-header">
          <span class="badge">Administrasi Penduduk</span>
          <h1 class="text-h1 section-title">Data Desa</h1>
          <p class="section-desc">
            Ringkasan kependudukan RW 3 Banjardowo yang disusun agar mudah dibaca warga, pengurus, dan mitra wilayah.
          </p>
        </div>

        <section class="data-hero-grid" aria-label="Statistik utama kependudukan">
          <article class="card data-primary-stat" data-reveal>
            <div class="data-stat-head">
              <span class="badge badge-accent">Statistik Utama</span>
              <i class="ph ph-users-three data-stat-icon" aria-hidden="true"></i>
            </div>
            <p class="data-kicker">Total Penduduk</p>
            <p class="data-primary-value">2.847</p>
            <p class="data-primary-desc">jiwa terdaftar per triwulan terakhir</p>
          </article>

          <div class="data-supporting-grid">
            <article class="card data-supporting-stat" data-reveal style="--reveal-delay: 80ms">
              <p class="data-kicker">Kepala Keluarga</p>
              <p class="data-supporting-value">812</p>
              <p class="data-supporting-desc">kartu keluarga aktif</p>
            </article>
            <article class="card data-supporting-stat" data-reveal style="--reveal-delay: 140ms">
              <p class="data-kicker">Jumlah RT</p>
              <p class="data-supporting-value">6</p>
              <p class="data-supporting-desc">RT 01 sampai RT 06</p>
            </article>
            <article class="card data-supporting-stat" data-reveal style="--reveal-delay: 200ms">
              <p class="data-kicker">Laki-laki</p>
              <p class="data-supporting-value">1.452</p>
              <p class="data-supporting-desc">51 persen dari total warga</p>
            </article>
            <article class="card data-supporting-stat" data-reveal style="--reveal-delay: 260ms">
              <p class="data-kicker">Perempuan</p>
              <p class="data-supporting-value">1.395</p>
              <p class="data-supporting-desc">49 persen dari total warga</p>
            </article>
          </div>
        </section>

        <section class="data-context-grid" aria-label="Konteks data kependudukan">
          <article class="card data-note-card" data-reveal>
            <div class="data-note-icon">
              <i class="ph ph-file-text" aria-hidden="true"></i>
            </div>
            <div>
              <h2 class="text-h3">Cara membaca data</h2>
              <p class="text-body-sm text-ink-muted mt-3">
                Angka utama menunjukkan total warga aktif. Angka pendukung membantu melihat struktur keluarga, komposisi gender, dan sebaran antar RT.
              </p>
            </div>
          </article>

          <article class="card data-note-card" data-reveal style="--reveal-delay: 100ms">
            <div class="data-note-icon">
              <i class="ph ph-shield-check" aria-hidden="true"></i>
            </div>
            <div>
              <h2 class="text-h3">Pemutakhiran berkala</h2>
              <p class="text-body-sm text-ink-muted mt-3">
                Data diperbarui secara berkala oleh pengurus untuk mendukung pelayanan surat, kegiatan warga, dan perencanaan lingkungan.
              </p>
            </div>
          </article>
        </section>

        <section class="data-breakdown-section" aria-labelledby="data-breakdown-title">
          <div class="section-header data-breakdown-header">
            <h2 id="data-breakdown-title" class="text-h2 section-title">Sebaran per RT</h2>
            <p class="section-desc">
              Detail per RT ditampilkan dalam tabel pada desktop dan berubah menjadi kartu terstruktur pada layar kecil.
            </p>
          </div>

          <div class="card data-table-card" data-reveal>
            <div class="data-table-wrap" role="region" aria-label="Tabel data kependudukan per RT">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Wilayah</th>
                    <th scope="col">Kepala Keluarga</th>
                    <th scope="col">Penduduk</th>
                    <th scope="col">Laki-laki</th>
                    <th scope="col">Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  ${rtRows.map((row) => `
                    <tr>
                      <th scope="row">${row.rt}</th>
                      <td>${row.kk}</td>
                      <td>${row.penduduk}</td>
                      <td>${row.laki}</td>
                      <td>${row.perempuan}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="data-mobile-list" aria-label="Data kependudukan per RT versi mobile">
              ${rtRows.map((row) => `
                <article class="data-mobile-card">
                  <div class="data-mobile-head">
                    <h3 class="text-h4">${row.rt}</h3>
                    <span class="badge badge-neutral">${row.penduduk} jiwa</span>
                  </div>
                  <dl class="data-mobile-grid">
                    <div>
                      <dt>Kepala Keluarga</dt>
                      <dd>${row.kk}</dd>
                    </div>
                    <div>
                      <dt>Laki-laki</dt>
                      <dd>${row.laki}</dd>
                    </div>
                    <div>
                      <dt>Perempuan</dt>
                      <dd>${row.perempuan}</dd>
                    </div>
                  </dl>
                </article>
              `).join('')}
            </div>
          </div>
        </section>
    </section>
  `;
}
