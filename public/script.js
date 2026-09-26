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
    heroAlt: 'Selladora continua industrial AWO Group',
    viewFront: '/assets/selladoras/selladora-continua-transparente.webp',
    viewFrontLabel: 'VISTA COMPLETA',
    viewSide: '/assets/selladoras/selladora-continua-transparente.webp',
    viewSideLabel: 'IMAGEN DE REFERENCIA',
    benefits: ['Identificación por referencia', 'Validamos la compatibilidad antes del despacho', 'Asesoría técnica especializada'],
    image: '/assets/selladoras/selladora-continua-transparente.webp',
    imageAlt: 'Selladora continua industrial AWO Group, imagen de referencia',
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
    heroImage: '/assets/empacadoras/empacadoras-verticales-tecnicas-v1.webp',
    heroAlt: 'Cuatro empacadoras verticales completas en ilustración técnica',
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
    heroImage: '/assets/codificadoras/codificadoras-aisladas-v3.webp', heroAlt: 'Codificadora portátil, codificadora de cinta térmica y codificadora en línea',
    benefits: ['Consumibles por referencia', 'Identificación del equipo', 'Soporte técnico'], image: '/assets/codificadoras/codificadoras-contenedor-v2.png', imageAlt: 'Codificadoras industriales, consumibles y componentes de referencia', status: 'CONTENIDO EN PREPARACIÓN', description: 'El catálogo recibirá cartuchos, encoder, sensor, soporte y banda cuando carguemos sus fotografías reales.', models: []
  },
  dosificadora: {
    label: 'Dosificadoras', breadcrumb: 'Dosificadoras', heroCategory: 'DOSIFICADORAS Y LLENADORAS', heroTitle: 'Repuestos para|dosificadoras y llenadoras',
    heroDescription: 'Componentes y repuestos para mantener tu proceso de dosificación y llenado en máximo rendimiento.',
    heroImage: '/assets/dosificadoras/dosificadoras-llenadoras-tecnicas-v1.webp', heroAlt: 'Dosificadora de pistón con tolva y llenadora automática en ilustración técnica',
    benefits: ['Catálogo escalable', 'Validamos la compatibilidad antes del despacho', 'Asesoría técnica'], image: '/assets/dosificadoras/dosificadoras-llenadoras-tecnicas-v1.webp', imageAlt: 'Dosificadora y llenadora completas, ilustración de referencia', status: 'CONTENIDO EN PREPARACIÓN', description: 'La información técnica se añadirá únicamente cuando esté confirmada.', models: []
  },
  compresor: {
    label: 'Compresores', breadcrumb: 'Compresores', heroCategory: 'COMPRESORES DE AIRE INDUSTRIAL',
    heroTitle: 'Repuestos para|compresores',
    heroDescription: 'Filtros, purgas y componentes para la línea AWO VDCM. Elige el modelo o envíanos la placa para validar la referencia antes del despacho.',
    heroImage: '/assets/awo/compresores-vdcm-7-10-15-20.webp', heroAlt: 'Familia de compresores AWO VDCM 7, 10, 15 y 20',
    benefits: ['Identificación por referencia', 'Validamos la compatibilidad antes del despacho', 'Asesoría técnica especializada'],
    image: '/assets/awo/compresores-vdcm-7-10-15-20.webp', imageAlt: 'Familia de compresores AWO VDCM 7, 10, 15 y 20',
    status: 'FAMILIAS DE REPUESTOS', description: 'Selecciona VDCM 7, 10, 15 o 20. Confirmamos la referencia exacta con la placa del equipo.',
    models: [
      { id: 'vdcm7', name: 'VDCM 7' },
      { id: 'vdcm10', name: 'VDCM 10' },
      { id: 'vdcm15', name: 'VDCM 15' },
      { id: 'vdcm20', name: 'VDCM 20' }
    ]
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
  return ['repuestos', 'maquinas', 'planes', 'servicios', 'nosotros', 'contacto', 'soporte'].includes(route) ? route : '';
}

