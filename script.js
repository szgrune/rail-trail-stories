/* ============================================================
   Rail Trail Stories — script.js
   Vanilla JS, no frameworks. Depends on:
     - Leaflet 1.9.x (CDN)
     - data/trails.js  (TRAILS constant)
   ============================================================ */

/* ── State ───────────────────────────────────────────────── */
let currentScreen   = 1;
let selectedRegion  = null;
let selectedTrail   = null;
let regionMap       = null;
let regionLayers    = {};
let discoveryMap    = null;
let discoveryLayer  = null;
let trailMap        = null;
let trailGeoLayer   = null;

/* ── Region metadata ─────────────────────────────────────── */
const REGION_TRAILS = {
  berkshires: ['ashuwillticook'],
  pioneer:    ['norwottuck'],
  boston:     ['minuteman'],
  capecod:    ['capecod']
};

const REGION_NAMES = {
  berkshires: 'the Berkshires',
  pioneer:    'the Pioneer Valley',
  boston:     'Greater Boston',
  capecod:    'Cape Cod'
};

/* lat, lng, zoom for discovery map centering */
const REGION_VIEW = {
  berkshires: [42.59, -73.11, 11],
  pioneer:    [42.35, -72.55, 11],
  boston:     [42.45, -71.20, 11],
  capecod:    [41.80, -70.05, 10]
};

/* Approximate lat/lng polygons for each MA region */
const REGION_POLYGONS = {
  berkshires: [
    [42.88, -73.51], [42.88, -72.85],
    [41.95, -72.85], [41.95, -73.51]
  ],
  pioneer: [
    [42.88, -72.85], [42.88, -72.00],
    [41.95, -72.00], [41.95, -72.85]
  ],
  boston: [
    [42.90, -72.00], [42.90, -70.55],
    [41.78, -70.55], [41.50, -71.00],
    [41.50, -72.00]
  ],
  capecod: [
    [41.78, -70.62], [41.73, -70.55],
    [42.07, -70.55], [42.07, -69.88],
    [41.52, -69.88], [41.52, -70.62]
  ]
};

/* ── Screen navigation ───────────────────────────────────── */
function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');
  currentScreen = n;

  if (n === 2) setTimeout(initRegionMap, 200);
  if (n === 3) setTimeout(initDiscoveryScreen, 60);
  if (n === 4) setTimeout(initDeepDiveScreen, 60);
  if (n === 5) initClosingScreen();
}

/* ── Leaflet tile layer ──────────────────────────────────── */
function cartoTiles() {
  return L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
        '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }
  );
}

/* ── Screen 2: Leaflet region map ────────────────────────── */
const STYLE_DEFAULT  = { color: '#a09880', weight: 1.5, fillColor: '#ddd6c8', fillOpacity: 0.45 };
const STYLE_HOVER    = { fillColor: '#6B8F6B', fillOpacity: 0.55 };
const STYLE_SELECTED = { fillColor: '#3B5E45', fillOpacity: 0.65, color: '#2d4a36' };

function initRegionMap() {
  if (regionMap) {
    regionMap.invalidateSize();
    return;
  }

  regionMap = L.map('ma-region-map', {
    center:           [42.10, -71.75],
    zoom:             8,
    zoomControl:      false,
    scrollWheelZoom:  false,
    dragging:         false,
    doubleClickZoom:  false,
    boxZoom:          false,
    keyboard:         false,
    touchZoom:        false
  });

  cartoTiles().addTo(regionMap);
  setTimeout(() => regionMap.invalidateSize(), 100);

  Object.entries(REGION_POLYGONS).forEach(([key, coords]) => {
    const poly = L.polygon(coords, Object.assign({}, STYLE_DEFAULT))
      .addTo(regionMap);

    poly.bindTooltip(REGION_NAMES[key], {
      permanent:  true,
      direction:  'center',
      className:  'region-label-tooltip'
    });

    poly.on('mouseover', function () {
      if (selectedRegion !== key) this.setStyle(STYLE_HOVER);
      this.getElement() && (this.getElement().style.cursor = 'pointer');
    });
    poly.on('mouseout', function () {
      if (selectedRegion !== key) this.setStyle(STYLE_DEFAULT);
    });
    poly.on('click', function () {
      handleRegionClick(key);
    });

    regionLayers[key] = poly;
  });
}

