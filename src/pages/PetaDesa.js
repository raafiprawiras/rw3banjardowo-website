import L from 'leaflet';

let mapInstance = null;
let geoJsonLayer = null;
let geoJsonCache = null;
let initialBounds = null;
let resizeHandlerAttached = false;

const GEOJSON_URL = '/assets/rw3-new.geojson';

export function renderPetaDesa() {
    return `
    <section class="section map-page">
      <div class="container-site">
        <div class="section-header map-header">
          <span class="badge">Peta Wilayah</span>
          <h1 class="text-h1 section-title">RW 3 Kelurahan Banjardowo</h1>
          <p class="section-desc">
            Kecamatan Genuk, Kota Semarang, Jawa Tengah.
          </p>
        </div>

        <div class="map-layout mt-12">
          <div class="map-stage card" data-reveal>
            <div class="map-toolbar">
              <p class="map-caption">
                Wilayah RW 3 merupakan salah satu bagian wilayah Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang.
              </p>
              <button type="button" class="btn btn-secondary btn-sm map-reset-btn" aria-label="Reset tampilan peta RW 3">
                <i class="ph ph-arrow-counter-clockwise" aria-hidden="true"></i>
                Reset View
              </button>
            </div>

            <div class="map-shell">
              <div id="map-loading" class="map-state" role="status" aria-live="polite">
                <div class="map-state-icon">
                  <i class="ph ph-spinner-gap map-spin" aria-hidden="true"></i>
                </div>
                <p class="text-body-sm text-ink-muted">Peta wilayah sedang dimuat...</p>
              </div>

              <div id="map-error" class="map-state hidden" role="alert">
                <div class="map-state-icon map-state-icon-error">
                  <i class="ph ph-warning-circle" aria-hidden="true"></i>
                </div>
                <p class="text-body-sm text-ink-muted">Peta wilayah RW 3 tidak dapat dimuat. Silakan coba lagi.</p>
              </div>

              <div id="map" class="map-element" aria-label="Peta interaktif wilayah RW 3 Kelurahan Banjardowo, Kecamatan Genuk, Kota Semarang"></div>
            </div>
          </div>

          <aside class="map-sidebar card" data-reveal style="--reveal-delay: 120ms">
            <h2 class="text-h3 mb-4">Informasi Wilayah</h2>
            <div class="map-location-list">
              <div class="map-location-btn no-pointer">
                <span class="map-loc-icon-wrap">
                  <i class="ph ph-map-pin" aria-hidden="true"></i>
                </span>
                <span class="map-loc-text">
                  <span class="map-loc-name">RW 3 Kelurahan Banjardowo</span>
                  <span class="map-loc-desc">Kecamatan Genuk, Kota Semarang, Jawa Tengah</span>
                </span>
              </div>
            </div>
            <div class="map-umkm-section mt-6">
              <h3 class="text-h4 mb-3">Lokasi UMKM</h3>
              <div id="map-umkm-list" class="map-location-list" aria-label="Daftar lokasi UMKM RW 3"></div>
              <p id="map-umkm-empty" class="text-body-sm text-ink-muted hidden">Belum ada data UMKM.</p>
            </div>
            <p class="text-body-sm text-ink-muted mt-6">
              Boundary wilayah dan titik lokasi UMKM ditampilkan dari file GeoJSON RW 3 yang tersedia pada project. Klik salah satu UMKM untuk memperbesar peta, atau Reset View untuk kembali ke tampilan awal.
            </p>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export async function initPetaDesa() {
    const mapEl = document.getElementById('map');
    const loadingEl = document.getElementById('map-loading');
    const errorEl = document.getElementById('map-error');
    const resetBtn = document.querySelector('.map-reset-btn');
    const umkmListEl = document.getElementById('map-umkm-list');
    const umkmEmptyEl = document.getElementById('map-umkm-empty');

    if (!mapEl) return;

    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
        geoJsonLayer = null;
        initialBounds = null;
    }

    showState('loading', loadingEl, errorEl, mapEl);

    try {
        const geojson = await loadRw3GeoJson();
        mapInstance = createMap(mapEl);
        geoJsonLayer = createGeoJsonLayer(geojson).addTo(mapInstance);

        initialBounds = geoJsonLayer.getBounds();
        mapInstance.fitBounds(initialBounds, { padding: [24, 24] });

        // Add polygon center label (centered on the RW 3 polygon, not the points)
        const polygonLayer = findPolygonLayer(geoJsonLayer);
        if (polygonLayer) {
            addRw3PolygonLabel(mapInstance, polygonLayer.getBounds());
        } else {
            addRw3PolygonLabel(mapInstance, initialBounds);
        }

        // Populate UMKM location list from GeoJSON points
        populateUmkmList(geojson, umkmListEl, umkmEmptyEl);

        window.requestAnimationFrame(() => mapInstance.invalidateSize());

        if (resetBtn) {
            resetBtn.onclick = () => {
                if (mapInstance && initialBounds) {
                    mapInstance.fitBounds(initialBounds, { padding: [24, 24] });
                }
            };
        }

        if (!resizeHandlerAttached) {
            window.addEventListener('resize', () => {
                if (mapInstance) {
                    window.requestAnimationFrame(() => mapInstance.invalidateSize());
                }
            });
            resizeHandlerAttached = true;
        }

        showState('ready', loadingEl, errorEl, mapEl);
    } catch (error) {
        console.error('Failed to initialize RW 3 map:', error);
        showState('error', loadingEl, errorEl, mapEl);
    }
}

async function loadRw3GeoJson() {
    if (geoJsonCache) return geoJsonCache;

    const response = await fetch(GEOJSON_URL, { cache: 'force-cache' });
    if (!response.ok) {
        throw new Error(`GeoJSON request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data || data.type !== 'FeatureCollection') {
        throw new Error('Invalid GeoJSON format');
    }

    geoJsonCache = data;
    return geoJsonCache;
}

