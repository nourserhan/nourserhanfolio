/* ============ Nour Serhan — slide portfolio ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const WIX = 'https://static.wixstatic.com/media/';
const VID = 'https://video.wixstatic.com/video/7eff15_';
const ext = f => (/\.png$/i.test(f) ? 'png' : 'jpg');
const wixUrl = (f, w) => `${WIX}${f}/v1/fit/w_${w},h_${w},al_c,q_85/img.${ext(f)}`;
const A = window.ASSETS || {};                       // embedded eazli files (data URIs) when built as one file
const local = p => A[p] || p;
const asM = x => (typeof x === 'string' ? { w: x } : x);
const srcOf = (m, w = 1600) => (m.src ? local(m.src) : m.v ? wixUrl(m.poster, w) : wixUrl(m.w, w));
const fbOf = m => (m.w ? WIX + m.w : m.v ? WIX + m.poster : '');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function img(m, { w = 1600, cls = '', alt = '', eager = false } = {}) {
  m = asM(m); const fb = fbOf(m);
  return `<img class="${cls}" src="${esc(srcOf(m, w))}" ${fb ? `data-fb="${esc(fb)}"` : ''} alt="${esc(alt || m.cap || '')}" ${eager ? '' : 'loading="lazy"'} decoding="async" onerror="imgFail(this)">`;
}
window.imgFail = el => { if (el.dataset.fb && el.src !== el.dataset.fb) { el.src = el.dataset.fb; return; } el.closest('[data-f]')?.classList.add('miss'); };

/* ---------- eazli ---------- */
const E = (src, cap, tag) => ({ src: 'a/' + src, cap, tag });
const BB = 'eazli Brand Book', UI = 'eazli.com beta', CON = 'Concept application · portfolio visualization';
const EZ = {
  hero: E('vis/identity.jpg', 'Logo suite: primary, reversed, Arabic, icon, app icon', BB), cover: E('bb/p1.jpg', 'Brand Book', BB), why: E('bb/p6.jpg', 'Why eazli exists', BB),
  atoz: E('bb/p5.jpg', 'From a to z: the idea behind the name', BB), pair: E('bb/p18.jpg', 'Bilingual signature: Life made simple. / حياتك صارت أسهل.', BB),
  logoEn: E('bb/p10.jpg', 'The “li”: a figure stepping through a door', BB), logoAr: E('bb/p11.jpg', 'Arabic logo, from أ to ي', BB), icon: E('bb/p19.jpg', 'Flipped, it smiles: the brand icon', BB),
  clear: E('bb/p12.jpg', 'Anatomy & clear space', BB), usage: E('bb/p20.jpg', 'Colour combinations', BB),
  mood: E('vis/mood.jpg', 'Mood board: a visual summary of the existing guidelines', 'Portfolio visualization'),
  primary: E('bb/p23.jpg', 'Primary palette', BB), secondary: E('bb/p25.jpg', 'Secondary palette', BB), type: E('bb/p29.jpg', 'Avenir Next World, Latin & Arabic', BB),
  typeEn: E('bb/p30.jpg', 'English typography', BB), typeAr: E('bb/p31.jpg', 'Arabic typography', BB), elements: E('bb/p34.jpg', 'Graphic elements', BB), seven: E('bb/p39.jpg', 'The z-diagonal', BB),
  system: E('bb/p40.jpg', 'Pattern system cut from the logo', BB), senses: E('bb/p27.jpg', 'Colour symbolism', BB),
  devices: E('vis/devices.jpg', 'Website & UI direction', UI), home: E('ui/home.jpg', 'Home', UI), agents: E('ui/agents.jpg', 'AI agents: Noura, Zeina, Adam', UI), plans: E('ui/plans.jpg', 'eazli Keys', UI), chat: E('ui/chat.jpg', 'Talking to the agents', UI),
  web: E('bb/p45.jpg', 'Web platform', BB), phone: E('bb/p46.jpg', 'App icon', BB),
  social: E('bb/p41.jpg', 'Social post system', BB), path: E('bb/p42.jpg', 'The Path To A Simpler Life.', BB), community: E('bb/p43.jpg', 'Join The Community', BB),
  cards: E('bb/p48.jpg', 'Business cards', BB), email: E('bb/p47.jpg', 'Email signature', BB), stickers: E('bb/p49.jpg', 'Stickers', BB),
  billboard: E('bb/p50.jpg', 'Find your home', BB), photo1: E('bb/p52.jpg', 'Photography direction', BB), photo2: E('bb/p53.jpg', 'Photography direction', BB),
  reception: E('vis/reception.jpg', 'Jeddah office: reception', CON), glass: E('vis/glass.jpg', 'Meeting-room glass', CON), wayfinding: E('vis/wayfinding.jpg', 'Wall graphic & wayfinding', CON), stationery: E('vis/stationery.jpg', 'Stationery', CON)
};
const S = (h, keys, t) => ({ h, t, m: keys.map(k => EZ[k]) });
const EAZLI = {
  slug: 'eazli', title: 'eazli', cat: 'eazli', label: 'Flagship · Naming, brand strategy, identity, guidelines, messaging, marketing',
  client: 'eazli · AI-led home ecosystem · Jeddah', role: 'Designer → Creative Lead → Head of Marketing · Sep 2024 – Jul 2026',
  intro: 'From naming to a complete brand experience. I created the name, logo, identity and brand book, shaped positioning and messaging, and led the brand through web, social, pre-launch and the Jeddah office.',
  coverM: EZ.hero,
  sections: [S('Brand Book', ['cover', 'why']), S('Naming: from “easily”', ['atoz', 'pair']), S('Logo', ['logoEn', 'logoAr', 'icon', 'clear', 'usage']),
    S('Identity system', ['mood', 'primary', 'secondary', 'type', 'typeEn', 'typeAr', 'system', 'elements', 'seven', 'senses']),
    S('Website & UI direction', ['devices', 'home', 'agents', 'plans', 'chat', 'web', 'phone']), S('Social', ['social', 'path', 'community']),
    S('Corporate & pre-launch', ['cards', 'email', 'stickers', 'billboard', 'photo1', 'photo2']), S('Office branding (concept applications)', ['reception', 'glass', 'wayfinding', 'stationery'])]
};
const ALL = [EAZLI, ...PROJECTS];
const bySlug = s => ALL.find(p => p.slug === s);
const coverOf = p => p.coverM || { w: p.cover };
const mediaOf = p => p.sections.flatMap(s => s.m.map(m => ({ m: asM(m), sec: s.h, sub: s.sub, t: s.t })));
const nameOf = p => (typeof MENU !== 'undefined' && MENU[p.slug]) || p.title;