function handleRegionClick(region) {
  selectedRegion = region;
  selectedTrail  = REGION_TRAILS[region][0];
  // Reset all, highlight selected
  Object.entries(regionLayers).forEach(([key, poly]) => {
    poly.setStyle(key === region ? STYLE_SELECTED : STYLE_DEFAULT);
  });
  showScreen(3);
}

/* ── Screen 3: Discovery ─────────────────────────────────── */
function initDiscoveryScreen() {
  if (!selectedRegion) return;

  document.getElementById('discovery-region-name').textContent =
    'Trails near ' + REGION_NAMES[selectedRegion];

  const cardsEl = document.getElementById('discovery-cards');
  cardsEl.innerHTML = '';
  REGION_TRAILS[selectedRegion].forEach(key => {
    cardsEl.insertAdjacentHTML('beforeend', buildTrailCard(TRAILS[key], key));
    const trail = TRAILS[key];
    if (trail.wikiUrl) {
      const title = trail.wikiUrl.replace('https://en.wikipedia.org/wiki/', '');
      fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + title)
        .then(r => r.json())
        .then(data => {
          if (data.thumbnail && data.thumbnail.source) {
            const img = document.getElementById('trail-card-img-' + key);
            if (img) { img.src = data.thumbnail.source; img.style.display = ''; }
          }
        })
        .catch(() => {});
    }
  });

  const firstTrail = TRAILS[REGION_TRAILS[selectedRegion][0]];
  const indevEl = document.getElementById('discovery-indev');
  if (firstTrail.inDevelopment && firstTrail.inDevelopment.length) {
    indevEl.innerHTML =
      '<p>More trails are being built in this region. ' +
      '<a href="' + firstTrail.inDevelopment[0].link + '" target="_blank" rel="noopener">See what\'s coming \u2192</a></p>';
  } else {
    indevEl.innerHTML = '';
  }

  /* Map */
  if (!discoveryMap) {
    discoveryMap = L.map('discovery-map', { zoomControl: true });
    cartoTiles().addTo(discoveryMap);
  } else {
    if (discoveryLayer) { discoveryMap.removeLayer(discoveryLayer); discoveryLayer = null; }
  }

  const [lat, lng, zoom] = REGION_VIEW[selectedRegion];
  discoveryMap.setView([lat, lng], zoom);
  discoveryMap.invalidateSize();

  REGION_TRAILS[selectedRegion].forEach(key => {
    fetch(TRAILS[key].geojsonPath)
      .then(r => r.json())
      .then(data => {
        discoveryLayer = L.geoJSON(data, {
          style: { color: '#C4852A', weight: 3.5, opacity: 0.85 }
        }).addTo(discoveryMap);
      })
      .catch(() => {});
  });
}

function buildTrailCard(trail, key) {
  const imgHtml = '<img class="trail-card-img" id="trail-card-img-' + key + '" src="' + (trail.cardImage || '') + '" alt="' + trail.name + '"' + (trail.cardImage ? '' : ' style="display:none"') + '>';

  return '<div class="trail-card">' +
    imgHtml +
    '<div class="trail-card-body">' +
      '<div class="trail-card-name">' + trail.name + '</div>' +
      '<div class="trail-card-route">' + trail.route.from + ' \u2192 ' + trail.route.to + '</div>' +
      '<div class="trail-card-fragment">' + trail.historicalFragment + '</div>' +
      '<div class="trail-card-meta">' +
        '<span><strong>' + trail.length + '</strong></span>' +
        '<span><strong>Opened:</strong> ' + trail.yearRestored + '</span>' +
      '</div>' +
      '<button class="btn-explore" onclick="selectTrail(\'' + key + '\')">Explore this trail \u2192</button>' +
    '</div>' +
  '</div>';
}

