// Listado de proyectos para la página de Experiencia.
// Pendiente de entrega por el cliente: completar con proyectos reales y autorizados
// para publicación. Mientras esté vacío, el sitio no muestra la tabla en producción.
export interface Project {
  client: string;
  country: string;
  voltage: string; // por ejemplo "230 kV"
  scope: { es: string; en: string };
}

export const projects: Project[] = [
  {
    client: 'PEQUIVEN · Metanol de Oriente',
    country: 'Venezuela',
    voltage: '13.8 kV – 115 kV',
    scope: {
      es: 'Configuración, comisionamiento y puesta en servicio integral del sistema de control para subestaciones en Planta 1 y Planta 2.',
      en: 'Configuration, commissioning, and full commissioning of control systems for substations in Plant 1 and Plant 2.',
    },
  },
  {
    client: 'Elecnor · S/E Cumbres',
    country: 'Chile',
    voltage: '500 kV',
    scope: {
      es: 'Pruebas FAT y SAT, configuración del sistema de control y verificación de esquemas en banco ATR de 750 MVA.',
      en: 'FAT/SAT testing, control system configuration, and protection scheme verification on 750 MVA ATR transformer bank.',
    },
  },
  {
    client: 'Transelec · S/E Kimal y Los Changos',
    country: 'Chile',
    voltage: '220 kV',
    scope: {
      es: 'Comisionamiento y puesta en servicio de sistemas de protección y control de bahías de línea y transformación.',
      en: 'Commissioning and start-up of protection and control systems for line and transformer bays.',
    },
  },
  {
    client: 'CORPOELEC · Transmisión y Despacho',
    country: 'Venezuela',
    voltage: '115 kV – 765 kV',
    scope: {
      es: 'Ingeniería de campo, automatización y telecontrol de subestaciones en regiones Los Andes y Occidente.',
      en: 'Field engineering, automation, and telecontrol of substations across the Los Andes and Western regions.',
    },
  },
  {
    client: 'Enfragen / Enel',
    country: 'Chile',
    voltage: '110 kV – 220 kV',
    scope: {
      es: 'Contratos marco de mantenimiento especializado, análisis de fallas y capacitación técnica en 14 centrales (9 de generación y 5 térmicas).',
      en: 'Framework contracts for specialized maintenance, fault analysis, and technical training across 14 power plants (9 generation and 5 thermal).',
    },
  },
  {
    client: 'Interconexión Regional · S/E Juana La Avanzadora',
    country: 'Colombia',
    voltage: '230 kV',
    scope: {
      es: 'Servicios especializados de ingeniería, pruebas de protecciones y puesta en servicio en subestación.',
      en: 'Specialized engineering services, protection testing, and substation commissioning.',
    },
  },
  {
    client: 'Proyectos Industriales y Térmicos',
    country: 'Costa de Marfil / Camerún',
    voltage: '90 kV – 225 kV',
    scope: {
      es: 'Intervenciones de ingeniería y parametrización en complejos industriales y subestaciones de distribución.',
      en: 'Engineering interventions and parameterization in industrial complexes and distribution substations.',
    },
  },
];