const vdcmModels = {
  '7': { power: '5,5 kW / 7 HP', flow: '0,63 m³/min', tank: '260 L', dimensions: '1530 × 736 × 1447 mm', weight: '310 kg' },
  '10': { power: '7,5 kW / 10 HP', flow: '1,10 m³/min', tank: '260 L', dimensions: '1530 × 736 × 1447 mm', weight: '310 kg' },
  '15': { power: '11 kW / 15 HP', flow: '1,60 m³/min', tank: '300 L', dimensions: '1660 × 750 × 1550 mm', weight: '410 kg' },
  '20': { power: '15 kW / 20 HP', flow: '2,40 m³/min', tank: '300 L', dimensions: '1660 × 750 × 1550 mm', weight: '410 kg' }
};
const vdcmShared = 'Compresor de tornillo con VSD, refrigeración por aire, secador integrado, tres filtros de precisión y drenaje automático. Unidad Hanbell Air End, rodamientos SKF, variador Inovance y panel de control.';
function vdcmDescription(number) {
  const model = vdcmModels[number];
  return `${model.power} · 8 bar · ${model.flow} · tanque ${model.tank} · 220 V / 60 Hz / 3 fases. ${model.dimensions} · ${model.weight} · salida DN20. ${vdcmShared}`;
}

// El archivo maestro del logo se mantiene; el lienzo cambia únicamente los píxeles del triángulo.
const logoMaster = new Image();
logoMaster.src = '/assets/awo/awo-group-transparent.webp?v=1';
const logoColors = { compressors: '#2E9E1E', parts: '#1683C4', care: '#F28C28' };
const logoVariants = {};
function updateAwoLogo() {
  if (!logoMaster.complete || !logoMaster.naturalWidth) return;
  const division = document.body.dataset.division || 'compressors';
  if (!logoVariants[division]) {
    const canvas = document.createElement('canvas');
    canvas.width = logoMaster.naturalWidth;
    canvas.height = logoMaster.naturalHeight;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(logoMaster, 0, 0);
    const frame = context.getImageData(0, 0, canvas.width, canvas.height);
    const rgb = logoColors[division].match(/[\da-f]{2}/gi).map(hex => parseInt(hex, 16));
    for (let i = 0; i < frame.data.length; i += 4) {
      const r = frame.data[i], g = frame.data[i + 1], b = frame.data[i + 2], a = frame.data[i + 3];
      if (a && g > 65 && g > r * 1.3 && g > b * 1.3) {
        frame.data[i] = rgb[0]; frame.data[i + 1] = rgb[1]; frame.data[i + 2] = rgb[2];
      }
    }
    context.putImageData(frame, 0, 0);
    logoVariants[division] = canvas.toDataURL('image/png');
  }
  document.querySelectorAll('img.awo-group-logo').forEach(img => { img.src = logoVariants[division]; });
}
logoMaster.addEventListener('load', updateAwoLogo);