function selectTrail(key) {
  selectedTrail = key;
  showScreen(4);
}

/* ── Screen 4: Deep-Dive ─────────────────────────────────── */
function initDeepDiveScreen() {
  if (!selectedTrail) return;
  const trail = TRAILS[selectedTrail];
  renderNarrative(trail);
  initTrailMap(trail);
}

function renderNarrative(trail) {
  const el = document.getElementById('deepdive-narrative');

  const headerImg = trail.headerImage
    ? '<img class="trail-header-img" src="' + trail.headerImage + '" alt="' + trail.name + '">'
    : '';

  const sitesHtml = trail.sites.map((site, i) =>
    '<div class="site-block">' +
      '<div class="site-block-header">' +
        '<div class="site-num-badge">' + (i + 1) + '</div>' +
        '<div class="site-name">' + site.name + '</div>' +
      '</div>' +
      '<div class="site-desc">' + site.note + '</div>' +
      (site.wikiUrl ? '<a class="site-wiki-link" href="' + site.wikiUrl + '" target="_blank" rel="noopener">Wikipedia \u2192</a>' : '') +
    '</div>'
  ).join('');

  const poemsHtml = trail.poems.map((poem, i) => {
    const id = selectedTrail + '-' + i;
    return '<div class="poem-block" id="poem-' + id + '">' +
        '<div class="poem-header">' +
          '<div class="poem-poet">' + poem.poet + '</div>' +
          '<div class="poem-title">' + poem.title + '</div>' +
          '<div class="poem-year">' + poem.year + '</div>' +
        '</div>' +
        '<div class="poem-text" id="poem-text-' + id + '">' + escHtml(poem.fullText) + '</div>' +
        '<button class="poem-expand-btn" onclick="togglePoem(\'' + selectedTrail + '\',' + i + ')">Show full poem \u2193</button>' +
        '<div class="poem-source">Source: <a href="' + poem.sourceUrl + '" target="_blank" rel="noopener">' + (poem.sourceLabel || 'View source') + '</a></div>' +
        '<div class="poem-fair-use">Public domain.</div>' +
      '</div>' +
      (i < trail.poems.length - 1 ? '<hr class="poem-divider">' : '');
  }).join('');

  const indevHtml = trail.inDevelopment.map(item =>
    '<div class="indev-block">' +
      '<div class="indev-name">' + item.name + '</div>' +
      '<span class="indev-status">' + item.status + '</span>' +
      '<div class="indev-desc">' + item.description + '</div>' +
      '<a class="indev-link" href="' + item.link + '" target="_blank" rel="noopener">Learn more \u2192</a>' +
    '</div>'
  ).join('');

  el.innerHTML =
    '<nav class="breadcrumb">' +
      '<a href="#" onclick="showScreen(1); return false;">Home</a>' +
      '<span class="breadcrumb-sep"> > </span>' +
      '<a href="#" onclick="showScreen(3); return false;">Trails</a>' +
      '<span class="breadcrumb-sep"> > </span>' +
      '<span class="breadcrumb-current">' + trail.name + '</span>' +
    '</nav>' +

    '<div class="trail-header">' +
      headerImg +
      '<h2 class="trail-name-large">' + trail.name + '</h2>' +
      '<div class="trail-meta-row">' +
        '<span class="trail-meta-item"><strong>Route:</strong> ' + trail.route.from + ' \u2192 ' + trail.route.to + '</span>' +
        '<span class="trail-meta-item"><strong>Length:</strong> ' + trail.length + '</span>' +
        '<span class="trail-meta-item"><strong>Railroad:</strong> ' + trail.railroad + '</span>' +
        '<span class="trail-meta-item"><strong>Restored:</strong> ' + trail.yearRestored + '</span>' +
      '</div>' +
    '</div>' +

    '<h3 class="section-head">Situated poetry</h3>' +
    '<div class="poetry-section">' + poemsHtml + '</div>' +

    '<h3 class="section-head">Historical sites along the way</h3>' +
    sitesHtml +

    '<h3 class="section-head">Railroads past</h3>' +
    '<div class="history-text">' + formatHistory(trail.history, trail.citations) + '</div>' +

    '<h3 class="section-head">What\'s coming to this region</h3>' +
    indevHtml +

    '<div class="narrative-continue">' +
      '<button class="btn-ghost" onclick="showScreen(3)">\u2190 Back to trails</button>' +
      '<button class="btn-primary" onclick="showScreen(5)">Closing notes \u2192</button>' +
    '</div>';

  /* Poem reveal via IntersectionObserver */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('poem-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  el.querySelectorAll('.poem-block').forEach(b => observer.observe(b));

  /* Hide expand button if poem fits in max-height */
  el.querySelectorAll('.poem-text').forEach((textEl, i) => {
    const btn = textEl.nextElementSibling;
    if (btn && textEl.scrollHeight <= textEl.clientHeight + 4) {
      btn.style.display = 'none';
    }
  });
}

/* Convert [N] markers in history text to superscript citation links */
function formatHistory(text, citations) {
  let html = text.replace(/\[(\d+)\]/g, (_, n) => {
    const cite = citations && citations.find(c => c.id === parseInt(n, 10));
    const url  = cite ? cite.url : '#';
    return '<sup><a href="' + url + '" target="_blank" rel="noopener">[' + n + ']</a></sup>';
  });
  /* Wrap double-newline paragraphs */
  html = html.split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => '<p>' + p + '</p>')
    .join('');
  return html;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function togglePoem(trailKey, index) {
  const textEl = document.getElementById('poem-text-' + trailKey + '-' + index);
  if (!textEl) return;
  const btn = textEl.nextElementSibling;
  const expanded = textEl.classList.toggle('poem-expanded');
  if (btn) btn.textContent = expanded ? 'Show less \u2191' : 'Show full poem \u2193';
}

/* ── Screen 4: Trail map ─────────────────────────────────── */
function initTrailMap(trail) {
  if (!trailMap) {
    trailMap = L.map('trail-map', { zoomControl: true });
    cartoTiles().addTo(trailMap);
  } else {
    if (trailGeoLayer) { trailMap.removeLayer(trailGeoLayer); trailGeoLayer = null; }
    trailMap.eachLayer(layer => {
      if (layer instanceof L.Marker) trailMap.removeLayer(layer);
    });
  }
  trailMap.invalidateSize();

  /* Site markers */
  trail.sites.forEach((site, i) => {
    const icon = L.divIcon({
      html: '<div class="site-marker-icon">' + (i + 1) + '</div>',
      className: '',
      iconSize:   [26, 26],
      iconAnchor: [13, 13]
    });

    function buildPopupHtml(imgUrl) {
      const imgHtml = imgUrl
        ? '<img src="' + imgUrl + '" style="width:100%;max-width:220px;height:130px;object-fit:cover;border-radius:4px;margin-bottom:6px;display:block;">'
        : '';
      return imgHtml +
        '<strong>' + site.name + '</strong>' +
        '<br>' + site.note.slice(0, 120) + (site.note.length > 120 ? '\u2026' : '') +
        (site.wikiUrl ? '<br><a href="' + site.wikiUrl + '" target="_blank" rel="noopener">Wikipedia \u2192</a>' : '');
    }

    const marker = L.marker([site.lat, site.lng], { icon })
      .bindPopup(buildPopupHtml(site.popupImage || null))
      .addTo(trailMap);

    if (!site.popupImage && site.wikiUrl) {
      const title = site.wikiUrl.replace('https://en.wikipedia.org/wiki/', '');
      fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + title)
        .then(r => r.json())
        .then(data => {
          if (data.thumbnail && data.thumbnail.source) {
            marker.setPopupContent(buildPopupHtml(data.thumbnail.source));
          }
        })
        .catch(() => {});
    }
  });

  /* Sites legend */
  document.getElementById('trail-map-sites').innerHTML = trail.sites.map((site, i) =>
    '<div class="map-site-item">' +
      '<div class="map-site-num">' + (i + 1) + '</div>' +
      '<div class="map-site-name">' + site.name + '</div>' +
    '</div>'
  ).join('');

  /* GeoJSON trail line */
  fetch(trail.geojsonPath)
    .then(r => r.json())
    .then(data => {
      trailGeoLayer = L.geoJSON(data, {
        style: { color: '#C4852A', weight: 4, opacity: 0.9 }
      }).addTo(trailMap);
      trailMap.fitBounds(trailGeoLayer.getBounds(), { padding: [28, 28] });
    })
    .catch(() => {
      if (trail.sites.length) {
        trailMap.setView([trail.sites[0].lat, trail.sites[0].lng], 12);
      }
    });
}

