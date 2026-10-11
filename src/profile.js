const WIXB = 'https://static.wixstatic.com/media/';
const P = s => PROJECTS.find(p => p.slug === s);
const wu = f => `${WIXB}${f}/v1/fit/w_1600,h_1600,al_c,q_85/img.${/\.png$/i.test(f) ? 'png' : 'jpg'}`;
function im(o, h, cap = '', tag = '', name = '') {
  if (typeof o === 'string') o = { w: o };
  const src = o.src || wu(o.w), fb = o.w ? WIXB + o.w : '';
  return `<div class="cell"><div class="im" style="height:${h}"><img src="${src}" ${fb ? `data-fb="${fb}"` : ''} alt="${cap || name}" onerror="if(this.dataset.fb&&this.src!==this.dataset.fb){this.src=this.dataset.fb}else{this.parentElement.classList.add('miss')}"><span class="fb">${name}</span></div>${cap || tag ? `<div class="cap"><span>${cap}</span>${tag ? `<b>${tag}</b>` : ''}</div>` : ''}</div>`;
}
const media = (p, i) => { let k = 0; for (const s of p.sections) for (const x of s.m) { if (k === i) return x; k++; } };
const BB = 'eazli Brand Book', CON = 'Concept application';
const folio = n => `<div class="folio"><span>Nour Serhan · Branding profile</span><span>${n} / 8</span></div>`;
const head = (k, t) => `<div class="ph"><span class="eb">${k}</span><span class="pt">${t}</span></div>`;
const pages = [];

pages.push(`<section class="page inv" style="grid-template-rows:auto 1fr auto">
  <div style="display:flex;justify-content:space-between;font:400 9pt/1 var(--d)"><span>Nour Serhan</span><span>Branding profile</span></div>
  <h1 class="disp" style="align-self:end;font-size:84pt">I build brands<br>from the name up.</h1>
  <div style="display:flex;justify-content:space-between;align-items:end;margin-top:8mm;padding-top:4mm;border-top:1px solid #f7f6f3;font:400 10pt/1.5 var(--d)">
    <span>Brand strategist · Art director · Graphic designer<br><span class="mute">Lisbon · Founder of Think Milk · 10+ years</span></span>
    <span style="text-align:right">thinkmilk@noorserhan.com<br><span class="mute">noorserhan.com</span></span></div>
</section>`);

pages.push(`<section class="page" style="grid-template-rows:auto 1fr;gap:5mm">
  ${head('Flagship · 2024–2026', 'eazli · From naming to a complete brand experience')}
  ${im({ src: 'a/vis/identity.jpg' }, '150mm', 'Name, bilingual logo, icon and app icon', BB)}
  ${folio(2)}</section>`);

pages.push(`<section class="page" style="grid-template-columns:1.6fr 1fr;grid-template-rows:auto 1fr 1fr;gap:5mm 6mm">
  <div style="grid-column:1/-1">${head('eazli · Identity', 'Mood board and logo system')}</div>
  <div style="grid-row:2/4">${im({ src: 'a/vis/mood.jpg' }, '146mm', 'Mood board: a summary of the existing system', 'Portfolio visualization')}</div>
  ${im({ src: 'a/bb/p10.jpg' }, '64mm', '“li”: a figure stepping through a door', BB)}
  ${im({ src: 'a/bb/p19.jpg' }, '64mm', 'Flipped, it smiles: the icon', BB)}
  ${folio(3)}</section>`);

pages.push(`<section class="page" style="grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr 1fr;gap:5mm 6mm">
  <div style="grid-column:1/-1">${head('eazli · Rollout', 'Website, social, pre-launch, office')}</div>
  ${im({ src: 'a/vis/devices.jpg' }, '66mm', 'Website & UI direction', 'eazli.com beta')}
  ${im({ src: 'a/bb/p41.jpg' }, '66mm', 'Social post system', BB)}
  ${im({ src: 'a/vis/reception.jpg' }, '66mm', 'Jeddah office reception', CON)}
  ${im({ src: 'a/bb/p50.jpg' }, '66mm', 'Find your home', BB)}
  ${folio(4)}</section>`);

