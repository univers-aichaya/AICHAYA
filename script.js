// ===========================
// DATA — PRODUITS • L'UNIVERS D'AICHAYA
// ===========================
const PRODUCTS = [
  {
    id: 13, name: "Déodorant Dove Spray",
    cat: "cosmetiques", catLabel: "Cosmétiques",
    price: 3500, oldPrice: 5000,
    emoji: "🧴", image: "image/deo.jpg", badge: "promo",
    desc: "Déodorant Dove Go Fresh antiperspirant, tenue 48h, fraîcheur continue.",
    colors: ["#ffffff", "#c9847a", "#8bc34a"]
  },
  {
    id: 14, name: "Sac Plissé Élégant",
    cat: "sacs", catLabel: "Sacs",
    price: 15000, oldPrice: 20000,
    emoji: "👜", image: "image/sac zara.jpg", badge: "new",
    desc: "Sac en cuir PU plissé avec anse travaillée, disponible en Noir et Beige.",
    colors: ["#000000", "#f5f5dc"]
  },
  {
    id: 15, name: "Robe Florale Printanière",
    cat: "robes", catLabel: "Robes",
    price: 22000, oldPrice: null,
    emoji: "👗", image: "image/Robe.jpg", badge: "hot",
    desc: "Robe midi légère à motif floral, avec manches bouffantes et col carré.",
    colors: ["#ffffff", "#ffb6c1", "#90ee90"]
  },
  {
    id: 16, name: "Lot de Foulards Doux",
    cat: "accessoires", catLabel: "Accessoires",
    price: 5000, oldPrice: null,
    emoji: "🧣", image: "image/bonet.jpg", badge: null,
    desc: "Magnifiques foulards très doux et colorés, parfaits pour accessoiriser vos tenues avec style.",
    colors: ["#ff0000", "#008000", "#0000ff"]
  },
  {
    id: 17, name: "Déodorant Nivea Men Deep",
    cat: "cosmetiques", catLabel: "Cosmétiques",
    price: 3800, oldPrice: null,
    emoji: "🧔", image: "image/Deo2.jpg", badge: "new",
    desc: "Déodorant Nivea Men Deep, protection 48h avec extrait de charbon noir.",
    colors: ["#000000", "#4a4a4a"]
  },
  {
    id: 18, name: "Colle pour Accessoires",
    cat: "autres", catLabel: "Autres",
    price: 2500, oldPrice: null,
    emoji: "🧴", image: "image/Colle.jpg", badge: null,
    desc: "Colle forte et sécurisée pour faux cils, perruques ou accessoires corporels.",
    colors: ["#ffffff"]
  },
  {
    id: 19, name: "Lunettes de Soleil Chic",
    cat: "accessoires", catLabel: "Accessoires",
    price: 8000, oldPrice: 12000,
    emoji: "🕶️", image: "image/Lunnete.jpg", badge: "promo",
    desc: "Lunettes de soleil stylées avec protection UV, idéales pour finaliser votre tenue d'été.",
    colors: ["#000000", "#d4a853"]
  },
  {
    id: 20, name: "Parure de Bijoux Scintillante",
    cat: "bijoux", catLabel: "Bijoux",
    price: 15000, oldPrice: null,
    emoji: "✨", image: "image/bijoux.jpg", badge: "new",
    desc: "Ensemble complet de bijoux pour un look radieux et sophistiqué.",
    colors: ["#d4a853", "#c9847a"]
  },
  {
    id: 21, name: "Bracelet Ethnique",
    cat: "bracelets", catLabel: "Bracelets",
    price: 4500, oldPrice: null,
    emoji: "📿", image: "image/bracelet.jpg", badge: null,
    desc: "Bracelet confectionné avec soin pour ajouter une touche originale à votre poignet.",
    colors: ["#8b4513", "#c4a882"]
  },
  {
    id: 22, name: "Collier Majestueux",
    cat: "bijoux", catLabel: "Bijoux",
    price: 9000, oldPrice: 13000,
    emoji: "📿", image: "image/colier.jpg", badge: "promo",
    desc: "Superbe collier qui sublime et met en valeur le port de tête.",
    colors: ["#d4a853"]
  },
  {
    id: 23, name: "Gloss Lèvres Brillance Absolute",
    cat: "cosmetiques", catLabel: "Cosmétiques",
    price: 3000, oldPrice: null,
    emoji: "💄", image: "image/gloss.jpg", badge: "hot",
    desc: "Gloss pour des lèvres pulpeuses, hydratées et brillantes avec une tenue longue durée.",
    colors: ["#ffb6c1", "#ff69b4"]
  },
  {
    id: 24, name: "Gloss Lèvres Brillance - Teinte Douce",
    cat: "cosmetiques", catLabel: "Cosmétiques",
    price: 3000, oldPrice: null,
    emoji: "💄", image: "image/gloss (2).jpg", badge: null,
    desc: "Variante du gloss à brillance absolue avec une teinte douce et discrète.",
    colors: ["#ffc0cb", "#f08080"]
  },
  {
    id: 25, name: "Jeu de Bracelets Dorés",
    cat: "bracelets", catLabel: "Bracelets",
    price: 8500, oldPrice: null,
    emoji: "✨", image: "image/link here!_Pulseras florales apilables para mujer en oro - Juego de 3 pulseras chapadas en oro de 18K, pulseras de acero inoxidable sin decoloración,.jpg", badge: "new",
    desc: "Jeu de 3 bracelets empilables plaqués or, motif floral élégant, ne se décolorent pas.",
    colors: ["#d4a853"]
  }
];

