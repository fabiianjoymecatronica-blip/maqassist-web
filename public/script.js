const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const machineCatalog = {
  selladora: {
    label: 'Selladoras',
    breadcrumb: 'Selladoras de banda',
    heroCategory: 'SELLADORAS DE BANDA CONTINUA',
    heroTitle: 'Repuestos para|selladoras de banda',
    heroDescription: 'Selecciona la referencia de tu equipo y encuentra los repuestos disponibles con acompañamiento técnico.',
    heroImage: '/assets/selladoras/selladora-continua-transparente.webp',
    heroAlt: 'Selladora continua industrial MaqAssist',
    viewFront: '/assets/selladoras/selladora-continua-transparente.webp',
    viewFrontLabel: 'VISTA COMPLETA',
    viewSide: '/assets/selladoras/selladora-continua-transparente.webp',
    viewSideLabel: 'IMAGEN DE REFERENCIA',
    benefits: ['Identificación por referencia', 'Compatibilidad por confirmar', 'Asesoría técnica especializada'],
    image: '/assets/selladoras/selladora-continua-transparente.webp',
    imageAlt: 'Selladora continua industrial MaqAssist, imagen de referencia',
    status: 'CATÁLOGO DE REPUESTOS',
    description: 'Explora todos los repuestos o selecciona una referencia para filtrar compatibilidad.',
    models: [
      { id: 'fr770', name: 'FR-770', image: '/assets/selladoras/selladora-continua-transparente.webp' },
      { id: 'fr900', name: 'FR-900', image: '/assets/selladoras/selladora-continua-transparente.webp' },
      { id: 'fr1000', name: 'FR-1000', image: '/assets/selladoras/selladora-continua-transparente.webp' },
      { id: 'fr1300', name: 'FR-1300', image: '/assets/selladoras/selladora-continua-transparente.webp' }
    ]
  },
  empacadora290: {
    label: 'Empacadora vertical',
    breadcrumb: 'Empacadoras verticales 290',
    heroCategory: 'EMPACADORAS VERTICALES',
    heroTitle: 'Repuestos para|empacadoras verticales',
    heroDescription: 'Selecciona una referencia Stick o Sachet para preparar la búsqueda de sus repuestos.',
    heroImage: '/assets/empacadora-linea.svg',
    heroAlt: 'Ilustración técnica 2D de empacadora vertical',
    benefits: ['Selección por formato', 'Identificación por placa', 'Asesoría técnica especializada'],
    image: '/assets/empacadora-vertical-290.png',
    imageAlt: 'Empacadora vertical serie 290 para stick y sachet',
    status: 'CATÁLOGO DE REPUESTOS',
    description: 'Selecciona una referencia Stick o Sachet para buscar sus repuestos.',
    models: [
      { id: 'stick-polvos-290', name: 'Stick de polvos 290' },
      { id: 'stick-liquidos-290', name: 'Stick líquidos 290' },
      { id: 'stick-granos-290', name: 'Stick granos / volumétrica 290' },
      { id: 'sachet-polvos-290', name: 'Sachet polvos 290' },
      { id: 'sachet-liquidos-290', name: 'Sachet líquidos 290' },
      { id: 'sachet-granos-290', name: 'Sachet granos / volumétrica 290' }
    ]
  },
  flowpack: {
    label: 'Flow Pack', breadcrumb: 'Flow Pack', heroCategory: 'MÁQUINAS FLOW PACK', heroTitle: 'Repuestos para|máquinas Flow Pack',
    heroDescription: 'La estructura está preparada para incorporar referencias, fotografías reales y compatibilidades confirmadas.',
    heroImage: '/assets/flowpack/flowpack-tecnica-v1.webp', heroAlt: 'Máquina Flow Pack completa en ilustración técnica 2D',
    benefits: ['Catálogo en preparación', 'Identificación por fotografía', 'Soporte técnico'], image: '/assets/flowpack/flowpack-tecnica-v1.webp', imageAlt: 'Máquina Flow Pack completa, imagen técnica de referencia', status: 'CONTENIDO EN PREPARACIÓN', description: 'Envíanos la placa y fotografías del equipo para ayudarte a identificar el repuesto.', models: []
  },
  codificadora: {
    label: 'Codificadoras', breadcrumb: 'Codificadoras', heroCategory: 'SISTEMAS DE CODIFICACIÓN', heroTitle: 'Repuestos para|codificadoras',
    heroDescription: 'Próximamente integraremos aquí las fotografías reales de consumibles y componentes ya suministrados.',
    heroImage: '/assets/codificadoras/codificadoras-contenedor-v2.png', heroAlt: 'Codificadoras industriales y sus principales repuestos',
    benefits: ['Consumibles por referencia', 'Identificación del equipo', 'Soporte técnico'], image: '/assets/codificadoras/codificadoras-contenedor-v2.png', imageAlt: 'Codificadoras industriales, consumibles y componentes de referencia', status: 'CONTENIDO EN PREPARACIÓN', description: 'El catálogo recibirá cartuchos, encoder, sensor, soporte y banda cuando carguemos sus fotografías reales.', models: []
  },
  dosificadora: {
    label: 'Dosificadoras', breadcrumb: 'Dosificadoras', heroCategory: 'SISTEMAS DE DOSIFICACIÓN', heroTitle: 'Repuestos para|dosificadoras',
    heroDescription: 'Esta categoría queda lista para organizar componentes por tecnología, referencia y compatibilidad.',
    heroImage: '/assets/maquina-tecnica-placeholder.svg', heroAlt: 'Espacio preparado para ilustración técnica 2D de dosificadora',
    benefits: ['Catálogo escalable', 'Compatibilidad por confirmar', 'Asesoría técnica'], image: '/assets/maquina-tecnica-placeholder.svg', imageAlt: 'Dosificadora, imagen en preparación', status: 'CONTENIDO EN PREPARACIÓN', description: 'La información técnica se añadirá únicamente cuando esté confirmada.', models: []
  },
  otras: {
    label: 'Otras máquinas', breadcrumb: 'Otras máquinas', heroCategory: 'OTRAS MÁQUINAS', heroTitle: 'Encuentra repuestos para|otra máquina',
    heroDescription: 'Consulta una categoría que aún no esté publicada enviando la placa y fotografías del equipo.',
    heroImage: '/assets/maquina-tecnica-placeholder.svg', heroAlt: 'Ilustración técnica genérica de maquinaria industrial',
    benefits: ['Consulta personalizada', 'Identificación por placa', 'Cobertura multimarca'], image: '/assets/maquina-tecnica-placeholder.svg', imageAlt: 'Maquinaria industrial genérica', status: 'CONSULTA PERSONALIZADA', description: 'Envíanos información del equipo y revisaremos tu necesidad.', models: []
  }
};

