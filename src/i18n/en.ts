import type { Content } from './types';

// Draft translation derived from the briefing. Have a native engineer review it
// against Brochure V5 before launch.
export const en: Content = {
  meta: {
    home: {
      title: 'Protection, automation and SCADA up to 765 kV',
      description:
        'Serviproma Energy C.A. integrates protection, automation, control and SCADA systems for the power, oil and industrial sectors. Engineers with 35+ years of combined experience.',
    },
    services: {
      title: 'Power engineering and SCADA services',
      description:
        'Protection and commissioning, FAT/SAT testing, automation and SCADA with IEC 61850, power system studies and solutions for industry and oil.',
    },
    slrp: {
      title: 'SLRP: remote oscillography retrieval in about 2 minutes',
      description:
        'SLRP retrieves oscillography from installed relays through the open COMTRADE standard, without waiting for a crew to travel to the substation.',
    },
    about: {
      title: 'About us',
      description:
        'Engineers with 35+ years of combined experience, 12 of them in CORPOELEC’s Load Dispatch and Transmission. See how we work.',
    },
    experience: {
      title: 'Experience in substations and plants',
      description:
        'Protection, automation and SCADA projects in Venezuela, Chile, Colombia and other countries for the power, oil and industrial sectors.',
    },
    contact: {
      title: 'Request a technical assessment',
      description:
        'Tell us what you need: commissioning, FAT/SAT testing, SCADA integration or SLRP feasibility. We reply by email or WhatsApp.',
    },
  },

  common: {
    skip: 'Skip to content',
    menu: 'Menu',
    menuClose: 'Close menu',
    nav: {
      home: 'Home',
      services: 'Services',
      slrp: 'SLRP',
      about: 'About us',
      experience: 'Experience',
      contact: 'Contact',
    },
    ctaHeader: 'Request assessment',
    langLabel: 'Language',
    langSwitchTo: 'Español',
    langSwitchAria: 'Ver este sitio en español',
    whatsapp: 'Message on WhatsApp',
    call: 'Call',
    footer: {
      tagline:
        'Protection, automation, control and SCADA engineering for the power, oil and industrial sectors.',
      explore: 'Navigation',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      rif: 'Tax ID (RIF)',
    },
  },

  home: {
    hero: {
      title: 'Protection, automation and SCADA for high and extra-high voltage networks',
      lead:
        'Engineers with more than 35 years of combined experience, 12 of them inside CORPOELEC’s Load Dispatch and Transmission, now working on your substation.',
      primary: 'Request a technical assessment',
      secondary: 'See the SLRP solution',
      chartLabel: 'Phase currents during a single-phase fault',
      chartNote: 'Illustration. The real record is retrieved in COMTRADE format.',
      chartFault: 'Fault inception',
      chartTrip: 'Breaker opens',
    },
    experience: {
      title: 'The engineers signing off your project have run this grid',
      text:
        'Serviproma is not a newly founded company. Behind every project is a team that worked in Load Dispatch and Transmission, and knows what happens in the control room when a line trips.',
      facts: [
        { label: 'Combined team experience', value: '35+ years' },
        { label: 'In CORPOELEC Load Dispatch and Transmission', value: '12 years' },
        { label: 'Voltage level of our projects', value: 'up to 765 kV' },
        { label: 'Presence', value: '6 countries' },
      ],
      link: 'Meet the team',
    },
    services: {
      title: 'What we do in the field and in the control room',
      text:
        'We work with your installed equipment: Siemens SICAM, GE, SEL and ABB. Most of the time, what you already have can be recovered and connected.',
      items: [
        {
          title: 'Protection and commissioning',
          text: 'Commissioning of protection systems, with FAT and SAT testing.',
          tags: ['FAT', 'SAT', 'Substations'],
        },
        {
          title: 'Automation and SCADA',
          text: 'Field equipment integrated into SCADA using IEC 61850.',
          tags: ['IEC 61850', 'SCADA'],
        },
        {
          title: 'Power system studies',
          text: 'Power system analysis that supports engineering decisions.',
          tags: ['Short circuit', 'Coordination'],
        },
        {
          title: 'Industry and oil',
          text: 'Protection and control for refineries, plants and industrial operations.',
          tags: ['Refineries', 'Industry'],
        },
      ],
      link: 'See all services',
    },
    slrp: {
      title: 'After a trip, how long until the oscillography arrives?',
      text:
        'Today, a technician has to travel to the substation to download it. With SLRP the file comes from the installed relay, in COMTRADE format.',
      without: {
        label: 'Without SLRP',
        time: 'Hours or days',
        text: 'Crew travel and on-site download. Meanwhile, you operate without knowing the fault.',
      },
      with: {
        label: 'With SLRP',
        time: '~2 min',
        text: 'Remote retrieval of the oscillography, ready for analysis.',
      },
      cta: 'Check feasibility on my network',
    },
    close: {
      title: 'Why work with us',
      points: [
        {
          title: 'We build on what is installed',
          text: 'We recover and integrate Siemens SICAM, GE, SEL and ABB equipment with minimal investment. Upgrading SCADA is pointless if the field does not report.',
        },
        {
          title: 'Open standards',
          text: 'COMTRADE and IEC 61850. Your data stays in formats any engineer can open.',
        },
        {
          title: 'Backed by experienced engineers',
          text: 'Experience inside the Venezuelan power sector and projects in Chile, Colombia and other countries.',
        },
      ],
      ctaTitle: 'Tell us about your substation',
      ctaText: 'Share the equipment, the voltage and the problem. We reply with a first technical assessment.',
      ctaButton: 'Request a technical assessment',
    },
  },

  services: {
    title: 'Services',
    lead: 'Four lines of work for protection, automation and control projects, from engineering to commissioning.',
    items: [
      {
        id: 'protection',
        title: 'Protection and commissioning',
        text: 'Engineering and integration of electrical protection systems, with factory and on-site acceptance testing.',
        bullets: [
          'FAT at the factory and SAT on site',
          'Protection commissioning in substations',
          'Integration of Siemens SICAM, GE, SEL and ABB relays',
        ],
      },
      {
        id: 'scada',
        title: 'Automation and SCADA',
        text: 'Field equipment connected to the control center, with IEC 61850 as the integration base.',
        bullets: [
          'SCADA integration of new and existing equipment',
          'Substation automation and control',
          'Recovering installed equipment before replacing it',
        ],
      },
      {
        id: 'studies',
        title: 'Power system studies',
        text: 'Power system studies that back protection settings and engineering decisions.',
        bullets: [
          'Power system analysis',
          'Technical support for tenders and projects',
        ],
      },
      {
        id: 'industry',
        title: 'Industry and oil',
        text: 'Protection, automation and control for refineries, industrial plants and mining operations.',
        bullets: [
          'Projects for the oil and industrial sectors',
          'Work with energy EPC contractors',
        ],
      },
    ],
    ctaTitle: 'Have a project in mind?',
    ctaText: 'Tell us the area and the scope. We reply with a first assessment.',
    ctaButton: 'Request a technical assessment',
  },

  slrp: {
    title: 'SLRP: remote oscillography retrieval',
    lead:
      'A Serviproma solution that retrieves oscillography from installed relays through COMTRADE, the open standard, in about two minutes.',
    problemTitle: 'The problem',
    problem: [
      'After a trip or a fault, the protection team takes hours or days to reach the substation and extract the oscillography. In the meantime, you operate blind.',
      'And upgrading the dispatch SCADA solves nothing if the field equipment does not report.',
    ],
    solutionTitle: 'How SLRP solves it',
    solution: [
      'SLRP reads the oscillography directly from the installed relay and delivers it in COMTRADE format, an open standard that any analysis tool can open.',
      'It does not require replacing substation equipment: it works with what is installed.',
    ],
    points: [
      { label: 'Retrieval time', value: '~2 min' },
      { label: 'Format', value: 'COMTRADE' },
      { label: 'Equipment', value: 'Siemens SICAM, GE, SEL, ABB' },
    ],
    formTitle: 'Check SLRP feasibility',
    formText: 'Tell us which relays you have installed and how many substations you want to connect. We assess whether it is feasible on your network.',
  },

  about: {
    title: 'About us',
    lead:
      'We are a Venezuelan engineering company specialized in electrical protection, automation, control and SCADA for the power, oil and industrial sectors.',
    philosophyTitle: 'How we think',
    philosophy: [
      'We start from what already exists in the substation. Before proposing a replacement, we assess whether the installed equipment can be recovered and integrated.',
      'Every project is backed by the judgment of engineers with more than 35 years of combined experience, 12 of them in CORPOELEC Load Dispatch and Transmission.',
    ],
    methodTitle: 'How we work',
    steps: [
      { title: 'Diagnosis', text: 'We review the installed equipment and the real operating problem.' },
      { title: 'Engineering', text: 'We define the technical scope and the lowest-investment solution.' },
      { title: 'Implementation', text: 'Integration, commissioning, and FAT and SAT testing.' },
      { title: 'Handover and support', text: 'Commissioning, documentation and follow-up.' },
    ],
    presenceTitle: 'Presence',
    presence:
      'We have worked in 6 countries, with projects in Venezuela, Chile and Colombia, and we take part in international tenders.',
  },

  experience: {
    title: 'Experience',
    lead: 'Projects and substations where Serviproma’s engineers have led the work.',
    sectorsTitle: 'Sectors',
    sectors: [
      { title: 'Power', text: 'Transmission and load dispatch, up to 765 kV.' },
      { title: 'Oil', text: 'Refineries and oil operations.' },
      { title: 'Industry and mining', text: 'Industrial plants and mining operations.' },
    ],
    clientsTitle: 'Clients and environments',
    clients: 'CORPOELEC, PDVSA, PEQUIVEN, mining companies and energy EPC contractors.',
    equipmentTitle: 'Equipment we work with',
    equipment: ['Siemens SICAM', 'GE', 'SEL', 'ABB'],
    countriesTitle: 'Countries',
    countries: ['Venezuela', 'Chile', 'Colombia'],
    countriesNote: 'And other countries where we have worked.',
    projectsTitle: 'Projects',
    projectsPending: 'Project list pending from the client (see src/content/projects.ts).',
    projectLabels: { client: 'Client', country: 'Country', voltage: 'Voltage', scope: 'Scope' },
  },

  contact: {
    title: 'Request a technical assessment',
    lead: 'Tell us what you need. We reply by email or WhatsApp.',
    directTitle: 'Direct contact',
    areaLabel: 'Engineering area',
    areas: [
      'Protection and commissioning',
      'Automation and SCADA',
      'Power system studies',
      'Industry and oil',
      'SLRP (remote oscillography retrieval)',
      'Other',
    ],
  },

  form: {
    name: 'Full name',
    company: 'Company',
    role: 'Job title',
    email: 'Email',
    phone: 'Phone (optional)',
    message: 'Message',
    messagePlaceholder: 'Installed equipment, voltage level and what you need to solve.',
    relays: 'Installed relays (make and model)',
    relaysPlaceholder: 'E.g. SEL-421, Siemens 7SJ',
    substations: 'Number of substations to connect',
    send: 'Send request',
    sendSlrp: 'Check feasibility',
    sending: 'Sending…',
    sent: 'We received your request. We will reply to the email you provided.',
    error: 'Could not send. Write to admin@servipromaenergy.com or message us on WhatsApp.',
    mailtoFallback: 'Your email client opened so you can finish sending.',
    required: 'Required',
  },
};
