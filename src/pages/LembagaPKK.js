const PKK_PENGURUS = [
  ['1', 'Ketua', 'Nama Ketua PKK'],
  ['2', 'Wakil Ketua', 'Nama Wakil Ketua PKK'],
  ['3', 'Sekretaris', 'Nama Sekretaris PKK'],
  ['4', 'Wakil Sekretaris', 'Nama Wakil Sekretaris PKK'],
  ['5', 'Bendahara', 'Nama Bendahara PKK'],
  ['6', 'Wakil Bendahara', 'Nama Wakil Bendahara PKK'],
  ['7', 'Koordinator Pokja I', 'Nama Koordinator Pokja I'],
  ['8', 'Koordinator Pokja II', 'Nama Koordinator Pokja II'],
  ['9', 'Koordinator Pokja III', 'Nama Koordinator Pokja III'],
  ['10', 'Koordinator Pokja IV', 'Nama Koordinator Pokja IV'],
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

export function renderLembagaPKK() {
  return `
    <section class="page-banner lembaga-slim-banner">
      <div class="container-site page-banner-inner page-title-hero" data-reveal>
        <span class="badge">Lembaga Desa</span>
        <h1 class="text-h1 page-title mt-3">PKK RW 03</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Pemberdayaan Kesejahteraan Keluarga yang berperan dalam penguatan keluarga, kesehatan, pendidikan, dan partisipasi masyarakat RW 03.
        </p>
      </div>
    </section>

    <section class="section lembaga-detail-page">
      <div class="container-site">
        <div class="lembaga-detail-grid">
          <article class="card lembaga-description-card" data-reveal> 
            <h2 class="text-h2 section-title mt-3">Peran PKK</h2>
            <p class="text-body-lg text-ink-muted mt-3">
              PKK RW 03 menjadi wadah partisipasi warga, khususnya perempuan, dalam meningkatkan kesejahteraan keluarga dan kualitas hidup masyarakat. Kegiatan PKK diarahkan pada pembinaan keluarga, penguatan kesehatan lingkungan, edukasi, ketahanan pangan, dan pemberdayaan ekonomi rumah tangga.
            </p>
          </article>

          <aside class="card lembaga-summary-card" data-reveal style="--reveal-delay: 80ms">
            <i class="ph ph-hands-clasp" aria-hidden="true"></i>
            <h3 class="text-h3 text-bone">Fokus Kegiatan</h3>
            <p class="text-body-sm text-ink-muted mt-2">
              Pembinaan keluarga, kesehatan warga, pelatihan keterampilan, dan penguatan gotong royong lingkungan.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section class="section bg-surface lembaga-structure-section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan PKK</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan jabatan pengurus PKK RW 03. Nama pengurus masih berupa placeholder dan dapat diganti sesuai data resmi.
          </p>
        </div>

        <div class="card lembaga-table-card" data-reveal style="--reveal-delay: 90ms">
          <div class="lembaga-table-scroll" tabindex="0" aria-label="Tabel struktur kepengurusan PKK">
            <table class="lembaga-table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Jabatan</th>
                  <th scope="col">Nama</th>
                </tr>
              </thead>
              <tbody>
                ${pengurusRows(PKK_PENGURUS)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}