let currentMachineKey = 'selladora';
let currentMachine = machineCatalog[currentMachineKey];
let currentModel = null;

function routeName() {
  const route = location.pathname.split('/').filter(Boolean)[0] || '';
  return ['repuestos', 'maquinas', 'planes', 'nosotros', 'contacto', 'soporte'].includes(route) ? route : '';
}

function selectModel(modelId) {
  currentModel = modelId === 'all' ? null : currentMachine.models.find(model => model.id === modelId) || null;
  document.querySelectorAll('.model-button').forEach(button => {
    const selected = button.dataset.model === (currentModel?.id || 'all');
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  const modelSelect = document.getElementById('store-model-select');
  if (modelSelect) modelSelect.value = currentModel?.id || 'all';
  const preview = document.getElementById('selection-preview');
  preview.hidden = !currentModel;
  document.querySelector('.machine-sidebar').classList.toggle('has-selection', Boolean(currentModel));
  if (currentModel) {
    const photo = document.getElementById('selection-photo');
    photo.src = currentMachine.heroImage;
    photo.alt = 'Vista de referencia de ' + currentMachine.label;
    document.getElementById('selection-name').textContent = currentMachine.label + ' · ' + currentModel.name;
  }
  document.getElementById('machine-image').src = currentModel?.image || currentMachine.image;
  document.getElementById('machine-image').alt = currentModel ? `${currentMachine.label} ${currentModel.name} · imagen de referencia` : currentMachine.imageAlt;
  const selection = currentModel ? currentModel.name : 'Todas las referencias';
  document.getElementById('selected-model').textContent = selection;
  document.getElementById('parts-model-name').textContent = `${currentMachine.label} · ${currentModel ? currentModel.name : 'todas las referencias'}`;
  const identifyText = `Hola MaqAssist, necesito identificar un repuesto para ${currentMachine.label}${currentModel ? ` ${currentModel.name}` : ''}. Voy a enviar fotografía y placa del equipo.`;
  document.getElementById('identify-part-link').href = `https://wa.me/573189324488?text=${encodeURIComponent(identifyText)}`;
  const pendingText = `Hola MaqAssist, busco un repuesto para ${currentMachine.label}${currentModel ? ` ${currentModel.name}` : ''}. Quiero confirmar compatibilidad, precio y disponibilidad.`;
  document.getElementById('machine-pending-link').href = `https://wa.me/573189324488?text=${encodeURIComponent(pendingText)}`;
  filterParts();
}

function renderMachine(machineKey) {
  currentMachineKey = machineKey;
  currentMachine = machineCatalog[currentMachineKey];
  document.querySelector('.machine-sidebar').dataset.family = currentMachineKey;
  document.querySelectorAll('.category-button').forEach(button => button.classList.toggle('active', button.dataset.machine === currentMachineKey));
  const activeCategoryButton = document.querySelector(`.category-button[data-machine="${currentMachineKey}"]`);
  document.querySelector('.category-list').appendChild(document.getElementById('model-list'));
  document.getElementById('shop-machine-breadcrumb').textContent = currentMachine.breadcrumb;
  document.getElementById('machine-status').textContent = currentMachine.status;
  document.getElementById('machine-type').textContent = currentMachine.label;
  document.getElementById('machine-description').textContent = currentMachine.description;
  document.getElementById('machine-image').src = currentMachine.image;
  document.getElementById('machine-image').alt = currentMachine.imageAlt;
  document.getElementById('machine-pending-panel').hidden = currentMachineKey === 'selladora';
  document.getElementById('parts-search-input').placeholder = `Buscar repuestos para ${currentMachine.breadcrumb.toLowerCase()}…`;

  const heroTitle = currentMachine.heroTitle.split('|');
  document.getElementById('technical-store-hero').dataset.family = currentMachineKey;
  document.getElementById('store-hero-category').textContent = currentMachine.heroCategory;
  document.getElementById('store-hero-title').innerHTML = `${heroTitle[0]}<br><em>${heroTitle[1]}</em>`;
  document.getElementById('store-hero-description').textContent = currentMachine.heroDescription;
  document.getElementById('store-hero-benefits').innerHTML = currentMachine.benefits.map(item => `<li>${item}</li>`).join('');
  document.getElementById('store-callout-one').textContent = currentMachine.benefits[0];
  document.getElementById('store-callout-two').textContent = currentMachine.benefits[1];
  const heroMachine = document.getElementById('store-hero-machine');
  heroMachine.src = currentMachine.heroImage;
  heroMachine.alt = currentMachine.heroAlt;
  document.getElementById('store-view-front').src = currentMachine.viewFront || currentMachine.heroImage;
  document.getElementById('store-view-front-label').textContent = currentMachine.viewFrontLabel || 'VISTA TÉCNICA';
  document.getElementById('store-view-side').src = currentMachine.viewSide || currentMachine.heroImage;
  document.getElementById('store-view-side-label').textContent = currentMachine.viewSideLabel || 'DETALLE DE REFERENCIA';
  document.getElementById('store-plan-machine-name').textContent = currentMachine.breadcrumb.toLowerCase();
  document.getElementById('store-buy-machine').href = `/maquinas?categoria=${encodeURIComponent(currentMachineKey)}`;

  document.getElementById('model-list').innerHTML = `
    <button class="model-button active" type="button" data-model="all">Todos los repuestos <span>→</span></button>
    ${currentMachine.models.map(model => `<button class="model-button" type="button" data-model="${model.id}">${model.name} <span>→</span></button>`).join('')}
  `;
  const modelSelect = document.getElementById('store-model-select');
  modelSelect.innerHTML = `<option value="all">Todas las referencias</option>${currentMachine.models.map(model => `<option value="${model.id}">${model.name}</option>`).join('')}`;
  modelSelect.disabled = currentMachine.models.length === 0;
  document.querySelectorAll('.model-button').forEach(button => button.addEventListener('click', () => selectModel(button.dataset.model)));
  document.getElementById('model-list').classList.add('open');
  document.querySelectorAll('.category-button').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.machine === currentMachineKey)));
  selectModel('all');
}