function createMap(mapEl, options = {}) {
    const map = L.map(mapEl, {
        zoomControl: true,
        scrollWheelZoom: options.scrollWheelZoom ?? true,
        dragging: true,
        doubleClickZoom: true,
        touchZoom: true,
        boxZoom: false,
        keyboard: true,
        attributionControl: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    return map;
}

function createGeoJsonLayer(geojson) {
    return L.geoJSON(geojson, {
        style: () => ({
            color: '#354024',
            weight: 2.5,
            fillColor: '#889063',
            fillOpacity: 0.28,
        }),
        pointToLayer: (feature, latlng) => {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'map-umkm-marker',
                    html: '<i class="ph ph-storefront" aria-hidden="true"></i>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15],
                    popupAnchor: [0, -16],
                }),
                title: feature?.properties?.name || 'UMKM RW 3',
            });
        },
        onEachFeature: (feature, layer) => {
            const name = feature?.properties?.name || 'RW 3';
            const isPoint = feature?.geometry?.type === 'Point';
            const description = isPoint
                ? 'UMKM warga RW 3 Kelurahan Banjardowo'
                : (feature?.properties?.description || 'RW 3 Kelurahan Banjardowo');

            layer.bindPopup(`
                <div class="map-popup-content">
                    <h3 class="text-h4">${name}</h3>
                    <p class="text-body-sm text-ink-muted mt-2">${description}</p>
                    <p class="text-caption text-ink-muted mt-2">Kecamatan Genuk, Kota Semarang</p>
                </div>
            `);

            if (!isPoint) {
                layer.on({
                    mouseover: () => {
                        layer.setStyle({
                            weight: 3.5,
                            fillOpacity: 0.32,
                        });
                    },
                    mouseout: () => {
                        layer.setStyle({
                            weight: 2.5,
                            fillOpacity: 0.22,
                        });
                    },
                });
            }
        },
    });
}

function populateUmkmList(geojson, listEl, emptyEl) {
    if (!listEl) return;

    const points = (geojson?.features || []).filter(
        (f) => f?.geometry?.type === 'Point' && f?.properties?.name
    );

    if (!points.length) {
        if (emptyEl) emptyEl.classList.remove('hidden');
        return;
    }

    listEl.innerHTML = points.map((feature) => {
        const name = feature.properties.name;
        return `
            <button type="button" class="map-location-btn umkm-loc-btn" data-map-fly="${feature.properties.name}" aria-label="Lihat lokasi ${name}">
                <span class="map-loc-icon-wrap">
                    <i class="ph ph-storefront" aria-hidden="true"></i>
                </span>
                <span class="map-loc-text">
                    <span class="map-loc-name">${name}</span>
                    <span class="map-loc-desc">UMKM warga RW 3</span>
                </span>
            </button>
        `;
    }).join('');

    listEl.querySelectorAll('[data-map-fly]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!mapInstance || !geoJsonLayer) return;
            const target = btn.getAttribute('data-map-fly');
            geoJsonLayer.eachLayer((layer) => {
                const props = layer.feature?.properties;
                if (props && props.name === target) {
                    mapInstance.flyTo(layer.getLatLng(), Math.max(mapInstance.getZoom(), 16), { duration: 0.6 });
                    layer.openPopup();
                }
            });
        });
    });
}

function showState(state, loadingEl, errorEl, mapEl) {
    if (!loadingEl || !errorEl || !mapEl) return;

    loadingEl.classList.toggle('hidden', state !== 'loading');
    errorEl.classList.toggle('hidden', state !== 'error');
    mapEl.classList.toggle('is-hidden', state !== 'ready');
}

function addRw3PolygonLabel(map, bounds) {
    return L.marker(bounds.getCenter(), {
        icon: L.divIcon({
            className: 'map-polygon-label',
            html: '<span class="map-label-name">RW 3 Banjardowo</span>',
            iconSize: [160, 30],
            iconAnchor: [80, 15],
        }),
        interactive: false,
    }).addTo(map);
}

function findPolygonLayer(layerGroup) {
    let found = null;
    layerGroup.eachLayer((layer) => {
        if (!found && layer.feature && layer.feature.geometry && layer.feature.geometry.type === 'Polygon') {
            found = layer;
        }
    });
    return found;
}

export { loadRw3GeoJson, createMap, createGeoJsonLayer, addRw3PolygonLabel, populateUmkmList, GEOJSON_URL };