/* ---------- slides ---------- */
function collage(p, picks) {
  return `<div class="col col-${picks.length}">${picks.map((x, i) => `<button class="tile" data-f data-open="${p.slug}" data-at="${x.i}" aria-label="Open ${esc(p.title)}${x.m.cap ? ': ' + esc(x.m.cap) : ''}">${img(x.m, { w: i === 0 ? 1800 : 1100, eager: false })}<span class="fbk">${esc(p.title)}</span>${x.m.v ? '<span class="play" aria-hidden="true">▶</span>' : ''}</button>`).join('')}</div>`;
}
function picksFor(p) {
  const all = mediaOf(p).map((x, i) => ({ ...x, i: i + 1 }));
  const c = coverOf(p);
  const first = all.find(x => (x.m.w && x.m.w === c.w) || (x.m.src && x.m.src === c.src)) || all[0];
  const rest = all.filter(x => x !== first && !x.m.v);
  const n = all.length >= 5 ? 3 : Math.min(all.length, 3);
  const spread = n === 3 ? [rest[Math.floor(rest.length / 3)], rest[Math.floor(rest.length * 2 / 3)] || rest[rest.length - 1]] : rest.slice(0, n - 1);
  return [first, ...spread].filter(Boolean);
}
function projectSlide(p, n) {
  const meta = [p.agency, p.client, p.engagement].filter(Boolean).join(' · ');
  return `<section class="slide sl-project" id="s-${p.slug}" data-cat="${p.cat}" aria-label="${esc(p.title)}">
    ${collage(p, picksFor(p))}
    <div class="info">
      <span class="num">${String(n).padStart(2, '0')}</span>
      <div class="info-main"><p class="kick">${esc(CATS[p.cat] || 'Flagship')} · ${esc(p.label)}</p><h2>${esc(p.title)}</h2><p class="meta">${esc(meta)}${meta ? ' · ' : ''}${esc(p.role)}</p></div>
      <button class="go" data-open="${p.slug}" data-at="0">View project <span aria-hidden="true">→</span></button>
    </div></section>`;
}
function eazliSlides() {
  const open = (k, label) => `<button class="go go-inv" data-open="eazli" data-at="${mediaOf(EAZLI).findIndex(x => x.m === EZ[k]) + 1}">${label} <span aria-hidden="true">→</span></button>`;
  const tile = (k, at) => `<button class="tile" data-f data-open="eazli" data-at="${mediaOf(EAZLI).findIndex(x => x.m === EZ[k]) + 1}" aria-label="${esc(EZ[k].cap)}">${img(EZ[k], { w: 1800 })}<span class="tag">${esc(EZ[k].tag)}</span></button>`;
  return `
  <section class="slide sl-eazli sl-hero" id="s-eazli" data-cat="eazli" aria-label="eazli">
    <button class="full" data-f data-open="eazli" data-at="0" aria-label="Open eazli case study">${img(EZ.hero, { w: 2400, eager: true, alt: 'eazli identity' })}</button>
    <div class="info info-dark"><span class="num">★</span><div class="info-main"><p class="kick">Flagship project · 2024–2026 · Jeddah</p><h2>eazli</h2><p class="meta">From naming to a complete brand experience · Name, logo, identity, brand book, messaging, web & UI, social, pre-launch, office</p></div>${open('cover', 'View case study')}</div>
  </section>
  <section class="slide sl-project" data-cat="eazli" aria-label="eazli identity">
    <div class="col col-3">${tile('mood')}${tile('logoEn')}${tile('icon')}</div>
    <div class="info"><span class="num">★</span><div class="info-main"><p class="kick">eazli · Naming & identity</p><h2>From “easily”: life made simple.</h2><p class="meta">The “li” is a figure stepping through a door. Flipped, it smiles.</p></div>${open('mood', 'Identity')}</div>
  </section>
  <section class="slide sl-project" data-cat="eazli" aria-label="eazli rollout">
    <div class="col col-3">${tile('devices')}${tile('social')}${tile('billboard')}</div>
    <div class="info"><span class="num">★</span><div class="info-main"><p class="kick">eazli · Communications & marketing</p><h2>Website, social, pre-launch.</h2><p class="meta">Website & UI direction to public beta · social system @eazli.life · launch materials</p></div>${open('devices', 'Rollout')}</div>
  </section>
  <section class="slide sl-project" data-cat="eazli" aria-label="eazli office">
    <div class="col col-3">${tile('reception')}${tile('glass')}${tile('stationery')}</div>
    <div class="info"><span class="num">★</span><div class="info-main"><p class="kick">eazli · Office branding</p><h2>The brand in the Jeddah office.</h2><p class="meta">Concept applications created for this portfolio: reception, meeting-room glass, wayfinding, stationery.</p></div>${open('reception', 'Office')}</div>
  </section>`;
}
function divider(cat) {
  const list = PROJECTS.filter(p => p.cat === cat);
  return `<section class="slide sl-div" id="cat-${cat}" data-cat="${cat}" aria-label="${esc(CATS[cat])}">
    <div class="div-in"><p class="kick">${list.length} projects</p><h2>${esc(CATS[cat])}</h2>
    <ol class="div-list">${list.map(p => `<li><a href="#s-${p.slug}" data-goto="s-${p.slug}">${esc(nameOf(p))}</a></li>`).join('')}</ol></div></section>`;
}
function build() {
  let n = 0, html = `
  <section class="slide sl-cover" id="s-home" aria-label="Introduction">
    <div class="cover-in">
      <p class="kick">Portfolio</p>
      <h1>Nour<br>Serhan</h1>
      <p class="cover-role">Brand strategist · Art director · Graphic designer<br>Lisbon · Founder of Think Milk</p>
      <p class="cover-line">I build brands from the name up: naming, strategy, identity, messaging and the campaigns that take them to market.</p>
      <div class="cover-cta"><button class="go go-inv" data-goto="s-eazli">Start with eazli <span aria-hidden="true">↓</span></button><button class="go go-ghost" data-index>All projects</button></div>
    </div>
    <div class="cover-strip" aria-hidden="true">${ALL.slice(0, 8).map(p => `<span data-f>${img(coverOf(p), { w: 600 })}</span>`).join('')}</div>
  </section>
  ${eazliSlides()}`;
  for (const cat of Object.keys(CATS)) { html += divider(cat); for (const p of PROJECTS.filter(x => x.cat === cat)) html += projectSlide(p, ++n); }
  html += `<section class="slide sl-cover sl-contact" id="s-contact" aria-label="Contact"><div class="cover-in">
    <p class="kick">Contact</p><h1>Let’s build<br>your brand.</h1>
    <p class="cover-line"><a class="mail" href="mailto:thinkmilk@noorserhan.com">thinkmilk@noorserhan.com</a> <button class="go go-ghost copy" data-copy="thinkmilk@noorserhan.com">Copy email</button></p>
    <p class="cover-role">Naming · Brand strategy · Visual identity · Brand guidelines · Tone of voice · Packaging · Campaigns · Spaces & signage · Web & UI direction · Social<br><br>Lisbon · English & Arabic</p></div></section>`;
  $('#deck').innerHTML = html;
}

