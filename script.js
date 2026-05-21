// ===========================
// DATA — PRODUITS • L'UNIVERS D'AICHAYA
// ===========================
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
    desc: "Sac en cuir PU plissé with anse travaillée, disponible en Noir et Beige.",
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
    desc: "Déodorant Nivea Men Deep, protection 48h with extrait de charbon noir.",
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
    desc: "Lunettes de soleil stylées with protection UV, idéales pour finaliser votre tenue d'été.",
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
    desc: "Bracelet confectionné with soin pour ajouter une touche originale à votre poignet.",
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
    desc: "Gloss pour des lèvres pulpeuses, hydratées et brillantes with une tenue longue durée.",
    colors: ["#ffb6c1", "#ff69b4"]
  },
  {
    id: 24, name: "Gloss Lèvres Brillance - Teinte Douce",
    cat: "cosmetiques", catLabel: "Cosmétiques",
    price: 3000, oldPrice: null,
    emoji: "💄", image: "image/gloss (2).jpg", badge: null,
    desc: "Variante du gloss à brillance absolue with une teinte douce et discrète.",
    colors: ["#ffc0cb", "#f08080"]
  },
  {
    id: 25, name: "Jeu de Bracelets Dorés",
    cat: "bracelets", catLabel: "Bracelets",
    price: 8500, oldPrice: null,
    emoji: "✨", image: "image/link here!_Pulseras florales apilables para mujer en oro - Juego de 3 pulseras chapadas en oro de 18K, pulseras de acero inoxidable sans décoloration,.jpg", badge: "new",
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

let searchQuery = '';
let sortMode    = 'default';

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

  // 1. Filtrage par catégorie
  let list = activeFilter === 'tous'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeFilter);

  // 2. Filtrage par recherche
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q) ||
      p.catLabel.toLowerCase().includes(q)
    );
  }

  // 3. Tri
  if (sortMode === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if (sortMode === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (sortMode === 'name-asc')  list.sort((a,b) => a.name.localeCompare(b.name));

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-light);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <p>Aucun produit ne correspond à votre recherche.</p>
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
// SEARCH & SORT HANDLERS
// ===========================
function handleSearch(e) {
  searchQuery = e.target.value;
  renderProducts(filter);
}

function handleSort(e) {
  sortMode = e.target.value;
  renderProducts(filter);
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
  showToast('✅ Message envoyé ! On recontacte bientôt.');
  e.target.reset();
}

// ===========================
// CHECKOUT — PAYMENT PORTAL CONTROLLER (WIZARD)
// ===========================
const WHATSAPP_NUMBER = '221778332412'; // boutique owner WhatsApp
const WAVE_PAYMENT_URL = 'https://pay.wave.com/m/M_sn_H4Am4eXcmV5A/c/sn/';

let currentPayStep = 1;
let currentPayMethod = 'wave';
let activeOperator = 'orange';
let otpTimerInterval = null;
let lastCreatedOrder = null;

let hasInitiatedWave = false;
let generatedOTPCode = null;

function checkout() {
  if (cart.length === 0) {
    showToast('🛍️ Votre panier est vide !');
    return;
  }
  openPayModal();
}

function openPayModal() {
  // Calculer total & quantité
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const itemCount = cart.reduce((s, c) => s + c.qty, 0);
  
  const summary = document.getElementById('pay-modal-summary');
  if (summary) {
    summary.innerHTML = `
      <span class="summary-label">🛍️ Récapitulatif : ${itemCount} article${itemCount > 1 ? 's' : ''}</span>
      <span class="summary-total">${fmt(total)}</span>
    `;
  }

  // Réinitialiser les champs livraison
  document.getElementById('shipping-name').value = '';
  document.getElementById('shipping-phone').value = '';
  document.getElementById('shipping-address').value = '';
  document.getElementById('region-select').value = '';

  // Réinitialiser les statuts de vérification
  hasInitiatedWave = false;
  generatedOTPCode = null;

  // Activer le step 1 par défaut
  goToStep(1);

  // Afficher le modal
  document.getElementById('pay-modal-overlay').classList.add('open');
  document.getElementById('pay-modal').classList.add('open');
  closeCart();
}

function closePayModal() {
  document.getElementById('pay-modal-overlay').classList.remove('open');
  document.getElementById('pay-modal').classList.remove('open');
  if (otpTimerInterval) clearInterval(otpTimerInterval);
}

// NAVIGATION ENTRE LES ÉTAPES DU WIZARD
function goToStep(step) {
  if (step === 2) {
    // Validation des données d'expédition de l'Étape 1
    const name = document.getElementById('shipping-name').value.trim();
    const phone = document.getElementById('shipping-phone').value.trim();
    const address = document.getElementById('shipping-address').value.trim();
    const region = document.getElementById('region-select').value;

    if (!name || !phone || !address || !region) {
      showToast('⚠️ Veuillez remplir tous les champs obligatoires !');
      return;
    }
    if (phone.replace(/\D/g, '').length < 7) {
      showToast('⚠️ Veuillez saisir un numéro de téléphone valide !');
      return;
    }

    // Générer le QR Code Wave dynamiquement si c'est la première fois ou si le total a changé
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const qrWrap = document.getElementById('wave-qr-code');
    if (qrWrap) {
      const qrData = encodeURIComponent(`${WAVE_PAYMENT_URL}?amount=${total}&ref=AichayaShop`);
      qrWrap.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&color=00af9b&data=${qrData}" alt="QR Code Wave" style="width:100%;height:100%;object-fit:contain;" />`;
    }
  }

  // Activer la vue correspondante
  document.querySelectorAll('.pay-step').forEach(el => el.classList.remove('active'));
  document.getElementById(`pay-step-${step}`).classList.add('active');

  // Mettre à jour la barre de progression (progress steps & lines)
  const pStep1 = document.getElementById('p-step-1');
  const pStep2 = document.getElementById('p-step-2');
  const pStep3 = document.getElementById('p-step-3');
  const pLine1 = document.getElementById('p-line-1');
  const pLine2 = document.getElementById('p-line-2');

  const subText = document.getElementById('pay-modal-sub');

  if (step === 1) {
    pStep1.className = 'progress-step active';
    pStep2.className = 'progress-step';
    pStep3.className = 'progress-step';
    pLine1.className = 'progress-line';
    pLine2.className = 'progress-line';
    if (subText) subText.textContent = 'Veuillez renseigner vos coordonnées de livraison.';
  } else if (step === 2) {
    pStep1.className = 'progress-step complete';
    pStep2.className = 'progress-step active';
    pStep3.className = 'progress-step';
    pLine1.className = 'progress-line complete';
    pLine2.className = 'progress-line';
    if (subText) subText.textContent = 'Sélectionnez et validez votre moyen de paiement sécurisé.';
  } else if (step === 4) {
    pStep1.className = 'progress-step complete';
    pStep2.className = 'progress-step complete';
    pStep3.className = 'progress-step complete';
    pLine1.className = 'progress-line complete';
    pLine2.className = 'progress-line complete';
    if (subText) subText.textContent = 'Votre commande a été traitée avec succès !';
  }

  currentPayStep = step;
}

// SÉLECTION DE LA MÉTHODE DE PAIEMENT (WAVE / ORANGE MONEY / CARTE)
function switchPayTab(tab) {
  document.querySelectorAll('.pay-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.pay-tab-content').forEach(el => el.classList.remove('active'));

  document.querySelector(`.pay-tab[data-pay="${tab}"]`).classList.add('active');
  document.getElementById(`tab-content-${tab}`).classList.add('active');

  currentPayMethod = tab;
  if (otpTimerInterval) clearInterval(otpTimerInterval);
}

// REGION CHANGE EVENT (Sert à des effets cosmétiques additionnels si besoin)
function onRegionChange() {
  const sel = document.getElementById('region-select');
  if (sel.value) {
    sel.classList.add('selected');
  } else {
    sel.classList.remove('selected');
  }
}

// ----------------------------------------------------
// LOGIQUE DE PAIEMENT WAVE SENEGAL
// ----------------------------------------------------
function processWavePayment() {
  hasInitiatedWave = true;
  window.open(WAVE_PAYMENT_URL, '_blank');
  showToast("💸 Wave ouvert ! Complétez le transfert puis cliquez sur Vérifier.");
}

function verifyWavePayment() {
  if (!hasInitiatedWave) {
    showToast("⚠️ Paiement non détecté. Veuillez ouvrir Wave et valider le transfert d'abord.");
    return;
  }

  goToStep(3);
  document.getElementById('loader-title').textContent = 'Interrogation du réseau Wave...';
  document.getElementById('loader-subtitle').textContent = 'Vérification en cours auprès de Wave Sénégal...';

  setTimeout(() => {
    createOrder('Wave');
    goToStep(4);
  }, 2500);
}

// ----------------------------------------------------
// LOGIQUE DE PAIEMENT MOBILE MONEY (ORANGE / FREE)
// ----------------------------------------------------
function updateOperatorUI(operator) {
  activeOperator = operator;
  const omLabel = document.querySelector('.operator-option.OM');
  const fmLabel = document.querySelector('.operator-option.FM');
  
  if (operator === 'orange') {
    omLabel.classList.add('active');
    fmLabel.classList.remove('active');
    document.getElementById('operator-prefix').textContent = '🇸🇳 +221';
    document.getElementById('mobile-pay-phone').placeholder = '77 XXXXXXX';
    document.getElementById('otp-instructions').innerHTML = `🍊 Composez le <strong>#144#</strong> puis choisissez l'option 1 pour valider, ou saisissez le code OTP reçu ci-dessous.`;
  } else {
    fmLabel.classList.add('active');
    omLabel.classList.remove('active');
    document.getElementById('operator-prefix').textContent = '🇸🇳 +221';
    document.getElementById('mobile-pay-phone').placeholder = '76 XXXXXXX';
    document.getElementById('otp-instructions').innerHTML = `🟢 Composez le <strong>#155#</strong> puis choisissez l'option de retrait ou saisissez le code OTP reçu ci-dessous.`;
  }
}

function sendMobileOTP() {
  const phoneInput = document.getElementById('mobile-pay-phone');
  const phoneVal = phoneInput.value.trim();
  
  if (!phoneVal) {
    showToast('⚠️ Veuillez saisir votre numéro de paiement mobile !');
    return;
  }
  
  if (phoneVal.replace(/\D/g, '').length < 7) {
    showToast('⚠️ Numéro de paiement invalide !');
    return;
  }

  // Generate random 4-digit code for mock OTP verification
  generatedOTPCode = String(Math.floor(1000 + Math.random() * 9000));
  
  // Alert/Toast simulation
  alert("📲 [SIMULATION SMS] L'univers d'Aichaya : Votre code de paiement est : " + generatedOTPCode);

  document.getElementById('mobile-phone-step-container').classList.add('hidden');
  document.getElementById('mobile-otp-step-container').classList.remove('hidden');
  
  showToast(`🔑 Code OTP envoyé par SMS au +221 ${phoneVal} !`);
  
  let secondsLeft = 120;
  const countdownEl = document.getElementById('otp-countdown');
  
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  countdownEl.textContent = '02:00';
  
  otpTimerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(otpTimerInterval);
      countdownEl.textContent = 'Expiré';
      showToast('⚠️ Code OTP expiré. Veuillez en demander un nouveau.');
    } else {
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;
      countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}

function validateMobileOTP() {
  const otpInput = document.getElementById('mobile-otp-code');
  const otpVal = otpInput.value.trim();
  
  if (otpVal.length < 4) {
    showToast('⚠️ Veuillez saisir le code OTP à 4 chiffres !');
    return;
  }

  if (otpVal !== generatedOTPCode) {
    showToast("⚠️ Code OTP incorrect. Paiement refusé par l'opérateur.");
    return;
  }

  if (otpTimerInterval) clearInterval(otpTimerInterval);
  
  goToStep(3);
  const opName = activeOperator === 'orange' ? 'Orange Money' : 'Free Money';
  document.getElementById('loader-title').textContent = `Validation du code OTP ${opName}...`;
  document.getElementById('loader-subtitle').textContent = 'Authentification 3D Secure en cours...';
  
  setTimeout(() => {
    createOrder(opName);
    goToStep(4);
  }, 2500);
}

// ----------------------------------------------------
// LOGIQUE DE PAIEMENT CARTE BANCAIRE & 3D INTERACTIVE
// ----------------------------------------------------
function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '');
  let formatted = val.match(/.{1,4}/g);
  if (formatted) {
    input.value = formatted.join(' ');
  } else {
    input.value = '';
  }
  
  const displayVal = input.value || '•••• •••• •••• ••••';
  document.getElementById('card-num-display').textContent = displayVal;
  
  const logoEl = document.getElementById('card-type-logo');
  if (val.startsWith('4')) {
    logoEl.innerHTML = '<i class="fab fa-cc-visa" style="color:#fff;font-size:1.8rem;"></i>';
  } else if (val.startsWith('5')) {
    logoEl.innerHTML = '<i class="fab fa-cc-mastercard" style="color:#fff;font-size:1.8rem;"></i>';
  } else {
    logoEl.textContent = '💳';
  }
}

