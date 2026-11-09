export type Lang = 'es' | 'en';
export type PageKey = 'home' | 'services' | 'slrp' | 'about' | 'experience' | 'contact';

// Una sola tabla de rutas: de aquí salen el menú, los hreflang y el selector de idioma.
export const paths: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', en: '/en' },
  services: { es: '/servicios', en: '/en/services' },
  slrp: { es: '/slrp', en: '/en/slrp' },
  about: { es: '/nosotros', en: '/en/about' },
  experience: { es: '/experiencia', en: '/en/experience' },
  contact: { es: '/contacto', en: '/en/contact' },
};

export const navOrder: PageKey[] = ['services', 'slrp', 'about', 'experience'];

export const htmlLang: Record<Lang, string> = { es: 'es-VE', en: 'en' };
export const ogLocale: Record<Lang, string> = { es: 'es_VE', en: 'en_US' };
