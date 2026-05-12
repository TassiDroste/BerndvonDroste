/* ============================================================
   Welterbe in Gefahr — Hauptskript
   Navigation · Scroll-Animation · Karte · Kontaktformular
   ============================================================ */

(function () {
  'use strict';

  // ============= NAVIGATION =============
  const nav = document.getElementById('topnav');
  const navtoggle = document.getElementById('navtoggle');
  const navlinks = document.getElementById('navlinks');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  if (navtoggle && navlinks) {
    navtoggle.addEventListener('click', () => navlinks.classList.toggle('open'));
    navlinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') navlinks.classList.remove('open');
    });
  }

  // ============= SCROLL REVEAL =============
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px' });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add('in-view'));
  }

  // ============= MAP =============
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined' || typeof sites === 'undefined') return;

  const map = L.map('map', {
    center: [25, 20],
    zoom: 2.4,
    minZoom: 2,
    maxZoom: 12,
    worldCopyJump: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · UNESCO World Heritage Centre'
  }).addTo(map);

  const markerLayer = L.featureGroup().addTo(map);
  const allMarkers = [];

  function createMarker(site) {
    const html = `<div class="danger-marker ${site.type}" title="${site.name}"></div>`;
    const icon = L.divIcon({
      className: '',
      html: html,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const marker = L.marker([site.lat, site.lng], { icon: icon });
    const tagLabel = site.type === 'natural' ? 'Naturerbe' : 'Kulturerbe';
    const popup = `
      <div class="popup-title">${site.name}</div>
      <div class="popup-meta">
        <span class="tag ${site.type}">${tagLabel}</span>
        ${site.country}
      </div>
      <div class="popup-meta" style="border-top: 1px solid var(--line); padding-top: 8px; margin-top: 8px;">
        Eingeschrieben: ${site.listed} · In Gefahr seit: ${site.since}
      </div>
      <div class="popup-desc">${site.threat}</div>
    `;
    marker.bindPopup(popup, { maxWidth: 320 });
    marker.siteData = site;
    return marker;
  }

  sites.forEach((s) => {
    const m = createMarker(s);
    allMarkers.push(m);
    m.addTo(markerLayer);
  });

  // Update statistics
  const culturalCount = sites.filter((s) => s.type === 'cultural').length;
  const naturalCount = sites.filter((s) => s.type === 'natural').length;
  const countryCount = new Set(sites.map((s) => s.country.split(' / ')[0])).size;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set('stat-total', sites.length);
  set('stat-cultural', culturalCount);
  set('stat-natural', naturalCount);
  set('stat-countries', countryCount);

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const filter = btn.dataset.filter;
    let count = sites.length;
    if (filter === 'cultural') count = culturalCount;
    if (filter === 'natural') count = naturalCount;
    const countEl = btn.querySelector('.count');
    if (countEl) countEl.textContent = count;
  });

  // ============= FILTER / SEARCH =============
  let currentFilter = 'all';
  let currentSearch = '';

  function refreshMarkers() {
    markerLayer.clearLayers();
    const q = currentSearch.trim().toLowerCase();
    allMarkers.forEach((m) => {
      const s = m.siteData;
      const matchType = currentFilter === 'all' || s.type === currentFilter;
      const matchSearch =
        q === '' ||
        s.name.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q);
      if (matchType && matchSearch) {
        markerLayer.addLayer(m);
      }
    });
  }

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      refreshMarkers();
    });
  });

  const searchInput = document.getElementById('mapsearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      refreshMarkers();
    });
  }

  // Enable scrollwheel zoom after first click
  map.once('click', () => map.scrollWheelZoom.enable());

  // ============= CONTACT FORM =============
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      if (!btn) return;
      const orig = btn.textContent;
      btn.textContent = 'Wird gesendet …';
      // NOTE: This is a stub. For real delivery, replace with:
      //   - Formspree:  set form action="https://formspree.io/f/YOUR_ID"
      //   - Netlify:    add attribute netlify
      //   - Custom API: fetch() to backend endpoint
      setTimeout(() => {
        btn.textContent = 'Danke — wir melden uns ✓';
        btn.style.background = 'var(--moss)';
        e.target.reset();
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
        }, 3000);
      }, 600);
    });
  }
})();