document.querySelectorAll('.category-button').forEach(button => button.addEventListener('click', () => renderMachine(button.dataset.machine)));

document.getElementById('store-model-select').addEventListener('change', event => selectModel(event.target.value));

let cart = [];
try { cart = JSON.parse(localStorage.getItem('maqassist-cart')) || []; } catch (error) { cart = []; }
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutCart = document.getElementById('checkout-cart');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
}

function renderCart() {
  localStorage.setItem('maqassist-cart', JSON.stringify(cart));
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = quantity;
  checkoutCart.disabled = cart.length === 0;
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><strong>Tu carrito está vacío</strong><span>Agrega repuestos para preparar tu pedido.</span></div>';
    return;
  }
  cartItems.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <div class="cart-item-icon">${item.name.charAt(0)}</div>
      <div class="cart-item-info"><span>${item.store}</span><strong>${item.name}</strong><small>Compatible con ${item.model}</small><b>Precio por confirmar</b></div>
      <div class="cart-item-actions"><button type="button" data-cart-action="plus" data-index="${index}">+</button><span>${item.quantity}</span><button type="button" data-cart-action="minus" data-index="${index}">−</button><button class="remove-item" type="button" data-cart-action="remove" data-index="${index}">×</button></div>
    </article>`).join('');
}

document.querySelectorAll('.add-to-cart').forEach(button => button.addEventListener('click', () => {
  const model = currentModel ? currentModel.name : `${currentMachine.label} — referencia por confirmar`;
  const existing = cart.find(item => item.name === button.dataset.name && item.model === model);
  if (existing) existing.quantity += 1;
  else cart.push({ name: button.dataset.name, store: button.dataset.store, model, quantity: 1 });
  renderCart();
  openCart();
}));

cartItems.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  if (button.dataset.cartAction === 'plus') cart[index].quantity += 1;
  if (button.dataset.cartAction === 'minus') cart[index].quantity -= 1;
  if (button.dataset.cartAction === 'remove' || cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
});

document.getElementById('open-cart').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
checkoutCart.addEventListener('click', () => {
  if (!cart.length) return;
  const lines = cart.map(item => `• ${item.quantity} x ${item.name} para ${item.model}`).join('\n');
  const message = `Hola MaqAssist, quiero confirmar este pedido de repuestos:\n${lines}\nPor favor confirmen compatibilidad, disponibilidad y precio.`;
  window.open(`https://wa.me/573189324488?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