const CATEGORIES = [
  { id: "tous",        name: "Tous",         icon: "✨", count: PRODUCTS.length },
  { id: "bracelets",   name: "Bracelets",    icon: "📿", count: PRODUCTS.filter(p=>p.cat==="bracelets").length },
  { id: "robes",       name: "Robes",        icon: "👗", count: PRODUCTS.filter(p=>p.cat==="robes").length },
  { id: "accessoires", name: "Accessoires",  icon: "🧣", count: PRODUCTS.filter(p=>p.cat==="accessoires").length },
  { id: "bijoux",      name: "Bijoux",       icon: "💎", count: PRODUCTS.filter(p=>p.cat==="bijoux").length },
  { id: "sacs",        name: "Sacs",         icon: "👜", count: PRODUCTS.filter(p=>p.cat==="sacs").length },
  { id: "cosmetiques", name: "Cosmétiques",  icon: "🧴", count: PRODUCTS.filter(p=>p.cat==="cosmetiques").length },
  { id: "autres",      name: "Autres",       icon: "🌿", count: PRODUCTS.filter(p=>p.cat==="autres").length },
];

// ===========================
// STATE
// ===========================
let cart     = JSON.parse(localStorage.getItem('cart') || '[]');
let liked    = JSON.parse(localStorage.getItem('liked') || '[]');
let filter   = 'tous';

// ===========================
// UTILS
// ===========================
const fmt = n => n.toLocaleString('fr-FR') + ' FCFA';

function saveCart()  { localStorage.setItem('cart',  JSON.stringify(cart));  updateCartUI(); }
function saveLiked() { localStorage.setItem('liked', JSON.stringify(liked)); }

// ===========================
// LOADER
// ===========================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// ===========================
// NAVBAR SCROLL
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.querySelector('.back-top').classList.toggle('show', window.scrollY > 400);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open-menu');
});
// Close on link click
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open-menu'));
});

// ===========================
// SCROLL SPY — nav links
// ===========================
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ===========================
// COUNTDOWN
// ===========================
function runCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59, 0);

  function tick() {
    const now  = new Date();
    let diff   = Math.max(0, end - now);
    const h    = Math.floor(diff / 3600000); diff %= 3600000;
    const m    = Math.floor(diff / 60000);  diff %= 60000;
    const s    = Math.floor(diff / 1000);

    const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = String(val).padStart(2,'0'); };
    set('cd-h', h); set('cd-m', m); set('cd-s', s);
  }
  tick();
  setInterval(tick, 1000);
}