function updateCardHolder(val) {
  const displayVal = val.toUpperCase().trim() || 'NOM COMPLET';
  document.getElementById('card-holder-display').textContent = displayVal;
}

function formatCardExpiry(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length >= 2) {
    input.value = val.substring(0, 2) + '/' + val.substring(2, 4);
  } else {
    input.value = val;
  }
  
  const displayVal = input.value || 'MM/AA';
  document.getElementById('card-expiry-display').textContent = displayVal;
}

function flipCard(isBack) {
  const card = document.getElementById('credit-card-3d');
  if (card) {
    if (isBack) {
      card.classList.add('flipped');
    } else {
      card.classList.remove('flipped');
    }
  }
}

function updateCardCVV(val) {
  const displayVal = val.replace(/\D/g, '') || '•••';
  document.getElementById('card-cvv-display').textContent = displayVal;
}

function processCardPayment() {
  const num = document.getElementById('card-number').value.trim();
  const holder = document.getElementById('card-holder').value.trim();
  const expiry = document.getElementById('card-expiry').value.trim();
  const cvv = document.getElementById('card-cvv').value.trim();
  
  if (num.replace(/\s/g, '').length < 16) {
    showToast('⚠️ Numéro de carte bancaire incomplet !');
    return;
  }
  if (!holder) {
    showToast('⚠️ Nom du titulaire requis !');
    return;
  }
  if (expiry.length < 5) {
    showToast('⚠️ Date d\'expiration invalide (MM/AA) !');
    return;
  }
  if (cvv.length < 3) {
    showToast('⚠️ Code CVV invalide !');
    return;
  }
  
  const cleanNum = num.replace(/\s/g, '');
  if (cleanNum.endsWith('0000')) {
    goToStep(3);
    document.getElementById('loader-title').textContent = 'Autorisation bancaire 3D Secure...';
    document.getElementById('loader-subtitle').textContent = 'Vérification des fonds en cours...';
    
    setTimeout(() => {
      goToStep(2);
      showToast('❌ Refus : Solde insuffisant ou carte invalide (Code: 110).');
    }, 2500);
    return;
  }

  goToStep(3);
  document.getElementById('loader-title').textContent = 'Autorisation bancaire 3D Secure...';
  document.getElementById('loader-subtitle').textContent = 'Vérification des fonds en cours...';
  
  setTimeout(() => {
    createOrder('Carte Bancaire');
    goToStep(4);
  }, 3000);
}

