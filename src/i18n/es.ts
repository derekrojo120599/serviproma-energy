// Borrador de textos derivado del briefing. Validar contra el Brochure Corporativo V5
// antes de publicar (cifras, nombres de metodología, listado de países).
export const es = {
  meta: {
    home: {
      title: 'Protecciones, automatización y SCADA hasta 765 kV',
      description:
        'Serviproma Energy C.A. integra protecciones eléctricas, automatización, control y sistemas SCADA para el sector eléctrico, petrolero e industrial. Ingenieros con más de 35 años de experiencia.',
    },
    services: {
      title: 'Servicios de ingeniería eléctrica y SCADA',
      description:
        'Protecciones y comisionamiento, pruebas FAT/SAT, automatización y SCADA con IEC 61850, estudios de potencia y soluciones para industria y petróleo.',
    },
    slrp: {
      title: 'SLRP: lectura remota de oscilografías en unos 2 minutos',
      description:
        'SLRP recupera oscilografías de los relés ya instalados mediante el estándar abierto COMTRADE, sin esperar el traslado de una cuadrilla a la subestación.',
    },
    about: {
      title: 'Nosotros',
      description:
        'Ingenieros con más de 35 años de experiencia, 12 de ellos en Despacho de Carga y Transmisión de CORPOELEC. Conozca nuestra metodología de trabajo.',
    },
    experience: {
      title: 'Experiencia en subestaciones y plantas',
      description:
        'Proyectos de protecciones, automatización y SCADA en Venezuela, Chile, Colombia y otros países, para el sector eléctrico, petrolero e industrial.',
    },
    contact: {
      title: 'Solicitar una evaluación técnica',
      description:
        'Cuéntenos qué necesita: comisionamiento, pruebas FAT/SAT, integración SCADA o viabilidad de SLRP. Respondemos al correo o por WhatsApp.',
    },
  },

  common: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    menuClose: 'Cerrar menú',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      slrp: 'SLRP',
      about: 'Nosotros',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    ctaHeader: 'Solicitar evaluación',
    langLabel: 'Idioma',
    langSwitchTo: 'English',
    langSwitchAria: 'Ver este sitio en inglés',
    whatsapp: 'Escribir por WhatsApp',
    call: 'Llamar',
    footer: {
      tagline:
        'Ingeniería de protecciones, automatización, control y SCADA para el sector eléctrico, petrolero e industrial.',
      explore: 'Navegación',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
      rif: 'RIF',
    },
  },

  home: {
    hero: {
      title: 'Protecciones, automatización y SCADA para redes de alta y extra alta tensión',
      lead:
        'Ingenieros que suman más de 35 años de experiencia, 12 de ellos dentro del Despacho de Carga y Transmisión de CORPOELEC, ahora al servicio de su subestación.',
      primary: 'Solicitar evaluación técnica',
      secondary: 'Ver la solución SLRP',
      chartLabel: 'Corrientes de fase durante una falla monofásica',
      chartNote: 'Ilustración. El archivo real se obtiene en formato COMTRADE.',
      chartFault: 'Inicio de la falla',
      chartTrip: 'Apertura del interruptor',
    },
    experience: {
      title: 'Quien firma la ingeniería ya operó esta red',
      text:
        'Serviproma no es una empresa recién fundada. Detrás de cada proyecto está un equipo que trabajó en el Despacho de Carga y en Transmisión, y conoce lo que pasa en la sala de control cuando una línea dispara.',
      facts: [
        { label: 'Experiencia acumulada del equipo', value: '+35 años' },
        { label: 'En Despacho de Carga y Transmisión de CORPOELEC', value: '12 años' },
        { label: 'Nivel de tensión de los proyectos', value: 'hasta 765 kV' },
        { label: 'Presencia', value: '6 países' },
      ],
      link: 'Conocer al equipo',
    },
    services: {
      title: 'Lo que hacemos en campo y en sala de control',
      text:
        'Trabajamos con el parque instalado: Siemens SICAM, GE, SEL y ABB. La mayoría de las veces se puede recuperar y conectar lo que ya existe.',
      items: [
        {
          title: 'Protecciones y comisionamiento',
          text: 'Puesta en servicio de sistemas de protección y pruebas FAT y SAT.',
          tags: ['FAT', 'SAT', 'Subestaciones'],
        },
        {
          title: 'Automatización y SCADA',
          text: 'Integración de equipos de campo al SCADA con IEC 61850.',
          tags: ['IEC 61850', 'SCADA'],
        },
        {
          title: 'Estudios de potencia',
          text: 'Análisis del sistema eléctrico para sustentar decisiones de ingeniería.',
          tags: ['Cortocircuito', 'Coordinación'],
        },
        {
          title: 'Industria y petróleo',
          text: 'Protecciones y control para refinerías, plantas y operaciones industriales.',
          tags: ['Refinerías', 'Industria'],
        },
      ],
      link: 'Ver todos los servicios',
    },
    slrp: {
      title: 'Tras un disparo, ¿cuánto tarda en llegar la oscilografía?',
      text:
        'Hoy, un técnico debe viajar a la subestación para descargarla. Con SLRP el archivo llega desde el relé instalado, en formato COMTRADE.',
      without: {
        label: 'Sin SLRP',
        time: 'Horas o días',
        text: 'Traslado del personal y descarga en sitio. Mientras tanto, se opera sin conocer la falla.',
      },
      with: {
        label: 'Con SLRP',
        time: '~2 min',
        text: 'Lectura remota de la oscilografía, lista para el análisis.',
      },
      cta: 'Consultar la viabilidad en mi red',
    },
    close: {
      title: 'Por qué elegirnos',
      points: [
        {
          title: 'Aprovechamos lo instalado',
          text: 'Recuperamos e integramos equipos Siemens SICAM, GE, SEL y ABB con la mínima inversión. Renovar el SCADA no sirve si el campo no reporta.',
        },
        {
          title: 'Estándares abiertos',
          text: 'COMTRADE e IEC 61850. Sus datos quedan en formatos que cualquier ingeniero puede abrir.',
        },
        {
          title: 'Respaldo de ingenieros con trayectoria',
          text: 'Experiencia dentro del sector eléctrico venezolano y proyectos en Chile, Colombia y otros países.',
        },
      ],
      ctaTitle: 'Cuéntenos su subestación',
      ctaText: 'Indique el equipo, la tensión y el problema. Le respondemos con una primera evaluación técnica.',
      ctaButton: 'Solicitar evaluación técnica',
    },
  },

  services: {
    title: 'Servicios',
    lead: 'Cuatro líneas de trabajo para proyectos de protecciones, automatización y control, de la ingeniería a la puesta en servicio.',
    items: [
      {
        id: 'protecciones',
        title: 'Protecciones y comisionamiento',
        text: 'Ingeniería e integración de sistemas de protección eléctrica, con pruebas de aceptación en fábrica y en sitio.',
        bullets: [
          'Pruebas FAT en fábrica y SAT en sitio',
          'Comisionamiento de protecciones en subestaciones',
          'Integración de relés Siemens SICAM, GE, SEL y ABB',
        ],
      },
      {
        id: 'scada',
        title: 'Automatización y SCADA',
        text: 'Conexión de los equipos de campo con el centro de control, con IEC 61850 como base de integración.',
        bullets: [
          'Integración SCADA de equipos nuevos y existentes',
          'Automatización y control de subestaciones',
          'Recuperación del parque instalado antes de reemplazarlo',
        ],
      },
      {
        id: 'estudios',
        title: 'Estudios de potencia',
        text: 'Estudios del sistema eléctrico que respaldan los ajustes de protección y las decisiones de ingeniería.',
        bullets: [
          'Análisis del sistema de potencia',
          'Soporte técnico para licitaciones y proyectos',
        ],
      },
      {
        id: 'industria',
        title: 'Industria y petróleo',
        text: 'Protecciones, automatización y control para refinerías, plantas industriales y operaciones mineras.',
        bullets: [
          'Proyectos para el sector petrolero e industrial',
          'Trabajo con contratistas EPC de energía',
        ],
      },
    ],
    ctaTitle: '¿Tiene un proyecto en mente?',
    ctaText: 'Díganos el área y el alcance. Le respondemos con una primera evaluación.',
    ctaButton: 'Solicitar evaluación técnica',
  },

  slrp: {
    title: 'SLRP: lectura remota de oscilografías',
    lead:
      'Una solución propia de Serviproma que obtiene las oscilografías de los relés ya instalados mediante COMTRADE, el estándar abierto, en alrededor de dos minutos.',
    problemTitle: 'El problema',
    problem: [
      'Después de un disparo o una falla, el equipo de protecciones tarda horas o días en llegar a la subestación para extraer las oscilografías. Durante ese tiempo se opera a ciegas.',
      'Y modernizar el SCADA del despacho no resuelve nada si los equipos en campo no reportan.',
    ],
    solutionTitle: 'Cómo lo resuelve SLRP',
    solution: [
      'SLRP lee la oscilografía directamente del relé instalado y la entrega en formato COMTRADE, un estándar abierto que abre cualquier herramienta de análisis.',
      'No exige reemplazar los equipos de la subestación: se trabaja con el parque instalado.',
    ],
    points: [
      { label: 'Tiempo de obtención', value: '~2 min' },
      { label: 'Formato', value: 'COMTRADE' },
      { label: 'Equipos', value: 'Siemens SICAM, GE, SEL, ABB' },
    ],
    formTitle: 'Consultar la viabilidad de SLRP',
    formText: 'Indique qué relés tiene instalados y cuántas subestaciones quiere conectar. Evaluamos si es viable en su red.',
  },

  about: {
    title: 'Nosotros',
    lead:
      'Somos una empresa venezolana de ingeniería especializada en protecciones eléctricas, automatización, control y SCADA para el sector eléctrico, petrolero e industrial.',
    philosophyTitle: 'Filosofía de trabajo',
    philosophy: [
      'Partimos de lo que ya existe en la subestación. Antes de proponer un reemplazo, evaluamos si el equipo instalado puede recuperarse e integrarse.',
      'Cada proyecto lo respalda el criterio de ingenieros con más de 35 años de experiencia acumulada, 12 de ellos en Despacho de Carga y Transmisión de CORPOELEC.',
    ],
    methodTitle: 'Cómo trabajamos',
    steps: [
      { title: 'Diagnóstico', text: 'Revisamos el parque instalado y el problema real de operación.' },
      { title: 'Ingeniería', text: 'Definimos el alcance técnico y la solución con menor inversión.' },
      { title: 'Implementación', text: 'Integración, comisionamiento y pruebas FAT y SAT.' },
      { title: 'Entrega y soporte', text: 'Puesta en servicio, documentación y acompañamiento.' },
    ],
    presenceTitle: 'Presencia',
    presence:
      'Hemos trabajado en 6 países, con proyectos en Venezuela, Chile y Colombia, y atendemos licitaciones internacionales.',
  },

  experience: {
    title: 'Experiencia',
    lead: 'Proyectos y subestaciones donde el personal de Serviproma ha liderado la ingeniería.',
    sectorsTitle: 'Sectores',
    sectors: [
      { title: 'Sector eléctrico', text: 'Transmisión y despacho de carga, hasta 765 kV.' },
      { title: 'Petróleo', text: 'Refinerías y operaciones petroleras.' },
      { title: 'Industria y minería', text: 'Plantas industriales y operaciones mineras.' },
    ],
    clientsTitle: 'Clientes y entornos',
    clients: 'CORPOELEC, PDVSA, PEQUIVEN, mineras y contratistas EPC de energía.',
    equipmentTitle: 'Equipos con los que trabajamos',
    equipment: ['Siemens SICAM', 'GE', 'SEL', 'ABB'],
    countriesTitle: 'Países',
    countries: ['Venezuela', 'Chile', 'Colombia'],
    countriesNote: 'Y otros países donde hemos trabajado.',
    projectsTitle: 'Proyectos',
    projectsPending: 'Listado de proyectos pendiente de entrega por el cliente (ver src/content/projects.ts).',
    projectLabels: { client: 'Cliente', country: 'País', voltage: 'Tensión', scope: 'Alcance' },
  },

  contact: {
    title: 'Solicitar una evaluación técnica',
    lead: 'Cuéntenos qué necesita. Respondemos por correo o por WhatsApp.',
    directTitle: 'Contacto directo',
    areaLabel: 'Área de ingeniería',
    areas: [
      'Protecciones y comisionamiento',
      'Automatización y SCADA',
      'Estudios de potencia',
      'Industria y petróleo',
      'SLRP (lectura remota de oscilografías)',
      'Otro',
    ],
  },

  form: {
    name: 'Nombre y apellido',
    company: 'Empresa',
    role: 'Cargo',
    email: 'Correo electrónico',
    phone: 'Teléfono (opcional)',
    message: 'Mensaje',
    messagePlaceholder: 'Equipo instalado, nivel de tensión y qué necesita resolver.',
    relays: 'Relés instalados (marca y modelo)',
    relaysPlaceholder: 'Ej.: SEL-421, Siemens 7SJ',
    substations: 'Número de subestaciones a conectar',
    send: 'Enviar solicitud',
    sendSlrp: 'Consultar viabilidad',
    sending: 'Enviando…',
    sent: 'Recibimos su solicitud. Le respondemos al correo indicado.',
    error: 'No se pudo enviar. Escriba a admin@servipromaenergy.com o por WhatsApp.',
    mailtoFallback: 'Se abrió su cliente de correo para completar el envío.',
    required: 'Obligatorio',
  },
};