function selectModel(modelId) {
  currentModel = modelId === 'all' ? null : currentMachine.models.find(model => model.id === modelId) || null;
  document.querySelectorAll('.model-button').forEach(button => {
    const selected = button.dataset.model === (currentModel?.id || 'all');
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  const modelSelect = document.getElementById('store-model-select');
  if (modelSelect) modelSelect.value = currentModel?.id || 'all';
  document.getElementById('awo-search-model-select').value = currentModel?.id || 'all';
  const preview = document.getElementById('selection-preview');
  preview.hidden = !currentModel;
  document.querySelector('.machine-sidebar').classList.toggle('has-selection', Boolean(currentModel));
  if (currentModel) {
    const photo = document.getElementById('selection-photo');
    photo.src = currentMachine.heroImage;
    photo.alt = currentMachineKey === 'compresor' ? 'Familia de compresores AWO VDCM 7, 10, 15 y 20' : 'Vista de referencia de ' + currentMachine.label;
    document.getElementById('selection-name').textContent = currentMachine.label + ' · ' + currentModel.name;
  }
  document.getElementById('machine-image').src = currentModel?.image || currentMachine.image;
  document.getElementById('machine-image').alt = currentMachineKey === 'compresor' ? currentMachine.imageAlt : (currentModel ? `${currentMachine.label} ${currentModel.name} · imagen de referencia` : currentMachine.imageAlt);
  const selection = currentModel ? currentModel.name : 'Todas las referencias';
  document.getElementById('selected-model').textContent = selection;
  document.getElementById('parts-model-name').textContent = `${currentMachine.label} · ${currentModel ? currentModel.name : 'todas las referencias'}`;
  if (currentMachineKey === 'compresor') {
    document.getElementById('machine-description').textContent = currentModel
      ? vdcmDescription(currentModel.id.replace('vdcm', ''))
      : currentMachine.description;
    document.getElementById('compressor-service-model').textContent = currentModel ? `su compresor ${currentModel.name}` : 'su compresor VDCM';
    document.querySelectorAll('[data-compressor-model]').forEach(button => {
      const selected = button.dataset.compressorModel === currentModel?.id;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-service-hours]').forEach(link => {
      const model = currentModel?.name || 'AWO VDCM (modelo por confirmar)';
      const message = `Hola AWO Group, quiero cotizar el plan de mantenimiento de ${link.dataset.serviceHours} horas para mi compresor ${model}. Enviaré la foto de la placa y las horas de uso para validar alcance y consumibles.`;
      link.href = `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
    });
  }
  const identifyText = `Hola AWO Group, necesito identificar un repuesto para ${currentMachine.label}${currentModel ? ` ${currentModel.name}` : ''}. Voy a enviar fotografía y placa del equipo.`;
  document.getElementById('identify-part-link').href = `https://wa.me/573189324488?text=${encodeURIComponent(identifyText)}`;
  const pendingText = `Hola AWO Group, busco un repuesto para ${currentMachine.label}${currentModel ? ` ${currentModel.name}` : ''}. Quiero confirmar compatibilidad, precio y disponibilidad.`;
  document.getElementById('machine-pending-link').href = `https://wa.me/573189324488?text=${encodeURIComponent(pendingText)}`;
  filterParts();
}

function renderMachine(machineKey) {
  currentMachineKey = machineKey;
  currentMachine = machineCatalog[currentMachineKey];
  document.body.dataset.machineFamily = currentMachineKey;
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
  document.getElementById('machine-pending-panel').hidden = currentMachineKey === 'selladora' || currentMachineKey === 'compresor';
  const compressorSelected = currentMachineKey === 'compresor';
  document.getElementById('repuestos-compresor').hidden = !compressorSelected;
  document.getElementById('planes-compresor').hidden = !compressorSelected;
  document.querySelectorAll('.parts-filters button[data-filter-family]').forEach(button => {
    button.hidden = button.dataset.filterFamily !== (compressorSelected ? 'compresor' : 'selladora');
  });
  activePartFilter = 'all';
  document.querySelectorAll('.parts-filters button').forEach(button => button.classList.toggle('active', button.dataset.filter === 'all'));
  document.getElementById('parts-search-input').placeholder = 'Buscar por referencia, modelo de máquina o tipo de repuesto';

  document.getElementById('technical-store-hero').dataset.family = currentMachineKey;
  document.getElementById('store-hero-category').textContent = currentMachine.heroCategory;
  document.getElementById('store-hero-description').textContent = compressorSelected
    ? currentMachine.heroDescription
    : 'Encuentre repuestos para selladoras, codificadoras, empacadoras y compresores. Validamos la compatibilidad antes del despacho.';
  const heroMachine = document.getElementById('store-hero-machine');
  heroMachine.src = currentMachine.heroImage;
  heroMachine.alt = currentMachine.heroAlt;
  heroMachine.width = compressorSelected ? 1774 : 900;
  heroMachine.height = compressorSelected ? 887 : 600;
  document.getElementById('compressor-comparison-note').hidden = !compressorSelected;
  document.getElementById('store-view-plans').href = `https://wa.me/573189324488?text=${encodeURIComponent(`Hola AWO Group, tengo una foto o placa de mi equipo ${currentMachine.breadcrumb} y necesito identificar un repuesto.`)}`;

  document.getElementById('model-list').innerHTML = `
    <button class="model-button active" type="button" data-model="all">Todos los repuestos <span>→</span></button>
    ${currentMachine.models.map(model => `<button class="model-button" type="button" data-model="${model.id}">${model.name} <span>→</span></button>`).join('')}
  `;
  const modelSelect = document.getElementById('store-model-select');
  modelSelect.innerHTML = `<option value="all">Todas las referencias</option>${currentMachine.models.map(model => `<option value="${model.id}">${model.name}</option>`).join('')}`;
  modelSelect.disabled = currentMachine.models.length === 0;
  const searchModelSelect = document.getElementById('awo-search-model-select');
  searchModelSelect.innerHTML = `<option value="all">Todos los modelos</option>${currentMachine.models.map(model => `<option value="${model.id}">${model.name}</option>`).join('')}`;
  searchModelSelect.disabled = currentMachine.models.length === 0;
  document.querySelectorAll('.model-button').forEach(button => button.addEventListener('click', () => selectModel(button.dataset.model)));
  document.getElementById('model-list').classList.add('open');
  document.querySelectorAll('.category-button').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.machine === currentMachineKey)));
  selectModel('all');
}

document.querySelectorAll('.category-button').forEach(button => button.addEventListener('click', () => renderMachine(button.dataset.machine)));
document.querySelectorAll('[data-compressor-model]').forEach(button => button.addEventListener('click', () => {
  if (currentMachineKey !== 'compresor') renderMachine('compresor');
  selectModel(button.dataset.compressorModel);
}));

document.getElementById('store-model-select').addEventListener('change', event => selectModel(event.target.value));
document.getElementById('awo-search-model-select').addEventListener('change', event => selectModel(event.target.value));

let cart = [];
try { cart = JSON.parse(localStorage.getItem('awo-group-cart')) || []; } catch (error) { cart = []; }
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
  localStorage.setItem('awo-group-cart', JSON.stringify(cart));
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = quantity;
  checkoutCart.disabled = cart.length === 0;
  document.getElementById('email-quote').disabled = cart.length === 0;
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><strong>Tu solicitud está vacía</strong><span>Agrega repuestos para preparar tu cotización.</span></div>';
    return;
  }
  cartItems.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <div class="cart-item-icon">${item.name.charAt(0)}</div>
      <div class="cart-item-info"><span>${item.store}</span><strong>${item.name}</strong><small>Equipo: ${item.model}</small><b>Referencia exacta por identificar</b></div>
      <div class="cart-item-actions"><button type="button" data-cart-action="plus" data-index="${index}">+</button><span>${item.quantity}</span><button type="button" data-cart-action="minus" data-index="${index}">−</button><button class="remove-item" type="button" data-cart-action="remove" data-index="${index}">×</button></div>
    </article>`).join('');
}

document.querySelectorAll('.view-options').forEach(button => button.addEventListener('click', () => {
  const options = button.nextElementSibling;
  options.hidden = !options.hidden;
  button.setAttribute('aria-expanded', String(!options.hidden));
}));

document.querySelectorAll('.request-family').forEach(button => button.addEventListener('click', () => {
  const name = button.closest('.part-card').querySelector('.view-options').dataset.name;
  const model = currentModel ? `${currentMachine.label} ${currentModel.name}` : `${currentMachine.label} — modelo por identificar`;
  const existing = cart.find(item => item.name === name && item.model === model);
  if (existing) existing.quantity += 1;
  else cart.push({ name, store: 'Familia de repuestos', model, quantity: 1 });
  const quoteMachine = document.getElementById('quote-machine');
  const machineOption = [...quoteMachine.options].find(option => model.toLowerCase().includes(option.text.toLowerCase().split(' ')[0]));
  if (machineOption) quoteMachine.value = machineOption.value;
  if (currentModel) document.getElementById('quote-reference').value = currentModel.name;
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
  if (!document.getElementById('quote-location').reportValidity()) return;
  window.open(`https://wa.me/573189324488?text=${encodeURIComponent(quoteMessage())}`, '_blank', 'noopener');
});

