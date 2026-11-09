# Briefing y Definición del Proyecto: Serviproma Energy C.A.

Documento consolidado de requerimientos técnicos, arquitectura y objetivos de diseño para el desarrollo del sitio web corporativo de Serviproma Energy C.A.

---

## 1. Objetivo del sitio

### 1. ¿Qué tipo de sitio es?
Sitio web corporativo y técnico B2B con arquitectura multi-página, estructurado alrededor de una landing page de alto impacto orientada a la conversión y autoridad técnica.

### 2. ¿Cuál es el objetivo principal?
Captar contactos comerciales calificados (leads B2B) y posicionar solvencia y autoridad técnica frente a tomadores de decisión para licitaciones y contratos de ingeniería en alta y extra alta tensión.

### 3. ¿Qué acción quieres que haga el visitante?
Llenar el formulario de evaluación técnica o comunicarse directamente por correo oficial (`admin@servipromaenergy.com`) o canal telefónico/WhatsApp (+58 412 725 1017).

### 4. ¿Cómo sabrás que el sitio funcionó?
Por el volumen y calidad de solicitudes comerciales recibidas: requerimientos de comisionamiento, pruebas FAT/SAT, integración SCADA y solicitudes de viabilidad técnica para la solución SLRP.

---

## 2. Negocio y público

### 5. ¿Cómo se llama el proyecto o negocio y qué hace en una o dos frases?
**Serviproma Energy C.A.** Empresa venezolana de ingeniería especializada dedicada a proyectos e integración de protecciones eléctricas, automatización, control y sistemas SCADA para el sector eléctrico, petrolero e industrial hasta 765 kV.

### 6. ¿Quién es tu público objetivo?
Gerentes de Transmisión, Jefes de Protecciones, Superintendentes de Mantenimiento e Ingenieros de Despacho de Carga (CORPOELEC, PDVSA, PEQUIVEN, mineras y contratistas EPC de energía). Nivel técnico avanzado, ubicados principalmente en Venezuela, Chile y América Latina.

### 7. ¿Qué problema le resuelves y en qué eres distinto a la competencia?
- **Problema:** Tras un disparo o falla en la subestación, los equipos de protecciones demoran horas o días en trasladarse para extraer oscilografías, operando a ciegas. Además, renovar el SCADA del despacho no sirve si el equipamiento en campo no reporta.
- **Diferencial:** No vendemos una empresa recién fundada, vendemos el respaldo de ingenieros que suman más de 35 años de experiencia y 12 años directos en Despacho de Carga y Transmisión de CORPOELEC. Recuperamos e integramos el parque instalado existente (Siemens SICAM, GE, SEL, ABB) con mínima inversión y ofrecemos la solución exclusiva **SLRP** (oscilografías en ~2 min vía estándar abierto COMTRADE).

### 8. ¿Tienes 2 o 3 sitios de la competencia o de referencia que te gusten o no te gusten?
- **Modelos de referencia:**
  - **Siemens España** (`siemens.com/es-es/`): Sobriedad técnica editorial, jerarquía limpia y lenguaje industrial de vanguardia.
  - **PAC-E Chile** (`pac-e.cl/`): Claridad técnica sin rodeos, foco en equipos de potencia, subestaciones y fotografías reales de campo.
- **Competencia analizada:** Moneleca, Phase Engineering, Scadatech y ED América.

---

## 3. Contenido y estructura

### 9. ¿Qué páginas o secciones necesita?
- **Inicio (`/`):** Landing page estructurada en 3 pilares (1. Experiencia del personal senior, 2. Servicios técnicos, 3. Cierre y diferenciadores).
- **Servicios (`/servicios`):** Protecciones y comisionamiento, automatización y SCADA (IEC 61850), estudios de potencia e industria/petróleo.
- **SLRP (`/slrp`):** Página dedicada a la solución tecnológica de lectura remota de oscilografías.
- **Nosotros (`/nosotros`):** Filosofía, metodología en 4 pasos y presencia en 6 países.
- **Experiencia (`/experiencia`):** Proyectos y subestaciones donde el personal ha liderado (Venezuela, Chile, Colombia, etc.).
- **Contacto (`/contacto`):** Formulario segmentado por especialidad técnica y datos fiscales/sede.

### 10. ¿Ya tienes los textos, o hay que redactarlos?
Los textos ya fueron redactados e integrados a partir del **Brochure Corporativo V5** y la **Presentación Corporativa V5** de Serviproma Energy.