const br = P('brassica'), ss = P('sunsoul');
pages.push(`<section class="page" style="grid-template-columns:1.25fr 1fr;grid-template-rows:auto 1fr 1fr;gap:5mm 6mm">
  ${head('Original identity · Beirut', 'Brassica Brasserie')}${head('Original identity · Beirut', 'SunSoul Seafood Restaurant')}
  ${im(br.cover, '70mm', 'Main visual, after Hopper’s “Nighthawks”', '', br.title)}
  ${im(ss.cover, '70mm', 'The S drawn as the Arabic letter س, shaped like a wave', '', ss.title)}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4mm">${im(media(br, 3), '62mm', 'Coasters')}${im(media(br, 6), '62mm', 'Restroom signage')}</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4mm">${im(media(ss, 2), '62mm', 'Menu')}${im(media(ss, 5), '62mm', 'Coasters')}</div>
  ${folio(5)}</section>`);

const cf = P('champs-fitness'), pc = P('petit-cafe'), co = P('champs-office');
pages.push(`<section class="page" style="grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto 1fr 1fr;gap:5mm 6mm">
  ${[cf, pc, co].map(p => head(p.label, p.title)).join('')}
  ${im(cf.cover, '68mm', '', '', cf.title)}${im(pc.cover, '68mm', 'Rebrand for the 20th anniversary', '', pc.title)}${im(co.cover, '68mm', 'Office for Fadi el Khatib', '', co.title)}
  ${im(media(cf, 1), '62mm', 'Elevator branding')}${im(media(pc, 2), '62mm', 'Food photography: Yves Lahoud')}${im(media(co, 1), '62mm', 'Wall of fame')}
  ${folio(6)}</section>`);

const camps = ['philips','pizza-hut','mcvities','daikin','general-mills','formula-1','la-vache-qui-rit'].map(P);
pages.push(`<section class="page" style="grid-template-columns:repeat(4,1fr);grid-template-rows:auto 1fr 1fr;gap:5mm 5mm">
  <div style="grid-column:1/-1">${head('Agency art direction · UAE', 'Campaigns')}</div>
  ${camps.map((p, i) => `<div style="${i === 0 ? 'grid-column:span 2' : ''}">${im(p.cover, '62mm', `${p.title} · ${p.agency}`, '', p.title)}</div>`).join('')}
  ${folio(7)}</section>`);

pages.push(`<section class="page inv" style="grid-template-columns:1.2fr 1fr;gap:14mm">
  <div style="align-self:start">
    <p class="eb">Expertise</p>
    <p style="font:700 20pt/1.2 var(--d);letter-spacing:-.02em;margin:0">Naming · Brand strategy · Visual identity · Guidelines · Tone of voice · Packaging · Campaigns · Spaces & signage · Web & UI direction · Social</p>
    <p class="mute" style="font:400 9.5pt/1.5 var(--d);margin-top:8mm">Clients and agencies include eazli, Philips, McVitie’s, Daikin, General Mills, Pizza Hut, La Vache Qui Rit, Abu Dhabi Grand Prix · TBWA\\RAAD, VMLY&R, Havas, Leo Burnett, Wondereight. Dubai Lynx print shortlist 2015.</p>
  </div>
  <div style="display:grid;align-content:end">
    <h2 class="disp" style="font-size:60pt">Let’s build<br>your brand.</h2>
    <p style="font:400 15pt/1.4 var(--d);margin-top:8mm">thinkmilk@noorserhan.com<br><span class="mute">noorserhan.com · Lisbon</span></p>
  </div>
  ${folio(8)}</section>`);

document.getElementById('doc').innerHTML = pages.join('');