function quoteMessage() {
  const machine = document.getElementById('quote-machine').value || 'Por identificar';
  const reference = document.getElementById('quote-reference').value.trim() || 'Por identificar';
  const locationText = document.getElementById('quote-location').value.trim();
  const photo = document.getElementById('quote-photo').checked ? '\nTengo una fotografía o placa para adjuntar.' : '';
  const lines = cart.map(item => `• ${item.quantity} × ${item.name} · ${item.model} (referencia exacta por identificar)`).join('\n');
  return `Hola AWO Group, solicito una cotización de repuestos:\nMáquina: ${machine}\nReferencia o modelo: ${reference}\nCiudad y país: ${locationText}\n${lines}${photo}\nPor favor validen referencia, compatibilidad, disponibilidad y precio.`;
}

document.getElementById('email-quote').addEventListener('click', () => {
  if (!cart.length || !document.getElementById('quote-location').reportValidity()) return;
  location.href = `mailto:ventas@awogroup.com.co?subject=${encodeURIComponent('Solicitud de cotización de repuestos AWO')}&body=${encodeURIComponent(quoteMessage())}`;
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

partsSearchInput.addEventListener('input', () => {
  if (document.querySelector('[data-search-path="modelo"].active')) {
    const query = normalizeSearch(partsSearchInput.value);
    const match = Object.entries(machineCatalog).find(([, machine]) => machine.models.some(model => normalizeSearch(model.name) === query));
    if (match) { renderMachine(match[0]); selectModel(match[1].models.find(model => normalizeSearch(model.name) === query).id); }
  }
  filterParts();
});

document.querySelectorAll('[data-search-path]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-search-path]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  const byModel = button.dataset.searchPath === 'modelo';
  document.getElementById('awo-model-search').hidden = !byModel;
  document.querySelector('.awo-repuesto-search .parts-searchbar').hidden = byModel;
  document.getElementById('search-path-hint').textContent = byModel
    ? 'Elija el modelo y le mostraremos sus repuestos compatibles.'
    : 'Escriba el nombre o código del repuesto para ver las opciones disponibles.';
  partsSearchInput.value = '';
  filterParts();
  (byModel ? document.getElementById('awo-search-model-select') : partsSearchInput).focus();
}));
document.getElementById('clear-parts-search').addEventListener('click', () => { partsSearchInput.value = ''; activePartFilter = 'all'; document.querySelectorAll('.parts-filters button').forEach((button, index) => button.classList.toggle('active', index === 0)); filterParts(); partsSearchInput.focus(); });
document.querySelectorAll('.parts-filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.parts-filters button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activePartFilter = button.dataset.filter;
  filterParts();
}));