### 11. ¿Tienes fotos, videos o ilustraciones, o hay que crearlos o buscarlos?
Se extrajeron más de 60 recursos oficiales del material del cliente: fotografías reales de subestaciones de alta tensión, tableros de control en sala de despacho, refinerías, diagramas unifilares y logotipos corporativos.

### 12. ¿El sitio será en un solo idioma o en varios?
**Multi-idioma:** Español e Inglés (para atender tanto el mercado nacional como licitaciones internacionales en Chile, Colombia, México y África).

---

## 4. Identidad visual

### 13. ¿Existe un logo, una paleta de colores y tipografías, o hay que definirlos?
- **Logotipo:** Isotipo oficial `iso_ambar.png` y logotipo de alta resolución de Serviproma Energy C.A.
- **Paleta de Colores:** Azul marino profundo industrial (`slate-950` / `#020617`), ámbar/oro de energía técnica (`amber-400/500`) y blanco neutro para lectura de alto contraste.
- **Tipografías:** **Public Sans** (voz editorial sobria) e **IBM Plex Mono** (para telemetría, tensión en kV, tiempos de respuesta y datos de ingeniería).

### 14. ¿Qué sensación debe transmitir?
Solvencia técnica rigurosa, precisión de ingeniería pesada, autoridad corporativa y cero estética genérica de IA.

### 15. ¿Prefieres modo claro, modo oscuro o ambos?
Modo oscuro industrial (`slate-950`), que maximiza el contraste del equipamiento de alta tensión y la estética técnica de los tableros y diagramas.

### 16. ¿Hay algo que quieras evitar visualmente?
Clichés de diseño de inteligencia artificial: textos con gradientes decorativos, fondos borrosos tipo "vidrio plástico" (*glassmorphism*), degradados que tapen las fotografías reales y tipografías genéricas saturadas.

---

## 5. Funcionalidades

### 17. ¿Necesita formularios, chat, WhatsApp, pagos, login de usuarios, panel de administración, buscador o animaciones especiales?
- Formulario de solicitud de evaluación técnica con selector de área de ingeniería.
- Formulario técnico específico para viabilidad del sistema SLRP.
- Botones de enlace directo a canal telefónico y WhatsApp comercial.
- Navegación estática instantánea y menú móvil responsivo.

### 18. ¿Se conectará con otros sistemas?
Pendiente de definir servicio de entrega de correos (Resend, SendGrid o Formspree) para canalizar las solicitudes de los formularios hacia `admin@servipromaenergy.com`.

### 19. ¿Quién actualizará el contenido después y con qué frecuencia?
Actualizaciones esporádicas de proyectos, nuevos clientes o certificaciones, gestionadas a nivel de código o contenido Markdown por el equipo de desarrollo.

---

## 6. Aspectos técnicos

### 20. ¿Prefieres alguna tecnología?
**Astro + Tailwind CSS v4**. Arquitectura de islas y generación estática (SSG) para lograr el máximo rendimiento web, cero JS innecesario en el cliente y SEO impecable.

### 21. ¿Dónde se publicará y qué dominio usará?
- **Hosting:** Netlify, Vercel o Cloudflare Pages.
- **Dominio:** `servipromaenergy.com` (asociado a la infraestructura corporativa de la empresa).

### 22. ¿La mayoría de tus visitantes entrará desde celular o desde computadora?
Principalmente desde computadora (gerentes e ingenieros revisando propuestas en oficina técnica), con diseño 100% responsivo para inspección y contacto ágil desde dispositivos móviles.

### 23. ¿Hay requisitos de velocidad, SEO o accesibilidad?
- Máxima calificación en Core Web Vitals (cercano a 100 en Google Lighthouse).
- Cumplimiento estricto de accesibilidad y contraste WCAG verificado con el motor de diseño **Impeccable**.
- Metadatos semánticos y Open Graph optimizados para motores de búsqueda y redes profesionales (LinkedIn).

---

## 7. Tiempo y alcance

### 24. ¿Para qué fecha lo necesitas?
Cronograma comercial acordado con la directiva de Serviproma Energy C.A.

### 25. ¿Es una primera versión (MVP) que luego crecerá, o un sitio completo desde el inicio?
Sitio completo de 6 páginas en producción (Inicio, Servicios, SLRP, Empresa, Experiencia, Contacto) con soporte proyectado para internacionalización (i18n).

### 26. ¿Quién aprueba el diseño y cuántas rondas de cambios esperas?
Aprobación a cargo del desarrollador líder en conjunto con los socios fundadores y la dirección técnica de Serviproma Energy C.A.