// ----------------------------------------------------
// REÇUS ET SYNCHRONISATION COMMANDE
// ----------------------------------------------------
function generateOrderRef() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ACH-${new Date().getFullYear()}-${rand}`;
}

function createOrder(method) {
  const name = document.getElementById('shipping-name').value.trim();
  const phone = document.getElementById('shipping-phone').value.trim();
  const address = document.getElementById('shipping-address').value.trim();
  const region = document.getElementById('region-select').value;
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const ref = generateOrderRef();
  const dateStr = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  lastCreatedOrder = {
    ref,
    date: dateStr,
    client: name,
    phone: `+221 ${phone}`,
    address,
    region,
    method,
    items: [...cart],
    total
  };

  document.getElementById('success-order-ref').textContent = `#${ref}`;
  document.getElementById('success-order-date').textContent = dateStr;
  document.getElementById('success-order-client').textContent = name;
  document.getElementById('success-order-phone').textContent = `+221 ${phone}`;
  document.getElementById('success-order-region').textContent = region;
  document.getElementById('success-order-method').textContent = method;
  document.getElementById('success-order-total').textContent = fmt(total);

  const itemsList = document.getElementById('invoice-items-list');
  if (itemsList) {
    itemsList.innerHTML = cart.map(item => `
      <div class="invoice-item-line">
        <span class="inv-item-name">${item.name} x${item.qty}</span>
        <span class="inv-item-price">${fmt(item.price * item.qty)}</span>
      </div>
    `).join('');
  }
}