/* ---------- menu ---------- */
function buildMenu() {
  const drop = cat => `<li class="dd"><button class="dd-btn" aria-expanded="false">${esc(CATS[cat])}</button><ul class="dd-list">${PROJECTS.filter(p => p.cat === cat).map(p => `<li><a href="#s-${p.slug}" data-goto="s-${p.slug}">${esc(nameOf(p))}</a></li>`).join('')}</ul></li>`;
  $('#menu').innerHTML = `<li><a href="#s-home" data-goto="s-home">Home</a></li><li><a href="#s-eazli" data-goto="s-eazli" class="hl">eazli</a></li>${Object.keys(CATS).map(drop).join('')}<li><a href="#s-contact" data-goto="s-contact">Contact</a></li>`;
}
function closeMenus() { $$('.dd-btn').forEach(b => b.setAttribute('aria-expanded', 'false')); document.body.classList.remove('nav-open'); $('#burger').setAttribute('aria-expanded', 'false'); }

/* ---------- index overlay ---------- */
function buildIndex(f = 'all') {
  const items = ALL.filter(p => f === 'all' || p.cat === f);
  $('#index-body').innerHTML = `<div class="chips" role="group" aria-label="Filter">${[['all', 'All'], ['eazli', 'eazli'], ...Object.entries(CATS)].map(([k, l]) => `<button class="chip" data-filter="${k}" aria-pressed="${k === f}">${esc(l)} <span>${k === 'all' ? ALL.length : ALL.filter(p => p.cat === k).length}</span></button>`).join('')}</div>
  <div class="idx">${items.map(p => `<button class="card" data-f data-open="${p.slug}" data-at="0">${img(coverOf(p), { w: 900, alt: p.title })}<span class="fbk">${esc(p.title)}</span><span class="card-t">${esc(nameOf(p))}<small>${esc(CATS[p.cat] || 'Flagship')}</small></span></button>`).join('')}</div>`;
}

