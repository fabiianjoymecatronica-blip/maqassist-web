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
    image: '/assets/selladora-banda-continua.png',
    imageAlt: 'Selladora de banda continua',
    status: 'CATÁLOGO DE REPUESTOS',
    description: 'Explora todos los repuestos o selecciona una referencia para filtrar compatibilidad.',
    models: [
      { id: 'fr770', name: 'FR-770', image: '/assets/selladora-fr770.png' },
      { id: 'fr900', name: 'FR-900', image: '/assets/selladora-fr900.png' },
      { id: 'fr1000', name: 'FR-1000', image: '/assets/selladora-fr1000.png' },
      { id: 'fr1300', name: 'FR-1300', image: '/assets/selladora-fr1300.png' }
    ]
  },
  empacadora290: {
    label: 'Empacadora vertical',
    breadcrumb: 'Empacadoras verticales 290',
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
  }
};

let currentMachineKey = 'selladora';
let currentMachine = machineCatalog[currentMachineKey];
let currentModel = null;

function selectModel(modelId) {
  currentModel = modelId === 'all' ? null : currentMachine.models.find(model => model.id === modelId) || null;
  document.querySelectorAll('.model-button').forEach(button => button.classList.toggle('active', button.dataset.model === (currentModel?.id || 'all')));
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
  document.querySelectorAll('.category-button').forEach(button => button.classList.toggle('active', button.dataset.machine === currentMachineKey));
  const activeCategoryButton = document.querySelector(`.category-button[data-machine="${currentMachineKey}"]`);
  activeCategoryButton.insertAdjacentElement('afterend', document.getElementById('model-list'));
  document.getElementById('shop-machine-breadcrumb').textContent = currentMachine.breadcrumb;
  document.getElementById('machine-status').textContent = currentMachine.status;
  document.getElementById('machine-type').textContent = currentMachine.label;
  document.getElementById('machine-description').textContent = currentMachine.description;
  document.getElementById('machine-image').src = currentMachine.image;
  document.getElementById('machine-image').alt = currentMachine.imageAlt;
  document.getElementById('machine-pending-panel').hidden = currentMachineKey === 'selladora';
  document.getElementById('parts-search-input').placeholder = `Buscar repuestos para ${currentMachine.breadcrumb.toLowerCase()}…`;

  document.getElementById('model-list').innerHTML = `
    <button class="model-button active" type="button" data-model="all">Todos los repuestos <span>→</span></button>
    ${currentMachine.models.map(model => `<button class="model-button" type="button" data-model="${model.id}">${model.name} <span>→</span></button>`).join('')}
  `;
  document.querySelectorAll('.model-button').forEach(button => button.addEventListener('click', () => selectModel(button.dataset.model)));
  document.getElementById('model-list').classList.add('open');
  document.querySelectorAll('.category-button').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.machine === currentMachineKey)));
  selectModel('all');
}

document.querySelectorAll('.category-button').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.machine === currentMachineKey && document.getElementById('model-list').classList.contains('open')) {
    selectModel('all');
    document.getElementById('model-list').classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    return;
  }
  renderMachine(button.dataset.machine);
}));

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

renderMachine('selladora');

document.getElementById('hero-search-form').addEventListener('submit', event => {
  event.preventDefault();
  partsSearchInput.value = heroSearchInput.value;
  filterParts();
  document.getElementById('repuestos').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => partsSearchInput.focus(), 500);
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

// Store Repuestos is an exclusive catalog view; other sections remain accessible from navigation.
function updateStoreView() {
  const inStore = ['#repuestos', '#catalogo-repuestos'].includes(location.hash);
  document.body.classList.toggle('store-view', inStore);
  document.querySelectorAll('main > section').forEach(section => {
    section.hidden = inStore && section.id !== 'repuestos';
  });
}
window.addEventListener('hashchange', updateStoreView);
updateStoreView();

document.querySelectorAll('[data-system]').forEach(link => link.addEventListener('click', () => {
  renderMachine('selladora');
  partsSearchInput.value = '';
  activePartFilter = link.dataset.system;
  document.querySelectorAll('.parts-filters button').forEach(button => button.classList.toggle('active', button.dataset.filter === activePartFilter));
  filterParts();
}));