renderCart();

const partCards = [...document.querySelectorAll('.part-card')];
const partsSearchInput = document.getElementById('parts-search-input');
const heroSearchInput = document.getElementById('hero-search-input');
let activePartFilter = 'all';

function normalizeSearch(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function filterParts() {
  const query = normalizeSearch(partsSearchInput.value);
  let visible = 0;
  partCards.forEach(card => {
    const matchesMachine = card.dataset.machine === currentMachineKey;
    const compatibleModels = (card.dataset.models || '').split(' ');
    const matchesModel = !currentModel || compatibleModels.includes(currentModel.id);
    const matchesCategory = activePartFilter === 'all' || card.dataset.category === activePartFilter;
    const matchesText = !query || normalizeSearch(card.dataset.search).includes(query) || normalizeSearch(card.innerText).includes(query);
    const show = matchesMachine && matchesModel && matchesCategory && matchesText;
    card.hidden = !show;
    if (show) visible += 1;
  });
  document.getElementById('visible-parts-count').textContent = visible;
  document.getElementById('no-parts').classList.toggle('show', visible === 0);
}

partsSearchInput.addEventListener('input', filterParts);
document.getElementById('clear-parts-search').addEventListener('click', () => { partsSearchInput.value = ''; activePartFilter = 'all'; document.querySelectorAll('.parts-filters button').forEach((button, index) => button.classList.toggle('active', index === 0)); filterParts(); partsSearchInput.focus(); });
document.querySelectorAll('.parts-filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.parts-filters button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activePartFilter = button.dataset.filter;
  filterParts();
}));