// ===========================
// RENDER CATEGORIES (banner)
// ===========================
function renderCategories() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.slice(1).map(c => `
    <div class="cat-card reveal" onclick="setFilter('${c.id}'); document.getElementById('produits').scrollIntoView({behavior:'smooth'});">
      <span class="cat-icon">${c.icon}</span>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} produit${c.count>1?'s':''}</div>
    </div>
  `).join('');
  observeReveal();
}

// ===========================
// RENDER PRODUCTS
// ===========================
function renderProducts(activeFilter) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const list = activeFilter === 'tous'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeFilter);

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-light);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <p>Aucun produit dans cette catégorie.</p>
    </div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => {
    const isLiked = liked.includes(p.id);
    const badgeHTML = p.badge ? `<div class="product-badge badge-${p.badge}">${
      p.badge === 'new' ? 'Nouveau' : p.badge === 'promo' ? 'Promo' : '🔥 Hot'
    }</div>` : '';
    const oldPriceHTML = p.oldPrice
      ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : '';
    return `
      <div class="product-card reveal" style="animation-delay:${i*0.07}s" data-id="${p.id}">
        <div class="product-img">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;background-color:#fff;">` : `<div class="product-img-placeholder">${p.emoji}</div>`}
          ${badgeHTML}
          <div class="product-actions">
            <button class="action-btn ${isLiked?'liked':''}" title="Favoris" onclick="toggleLike(event,${p.id})">
              ${isLiked ? '❤️' : '🤍'}
            </button>
            <button class="action-btn" title="Aperçu" onclick="openQuickView(event,${p.id})">👁️</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-cat">${p.catLabel}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-main">${fmt(p.price)}</span>
              ${oldPriceHTML}
            </div>
            <button class="add-to-cart" title="Ajouter au panier" onclick="addToCart(event,${p.id})">🛍</button>
          </div>
        </div>
      </div>`;
  }).join('');
  observeReveal();
}

// ===========================
// FILTER TABS
// ===========================
function setFilter(cat) {
  filter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderProducts(cat);
}

function renderFilterTabs() {
  const wrap = document.getElementById('filter-tabs');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => `
    <button class="filter-tab ${c.id === 'tous' ? 'active' : ''}" data-cat="${c.id}" onclick="setFilter('${c.id}')">
      ${c.icon} ${c.name}
    </button>
  `).join('');
}

// ===========================
// CART LOGIC
// ===========================
function addToCart(e, id) {
  e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  showToast(`${product.emoji} "${product.name}" ajouté au panier !`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  renderCartItems();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = total;
  badge.classList.toggle('show', total > 0);
}

function renderCartItems() {
  const wrap = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">
      <div class="cart-empty-icon">🛍️</div>
      <p>Votre panier est vide</p>
    </div>`;
    if (totalEl) totalEl.textContent = fmt(0);
    return;
  }

  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:#fff;">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;background-color:#fff;">` : item.emoji}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="cart-item-del" onclick="removeFromCart(${item.id})" title="Supprimer">🗑</button>
        </div>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  if (totalEl) totalEl.textContent = fmt(total);
}

// ===========================
// CART DRAWER
// ===========================
function openCart()  {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  renderCartItems();
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}

// ===========================
// LIKE / FAVORIS
// ===========================
function toggleLike(e, id) {
  e.stopPropagation();
  const idx = liked.indexOf(id);
  if (idx === -1) liked.push(id);
  else liked.splice(idx, 1);
  saveLiked();
  renderProducts(filter);
}

