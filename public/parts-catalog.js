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
  },
  {
    id: 'ink-cartridge-sp70', slug: 'cartucho-tinta-sp70',
    name: 'Cartucho de tinta SP70', reference: 'SP70', awoId: 'CTN-C1', sku: 'SP70',
    division: 'AWO Parts', productType: 'Consumible', category: 'Codificación', subcategory: 'Cartucho de tinta',
    machineType: 'Codificadoras', application: 'Codificación industrial', compatibleModels: [], brand: 'Willita',
    description: 'Cartucho de tinta negra modelo SP70 para procesos de codificación. Verifica la compatibilidad con tu codificadora antes de solicitarlo.',
    technicalData: [
      { label: 'Color', value: 'Negro' },
      { label: 'Ancho de pulso (etiqueta)', value: '130–150 (1,8 µs)' },
      { label: 'Voltaje de boquilla', value: '9 V' }
    ],
    images: [
      { src: '/assets/parts/cartucho-sp70-0991-cutout.png?v=2', alt: 'Cartucho de tinta SP70 real, vista diagonal del cuerpo y boquilla protegida', label: 'Vista general', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0990-cutout.png?v=2', alt: 'Cartucho SP70 real con etiqueta de modelo y datos de operación', label: 'Modelo SP70', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0989-cutout.png?v=2', alt: 'Vista lateral del cartucho de tinta SP70', label: 'Lateral', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0988-cutout.png?v=2', alt: 'Vista del extremo y cubierta del cartucho SP70', label: 'Extremo', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0987-cutout.png?v=2', alt: 'Cartucho SP70 con etiqueta lateral Willita', label: 'Etiqueta lateral', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0986-cutout.png?v=2', alt: 'Otra vista del cartucho SP70 y su protector transparente', label: 'Protector', width: 1086, height: 1448 },
      { src: '/assets/parts/cartucho-sp70-0993-cutout.png?v=2', alt: 'Etiqueta de datos técnicos del cartucho SP70 Willita, color negro y voltaje de 9 V', label: 'Datos técnicos', width: 1620, height: 971 }
    ],
    price: null, currency: 'COP', stock: null, quantity: 1, cartEnabled: false, featured: false, status: 'published'
  }
];
if (typeof module !== 'undefined') module.exports = AWO_PARTS_PRODUCTS;
if (typeof window !== 'undefined') window.AWO_PARTS_PRODUCTS = AWO_PARTS_PRODUCTS;