const requestedMachine = new URLSearchParams(location.search).get('categoria');
const initialMachine = machineCatalog[requestedMachine] ? requestedMachine
  : (routeName() === 'repuestos' && !new URLSearchParams(location.search).has('buscar') ? 'compresor' : 'selladora');
renderMachine(initialMachine);

function awoWhatsAppUrl(equipment = 'Asesoría para mi producción') {
  const message = `¿Qué máquina o equipo AWO requiere tu producción?\nHola AWO Group, vengo de la tienda de máquinas AWO.\nEquipo de interés: ${equipment}\nQuiero conocer las opciones, disponibilidad y cotización.`;
  return `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
}
if (routeName() === 'maquinas') {
  const selectedMachine = machineCatalog[requestedMachine];
  const equipment = selectedMachine ? selectedMachine.label : 'Asesoría para mi producción';
  document.getElementById('machine-store-selected').textContent = selectedMachine
    ? (requestedMachine === 'compresor' ? 'AWO COMPRESSORS · SISTEMAS DE AIRE COMPRIMIDO' : `OTRAS SOLUCIONES INDUSTRIALES AWO · ${selectedMachine.label.toUpperCase()}`) : 'AWO COMPRESSORS · SISTEMAS DE AIRE COMPRIMIDO';
  document.querySelectorAll('[data-awo-category]').forEach(card => {
    card.classList.toggle('awo-selected', card.dataset.awoCategory === requestedMachine);
  });
  document.querySelectorAll('[data-awo-quote]').forEach(link => {
    link.href = awoWhatsAppUrl(link.dataset.awoQuote === 'Asesoría para mi producción' ? equipment : link.dataset.awoQuote);
  });
  document.querySelectorAll('.header-whatsapp, .whatsapp-float, footer a[href*="wa.me"]').forEach(link => {
    link.href = awoWhatsAppUrl(equipment);
  });
}

document.querySelectorAll('[data-compressor-request]').forEach(link => {
  const messages = {
    cotizacion: 'Hola AWO Group, quiero cotizar un compresor de la línea AWO VDCM (7, 10, 15 o 20). ¿Me ayudan a escoger el modelo y confirmar precio y disponibilidad?',
    ficha: 'Hola AWO Group, quiero solicitar la ficha técnica de un compresor AWO VDCM. ¿Podemos revisar cuál modelo y configuración corresponde a mi aplicación?',
    asesoria: 'Hola AWO Group, tengo preguntas sobre los compresores AWO VDCM. Quiero asesoría sobre capacidad, instalación y mantenimiento.'
  };
  link.href = `https://wa.me/573189324488?text=${encodeURIComponent(messages[link.dataset.compressorRequest])}`;
  link.target = '_blank';
  link.rel = 'noopener';
});
const awoMachineModelButtons = [...document.querySelectorAll('[data-machine-model]')];
const awoMachineRangeImage = document.getElementById('awo-machine-range-image');
const awoMachineSelected = document.getElementById('awo-machine-selected');
const awoSpecialPrice = document.getElementById('awo-special-price');
const awoQuoteShortcut = document.getElementById('awo-quote-shortcut');
let awoSelectedMachineModel = '';
let awoGalleryIndex = 0;
const awoGallerySlides = [
  { title: 'Vista general · diseño 4 en 1', description: 'La ficha del VDCM 10 muestra el compresor integrado al tanque horizontal.', details: ['Compresor de tornillo, tanque de 260 L, secador de aire y tres filtros de precisión.', 'Dimensiones indicadas: 1530 × 736 × 1447 mm.'] },
  { title: 'Vista frontal', description: 'Observa el panel, las puertas de servicio y el montaje sobre el tanque.', details: ['Potencia indicada: 7,5 kW / 10 HP.', 'La cota longitudinal de la ficha es 1530 mm.'] },
  { title: 'Vista trasera', description: 'La vista posterior de la ficha muestra las conexiones y el conjunto de tratamiento de aire.', details: ['La ficha indica secador y filtración integrados.', 'Consulta acceso de mantenimiento y disposición de las conexiones antes de instalar.'] },
  { title: 'Vista lateral derecha', description: 'Detalle del ventilador lateral y del tanque visto de perfil.', details: ['Alto indicado: 1447 mm.', 'Ancho indicado: 736 mm.'] },
  { title: 'Datos técnicos', description: 'Especificaciones del AWO VDCM 10.', details: ['7,5 kW / 10 HP · 8 bar · 1,10 m³/min.', '220 V / 60 Hz / 3 fases · accionamiento VSD.', 'Tanque de 260 L · peso 310 kg · salida DN20.'] }
];

