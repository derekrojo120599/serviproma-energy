# Benchmark Competitivo y Análisis de Referencias de Ingeniería Eléctrica / SCADA

Este documento recopila el análisis de arquitectura de información (contenido/estrategia) y estructura UX/UI de sitios web del sector eléctrico, automatización y control, para servir como referencia directa en el desarrollo del nuevo sitio.

---

## 1. Siemens España (`https://www.siemens.com/es-es/`)
**Enfoque:** Corporativo Enterprise Global / Ecosistema Tecnológico

### Arquitectura de Información
- **Estrategia de contenido:** Vende transformación industrial de alto nivel (Industrial AI, Digital Twin, software-defined automation), no servicios aislados.
- **Narrativa:** Foco en casos de estudio y aplicación real (University of Wollongong, Natura en el Amazonas).
- **Aspecto a evitar:** Mezcla inconsistente de idiomas en páginas regionales (inglés y español en la misma pantalla).

### Estructura UX/UI
- **Pros:** Design System corporativo maduro, tipografía técnica sobria, jerarquía visual limpia.
- **Contras:** Sobrecarga cognitiva y estructura laberíntica para clientes que buscan servicios o contacto rápido.

---

## 2. Moneleca (`https://www.moneleca.com/`)
**Enfoque:** Sitio Corporativo Tradicional / Mínimo

### Arquitectura de Información
- **Debilidades:** Mensajes abstractos y clichés ("Ingeniería que impulsa tu energía") que no comunican capacidades reales ni nivel de tensión ni especialidades.
- **Vacíos:** Falta de pruebas técnicas en la home (marcas, certificaciones, clientes o casos reales).

### Estructura UX/UI
- **Pros:** Acceso rápido a WhatsApp.
- **Contras:** Dependencia de sliders/carruseles gigantes sin contenido escaneable. Modelo obsoleto que resta credibilidad técnica.

---

## 3. Phase Engineering (`https://www.phaseing.com/`)
**Enfoque:** Servicios de Campo y Pruebas Eléctricas (Colombia / Venezuela)

### Arquitectura de Información
- **Claridad técnica:** Expresa directamente el alcance en el primer pliegue (pruebas a sistemas eléctricos a cualquier nivel de tensión, mantenimiento, diseño).
- **Pruebas de autoridad:** Certificaciones ISO (9001, 14001, 45001), marcas soportadas (ABB, Siemens, Schneider, Megger, Omicron) y folletos descargables.

### Estructura UX/UI
- **Pros:** Enfoque One-Page pragmático y orientado al contacto directo.
- **Contras:** Diseño con aspecto de plantilla genérica; llamadas a redes sociales (Instagram) que distraen de la conversión B2B.

---

## 4. Scadatech (`https://scadatech.cl/home/servicios/`)
**Enfoque:** Integrador SCADA y Normativa Eléctrica (Chile)

### Arquitectura de Información
- **Excelente vocabulario de industria:** Domina los términos regulatorios clave del mercado chileno (CEN, NTSyCS, SLRP, SITR, IEC 61850, ICCP, DNP 3.0). Quien lee sabe de inmediato que son especialistas de nicho.

### Estructura UX/UI
- **Pros:** Servicios categorizados por áreas técnicas.
- **Contras:** Interfaz anticuada (WordPress tradicional), galerías sin contexto explicativo y ausencia de llamadas a la acción (CTAs) contextuales al final de cada servicio.

---

## 5. PAC-E (`https://pac-e.cl/`) ⭐ *(Principal Referente)*
**Enfoque:** Ingeniería Especializada en Control, Protecciones y SCADA (Chile)

### Arquitectura de Información
- **Propuesta de valor precisa:** H1 contundente y sin ambigüedades sobre subestaciones de media, alta y extra alta tensión.
- **Diferenciadores y autoridad:**
  - Equipos de laboratorio de prueba de primer nivel mencionados expresamente (Omicron CMC 356, CPC 100, etc.).
  - Ventaja competitiva: *Planta propia para fabricación de tableros*.
  - Factor humano: Fichas técnicas del equipo senior con formación, especialidad y años de experiencia.
  - Métricas reales: 14 proyectos, clientes de alto nivel (Transelec, Enel, Colbún, etc.).

### Estructura UX/UI
- **Pros:** Narrativa estructurada en bloques secuenciales lógicos (Problema/Solución → Capacidades → Diferenciadores → Metodología → Equipo → Clientes → Formulario con selector de servicio). Formatos web modernos (`.webp`, SVG) y diseño limpio.

---

## 6. ED América (`https://edamerica.cl/servicios`)
**Enfoque:** Ingeniería de Subestaciones y Arriendo de Instrumental

### Arquitectura de Información
- **Amplitud estructurada:** Cubre todo el ciclo de vida del proyecto (01 a 08 líneas de servicio) más una línea de arriendo con catálogo de tarifas.
- **Proceso claro:** Explica la metodología en 4 pasos técnicos: Ingeniería → Suministro → Pruebas FAT → Comisionamiento SAT.

### Estructura UX/UI
- **Pros:** Estética técnica contemporánea (estilo editorial industrial), numeración de servicios clara para lectura rápida.
- **Contras:** Texto secundario en bloques densos que puede beneficiarse de mayor contraste tipográfico.

---

## Matriz Resumen de Aprendizajes

| Pilar | Buena Práctica (Inspiración en PAC-E / ED América) | Mala Práctica a Evitar (Ej. Moneleca) |
| :--- | :--- | :--- |
| **Encabezado (Hero)** | Propuesta de valor específica (nivel de tensión, normas, especialidad). | Frases genéricas tipo "Impulsamos tu energía". |
| **Credibilidad** | Marcas de equipos (Omicron, Megger, SEL), certificaciones y clientes reales. | Sliders de imágenes sin contexto técnico. |
| **Factor Humano** | Mostrar credenciales y experiencia del equipo de ingeniería. | Anonimato o fotos de stock impersonales. |
| **Proceso** | Metodología transparente (Ingeniería → Taller/FAT → Terreno/SAT). | Listas de viñetas genéricas sin flujo de trabajo. |
| **Conversión** | Formulario contextual con selector de servicio + canal directo de WhatsApp. | Dejar el contacto enterrado al pie de página. |
