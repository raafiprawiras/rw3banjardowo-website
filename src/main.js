import './style.css';
import { initReveals, cleanupReveals } from './utils/reveal.js';
import { createNavbar } from './components/Navbar.js';
import { createFooter } from './components/Footer.js';
import { renderHome, initHome, cleanupHome } from './pages/Home.js';
import { renderVisiMisi } from './pages/VisiMisi.js';
import { renderStrukturKepengurusan } from './pages/StrukturKepengurusan.js';
import { renderStrukturKKN } from './pages/StrukturKKN.js';
import { renderDataDesa } from './pages/DataDesa.js';
import { renderPetaDesa, initPetaDesa } from './pages/PetaDesa.js';
import { renderUMKM, initUMKM } from './pages/UMKM.js';
import { renderLembaga, initLembaga } from './pages/Lembaga.js';
import { renderGaleri, initGaleri } from './pages/Galeri.js';

const app = document.getElementById('app');

// Navbar
app.appendChild(createNavbar());

// Main content container
const main = document.createElement('main');
main.id = 'main';
app.appendChild(main);

// Footer
app.appendChild(createFooter());

// Router mapping
const routes = {
    '/': { render: renderHome, init: initHome, cleanup: cleanupHome },
    '/profil/visi-misi': { render: renderVisiMisi },
    '/visi-misi': { render: renderVisiMisi },
    '/profil/struktur': { render: renderStrukturKepengurusan },
    '/struktur-kepengurusan': { render: renderStrukturKepengurusan },
    '/profil/kkn': { render: renderStrukturKKN },
    '/struktur-kkn': { render: renderStrukturKKN },
    '/data': { render: renderDataDesa },
    '/data-desa': { render: renderDataDesa },
    '/peta': { render: renderPetaDesa, init: initPetaDesa },
    '/peta-desa': { render: renderPetaDesa, init: initPetaDesa },
    '/umkm': { render: renderUMKM, init: initUMKM },
    '/lembaga': { render: renderLembaga, init: initLembaga },
    '/galeri': { render: renderGaleri, init: initGaleri },
};

function navigate(path) {
    window.history.pushState({}, '', path);
    resolveRoute();
}

function resolveRoute() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    document.body.classList.toggle('is-home', route === routes['/']);
    if (route.cleanup) {
        route.cleanup();
    }
    cleanupReveals();
    main.innerHTML = route.render();
    if (route.init) {
        route.init();
    }
    initReveals();
    window.scrollTo(0, 0);
    updateActiveNavLink(path);
}

function updateActiveNavLink(path) {
    const normalize = (p) => p.replace(/^\/profil/, '').replace(/-desa$/, '');
    const normPath = normalize(path);
    document.querySelectorAll('.navbar-link, .navbar-dropdown-item, .navbar-mobile-link, .navbar-mobile-dropdown-item').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            if (normalize(href) === normPath) {
                link.classList.add('is-active');
            } else {
                link.classList.remove('is-active');
            }
        }
    });
}

// Intercept local link clicks
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
            e.preventDefault();
            navigate(href);
        }
    }
});

// Handle back/forward navigation
window.addEventListener('popstate', resolveRoute);

// Initial route resolution
resolveRoute();