// ===========================
// QUICK VIEW (simple modal)
// ===========================
function openQuickView(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;

  const existing = document.getElementById('quick-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'quick-modal';
  modal.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9998;
    display:flex;align-items:center;justify-content:center;padding:20px;
    backdrop-filter:blur(6px);animation:fadeIn 0.3s ease;
  `;
  const colorsHTML = p.colors.map(c =>
    `<span style="width:22px;height:22px;border-radius:50%;background:${c};display:inline-block;border:2px solid rgba(255,255,255,0.5);margin-right:6px;"></span>`
  ).join('');
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;max-width:500px;width:100%;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,0.3);">
      <div style="height:240px;background:${p.image ? '#fff' : 'linear-gradient(135deg,#fde8e4,#fdf3e7)'};display:flex;align-items:center;justify-content:center;font-size:6rem;position:relative;overflow:hidden;">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;background-color:#fff;">` : p.emoji}
        <button onclick="document.getElementById('quick-modal').remove()"
          style="position:absolute;top:14px;right:14px;background:rgba(0,0,0,0.1);border:none;border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>
      <div style="padding:28px;">
        <div style="font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;color:#c9847a;font-weight:600;margin-bottom:6px;">${p.catLabel}</div>
        <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:#1a1a2e;margin-bottom:10px;">${p.name}</h3>
        <p style="font-size:0.85rem;color:#8a7a74;line-height:1.6;margin-bottom:18px;">${p.desc}</p>
        <div style="margin-bottom:18px;">
          <div style="font-size:0.72rem;color:#8a7a74;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Coloris disponibles</div>
          ${colorsHTML}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:700;color:#1a1a2e;">${fmt(p.price)}</div>
            ${p.oldPrice ? `<div style="font-size:0.85rem;color:#8a7a74;text-decoration:line-through;">${fmt(p.oldPrice)}</div>` : ''}
          </div>
          <button onclick="addToCart(event,${p.id});document.getElementById('quick-modal').remove();"
            style="background:linear-gradient(135deg,#c9847a,#a85f55);color:#fff;border:none;border-radius:50px;padding:12px 28px;font-size:0.9rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:8px;">
            🛍 Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  `;
  const style = document.createElement('style');
  style.textContent = `@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }`;
  modal.appendChild(style);
  modal.addEventListener('click', e => { if(e.target===modal) modal.remove(); });
  document.body.appendChild(modal);
}

// ===========================
// TOAST NOTIFICATION
// ===========================
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ===========================
// CONTACT FORM
// ===========================
function handleContact(e) {
  e.preventDefault();
  showToast('✅ Message envoyé ! On vous recontacte bientôt.');
  e.target.reset();
}

// ===========================
// CHECKOUT — Payment Modal
// ===========================
const WHATSAPP_NUMBER = '221778332412'; // numéro sans le +
const WAVE_PAYMENT_URL = 'https://pay.wave.com/m/M_sn_H4Am4eXcmV5A/c/sn/';

function checkout() {
  if (cart.length === 0) {
    showToast('🛍️ Votre panier est vide !');
    return;
  }
  openPayModal();
}

function openPayModal() {
  // Calculer le total et remplir le résumé
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemCount = cart.reduce((s, c) => s + c.qty, 0);
  const summary = document.getElementById('pay-modal-summary');
  if (summary) {
    summary.innerHTML = `
      <span class="summary-label">🛍️ ${itemCount} article${itemCount > 1 ? 's' : ''} dans votre panier</span>
      <span class="summary-total">${fmt(total)}</span>
    `;
  }

  // Réinitialiser le sélecteur de région à chaque ouverture
  const sel = document.getElementById('region-select');
  if (sel) {
    sel.value = '';
    sel.classList.remove('selected');
  }
  const hint = document.getElementById('region-hint');
  if (hint) {
    hint.textContent = '⚠️ Veuillez sélectionner votre région pour continuer.';
    hint.classList.remove('ok', 'hidden');
  }
  // Désactiver les boutons de paiement tant que la région n'est pas choisie
  document.getElementById('btn-wave').classList.add('disabled');
  document.getElementById('btn-whatsapp').classList.add('disabled');

  document.getElementById('pay-modal-overlay').classList.add('open');
  document.getElementById('pay-modal').classList.add('open');
  // Fermer le tiroir panier pour laisser la place au modal
  closeCart();
}

function closePayModal() {
  document.getElementById('pay-modal-overlay').classList.remove('open');
  document.getElementById('pay-modal').classList.remove('open');
}

// ===========================
// REGION SELECTOR
// ===========================
function onRegionChange() {
  const sel  = document.getElementById('region-select');
  const hint = document.getElementById('region-hint');
  const waveBtn = document.getElementById('btn-wave');
  const waBtn   = document.getElementById('btn-whatsapp');

  if (sel.value) {
    sel.classList.add('selected');
    hint.textContent = `✅ Région sélectionnée : ${sel.value}`;
    hint.classList.add('ok');
    hint.classList.remove('hidden');
    waveBtn.classList.remove('disabled');
    waBtn.classList.remove('disabled');
  } else {
    sel.classList.remove('selected');
    hint.textContent = '⚠️ Veuillez sélectionner votre région pour continuer.';
    hint.classList.remove('ok');
    waveBtn.classList.add('disabled');
    waBtn.classList.add('disabled');
  }
}

function payByWave() {
  const region = document.getElementById('region-select').value;
  if (!region) { showToast('📍 Veuillez sélectionner votre région !'); return; }
  closePayModal();

  const total     = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemCount = cart.reduce((s, c) => s + c.qty, 0);

  // --- Message WhatsApp avec mention paiement Wave + région ---
  let msg = '💳 *Commande Wave — L\'univers D\'Aichaya*\n';
  msg += '━━━━━━━━━━━━━━━━━━━━━━\n';
  msg += '✅ *Mode de paiement : Wave*\n';
  msg += `📍 *Région de livraison : ${region}*\n`;
  msg += '━━━━━━━━━━━━━━━━━━━━━━\n';

  cart.forEach((item, i) => {
    msg += `\n${i + 1}. ${item.emoji} *${item.name}*\n`;
    msg += `   Quantité : ${item.qty}\n`;
    msg += `   Prix unitaire : ${fmt(item.price)}\n`;
    msg += `   Sous-total : ${fmt(item.price * item.qty)}\n`;
  });

  msg += '\n━━━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *TOTAL : ${fmt(total)}* (${itemCount} article${itemCount > 1 ? 's' : ''})\n\n`;
  msg += `🚚 Livraison prévue en région *${region}* — paiement via *Wave*.\n`;
  msg += '📦 Merci de confirmer la réception du paiement et de coordonner la livraison. 🙏';

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  window.open(WAVE_PAYMENT_URL, '_blank');
  window.open(waUrl, '_blank');

  showToast('💳 Wave + 📱 WhatsApp ouverts !');
}