const requestedMachine = new URLSearchParams(location.search).get('categoria');
renderMachine(machineCatalog[requestedMachine] ? requestedMachine : 'selladora');

if (routeName() === 'maquinas') {
  const selectedMachine = machineCatalog[requestedMachine];
  document.getElementById('machine-store-selected').textContent = selectedMachine
    ? `CONSULTA: ${selectedMachine.label.toUpperCase()}`
    : 'TIENDA DE MÁQUINAS';
}

if (routeName() === 'repuestos') {
  const searchQuery = new URLSearchParams(location.search).get('buscar');
  if (searchQuery) {
    partsSearchInput.value = searchQuery;
    filterParts();
  }
}

document.getElementById('hero-search-form').addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = heroSearchInput.value.trim();
  location.href = searchQuery ? `/repuestos?buscar=${encodeURIComponent(searchQuery)}` : '/repuestos';
});

const planRules = {
  3: { preventive: 1, inspections: 4, emergencies: 0, condition: 'Urgencias a $60.000 cada una', response: 'Nivel de respuesta estándar.' },
  6: { preventive: 2, inspections: 8, emergencies: 1, condition: 'Primera urgencia incluida; siguientes a $45.000', response: 'Nivel de respuesta prioritario.' },
  12: { preventive: 4, inspections: 16, emergencies: 2, condition: 'Dos urgencias incluidas; siguientes a $35.000', response: 'Nivel de respuesta preferencial.' }
};

let selectedMonths = 3;
const countInput = document.getElementById('machine-count');

