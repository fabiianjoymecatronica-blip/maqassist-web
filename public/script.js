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

const machineData = {
  fr770: { name: 'FR-770', preventive: '$350.000', emergency: '$150.000' },
  fr900: { name: 'FR-900', preventive: '$350.000', emergency: '$150.000' },
  fr1000: { name: 'FR-1000', preventive: '$350.000', emergency: '$150.000' },
  fr1300: { name: 'FR-1300', preventive: '$380.000', emergency: '$180.000' }
};

let currentModel = machineData.fr770;

document.querySelectorAll('.model-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.model-button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    currentModel = machineData[button.dataset.model];
    document.getElementById('selected-model').textContent = currentModel.name;
    document.getElementById('parts-model-name').textContent = currentModel.name;
    document.getElementById('preventive-price').innerHTML = `${currentModel.preventive} <small>COP</small>`;
    document.getElementById('emergency-price').innerHTML = `${currentModel.emergency} <small>COP</small>`;
    document.getElementById('preventive-quote').dataset.price = currentModel.preventive;
    document.getElementById('emergency-quote').dataset.price = currentModel.emergency;
  });
});

document.querySelectorAll('.service-quote').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const text = `Hola MaqAssist, quiero solicitar ${link.dataset.service} para una selladora ${currentModel.name}. Precio publicado: ${link.dataset.price} COP.`;
    window.open(`https://wa.me/573189324488?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
});

document.querySelectorAll('.part-quote').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const text = `Hola MaqAssist, necesito ${link.dataset.part} para una selladora de banda continua ${currentModel.name}. Quiero confirmar referencia, compatibilidad, precio y disponibilidad.`;
    window.open(`https://wa.me/573189324488?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
});

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
  const model = currentModel.name;
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
    const matchesCategory = activePartFilter === 'all' || card.dataset.category === activePartFilter;
    const matchesText = !query || normalizeSearch(card.dataset.search).includes(query) || normalizeSearch(card.innerText).includes(query);
    const show = matchesCategory && matchesText;
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