function renderAwoGallery() {
  const slide = awoGallerySlides[awoGalleryIndex];
  const photo = document.getElementById('awo-gallery-photo');
  photo.className = `awo-machine-gallery-photo view-${awoGalleryIndex}`;
  photo.setAttribute('aria-label', `${slide.title}: recorte de la ficha técnica original del AWO VDCM 10`);
  document.getElementById('awo-gallery-count').textContent = `VISTA ${awoGalleryIndex + 1} DE ${awoGallerySlides.length}`;
  document.getElementById('awo-gallery-title').textContent = slide.title;
  document.getElementById('awo-gallery-description').textContent = slide.description;
  document.getElementById('awo-gallery-details').replaceChildren(...slide.details.map(detail => {
    const item = document.createElement('li'); item.textContent = detail; return item;
  }));
  document.getElementById('awo-gallery-progress').textContent = `${awoGalleryIndex + 1} / ${awoGallerySlides.length}`;
}
document.getElementById('awo-gallery-prev').addEventListener('click', () => { awoGalleryIndex = (awoGalleryIndex - 1 + awoGallerySlides.length) % awoGallerySlides.length; renderAwoGallery(); });
document.getElementById('awo-gallery-next').addEventListener('click', () => { awoGalleryIndex = (awoGalleryIndex + 1) % awoGallerySlides.length; renderAwoGallery(); });
renderAwoGallery();

