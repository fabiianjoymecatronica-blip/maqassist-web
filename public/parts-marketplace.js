(() => {
  if (location.pathname.split('/')[1] !== 'repuestos' && !['#repuestos', '#catalogo-repuestos'].includes(location.hash)) return;
  const products = (window.AWO_PARTS_PRODUCTS || []).filter(product => product.status === 'published');
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normal = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const wa = message => `https://wa.me/573189324488?text=${encodeURIComponent(message)}`;
  const identifyMessage = 'Hola AWO, necesito ayuda para identificar un repuesto. Voy a enviar fotografías del componente y de la placa del equipo.';
  document.querySelectorAll('[data-parts-message="identify"]').forEach(link => link.href = wa(identifyMessage));
  const machines = ['Compresores','Selladoras','Codificadoras','Máquinas de empaque','Otros equipos'];
  const categories = ['Filtración','Lubricación','Separación aire/aceite','Purgas','Válvulas','Sensores','Elementos eléctricos','Transmisión','Sellado','Codificación','Consumibles','Otros repuestos'];
  const selects = {
    machine: $('awo-parts-machine'), category: $('awo-parts-category'), type: $('awo-parts-type'),
    model: $('awo-parts-model'), brand: $('awo-parts-brand')
  };
  function options(select, values, initial) {
    select.replaceChildren(new Option(initial, ''), ...values.map(value => new Option(value, value)));
  }
  options(selects.machine, machines, 'Todas las máquinas');
  options(selects.category, categories, 'Todas las categorías');
  options(selects.type, ['Repuesto','Consumible'], 'Todos los tipos');
  options(selects.model, ['VDCM 7','VDCM 10','VDCM 15','VDCM 20', ...new Set(products.flatMap(product => product.compatibleModels || []).filter(model => !/^VDCM (7|10|15|20)$/.test(model)))], 'Todos los modelos');
  options(selects.brand, [...new Set(products.flatMap(product => [product.brand].filter(Boolean)))], 'Todas las marcas / líneas');
  $('awo-parts-machines').innerHTML = `<button type="button" data-parts-machine="" class="active" aria-pressed="true">Todos</button>${machines.map(machine => `<button type="button" data-parts-machine="${escape(machine)}" aria-pressed="false">${escape(machine)}</button>`).join('')}`;
  const query = $('awo-parts-query');
  query.value = new URLSearchParams(location.search).get('buscar') || '';
  const legacyFamily = new URLSearchParams(location.search).get('categoria');
  const familyToMachine = {compresor:'Compresores',selladora:'Selladoras',codificadora:'Codificadoras',flowpack:'Máquinas de empaque',empacadora290:'Máquinas de empaque',dosificadora:'Máquinas de empaque',otras:'Otros equipos'};
  if (familyToMachine[legacyFamily]) selects.machine.value = familyToMachine[legacyFamily];
  const legacyHashes = ['#catalogo-repuestos','#repuestos-compresor','#planes-compresor'];
  if (legacyHashes.includes(location.hash)) $('awo-parts-legacy').open = true;
  window.addEventListener('hashchange', () => { if (legacyHashes.includes(location.hash)) $('awo-parts-legacy').open = true; });
  const machineFromQuery = normal(query.value);
  if (!products.some(p => normal([p.name,p.reference,p.machineType,p.application,p.category].join(' ')).includes(machineFromQuery)) && ['vdcm 7','vdcm 10','vdcm 15','vdcm 20'].includes(machineFromQuery)) {
    selects.model.value = query.value.toUpperCase(); query.value = '';
  }
  function renderList() {
    const search = normal(query.value.trim());
    const reference = normal($('awo-parts-reference').value.trim());
    const found = products.filter(p => {
      const searchable = normal([p.name,p.reference,p.sku,p.category,p.subcategory,p.machineType,p.application,p.brand,...p.compatibleModels].join(' '));
      return (!search || searchable.includes(search)) && (!reference || normal(p.reference).includes(reference)) &&
        (!selects.machine.value || p.machineType === selects.machine.value) &&
        (!selects.category.value || p.category === selects.category.value) &&
        (!selects.type.value || p.productType === selects.type.value) &&
        (!selects.model.value || p.compatibleModels.includes(selects.model.value)) &&
        (!selects.brand.value || p.brand === selects.brand.value);
    });
    $('awo-parts-count').textContent = `${found.length} ${found.length === 1 ? 'producto' : 'productos'}`;
    $('awo-parts-grid').innerHTML = found.map(p => `<article class="awo-parts-card"><a class="awo-parts-card-photo" href="/repuestos/${encodeURIComponent(p.slug)}"><img src="${escape(p.images[0].src)}" alt="${escape(p.images[0].alt)}" width="${p.images[0].width}" height="${p.images[0].height}" loading="lazy"></a><div class="awo-parts-card-copy"><span class="awo-parts-badge">${escape(p.productType)}</span><h4>${escape(p.name)}</h4><strong>REF. ${escape(p.reference)}</strong><p>${escape(p.category)} · ${escape(p.application)}</p><a href="/repuestos/${encodeURIComponent(p.slug)}">Ver detalle <span aria-hidden="true">→</span></a></div></article>`).join('');
    $('awo-parts-empty').hidden = found.length > 0;
    document.querySelectorAll('[data-parts-machine]').forEach(button => {
      const active = button.dataset.partsMachine === selects.machine.value;
      button.classList.toggle('active',active); button.setAttribute('aria-pressed', String(active));
    });
  }
  $('awo-parts-machines').addEventListener('click', event => {
    const button = event.target.closest('[data-parts-machine]');
    if (!button) return;
    selects.machine.value = button.dataset.partsMachine;
    renderList();
  });
  [query,$('awo-parts-reference')].forEach(input => input.addEventListener('input',renderList));
  Object.values(selects).forEach(select => select.addEventListener('change',renderList));
  $('awo-parts-reset').addEventListener('click', () => {
    query.value = ''; $('awo-parts-reference').value = '';
    Object.values(selects).forEach(select => select.value = '');
    renderList();
  });
  if (window.matchMedia('(max-width: 700px)').matches) $('awo-parts-filters').open = false;
  const slug = decodeURIComponent(location.pathname.match(/^\/repuestos\/([^/]+)\/?$/)?.[1] || '');
  const product = products.find(p => p.slug === slug);
  if (slug && product) {
    $('awo-parts-marketplace').hidden = true;
    $('awo-parts-legacy').hidden = true;
    document.body.dataset.partsProduct = 'true';
    const quote = wa(`Hola AWO, quiero cotizar el ${product.name.toLowerCase()} referencia ${product.reference}. ¿Me ayudan a confirmar precio y compatibilidad?`);
    const compatibility = wa(`Hola AWO, necesito verificar la compatibilidad del ${product.name.toLowerCase()} referencia ${product.reference} con mi compresor.`);
    $('awo-parts-product').innerHTML = `<nav class="awo-parts-breadcrumb" aria-label="Ruta"><a href="/">Inicio</a><span>›</span><a href="/repuestos">AWO Parts</a><span>›</span><strong>${escape(product.name)}</strong></nav>
      <div class="awo-parts-detail-grid"><div class="awo-parts-gallery"><div class="awo-parts-gallery-main"><img id="awo-parts-main-photo" src="${escape(product.images[0].src)}" alt="${escape(product.images[0].alt)}" width="${product.images[0].width}" height="${product.images[0].height}"><span id="awo-parts-photo-label">${escape(product.images[0].label)}</span></div><div class="awo-parts-thumbnails" role="group" aria-label="Fotografías del producto">${product.images.map((im,i) => `<button type="button" data-parts-image="${i}" aria-label="Ver ${escape(im.label)}" aria-pressed="${i===0}"><img src="${escape(im.src)}" alt="" width="${im.width}" height="${im.height}" loading="lazy"></button>`).join('')}</div></div>
      <div class="awo-parts-detail-copy"><span class="awo-parts-kicker">AWO PARTS · ${escape(product.machineType)}</span><span class="awo-parts-badge">${escape(product.productType)}</span><h1>${escape(product.name)}</h1><p class="awo-parts-ref">Referencia <strong>${escape(product.reference)}</strong></p><p class="awo-parts-description">${escape(product.description)}</p><dl><div><dt>Categoría</dt><dd>${escape(product.category)}</dd></div><div><dt>Aplicación</dt><dd>${escape(product.application)}</dd></div><div><dt>Compatibilidad</dt><dd>${product.compatibleModels.length ? escape(product.compatibleModels.join(' · ')) : 'Consulta compatibilidad con tu equipo.'}</dd></div></dl><div class="awo-parts-price"><span>PRECIO</span><strong>Consultar</strong></div><div class="awo-parts-detail-actions"><a class="awo-parts-button" href="${quote}" target="_blank" rel="noopener">Cotizar repuesto ↗</a><a class="awo-parts-button secondary" href="${compatibility}" target="_blank" rel="noopener">Verificar compatibilidad ↗</a></div><p class="awo-parts-reference-note">La fotografía de la caja documenta la referencia. Confirma el modelo de tu equipo con AWO antes de solicitarlo.</p></div></div>`;
    $('awo-parts-product').hidden = false;
    document.title = `${product.name} ${product.reference} | AWO Parts · AWO Group`;
    const main = $('awo-parts-main-photo');
    const label = $('awo-parts-photo-label');
    const thumbs = $('awo-parts-product').querySelectorAll('[data-parts-image]');
    let selected = 0;
    function selectImage(index) {
      selected = (index + product.images.length) % product.images.length;
      const image = product.images[selected];
      main.src = image.src; main.alt = image.alt; main.width = image.width; main.height = image.height;
      label.textContent = image.label;
      thumbs.forEach((button,i) => button.setAttribute('aria-pressed', String(i === selected)));
    }
    thumbs.forEach(button => button.addEventListener('click', () => selectImage(Number(button.dataset.partsImage))));
    let startX = 0;
    main.addEventListener('touchstart', event => { startX = event.changedTouches[0].clientX; }, {passive:true});
    main.addEventListener('touchend', event => { const delta = event.changedTouches[0].clientX - startX; if (Math.abs(delta)>40) selectImage(selected + (delta<0?1:-1)); }, {passive:true});
  } else if (slug) {
    document.title = 'Repuesto no encontrado | AWO Parts';
    $('awo-parts-grid').innerHTML = '';
    $('awo-parts-empty').hidden = false;
  } else {
    document.title = 'AWO Parts | Repuestos industriales y consumibles · AWO Group';
    renderList();
  }
  // El sistema de pedidos heredado queda almacenado, pero esta etapa comercial solo ofrece cotización.
  $('open-cart')?.setAttribute('tabindex','-1');
})();
