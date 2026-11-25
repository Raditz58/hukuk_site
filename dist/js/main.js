document.addEventListener('DOMContentLoaded', () => {
  const content = window.SITE_CONTENT || {};
  const settings = content.settings || {};
  const practices = content.practices || [];
  const articles = content.articles || [];

  // 1. DYNAMICALLY BIND SETTINGS
  bindSettings(settings);

  // 2. RENDER PRACTICES
  renderPractices(practices);

  // 3. RENDER ARTICLES
  renderArticles(articles);

  // 4. SETUP MODALS & INTERACTIONS
  setupModals();
  setupMobileDrawer();
  setupSmoothScroll();
});

// Update DOM elements based on settings
function bindSettings(settings) {
  if (!settings) return;

  const phoneEls = document.querySelectorAll('.data-phone');
  phoneEls.forEach(el => {
    el.textContent = settings.phone || '+90 212 555 00 00';
    if (el.tagName === 'A') el.href = `tel:${(settings.phone || '').replace(/\s+/g, '')}`;
  });

  const emailEls = document.querySelectorAll('.data-email');
  emailEls.forEach(el => {
    el.textContent = settings.email || 'info@sumeyraculfa.com';
    if (el.tagName === 'A') el.href = `mailto:${settings.email || 'info@sumeyraculfa.com'}`;
  });

  const addressEls = document.querySelectorAll('.data-address');
  addressEls.forEach(el => {
    el.textContent = settings.address || 'İstanbul, Türkiye';
  });

  if (settings.hero_headline) {
    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) {
      heroH1.innerHTML = `${escapeHtml(settings.hero_headline)}<em>${escapeHtml(settings.hero_subheadline || '')}</em>`;
    }
  }

  if (settings.about_text) {
    const aboutP = document.querySelector('.about-copy p');
    if (aboutP) {
      aboutP.textContent = settings.about_text;
    }
  }

  // Publication / Book Bindings
  if (settings.publication_title) {
    const el = document.getElementById('pub-title');
    if (el) el.textContent = settings.publication_title;
    const coverTitle = document.getElementById('pub-cover-title');
    if (coverTitle) coverTitle.textContent = settings.publication_title;
  }
  if (settings.publication_badge) {
    const el = document.getElementById('pub-badge');
    if (el) el.textContent = settings.publication_badge;
  }
  if (settings.publication_publisher) {
    const el = document.getElementById('pub-cover-publisher');
    if (el) el.textContent = settings.publication_publisher;
  }
  if (settings.publication_author) {
    const el = document.getElementById('pub-cover-author');
    if (el) el.textContent = settings.publication_author;
  }
  if (settings.publication_meta) {
    const el = document.getElementById('pub-meta');
    if (el) el.textContent = settings.publication_meta;
  }
  if (settings.publication_description) {
    const el = document.getElementById('pub-description');
    if (el) el.textContent = settings.publication_description;
  }
  if (settings.publication_link) {
    const el = document.getElementById('pub-link');
    if (el) el.href = settings.publication_link;
  }
  if (settings.publication_button_text) {
    const el = document.getElementById('pub-link');
    if (el) el.innerHTML = `${escapeHtml(settings.publication_button_text)}&nbsp; →`;
  }
}

// Render Practice Area Cards
function renderPractices(practices) {
  const grid = document.getElementById('practice-grid');
  if (!grid || !practices.length) return;

  grid.innerHTML = '';
  // Show first 5 or all
  const items = practices.slice(0, 5);
  items.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'practice-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.title} ${p.subtitle || 'Hukuku'}`);

    const imgSrc = p.image || '/assets/images/ticaret-hukuku.jpg';
    card.innerHTML = `
      <img src="${imgSrc}" alt="${escapeHtml(p.title)}" loading="lazy">
      <span>${escapeHtml(p.title)}<small>${escapeHtml(p.subtitle || 'Hukuku')}</small></span>
    `;

    card.addEventListener('click', () => {
      openPracticeModal(p);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPracticeModal(p);
      }
    });

    grid.appendChild(card);
  });
}