function payByWhatsApp() {
  const region = document.getElementById('region-select').value;
  if (!region) { showToast('📍 Veuillez sélectionner votre région !'); return; }
  closePayModal();

  const total     = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemCount = cart.reduce((s, c) => s + c.qty, 0);

  let msg = '🛍️ *Nouvelle Commande — L\'univers D\'Aichaya*\n';
  msg += '━━━━━━━━━━━━━━━━━━━━━━\n';
  msg += `📍 *Région de livraison : ${region}*\n`;
  msg += '━━━━━━━━━━━━━━━━━━━━━━\n';

  cart.forEach((item, i) => {
    msg += `\n${i + 1}. ${item.emoji} *${item.name}*\n`;
    msg += `   Quantité : ${item.qty}\n`;
    msg += `   Prix unitaire : ${fmt(item.price)}\n`;
    msg += `   Sous-total : ${fmt(item.price * item.qty)}\n`;
  });

  msg += '\n━━━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *TOTAL : ${fmt(total)}* (${itemCount} article${itemCount > 1 ? 's' : ''})\n\n`;
  msg += `🚚 Livraison en région *${region}* — merci de confirmer et de coordonner l'adresse exacte. 🙏`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ===========================
// REVEAL ON SCROLL
// ===========================
function observeReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFilterTabs();
  renderProducts('tous');
  updateCartUI();
  runCountdown();
  observeReveal();

  // Mobile nav styles (inject dynamically)
  const style = document.createElement('style');
  style.textContent = `
    #nav-menu.open-menu {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 100%; left: 0; right: 0;
      background: rgba(253,246,240,0.97);
      padding: 20px 5%;
      gap: 18px;
      backdrop-filter: blur(16px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    }
    #nav-menu.open-menu a { color: var(--text) !important; font-size: 0.95rem; }
    .nav-links a.active::after { width: 100%; }
  `;
  document.head.appendChild(style);
});
