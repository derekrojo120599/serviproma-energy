# Serviproma Energy C.A. · sitio web corporativo

Astro + Tailwind CSS v4, generación estática, español (raíz) e inglés (`/en`).
Tipografías autoalojadas: Public Sans (texto) e IBM Plex Mono (datos de ingeniería).

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

## Estructura

- `src/i18n/es.ts` y `en.ts`: todos los textos. El inglés debe tener las mismas claves que el español (TypeScript lo exige).
- `src/i18n/routes.ts`: tabla de rutas ES/EN; de ahí salen menú, hreflang y selector de idioma.
- `src/views/*.astro`: una vista por página, compartida por ambos idiomas. `src/pages/` solo las monta.
- `src/components/Oscillogram.astro`: oscilograma ilustrativo de la portada (generado en el build, sin datos reales).
- `src/config/site.ts`: correo, teléfono, WhatsApp, RIF y dirección (los vacíos no se muestran).
- `src/content/projects.ts`: proyectos de la página Experiencia.

## Pendiente de decidir o recibir

1. **Envío de formularios.** Definir servicio (Resend, SendGrid o Formspree) y poner la URL en `PUBLIC_FORM_ENDPOINT` (ver `.env.example`). Mientras esté vacío, el formulario abre el correo del visitante con los datos ya escritos.
2. **Hosting.** Netlify, Vercel o Cloudflare Pages. El build usa `format: 'file'` (por ejemplo `/servicios` sale como `servicios.html`), que estos tres sirven sin `.html`.
3. **Logo.** `Logo.astro` y `public/favicon.svg` son una marca provisional; reemplazar con el isotipo oficial (`iso_ambar.png` o SVG).
4. **Fotografías.** No se incluyeron las 60+ imágenes del cliente. Optimizarlas con `<Image>` de Astro y escribir texto alternativo técnico.
5. **Textos.** Son un borrador hecho a partir del briefing. Cotejarlos con el Brochure V5: cifras (35 años, 12 años, 765 kV, 6 países, ~2 min), nombres de los 4 pasos de metodología y el listado real de países.
6. **Proyectos.** Completar `src/content/projects.ts` con proyectos autorizados para publicar. En producción la tabla no aparece hasta que haya datos.
7. **Datos fiscales y sede.** Completar `legal` en `site.ts`.
8. **Imagen para redes (Open Graph).** Falta `og:image` (1200×630).
9. **Traducción al inglés.** Pasarla por revisión de un nativo o del equipo técnico.
10. **Autorización de marcas.** Confirmar que se pueden nombrar CORPOELEC, PDVSA y PEQUIVEN como clientes.