// Render Articles Grid
function renderArticles(articles) {
  const container = document.getElementById('articles-cards-container');
  if (!container || !articles.length) return;

  container.innerHTML = '';
  // Take up to 3 articles for landing grid
  const items = articles.slice(0, 3);
  items.forEach((art, idx) => {
    const card = document.createElement('article');
    card.className = 'article';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', art.title);

    const imgSrc = art.coverImage || '/assets/images/makale-ticaret.jpg';
    card.innerHTML = `
      <img src="${imgSrc}" alt="${escapeHtml(art.title)}" loading="lazy">
      <div class="article-body">
        <div class="date">${escapeHtml(art.date || '')}</div>
        <h3>${escapeHtml(art.title)}</h3>
      </div>
    `;

    card.addEventListener('click', () => {
      openArticleModal(art);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openArticleModal(art);
      }
    });

    container.appendChild(card);
  });
}

// Modals Handling
function setupModals() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openArticleModal(article) {
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-body-dynamic');
  if (!overlay || !modalContent) return;

  const imgSrc = article.coverImage || '/assets/images/makale-ticaret.jpg';
  
  // Format markdown body simple parser
  const formattedHtml = parseSimpleMarkdown(article.body || article.summary || '');

  modalContent.innerHTML = `
    <div class="modal-tag">${escapeHtml(article.category || 'Hukuki Değerlendirme')}</div>
    <h2 class="modal-title">${escapeHtml(article.title)}</h2>
    <div class="modal-meta">
      <span><strong>Tarih:</strong> ${escapeHtml(article.date || '')}</span>
      <span><strong>Yazar:</strong> Av. Sümeyra Culfa</span>
    </div>
    <img class="modal-cover" src="${imgSrc}" alt="${escapeHtml(article.title)}">
    <div class="modal-content">
      ${formattedHtml}
    </div>
    <div class="modal-footer">
      <div style="font-size:14px; color:#555;">Hukuki bilgi ve sorularınız için telefon veya e-posta yoluyla bize ulaşabilirsiniz.</div>
      <button class="btn dark-btn" onclick="closeModal();">Kapat</button>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openPracticeModal(practice) {
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-body-dynamic');
  if (!overlay || !modalContent) return;

  const imgSrc = practice.image || '/assets/images/ticaret-hukuku.jpg';
  const servicesHtml = (practice.services && practice.services.length)
    ? `<ul>${practice.services.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
    : '';

  modalContent.innerHTML = `
    <div class="modal-tag">Çalışma Alanımız</div>
    <h2 class="modal-title">${escapeHtml(practice.title)} ${escapeHtml(practice.subtitle || 'Hukuku')}</h2>
    <img class="modal-cover" src="${imgSrc}" alt="${escapeHtml(practice.title)}">
    <div class="modal-content">
      <p><strong>Genel Bakış:</strong> ${escapeHtml(practice.description || '')}</p>
      ${servicesHtml ? `<h4>Başlıca Hizmet Kalemlerimiz:</h4>${servicesHtml}` : ''}
    </div>
    <div class="modal-footer">
      <div style="font-size:14px; color:#555;">Detaylı bilgi için telefon veya e-posta yoluyla bize ulaşabilirsiniz.</div>
      <button class="btn dark-btn" onclick="closeModal();">Kapat</button>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.selectServiceAndScroll = function(serviceName) {
  closeModal();
  const content = window.SITE_CONTENT || {};
  const practices = content.practices || [];
  const found = practices.find(p => 
    `${p.title} ${p.subtitle || 'Hukuku'}`.toLowerCase().includes(serviceName.toLowerCase()) || 
    p.title.toLowerCase().includes(serviceName.toLowerCase())
  );
  if (found) {
    openPracticeModal(found);
  } else {
    const target = document.getElementById('calisma-alanlari') || document.getElementById('uzmanlik');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
};

window.closeModal = function() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Mobile Drawer
function setupMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');

  if (!openBtn || !closeBtn || !drawer) return;

  openBtn.addEventListener('click', () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Smooth scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      let targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      if (targetId === 'uzmanlik') targetId = 'calisma-alanlari';
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Simple Markdown Parser (Headers, bold, italics, lists, blockquotes)
function parseSimpleMarkdown(md) {
  if (!md) return '';
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^\s*\*\s+(.*$)/gim, '<li>$1</li>')
    .replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>')
    .replace(/\n\s*\n/gim, '</p><p>');

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  // Clean adjacent uls
  html = html.replace(/<\/ul>\s*<ul>/gim, '');

  return `<p>${html}</p>`;
}

// HTML Escape helper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