/* ---------- project viewer ---------- */
const V = $('#viewer'); let cur = null, items = [], at = 0;
function openProject(slug, i = 0) {
  cur = bySlug(slug); if (!cur) return;
  items = [{ intro: true }, ...mediaOf(cur), { end: true }];
  at = Math.max(0, Math.min(i, items.length - 1));
  $('#v-title').textContent = cur.title;
  $('#v-thumbs').innerHTML = items.map((x, k) => x.intro ? `<button data-k="${k}" class="th th-i" aria-label="Overview">i</button>` : x.end ? `<button data-k="${k}" class="th th-i" aria-label="Next project">→</button>` : `<button data-k="${k}" class="th" data-f aria-label="${esc(x.m.cap || x.sec)}">${img(x.m, { w: 240, alt: '' })}</button>`).join('');
  if (!V.open) V.showModal();
  if ($('#index').open) $('#index').close();
  history.replaceState(null, '', '#' + slug);
  show();
}
function show() {
  const x = items[at], st = $('#v-stage');
  $$('#v-stage video').forEach(v => v.pause());
  if (x.intro) {
    const p = cur, rows = [['Client', p.client], ['Agency', p.agency], ['Engagement', p.engagement], ['Location', p.where], ['Role', p.role], ...(p.credits || [])].filter(r => r[1]);
    st.innerHTML = `<div class="v-intro"><div class="v-intro-img" data-f>${img(coverOf(p), { w: 2000, eager: true, alt: p.title })}<span class="fbk">${esc(p.title)}</span></div>
      <div class="v-intro-txt"><p class="kick">${esc(CATS[p.cat] || 'Flagship')} · ${esc(p.label)}</p><h2>${esc(p.title)}</h2><p class="v-lede">${esc(p.intro)}</p>
      <dl>${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      <button class="go go-inv" data-step="1">See the work <span aria-hidden="true">→</span></button></div></div>`;
    $('#v-sec').textContent = 'Overview';
  } else if (x.end) {
    const i = ALL.indexOf(cur), nx = ALL[(i + 1) % ALL.length];
    st.innerHTML = `<div class="v-end"><p class="kick">Next project</p><button class="v-next" data-open="${nx.slug}" data-at="0" data-f>${img(coverOf(nx), { w: 1400, alt: nx.title })}<span class="fbk">${esc(nx.title)}</span><span class="v-next-t">${esc(nx.title)} →</span></button><button class="go go-ghost" data-close-index>All projects</button></div>`;
    $('#v-sec').textContent = 'Next';
  } else {
    const m = x.m;
    const media = m.v
      ? `<video controls playsinline preload="metadata" poster="${esc(wixUrl(m.poster, 1200))}">${(m.q || ['1080p', '720p', '480p']).map(q => `<source src="${VID}${m.v}/${q}/mp4/file.mp4" type="video/mp4">`).join('')}</video>`
      : img(m, { w: 2200, eager: true });
    st.innerHTML = `<figure class="v-fig" data-f>${media}<span class="fbk">${esc(cur.title)}</span></figure>`;
    $('#v-sec').textContent = x.sec;
    // preload neighbour
    const nx = items[at + 1]; if (nx && nx.m && !nx.m.v) { const pre = new Image(); pre.src = srcOf(nx.m, 2200); }
  }
  const x2 = items[at];
  $('#v-cap').innerHTML = x2.m ? `${esc(x2.m.cap || '')}${x2.m.tag ? ` <span class="tag">${esc(x2.m.tag)}</span>` : ''}${x2.m.v ? ' <span class="tag">Video</span>' : ''}${at === items.findIndex(y => y.sec === x2.sec) && x2.t ? `<span class="v-sec-t">${esc(x2.t)}</span>` : ''}` : '';
  $('#v-count').textContent = `${at + 1} / ${items.length}`;
  $$('#v-thumbs .th').forEach((b, k) => b.setAttribute('aria-current', k === at ? 'true' : 'false'));
  $(`#v-thumbs [data-k="${at}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
  $('#v-prev').disabled = at === 0; $('#v-next').disabled = at === items.length - 1;
}
const step = d => { const n = at + d; if (n < 0 || n >= items.length) return; at = n; show(); };
V.addEventListener('close', () => { $$('#v-stage video').forEach(v => v.pause()); history.replaceState(null, '', location.pathname + location.search); const s = cur && document.getElementById('s-' + cur.slug); if (s) s.scrollIntoView({ block: 'start' }); });
V.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } });
let tx = 0, ty = 0;
$('#v-stage').addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
$('#v-stage').addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1); });

/* ---------- deck navigation ---------- */
const slides = () => $$('#deck .slide');
function currentSlide() { const y = innerHeight / 2; return slides().findIndex(s => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; }); }
function goSlide(i) { const s = slides()[Math.max(0, Math.min(i, slides().length - 1))]; s?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
function updateHud() {
  const i = currentSlide(), s = slides()[i]; if (!s) return;
  $('#hud-n').textContent = `${String(i + 1).padStart(2, '0')} / ${slides().length}`;
  const c = s.dataset.cat; $('#hud-c').textContent = c ? (CATS[c] || 'eazli · Flagship') : '';
  document.body.classList.toggle('on-dark', s.classList.contains('sl-cover') || s.classList.contains('sl-div'));
}
addEventListener('scroll', () => requestAnimationFrame(updateHud), { passive: true });
addEventListener('keydown', e => {
  if (V.open || $('#index').open || /input|textarea/i.test(e.target.tagName)) return;
  if (['ArrowDown', 'PageDown', 'ArrowRight'].includes(e.key)) { e.preventDefault(); goSlide(currentSlide() + 1); }
  if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); goSlide(currentSlide() - 1); }
  if (e.key === 'Escape') closeMenus();
});
$('#hud-prev').onclick = () => goSlide(currentSlide() - 1);
$('#hud-next').onclick = () => goSlide(currentSlide() + 1);

/* ---------- clicks ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const dd = t.closest('.dd-btn');
  if (dd) { const o = dd.getAttribute('aria-expanded') === 'true'; $$('.dd-btn').forEach(b => b.setAttribute('aria-expanded', 'false')); dd.setAttribute('aria-expanded', String(!o)); return; }
  if (!t.closest('.dd')) $$('.dd-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
  const g = t.closest('[data-goto]');
  if (g) { e.preventDefault(); closeMenus(); if (V.open) V.close(); if ($('#index').open) $('#index').close(); document.getElementById(g.dataset.goto)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); return; }
  const o = t.closest('[data-open]');
  if (o) { openProject(o.dataset.open, +o.dataset.at || 0); return; }
  if (t.closest('[data-index]')) { buildIndex(); $('#index').showModal(); closeMenus(); return; }
  if (t.closest('[data-close-index]')) { V.close(); buildIndex(); $('#index').showModal(); return; }
  const f = t.closest('[data-filter]'); if (f) { buildIndex(f.dataset.filter); $(`[data-filter="${f.dataset.filter}"]`)?.focus(); return; }
  const s = t.closest('[data-step]'); if (s) { step(+s.dataset.step); return; }
  const th = t.closest('#v-thumbs [data-k]'); if (th) { at = +th.dataset.k; show(); return; }
  const c = t.closest('.copy');
  if (c) { const done = () => { c.textContent = 'Copied'; setTimeout(() => (c.textContent = 'Copy email'), 1500); }; navigator.clipboard?.writeText(c.dataset.copy).then(done).catch(() => {}); return; }
  if (t.id === 'index') $('#index').close();
});
$('#v-prev').onclick = () => step(-1); $('#v-next').onclick = () => step(1); $('#v-close').onclick = () => V.close();
$('#i-close').onclick = () => $('#index').close();
$('#burger').onclick = () => { const o = !document.body.classList.contains('nav-open'); document.body.classList.toggle('nav-open', o); $('#burger').setAttribute('aria-expanded', String(o)); };

/* ---------- start ---------- */
buildMenu(); build(); updateHud();
const h = location.hash.slice(1);
if (h && bySlug(h)) openProject(h, 0); else if (h && document.getElementById(h)) document.getElementById(h).scrollIntoView();
addEventListener('hashchange', () => { const k = location.hash.slice(1); if (bySlug(k) && (!V.open || cur?.slug !== k)) openProject(k, 0); });
