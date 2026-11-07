import { profile, projects, skills, journey, certificates } from './data.js';
const $ = (selector) => document.querySelector(selector);
const escape = (text) => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = (url) => { try { const value = new URL(url); return value.protocol === 'https:' ? value.href : ''; } catch { return ''; } };
const link = (url, label) => safeUrl(url) ? `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : '';
document.querySelectorAll('[data-name]').forEach(el => el.textContent = profile.name);
document.title = `${profile.name} — Software Engineer`;
$('#bio').textContent = profile.bio;
$('#tech-strip').textContent = profile.technologies.join('   /   ');
$('#github-link').href = safeUrl(profile.github) || 'https://github.com';
$('#email-link').href = `mailto:${encodeURIComponent(profile.email)}`;
$('#year').textContent = new Date().getFullYear();
const menu = $('.menu-toggle');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); $('#navigation').classList.toggle('open', open); });
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); $('#navigation').classList.remove('open'); };
$('#navigation').addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); if (document.activeElement.closest('#navigation')) menu.focus(); } });
function renderProjects(filter = 'All') {
  $('#project-grid').innerHTML = projects.filter(project => filter === 'All' || project.category === filter).map((project, index) => `<article class="project-card"><div class="project-art ${escape(project.art)}" aria-hidden="true"><span class="mock-label">${escape(project.title)} / workspace</span><div class="mock-window"><div class="mock-sidebar">✧<i></i><i></i><i></i></div><div class="mock-main"><b>${escape(project.title)}</b><span>A little clarity, every day.</span><div class="mock-panels"><i></i><i></i><i></i></div><div class="mock-lines"></div></div></div><span class="project-number">0${index + 1}</span></div><div class="project-body"><p class="eyebrow">${escape(project.category)} / SAMPLE PROJECT</p><h3>${escape(project.title)}</h3><p class="project-subtitle">${escape(project.subtitle)}</p><p>${escape(project.description)}</p><ul class="tags">${project.tags.map(tag => `<li>${escape(tag)}</li>`).join('')}</ul><div class="project-links">${link(project.liveUrl, 'Live demo')}${link(project.sourceUrl, 'Source code')}${!safeUrl(project.liveUrl) && !safeUrl(project.sourceUrl) ? '<span>Add your project links in data.js</span>' : ''}</div></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); renderProjects(button.dataset.filter); }));
$('#skill-grid').innerHTML = skills.map((skill, index) => `<article><span class="skill-number">0${index + 1} /</span><h3>${escape(skill.title)}</h3><ul>${skill.items.map(item => `<li>${escape(item)}</li>`).join('')}</ul></article>`).join('');
$('#journey-list').innerHTML = journey.map(item => `<article class="timeline-item"><p class="eyebrow">${escape(item.date)}</p><h3>${escape(item.title)}</h3><p class="organization">${escape(item.organization)}</p><p>${escape(item.description)}</p></article>`).join('');
$('#certificate-grid').innerHTML = certificates.map(item => `<article><span aria-hidden="true">✧</span><h3>${escape(item.title)}</h3><p>${escape(item.issuer)}</p>${link(item.url, 'View credential') || '<p class="muted">Add your credential link in data.js</p>'}</article>`).join('');
$('#copy-email').addEventListener('click', async () => { try { await navigator.clipboard.writeText(profile.email); $('#copy-status').textContent = 'Email address copied.'; } catch { $('#copy-status').textContent = `Email me at ${profile.email}`; } });
