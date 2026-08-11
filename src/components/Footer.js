/**
 * Footer component - RW 3 Banjardowo
 * Based on reference: brand info, address, emergency numbers, nav links, copyright
 */

export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
    <div class="container-site">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-header">
            <span class="footer-brand-icon">
              <i class="ph ph-buildings" aria-hidden="true"></i>
            </span>
            <span class="footer-brand-name">RW 3 Banjardowo</span>
          </div>
          <p class="footer-brand-desc">
            Portal informasi resmi warga Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang.
          </p>
          <div class="footer-socials">
            <a href="#" class="footer-social-link" aria-label="Facebook">
              <i class="ph ph-facebook-logo" aria-hidden="true"></i>
            </a>
            <a href="#" class="footer-social-link" aria-label="Instagram">
              <i class="ph ph-instagram-logo" aria-hidden="true"></i>
            </a>
            <a href="#" class="footer-social-link" aria-label="YouTube">
              <i class="ph ph-youtube-logo" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Balai RW 3</h3>
          <p class="footer-text">
            Balai RW 3, Jl. Banjardowo Raya No. 3, Genuk, Kota Semarang 50117
          </p>
          <p class="footer-text">
            Senin - Jumat, 08.00 - 16.00 WIB
          </p>
          <p class="footer-text">
            Sabtu 08.00 - 12.00 WIB
          </p>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Nomor Darurat</h3>
          <ul class="footer-contact-list">
            <li>
              <span class="footer-contact-label">Puskesmas Genuk</span>
              <span class="footer-contact-value">(024) 6580227</span>
            </li>
            <li>
              <span class="footer-contact-label">Pemadam Kebakaran</span>
              <span class="footer-contact-value">113 / (024) 7607076</span>
            </li>
            <li>
              <span class="footer-contact-label">Bhabinkamtibmas</span>
              <span class="footer-contact-value">0812-7788-9900</span>
            </li>
            <li>
              <span class="footer-contact-label">Ambulans / PSC 119</span>
              <span class="footer-contact-value">119</span>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Tautan</h3>
          <ul class="footer-nav">
            <li><a href="/">Beranda</a></li>
            <li><a href="/profil/visi-misi">Visi & Misi</a></li>
            <li><a href="/data">Data Desa</a></li>
            <li><a href="/peta">Peta Desa</a></li>
            <li><a href="/umkm">UMKM Desa</a></li>
            <li><a href="/galeri">Galeri</a></li>
          </ul>
        </div>
      </div>

      <hr class="divider footer-divider" />

      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; 2026 RW 3 Banjardowo. Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang. Dikembangkan bersama Tim KKN UNDIP.
        </p>
      </div>
    </div>
  `;

    return footer;
}