/* ── Screen 5: Closing + Citations ───────────────────────── */
function initClosingScreen() {
  const codaEl = document.getElementById('closing-coda');
  codaEl.innerHTML =
    '<div class="coda-text">' +
      '<p>These four trails are part of a larger story unfolding across the state: more than two hundred miles of abandoned rail corridors in various stages of restoration, planning, and construction. The work of the Rails-to-Trails Conservancy and the state\'s MassTrails program continues to open new paths each year.</p>' +
      '<p>If you walk or ride on one of these trails, you are passing through history. The ties and the rails might be gone, but the landscape remembers the history. The grade is still there and the vegetation opens a path — a nearly imperceptible engineered levelness, laid for a steam locomotive in 1846. You can follow the same line.</p>' +
    '</div>' +
    '<div class="coda-pull-quote">' +
      '<p>"The land is well, \u2014 lies fairly to the south."</p>' +
      '<cite>\u2014 Ralph Waldo Emerson, \u201cHamatreya\u201d (1847)</cite>' +
    '</div>' +
    '<div class="coda-links">' +
      '<a href="#" onclick="showScreen(1); return false;">\u2190 Explore another trail</a>' +
      '<a href="https://www.railstotrails.org/" target="_blank" rel="noopener">Rails-to-Trails Conservancy</a>' +
      '<a href="https://masstrails.com" target="_blank" rel="noopener">MassTrails</a>' +
    '</div>';

  /* Gather all trail citations, deduplicate by text */
  const seen = new Set();
  const allCitations = [];
  Object.values(TRAILS).forEach(trail => {
    (trail.citations || []).forEach(c => {
      if (!seen.has(c.text)) { seen.add(c.text); allCitations.push(c); }
    });
  });

  const citeEl = document.getElementById('closing-citations');
  citeEl.innerHTML =
    '<h3 class="citations-heading">Sources &amp; Further Reading</h3>' +

    '<div class="citations-group">' +
      '<div class="citations-group-title">Trail Data &amp; GIS</div>' +
      '<ul class="citations-list">' +
        '<li>MassGIS Open Data \u2014 statewide trails layer, <a href="https://www.mass.gov/info-details/massgis-data-layers" target="_blank" rel="noopener">mass.gov</a></li>' +
        '<li>OpenStreetMap contributors \u2014 trail geometry, <a href="https://www.openstreetmap.org" target="_blank" rel="noopener">openstreetmap.org</a></li>' +
        '<li>MassTrails \u2014 trail profiles and project listings, <a href="https://masstrails.com" target="_blank" rel="noopener">masstrails.com</a></li>' +
      '</ul>' +
    '</div>' +

    '<div class="citations-group">' +
      '<div class="citations-group-title">Historical Sources</div>' +
      '<ul class="citations-list">' +
        allCitations.map(c =>
          '<li>' + c.text +
          (c.url ? ' \u2014 <a href="' + c.url + '" target="_blank" rel="noopener">' + c.url.replace('https://', '') + '</a>' : '') +
          '</li>'
        ).join('') +
      '</ul>' +
    '</div>' +

    '<div class="citations-group">' +
      '<div class="citations-group-title">Poetry Sources (all public domain)</div>' +
      '<ul class="citations-list">' +
        '<li>Henry David Thoreau, <em>Cape Cod</em> (1865). Project Gutenberg, <a href="https://www.gutenberg.org/files/34392/34392-h/34392-h.htm" target="_blank" rel="noopener">gutenberg.org</a></li>' +
        '<li>Amy Lowell, \u201cLilacs,\u201d from <em>What\'s O\'Clock</em> (1925). Poetry Foundation, <a href="https://www.poetryfoundation.org/poems/42992/lilacs-56d221a873ff1" target="_blank" rel="noopener">poetryfoundation.org</a></li>' +
        '<li>Emily Dickinson, \u201cI like to see it lap the Miles\u201d (c.1862). Emily Dickinson Archive, <a href="https://www.edickinson.org" target="_blank" rel="noopener">edickinson.org</a></li>' +
        '<li>Ralph Waldo Emerson, \u201cHamatreya,\u201d from <em>Poems</em> (1847). Poetry Foundation, <a href="https://www.poetryfoundation.org/poems/52341/hamatreya" target="_blank" rel="noopener">poetryfoundation.org</a></li>' +
        '<li>Robert Frost, \u201cAfter Apple-Picking,\u201d from <em>North of Boston</em> (1914). Poetry Foundation, <a href="https://www.poetryfoundation.org/poems/44259/after-apple-picking" target="_blank" rel="noopener">poetryfoundation.org</a></li>' +
        '<li>Robert Frost, \u201cMending Wall,\u201d from <em>North of Boston</em> (1914). Poetry Foundation, <a href="https://www.poetryfoundation.org/poems/44266/mending-wall" target="_blank" rel="noopener">poetryfoundation.org</a></li>' +
        '<li>William Cullen Bryant, \u201cTo a Waterfowl\u201d (1818). Poetry Foundation, <a href="https://www.poetryfoundation.org/poems/51861/to-a-waterfowl" target="_blank" rel="noopener">poetryfoundation.org</a></li>' +
      '</ul>' +
    '</div>' +

    '<div class="citations-group">' +
      '<div class="citations-group-title">In-Development Trails</div>' +
      '<ul class="citations-list">' +
        '<li>Rails-to-Trails Conservancy, <a href="https://www.railstotrails.org/" target="_blank" rel="noopener">railstotrails.org</a></li>' +
        '<li>Mass Central Rail Trail, <a href="https://www.masscentralrailtrail.org/" target="_blank" rel="noopener">masscentralrailtrail.org</a></li>' +
        '<li>Berkshire Regional Planning Commission \u2014 Berkshire Greenway, <a href="https://storymaps.arcgis.com/stories/dc69c1d06f2a44c19e7df703294c2349" target="_blank" rel="noopener">storymaps.arcgis.com</a></li>' +
      '</ul>' +
    '</div>';
}

/* ── Landing: trail select dropdown ─────────────────────── */
function initTrailSelect() {
  const wrapper  = document.getElementById('trail-select-wrapper');
  const trigger  = document.getElementById('trail-select-trigger');
  const dropdown = document.getElementById('trail-select-dropdown');

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    const open = wrapper.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });

  dropdown.addEventListener('click', e => {
    e.stopPropagation();
    const li = e.target.closest('li[data-region]');
    if (!li) return;
    selectedRegion = li.dataset.region;
    selectedTrail  = REGION_TRAILS[selectedRegion][0];
    wrapper.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    showScreen(3);
  });

  document.addEventListener('click', () => {
    wrapper.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

/* ── Bootstrap ───────────────────────────────────────────── */
initTrailSelect();
// Region map initializes lazily on first visit to screen 2
