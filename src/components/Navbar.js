/**
 * Navbar component - RW 3 Banjardowo
 * Desktop: horizontal nav with dropdown for "Profil Desa"
 * Mobile: hamburger → slide-down panel
 */

const NAV_ITEMS = [
    { label: 'Beranda', href: '/' },
    {
        label: 'Profil Desa',
        children: [
            { label: 'Visi & Misi', href: '/profil/visi-misi' },
            { label: 'Struktur Kepengurusan', href: '/profil/struktur' },
            { label: 'Struktur KKN', href: '/profil/kkn' },
        ],
    },
    { label: 'Data Desa', href: '/data' },
    { label: 'Peta Desa', href: '/peta' },
    { label: 'UMKM Desa', href: '/umkm' },
    { label: 'Lembaga Desa', href: '/lembaga' },
    { label: 'Galeri', href: '/galeri' },
];

export function createNavbar() {
    const nav = document.createElement('header');
    nav.className = 'navbar';
    nav.innerHTML = `
    <div class="navbar-inner container-site">
      <a href="/" class="navbar-brand">
        <span class="navbar-brand-icon">
          <i class="ph ph-buildings" aria-hidden="true"></i>
        </span>
        <span class="navbar-brand-text">
          <span class="navbar-brand-name">RW 3 Banjardowo</span>
          <span class="navbar-brand-sub">Kec. Genuk, Kota Semarang</span>
        </span>
      </a>

      <nav class="navbar-desktop" aria-label="Navigasi utama">
        <ul class="navbar-menu">
          ${NAV_ITEMS.map(item => {
        if (item.children) {
            return `
                <li class="navbar-item navbar-dropdown-wrap">
                  <button class="navbar-link navbar-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
                    ${item.label}
                    <i class="ph ph-caret-down navbar-caret" aria-hidden="true"></i>
                  </button>
                  <ul class="navbar-dropdown" role="menu">
                    ${item.children.map(child => `
                      <li role="none"><a href="${child.href}" class="navbar-dropdown-item" role="menuitem">${child.label}</a></li>
                    `).join('')}
                  </ul>
                </li>
              `;
        }
        return `<li class="navbar-item"><a href="${item.href}" class="navbar-link">${item.label}</a></li>`;
    }).join('')}
        </ul>
      </nav>

      <button class="navbar-hamburger" aria-label="Buka menu" aria-expanded="false">
        <i class="ph ph-list" aria-hidden="true"></i>
      </button>
    </div>

    <div class="navbar-mobile-panel" aria-hidden="true">
      <nav aria-label="Navigasi mobile">
        <ul class="navbar-mobile-menu">
          ${NAV_ITEMS.map(item => {
        if (item.children) {
            return `
                <li class="navbar-mobile-item">
                  <button class="navbar-mobile-link navbar-mobile-dropdown-trigger" aria-expanded="false">
                    ${item.label}
                    <i class="ph ph-caret-down navbar-mobile-caret" aria-hidden="true"></i>
                  </button>
                  <ul class="navbar-mobile-dropdown" aria-hidden="true">
                    ${item.children.map(child => `
                      <li><a href="${child.href}" class="navbar-mobile-dropdown-item">${child.label}</a></li>
                    `).join('')}
                  </ul>
                </li>
              `;
        }
        return `<li class="navbar-mobile-item"><a href="${item.href}" class="navbar-mobile-link">${item.label}</a></li>`;
    }).join('')}
        </ul>
      </nav>
    </div>
  `;

    initNavbarInteractions(nav);
    return nav;
}

function initNavbarInteractions(nav) {
    // Desktop dropdown
    const dropdownWrap = nav.querySelector('.navbar-dropdown-wrap');
    const trigger = nav.querySelector('.navbar-dropdown-trigger');
    const dropdown = nav.querySelector('.navbar-dropdown');

    if (trigger && dropdown && dropdownWrap) {
        // Hover open/close for desktop
        let hoverTimeout;
        dropdownWrap.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            openDesktopDropdown(trigger, dropdown);
        });
        dropdownWrap.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => closeDesktopDropdown(trigger, dropdown), 150);
        });

        // Click toggle for accessibility
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const open = trigger.getAttribute('aria-expanded') === 'true';
            if (open) closeDesktopDropdown(trigger, dropdown);
            else openDesktopDropdown(trigger, dropdown);
        });

        // Keyboard: Escape closes
        dropdown.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDesktopDropdown(trigger, dropdown);
                trigger.focus();
            }
        });
    }

    // Close desktop dropdown on outside click
    document.addEventListener('click', (e) => {
        if (trigger && dropdown && !dropdownWrap.contains(e.target)) {
            closeDesktopDropdown(trigger, dropdown);
        }
    });

    // Mobile hamburger
    const hamburger = nav.querySelector('.navbar-hamburger');
    const mobilePanel = nav.querySelector('.navbar-mobile-panel');

    if (hamburger && mobilePanel) {
        hamburger.addEventListener('click', () => {
            const open = hamburger.getAttribute('aria-expanded') === 'true';
            if (open) closeMobileMenu(hamburger, mobilePanel);
            else openMobileMenu(hamburger, mobilePanel);
        });

        // Escape closes mobile
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
                closeMobileMenu(hamburger, mobilePanel);
            }
        });

        // Mobile dropdown
        const mobileTrigger = mobilePanel.querySelector('.navbar-mobile-dropdown-trigger');
        const mobileDropdown = mobilePanel.querySelector('.navbar-mobile-dropdown');

        if (mobileTrigger && mobileDropdown) {
            mobileTrigger.addEventListener('click', () => {
                const open = mobileTrigger.getAttribute('aria-expanded') === 'true';
                if (open) {
                    mobileTrigger.setAttribute('aria-expanded', 'false');
                    mobileDropdown.setAttribute('aria-hidden', 'true');
                    mobileDropdown.style.maxHeight = '0';
                    mobileTrigger.querySelector('.navbar-mobile-caret').style.transform = '';
                } else {
                    mobileTrigger.setAttribute('aria-expanded', 'true');
                    mobileDropdown.setAttribute('aria-hidden', 'false');
                    mobileDropdown.style.maxHeight = mobileDropdown.scrollHeight + 'px';
                    mobileTrigger.querySelector('.navbar-mobile-caret').style.transform = 'rotate(180deg)';
                }
            });
        }
    }
}

function openDesktopDropdown(trigger, dropdown) {
    trigger.setAttribute('aria-expanded', 'true');
    dropdown.classList.add('is-open');
    trigger.querySelector('.navbar-caret').style.transform = 'rotate(180deg)';
}

function closeDesktopDropdown(trigger, dropdown) {
    trigger.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('is-open');
    trigger.querySelector('.navbar-caret').style.transform = '';
}

function openMobileMenu(hamburger, panel) {
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Tutup menu');
    hamburger.querySelector('i').className = 'ph ph-x';
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu(hamburger, panel) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Buka menu');
    hamburger.querySelector('i').className = 'ph ph-list';
    panel.setAttribute('aria-hidden', 'true');
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
}
