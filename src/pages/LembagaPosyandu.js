const POSYANDU_PENGURUS = [
  ['1', 'Ketua', 'Nama Ketua Posyandu'],
  ['2', 'Wakil Ketua', 'Nama Wakil Ketua Posyandu'],
  ['3', 'Sekretaris', 'Nama Sekretaris Posyandu'],
  ['4', 'Wakil Sekretaris', 'Nama Wakil Sekretaris Posyandu'],
  ['5', 'Bendahara', 'Nama Bendahara Posyandu'],
  ['6', 'Wakil Bendahara', 'Nama Wakil Bendahara Posyandu'],
  ['7', 'Koordinator Pendaftaran', 'Nama Koordinator Pendaftaran'],
  ['8', 'Koordinator Penimbangan', 'Nama Koordinator Penimbangan'],
  ['9', 'Koordinator Penyuluhan', 'Nama Koordinator Penyuluhan'],
  ['10', 'Koordinator PMT', 'Nama Koordinator PMT'],
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

export function renderLembagaPosyandu() {
  return `
    <section class="page-banner lembaga-slim-banner">
      <div class="container-site page-banner-inner page-title-hero" data-reveal>
        <span class="badge">Lembaga Desa</span>
        <h1 class="text-h1 page-title mt-3">Posyandu RW 03</h1>
        <p class="page-desc mt-3 max-w-2xl">
          Pos pelayanan terpadu yang mendukung kesehatan ibu, anak, balita, keluarga, dan lingkungan masyarakat RW 03.
        </p>
      </div>
    </section>

    <section class="section lembaga-detail-page">
      <div class="container-site">
        <div class="lembaga-detail-grid">
          <article class="card lembaga-description-card" data-reveal>
            <h2 class="text-h2 section-title mt-3">Peran Posyandu</h2>
            <p class="text-body-lg text-ink-muted mt-3">
              Posyandu RW 03 membantu pelayanan kesehatan dasar masyarakat melalui pemantauan tumbuh kembang balita, edukasi gizi, kesehatan ibu dan anak, serta penyuluhan perilaku hidup bersih dan sehat. Kegiatan ini didukung kader dan koordinasi dengan tenaga kesehatan terkait.
            </p>
          </article>

          <aside class="card lembaga-summary-card" data-reveal style="--reveal-delay: 80ms">
            <i class="ph ph-heart-beat" aria-hidden="true"></i>
            <h3 class="text-h3 text-bone">Fokus Kegiatan</h3>
            <p class="text-body-sm text-ink-muted mt-2">
              Pelayanan ibu dan anak, pemantauan balita, edukasi gizi, PMT, dan kesehatan lingkungan warga.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section class="section bg-surface lembaga-structure-section">
      <div class="container-site">
        <div class="section-header text-center" data-reveal>
          <h2 class="text-h2 section-title mt-2">Struktur Kepengurusan Posyandu</h2>
          <p class="section-desc max-w-2xl mx-auto mt-2">
            Susunan jabatan pengurus Posyandu RW 03. Nama pengurus masih berupa placeholder dan dapat diganti sesuai data resmi.
          </p>
        </div>

        <div class="card lembaga-table-card" data-reveal style="--reveal-delay: 90ms">
          <div class="lembaga-table-scroll" tabindex="0" aria-label="Tabel struktur kepengurusan Posyandu">
            <table class="lembaga-table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Jabatan</th>
                  <th scope="col">Nama</th>
                </tr>
              </thead>
              <tbody>
                ${pengurusRows(POSYANDU_PENGURUS)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}
