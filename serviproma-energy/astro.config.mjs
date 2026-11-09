// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Español en la raíz (/), inglés bajo /en/.
export default defineConfig({
  site: 'https://servipromaenergy.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-VE', en: 'en' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