function downloadReceipt() {
  window.print();
}

function syncWithWhatsApp() {
  if (!lastCreatedOrder) return;
  
  const o = lastCreatedOrder;
  let msg = `✨ *NOUVELLE COMMANDE - L'UNIVERS D'AICHAYA* ✨\n\n`;
  msg += `🏷️ *Référence :* #${o.ref}\n`;
  msg += `📅 *Date :* ${o.date}\n`;
  msg += `👤 *Client :* ${o.client}\n`;
  msg += `📞 *Téléphone :* ${o.phone}\n`;
  msg += `📍 *Adresse :* ${o.address}, ${o.region}\n`;
  msg += `💳 *Paiement :* ${o.method} (Confirmé)\n\n`;
  
  msg += `🛍️ *Articles commandés :*\n`;
  o.items.forEach(item => {
    msg += `• ${item.qty}x ${item.name} (${fmt(item.price * item.qty)})\n`;
  });
  
  msg += `\n💰 *Total Payé :* *${fmt(o.total)}*\n\n`;
  msg += `🚚 _Merci de bien vouloir préparer ma livraison pour la région de *${o.region}* ! A bientôt._ 🌸`;
  
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function resetCart() {
  cart = [];
  saveCart();
  renderCartItems();
  
  document.getElementById('mobile-phone-step-container').classList.remove('hidden');
  document.getElementById('mobile-otp-step-container').classList.add('hidden');
  document.getElementById('mobile-otp-code').value = '';
  document.getElementById('mobile-pay-phone').value = '';
  
  document.getElementById('card-number').value = '';
  document.getElementById('card-holder').value = '';
  document.getElementById('card-expiry').value = '';
  document.getElementById('card-cvv').value = '';
  document.getElementById('card-num-display').textContent = '•••• •••• •••• ••••';
  document.getElementById('card-holder-display').textContent = 'NOM COMPLET';
  document.getElementById('card-expiry-display').textContent = 'MM/AA';
  document.getElementById('card-cvv-display').textContent = '•••';
  document.getElementById('card-type-logo').textContent = '💳';
  
  const card3d = document.getElementById('credit-card-3d');
  if (card3d) card3d.classList.remove('flipped');
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