function updateMachinePriceLinks() {
  const model = awoSelectedMachineModel ? `VDCM ${awoSelectedMachineModel}` : 'línea VDCM (modelo por definir)';
  const message = `Hola AWO Group, vi las características del compresor AWO ${model}. Quiero conocer el precio especial disponible hoy y recibir una cotización para mi ciudad. ¿Me ayudan a confirmar configuración, disponibilidad, envío e instalación?`;
  const url = `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
  awoSpecialPrice.href = url;
  awoQuoteShortcut.href = url;
}

awoMachineModelButtons.forEach(button => button.addEventListener('click', () => {
  awoSelectedMachineModel = button.dataset.machineModel;
  awoMachineModelButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const isTen = awoSelectedMachineModel === '10';
  awoMachineRangeImage.src = '/assets/awo/compresores-vdcm-7-10-15-20.webp';
  awoMachineRangeImage.alt = `Familia de compresores AWO VDCM; datos del modelo ${awoSelectedMachineModel} en el texto contiguo`;
  awoMachineRangeImage.width = 1774;
  awoMachineRangeImage.height = 887;
  document.querySelector('.awo-compressor-range-visual').hidden = isTen;
  document.getElementById('awo-machine-gallery').hidden = !isTen;
  if (isTen) { awoGalleryIndex = 0; renderAwoGallery(); }
  awoMachineSelected.hidden = false;
  document.getElementById('awo-machine-selected-name').textContent = `AWO VDCM ${awoSelectedMachineModel}`;
  document.getElementById('awo-machine-selected-description').textContent = vdcmDescription(awoSelectedMachineModel);
  document.getElementById('awo-quote-model').value = `VDCM ${awoSelectedMachineModel}`;
  updateMachinePriceLinks();
}));
updateMachinePriceLinks();

document.getElementById('awo-machine-quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    'Hola AWO Group, quiero una cotización de compresor.',
    `Nombre: ${data.get('nombre')}`,
    `Empresa: ${data.get('empresa')}`,
    `WhatsApp: ${data.get('telefono')}`,
    `Correo: ${data.get('correo')}`,
    `Ciudad y país: ${data.get('ubicacion')}`,
    `Modelo: ${data.get('modelo')}`,
    `Aplicación: ${data.get('aplicacion')}`,
    `Instalación y capacitación: ${data.get('servicios')}`,
    'Por favor indíquenme precio, disponibilidad, condiciones de garantía y alcance de la instalación.'
  ];
  window.open(`https://wa.me/573189324488?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});
document.querySelectorAll('[data-compressor-part]').forEach(link => {
  const message = `Hola AWO Group, quiero consultar ${link.dataset.compressorPart} para un compresor AWO VDCM. Puedo compartir modelo y fotografía de la placa para validar compatibilidad.`;
  link.href = `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

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
const planParams = new URLSearchParams(location.search);
const planEquipment = routeName() === 'planes' ? planParams.get('equipo') : null;
const requestedDuration = Number(planParams.get('duracion'));
if (routeName() === 'planes' && planRules[requestedDuration]) {
  selectedMonths = requestedDuration;
  document.querySelectorAll('.period-options button').forEach(button => {
    button.classList.toggle('active', Number(button.dataset.months) === selectedMonths);
  });
}

function updatePlan() {
  const count = Math.max(1, Math.min(50, Number(countInput.value) || 1));
  countInput.value = count;
  const rule = planRules[selectedMonths];
  document.getElementById('plan-title').textContent = `AWO Care · ${selectedMonths} meses`;
  document.getElementById('machine-badge').textContent = count;
  document.getElementById('machine-word').textContent = count === 1 ? ' máquina' : ' máquinas';
  document.getElementById('preventive-total').textContent = rule.preventive * count;
  document.getElementById('inspection-total').textContent = rule.inspections * count;
  document.getElementById('emergency-included').textContent = rule.emergencies * count;
  document.getElementById('emergency-condition').textContent = rule.condition;
  document.getElementById('response-level').textContent = rule.response;
  const equipmentContext = planEquipment ? ` de ${planEquipment}` : '';
  const message = `Hola AWO Group, quiero cotizar un plan AWO Care de ${selectedMonths} meses para ${count} ${count === 1 ? 'máquina' : 'máquinas'}${equipmentContext}. La propuesta indica ${rule.preventive * count} mantenimientos preventivos, ${rule.inspections * count} inspecciones y ${rule.emergencies * count} urgencias incluidas; por favor confirmen el alcance para mi equipo.`;
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
  // La misma familia VDCM se muestra en Inicio y Máquinas, sin duplicar tarjetas ni fichas.
  const range = document.getElementById('compresores');
  const home = document.getElementById('home');
  const machineStore = document.querySelector('#maquinas > .container');
  const parts = document.querySelector('.awo-compressor-support');
  const actions = range.querySelector('.awo-range-actions') || home.querySelector('.awo-range-actions');
  const quoteLink = actions.querySelectorAll('a')[1];
  if (page === 'home') {
    home.insertBefore(range, home.querySelector('.awo-home-benefit-strip'));
    home.insertBefore(actions, home.querySelector('.awo-home-cta'));
    home.insertBefore(parts, home.querySelector('.awo-home-cta'));
    quoteLink.href = '/maquinas#cotizar-compresor';
  } else {
    machineStore.insertBefore(range, machineStore.querySelector('.awo-machine-benefits'));
    range.insertBefore(actions, range.querySelector('.awo-range-footnote'));
    machineStore.insertBefore(parts, machineStore.querySelector('.awo-compressor-care'));
    quoteLink.href = '#cotizar-compresor';
  }
  document.body.dataset.page = page;
  document.body.dataset.division = page === 'repuestos' ? 'parts' : (['planes', 'servicios', 'soporte'].includes(page) ? 'care' : 'compressors');
  updateAwoLogo();
  const requestedFamily = new URLSearchParams(location.search).get('categoria');
  document.body.dataset.machineFamily = page === 'home' ? 'compresor' : (page === 'maquinas' && machineCatalog[requestedFamily] ? requestedFamily : (page === 'repuestos' ? currentMachineKey : ''));
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
  if (page === 'repuestos' && location.hash === '#repuestos-compresor' && requestedFamily === 'compresor') {
    requestAnimationFrame(() => document.getElementById('repuestos-compresor')?.scrollIntoView({ block: 'start' }));
  }
  if (page === 'maquinas') {
    const target = location.hash === '#selladora-inkjet' ? '#selladora-inkjet'
      : (location.hash === '#compresores' || location.hash === '#compresor-awo' || requestedFamily === 'compresor') ? '#compresores' : null;
    if (target) requestAnimationFrame(() => document.querySelector(target)?.scrollIntoView({ block: 'start' }));
  }
  if (page === 'planes' && location.hash === '#plan-configurador') {
    requestAnimationFrame(() => document.getElementById('plan-configurador')?.scrollIntoView({ block: 'start' }));
  }
  const pageTitles = {
    repuestos: 'Repuestos para máquinas industriales | AWO Group',
    maquinas: 'Tienda de Máquinas | AWO Group',
    planes: 'Planes de Mantenimiento | AWO Group',
    nosotros: 'Nosotros | AWO Group',
    contacto: 'Contacto | AWO Group',
    soporte: 'Soporte técnico | AWO Group',
    servicios: 'Servicios industriales | AWO Group'
  };
  document.title = pageTitles[page] || 'AWO Group | Compresores industriales, repuestos y soporte';
}
window.addEventListener('hashchange', updatePageView);
window.addEventListener('popstate', updatePageView);
updatePageView();

document.getElementById('header-search-button').addEventListener('click', () => {
  const query = document.getElementById('awo-header-query').value.trim();
  if (query) {
    location.href = `/repuestos?buscar=${encodeURIComponent(query)}`;
    return;
  }
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
  const text = `Hola AWO Group, soy ${name}${company ? ` de ${company}` : ''}. ${message}`;
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

// La portada alterna los equipos destacados; los controles permiten detener o cambiar la presentación.
(() => {
  const slider = document.getElementById('awo-hero-slider');
  if (!slider || !document.getElementById('awo-hero-pause')) return;
  const slides = [...slider.querySelectorAll('[data-hero-slide]')];
  const dots = [...document.querySelectorAll('[data-hero-dot]')];
  const pause = document.getElementById('awo-hero-pause');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let paused = false;
  let timer;
  const measure = () => {
    if (window.innerWidth > 760) { slider.style.height = ''; return; }
    const layout = slides[index].querySelector('.awo-home-hero-layout');
    slider.style.height = `${Math.ceil(layout.getBoundingClientRect().height) + 28}px`;
  };
  const show = next => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.querySelectorAll('a').forEach(link => { link.tabIndex = active ? 0 : -1; });
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      if (i === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    requestAnimationFrame(measure);
  };
  const schedule = () => {
    clearInterval(timer);
    if (!paused && !reducedMotion.matches) {
      timer = setInterval(() => {
        if (!document.hidden && !slider.matches(':hover') && !slider.matches(':focus-within')) show(index + 1);
      }, 9000);
    }
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); schedule(); }));
  pause.addEventListener('click', () => {
    paused = !paused;
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
    schedule();
  });
  reducedMotion.addEventListener('change', schedule);
  window.addEventListener('resize', measure);
  slides.forEach(slide => slide.querySelector('img').addEventListener('load', measure));
  show(0);
  schedule();
})();
