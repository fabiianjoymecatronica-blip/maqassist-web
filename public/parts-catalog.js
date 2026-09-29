// Catálogo de productos confirmados. Añadir registros aquí publica tarjetas y fichas sin crear páginas a mano.
const AWO_PARTS_PRODUCTS = [
  {
    id: 'air-filter-2914100241', slug: 'filtro-aire-2914100241',
    name: 'Filtro de aire', reference: '2914100241', awoId: 'FA-15HP1', sku: '2914100241',
    division: 'AWO Parts', productType: 'Consumible', category: 'Filtración', subcategory: 'Filtro de aire',
    machineType: 'Compresores', application: 'Compresor de tornillo de 15 HP', compatibleModels: ['VDCM 15'], brand: null,
    description: 'Elemento de filtración de aire diseñado para retener contaminantes presentes en el aire de admisión antes de ingresar al sistema de compresión.',
    images: [
      { src: '/assets/parts/filtro-aire-2914100241-frontal-sin-fondo.webp', alt: 'Filtro de aire real completo, referencia 2914100241', label: 'Vista general', width: 1086, height: 1448 },
      { src: '/assets/parts/filtro-aire-2914100241-angulo-sin-fondo.webp', alt: 'Dos filtros de aire reales desde otro ángulo', label: 'Segundo ángulo', width: 1086, height: 1448 },
      { src: '/assets/parts/filtro-aire-2914100241-abertura-sin-fondo.webp', alt: 'Abertura e interior del filtro de aire real', label: 'Abertura interior', width: 1086, height: 1448 },
      { src: '/assets/parts/filtro-aire-2914100241-superior-sin-fondo.webp', alt: 'Vista superior del filtro de aire real', label: 'Vista superior', width: 1086, height: 1448 },
      { src: '/assets/parts/filtro-aire-2914100241-material-sin-fondo.webp', alt: 'Detalle del material filtrante del filtro de aire real', label: 'Material filtrante', width: 1086, height: 1448 }
    ],
    price: null, currency: 'COP', stock: null, quantity: 1, cartEnabled: false, featured: true, status: 'published'
  }
];
if (typeof module !== 'undefined') module.exports = AWO_PARTS_PRODUCTS;
if (typeof window !== 'undefined') window.AWO_PARTS_PRODUCTS = AWO_PARTS_PRODUCTS;
