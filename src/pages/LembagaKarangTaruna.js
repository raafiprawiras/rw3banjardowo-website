const KARANG_TARUNA_PENGURUS = [
  ['1', 'Ketua', 'Nama Ketua Karang Taruna'],
  ['2', 'Wakil Ketua', 'Nama Wakil Ketua Karang Taruna'],
  ['3', 'Sekretaris', 'Nama Sekretaris Karang Taruna'],
  ['4', 'Wakil Sekretaris', 'Nama Wakil Sekretaris Karang Taruna'],
  ['5', 'Bendahara', 'Nama Bendahara Karang Taruna'],
  ['6', 'Wakil Bendahara', 'Nama Wakil Bendahara Karang Taruna'],
  ['7', 'Koordinator Bidang Sosial', 'Nama Koordinator Bidang Sosial'],
  ['8', 'Koordinator Bidang Olahraga', 'Nama Koordinator Bidang Olahraga'],
  ['9', 'Koordinator Bidang Seni Budaya', 'Nama Koordinator Bidang Seni Budaya'],
  ['10', 'Koordinator Bidang Kewirausahaan', 'Nama Koordinator Bidang Kewirausahaan'],
];

function pengurusRows(rows) {
  return rows.map(([no, jabatan, nama]) => `
      <tr>
        <td class="lembaga-table-no">${no}</td>
        <td class="lembaga-table-role">${jabatan}</td>
        <td>${nama}</td>
      </tr>
    `).join('');
}

export function renderLembagaKarangTaruna() {
  return `
    <section class="page-banner lembaga-slim-banner">
      <div class="container-site page-banner-inner page-title-hero" data-reveal>
        <span class="badge">Lembaga Desa</span>
        <h1 class="text-h1 page-title mt-3">Karang Taruna RW 03</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Organisasi kepemudaan yang menjadi ruang pengembangan potensi, kepedulian sosial, dan kreativitas generasi muda RW 03.
        </p>
      </div>
    </section>

    <section class="section lembaga-detail-page">
      <div class="container-site">
        <div class="lembaga-detail-grid">
          <article class="card lembaga-description-card" data-reveal>
            <h2 class="text-h2 section-title mt-3">Peran Karang Taruna</h2>
            <p class="text-body-lg text-ink-muted mt-3">
              Karang Taruna RW 03 berfungsi sebagai wadah pembinaan dan pemberdayaan pemuda. Organisasi ini mendukung kegiatan sosial, olahraga, seni budaya, kepemimpinan, serta pengembangan kemandirian generasi muda agar aktif berkontribusi dalam kehidupan bermasyarakat.
            </p>
          </article>

          <aside class="card lembaga-summary-card" data-reveal style="--reveal-delay: 80ms">
            <i class="ph ph-users-three" aria-hidden="true"></i>
            <h3 class="text-h3 text-bone">Fokus Kegiatan</h3>
            <p class="text-body-sm text-ink-muted mt-2">
              Pengembangan pemuda, kegiatan sosial, olahraga, seni budaya, dan pemberdayaan kewirausahaan warga muda.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section class="section bg-surface lembaga-structure-section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan Karang Taruna</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan jabatan pengurus Karang Taruna RW 03. Nama pengurus masih berupa placeholder dan dapat diganti sesuai data resmi.
          </p>
        </div>

        <div class="card lembaga-table-card" data-reveal style="--reveal-delay: 90ms">
          <div class="lembaga-table-scroll" tabindex="0" aria-label="Tabel struktur kepengurusan Karang Taruna">
            <table class="lembaga-table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Jabatan</th>
                  <th scope="col">Nama</th>
                </tr>
              </thead>
              <tbody>
                ${pengurusRows(KARANG_TARUNA_PENGURUS)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}