function updatePlan() {
  const count = Math.max(1, Math.min(50, Number(countInput.value) || 1));
  countInput.value = count;
  const rule = planRules[selectedMonths];
  document.getElementById('plan-title').textContent = `Plan Care · ${selectedMonths} meses`;
  document.getElementById('machine-badge').textContent = count;
  document.getElementById('machine-word').textContent = count === 1 ? ' máquina' : ' máquinas';
  document.getElementById('preventive-total').textContent = rule.preventive * count;
  document.getElementById('inspection-total').textContent = rule.inspections * count;
  document.getElementById('emergency-included').textContent = rule.emergencies * count;
  document.getElementById('emergency-condition').textContent = rule.condition;
  document.getElementById('response-level').textContent = rule.response;
  const message = `Hola MaqAssist, quiero cotizar un Plan Care de ${selectedMonths} meses para ${count} ${count === 1 ? 'máquina' : 'máquinas'}. Incluye ${rule.preventive * count} mantenimientos preventivos, ${rule.inspections * count} inspecciones y ${rule.emergencies * count} urgencias incluidas.`;
  document.getElementById('plan-quote').href = `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
}

document.getElementById('qty-minus').addEventListener('click', () => { countInput.value = Number(countInput.value) - 1; updatePlan(); });
document.getElementById('qty-plus').addEventListener('click', () => { countInput.value = Number(countInput.value) + 1; updatePlan(); });
countInput.addEventListener('input', updatePlan);
document.querySelectorAll('.period-options button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.period-options button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  selectedMonths = Number(button.dataset.months);
  updatePlan();
}));

updatePlan();

// Cada pantalla principal usa una ruta propia; la portada ya no funciona como página larga.
function updatePageView() {
  const route = routeName();
  const legacyStore = !route && ['#repuestos', '#catalogo-repuestos'].includes(location.hash);
  const legacyPage = !route && location.hash === '#contacto' ? 'contacto' : (!route && location.hash === '#soporte' ? 'soporte' : '');
  const page = route || (legacyStore ? 'repuestos' : legacyPage) || 'home';
  const sectionForPage = { contacto: 'soporte', soporte: 'soporte' }[page] || page;
  document.body.classList.toggle('home-view', page === 'home');
  document.body.classList.toggle('store-view', page === 'repuestos');
  document.body.classList.toggle('machines-view', page === 'maquinas');
  document.body.classList.toggle('plans-view', page === 'planes');
  document.body.classList.toggle('about-view', page === 'nosotros');
  document.body.classList.toggle('contact-view', page === 'contacto');
  document.body.classList.toggle('support-view', page === 'soporte');
  document.querySelectorAll('main > section').forEach(section => {
    section.hidden = section.id !== sectionForPage;
  });
  const pageTitles = {
    repuestos: 'Tienda de Repuestos | MaqAssist',
    maquinas: 'Tienda de Máquinas | MaqAssist',
    planes: 'Planes de Mantenimiento | MaqAssist',
    nosotros: 'Nosotros | MaqAssist',
    contacto: 'Contacto | MaqAssist',
    soporte: 'Soporte técnico | MaqAssist'
  };
  document.title = pageTitles[page] || 'MaqAssist | Acompañamiento técnico continuo';
}
window.addEventListener('hashchange', updatePageView);
window.addEventListener('popstate', updatePageView);
updatePageView();

document.getElementById('header-search-button').addEventListener('click', () => {
  if (routeName() !== 'repuestos') {
    location.href = '/repuestos';
    return;
  }
  partsSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => partsSearchInput.focus(), 450);
});

function updateNavState() {
  const route = routeName();
  const key = route || (location.hash === '#contacto' ? 'contacto' : location.hash === '#soporte' ? 'soporte' : location.hash === '#repuestos' || location.hash === '#catalogo-repuestos' ? 'repuestos' : 'inicio');
  document.querySelectorAll('[data-nav]').forEach(link => {
    const active = link.dataset.nav === key || (key === 'catalogo-repuestos' && link.dataset.nav === 'repuestos');
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateNavState);
updateNavState();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const company = document.getElementById('contact-company').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const text = `Hola MaqAssist, soy ${name}${company ? ` de ${company}` : ''}. ${message}`;
  window.open(`https://wa.me/573189324488?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

document.querySelectorAll('[data-system]').forEach(link => link.addEventListener('click', () => {
  renderMachine('selladora');
  partsSearchInput.value = '';
  activePartFilter = link.dataset.system;
  document.querySelectorAll('.parts-filters button').forEach(button => button.classList.toggle('active', button.dataset.filter === activePartFilter));
  filterParts();
}));

(() => {
  const root = document.querySelector('.parts-carousel');
  if (!root) return;
  const slides = [...root.querySelectorAll('.parts-slide')];
  const dots = [...root.querySelectorAll('[data-carousel-index]')];
  const pause = root.querySelector('[data-carousel-pause]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, paused = motion.matches, timer;
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
  }
  function stop() { clearInterval(timer); }
  function start() {
    stop();
    if (!paused && !document.hidden && !root.matches(':hover') && !root.contains(document.activeElement))
      timer = setInterval(() => show(index + 1), 6500);
  }
  function label() {
    pause.textContent = paused ? 'Reanudar' : 'Pausar';
    pause.setAttribute('aria-label', paused ? 'Reanudar cambio automático' : 'Pausar cambio automático');
  }
  root.querySelector('[data-carousel-prev]').addEventListener('click', () => { show(index - 1); start(); });
  root.querySelector('[data-carousel-next]').addEventListener('click', () => { show(index + 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  pause.addEventListener('click', () => { paused = !paused; label(); start(); });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', () => setTimeout(start, 0));
  document.addEventListener('visibilitychange', start);
  motion.addEventListener('change', () => { paused = motion.matches; label(); start(); });
  label(); start();
})();
