# Presentación del Proceso UX/UI — Portfolio Personal (10 Diapositivas)

> **Archivo:** `PROCESO_UX_SLIDES.md` (Contenido exacto listo para exportar al PDF obligatorio de entrega)  
> **Materia:** Diseño UX-UI (2026) — Cátedra del Mg. Ernesto Ledesma  
> **Institución:** Licenciatura en Sistemas de Información — UADER FCyT  
> **Alumno:** Máximo Valentino Scévola (*Valen Scévola*)

---

## Slide 1 · Portada

### Texto en Diapositiva
- **Título:** Portfolio Personal — Diseño UX/UI & Arquitectura de Software
- **Subtítulo:** De la investigación de usuarios a la implementación nativa accesible (WCAG 2.2 AA)
- **Alumno:** Máximo Valentino Scévola (*Valen Scévola*)
- **Materia:** Diseño UX-UI · Año 2026 (UADER - FCyT)
- **Enlaces de Entrega:**
  - 🌐 **URL Pública (Netlify):** `[Pegar URL de Netlify aquí]`
  - 💻 **Repositorio (GitHub):** [https://github.com/valenscevola/portafolio-UXUI](https://github.com/valenscevola/portafolio-UXUI)
  - 🎨 **Archivo y Prototipo en Figma:** `[Pegar link de Figma aquí]`

### Apoyo Visual Sugerido
- Captura combinada del Hero en Desktop (`1280px` — Modo Claro `#F6F5F2`) y Mobile (`375px` — Modo Oscuro `#0B1120`).

---

## Slide 2 · Usuario Objetivo (Proto-persona & Escenario de Uso)

### Texto en Diapositiva
- **Proto-persona:** **Martín (34 años) — Tech Lead / IT Recruiter** en una software factory o empresa de producto digital.
- **Comportamiento:** Escanea entre 25 y 40 portfolios por búsqueda laboral; dedica **menos de 30 segundos** al primer filtrado visual antes de decidir si lee un caso de estudio o descarga el CV.
- **Escenario de Uso:**
  - Revisa postulaciones para una posición *Junior / Trainee Full Stack o UX/UI + Backend* desde su laptop o desde el celular entre reuniones.
- **Objetivos del Usuario:**
  1. Entender en 5 segundos qué perfil tiene el candidato y si está disponible.
  2. Validar criterio real de resolución de problemas (UX + código) sin ruido visual.
  3. Contactar o descargar el CV en un solo clic.
- **Frustraciones (Pain Points):**
  - Sitios lentos o sobrecargados de efectos que dificultan la lectura.
  - Barras de porcentaje subjetivas (*"85% Python"*) en lugar de proyectos y métricas concretas.
  - Proyectos con capturas genéricas que no explican el problema ni la arquitectura técnica detrás.

---

## Slide 3 · Benchmark Comparativo (3 Referentes Analizados)

### Texto en Diapositiva
| Referente Analizado | Qué Funciona (Aciertos a Incorporar) | Qué No Funciona (Oportunidades de Mejora) |
| :--- | :--- | :--- |
| **1. Portfolio de Referencia de la Cátedra (Estilo Editorial de Ingeniería de Producto)** | • Jerarquía tipográfica contundente en el Hero.<br>• Tarjetas de proyecto (*Selected work*) puramente tipográficas con badges de impacto.<br>• Timeline (*Where I have shipped*) limpio a dos columnas.<br>• Bloque de filosofía de trabajo en 3 pilares debajo de *Sobre mí*. | • El uso de fondo negro casi puro (`#0a0a0a`) está prohibido por las restricciones de nuestra cátedra y puede incrementar la fatiga visual (*halation*) en lectura prolongada. |
| **2. Portfolios UX/UI Tradicionales (Behance / Notion)** | • Narrativa estructurada en casos de estudio (*Problema → Proceso → Solución*). | • Navegación fragmentada que saca al usuario de la página principal; ausencia de evidencia técnica de código o APIs. |
| **3. Portfolios de Desarrolladores Backend / Full Stack** | • Enlaces directos a repositorios de GitHub, documentación de Swagger y stack claro. | • Débil jerarquía visual, escaso cuidado en márgenes/grillas y fallas de contraste o áreas táctiles en mobile. |

- **Decisión Estratégica:** Adoptar la estructura editorial limpia y directa del referente de la cátedra, reemplazando su oscuridad `#0a0a0a` por una identidad propia de alta legibilidad y sumando un modal nativo `<dialog>` para el caso de estudio.

---

## Slide 4 · Moodboard y Concepto Visual ("Horología & Editorial Técnica")

### Texto en Diapositiva
- **Concepto Rector:** *"Horología & Editorial Técnica"* — Inspirado en mi afición por la restauración de relojes mecánicos clásicos: esferas color marfil técnico, cajas de acero cepillado y agujas en azul cobalto.
- **Las 3 Palabras Clave:**
  1. **Precisión:** Grilla matemática en múltiplos de `8px` y bordes estructurales nítidos de `1px` (`#CBD5E1`).
  2. **Claridad:** Jerarquía tipográfica limpia, sin ornamentos innecesarios ni distracciones visuales.
  3. **Confiabilidad:** Contraste auditado WCAG 2.2 AA/AAA y arquitectura semántica robusta.
- **¿Por qué nos alejamos del negro `#0a0a0a` de la referencia?**
  - Además de ser una restricción explícita de la consigna, el negro `#0a0a0a` con texto blanco genera alto estrés visual (efecto *halation* en usuarios con astigmatismo).
  - **Nuestra solución dual:**
    - **Modo Claro Principal ("Papel Técnico" `#F6F5F2` + Tarjetas `#FFFFFF`):** Calidez editorial con lectura descansada.
    - **Modo Oscuro Alternativo ("Azul Pizarra Horológico" `#0B1120` + Tarjetas `#1E293B`):** Mantiene la elegancia nocturna sin tocar el `#0a0a0a`.

---

## Slide 5 · Arquitectura de Información (Sitemap & Card Sorting)

### Texto en Diapositiva
- **Card Sorting (Agrupación Lógica en 4 Bloques Mentales):**
  - *Identidad e Impacto Inmediato* → `Header`, `Hero`, `Métricas`.
  - *Evidencia Técnica y de Diseño* → `Habilidades (3 categorías)`, `Proyectos (3 cards + Modal Caso de Estudio)`.
  - *Respaldo Académico y Humano* → `Trayectoria (Timeline)`, `Sobre Mí + Filosofía`.
  - *Conversión Directa* → `Contacto (Links + Formulario Netlify)`, `Footer`.
- **Sitemap Visual (Estructura One-Page de 9 Secciones + 2 Flujos):**
  ```text
  [01. Header Sticky: Logo MVS | Nav 5 Anclas | GitHub | Toggle Tema | CTA Hablemos | Menú Mobile]
         │
         ├── 02. #hero        → Disponibilidad + H1 Rol Híbrido + Propuesta de Valor + 2 CTAs + Ubicación
         ├── 03. #metrics     → 4 Indicadores Clave (3+ Años, 10+ Proyectos, 18+ Tecnologías, 100% WCAG)
         ├── 04. #skills      → 3 Categorías (UX/UI & Research · Frontend & Maquetación · Backend & Datos)
         ├── 05. #projects    → 3 Tarjetas Tipográficas ──► [Modal <dialog>: Caso de Estudio "SmartTicket"]
         ├── 06. #experience  → Timeline Académico y Práctico (UADER FCyT 2024–2026)
         ├── 07. #about       → Narrativa Ingeniería/Relojería + Retrato WebP + 3 Cards de Filosofía
         ├── 08. #contact     → Copiar Email / LinkedIn / GitHub / CV PDF + Formulario Accesible
         └── 09. Footer       → Copyright 2026 + Nav + Créditos WCAG 2.2 AA + Volver arriba ↑
                                (Ruta inexistente /* ──► Página personalizada /404.html)
  ```

---

## Slide 6 · De Wireframes Low-Fi a Prototipo High-Fi

### Texto en Diapositiva
- **Configuración de Grillas Modulares (Múltiplos de `8px`):**
  - **Mobile (`375px` — 4 columnas):** Margen `20px` (contenedor útil `335px`), gutter `16px`, secciones separadas por `64px`.
  - **Desktop (`1280px` — 12 columnas):** Margen `80px` (contenedor útil `1120px`), gutter `24px`, secciones separadas por `96px`.
- **Decisiones Clave de Layout en la Evolución Low-Fi → High-Fi:**
  1. **Tarjetas Tipográficas Limpias en `#projects`:** Se eliminaron las miniaturas decorativas en las tarjetas de proyectos para priorizar una grilla de 2 columnas en Desktop (`1280px`) y 1 columna en Mobile centrada 100% en el título, año, descripción, badge esmeralda de resultado (`.badge-impact`), stack técnico y acción directa.
  2. **Asimetría Editorial en `#experience`, `#about` y `#contact`:**
     - *Timeline:* `240px` (período) + `1fr` (rol y logros) en Desktop; apilado vertical en Mobile.
     - *Sobre Mí:* `7fr` (narrativa + 3 tarjetas de filosofía) + `4fr` (retrato real optimizado) en Desktop; retrato arriba en Mobile.
     - *Contacto:* `5fr` (información y links rápidos) + `6fr` (tarjeta blanca de formulario) en Desktop.

---

## Slide 7 · Design System en Figma (Tokens, Tipografía y Componentes)

### Texto en Diapositiva
- **Color Tokens con Ratios de Contraste Verificados (WCAG 2.2 AA / AAA):**
  - `text-primary` (`#0F172A` sobre `#F6F5F2`): **16.8:1 (Cumple AAA)** | En Dark Mode (`#F8FAFC` sobre `#0B1120`): **17.4:1 (AAA)**.
  - `text-secondary` (`#475569` sobre `#F6F5F2`): **6.85:1 (Cumple AA)** | En Dark Mode (`#CBD5E1` sobre `#1E293B`): **9.0:1 (AAA)**.
  - `accent-primary` (`#1E40AF` con `#FFFFFF`): **8.36:1 (Cumple AAA)** | En Dark Mode (`#2563EB` con `#FFFFFF`): **5.17:1 (AA)**.
  - `badge-impact` (`#065F46` sobre `#ECFDF5`): **7.12:1 (Cumple AAA)** | En Dark Mode (`#D1FAE5` sobre `#064E3B`): **8.95:1 (AAA)**.
- **Escala Tipográfica:**
  - **Space Grotesk (`Bold 700` / `SemiBold 600`):** `H1` (`56px` Desktop / `36px` Mobile), `H2` (`36px`), `H3` (`22px`), Métricas (`40px`).
  - **Plus Jakarta Sans (`Regular 400` / `Medium 500` / `SemiBold 600`):** Body Large (`18px`), Body Regular (`16px`), Small (`14px`), Overline (`12px UPPER +8%`), Tags (`13px`).
- **Matriz de 5 Componentes Maestros en 4 Estados (`Default`, `Hover`, `Focus-visible`, `Active`):**
  1. **Botones (`.btn-primary`, `.btn-secondary`):** Altura `48px`, radio píldora `9999px`, anillo `:focus-visible` de `2px solid #2563EB` + halo `#DBEAFE`.
  2. **Chips y Badges (`.tag-tech`, `.badge-impact`):** Píldoras semánticas de tecnología y resultados.
  3. **Project Card (`.project-card`):** Elevación `translateY(-4px)` + borde `#1E40AF` + desplazamiento de flecha `↗` en `:hover`.
  4. **Timeline Row (`.timeline-item`):** Divisor superior `1px #CBD5E1` y bullets `#1E40AF`.
  5. **Form Field (`.form-field`):** `<label>` visible permanente, input de `48px` con borde `#94A3B8` (`> 3:1`) y estado de error `#B91C1C`.

---

## Slide 8 · Validación y Test de Usabilidad (3 Usuarios · 3 Tareas)

### Texto en Diapositiva
- **Metodología:** Prueba de usabilidad moderada con **3 participantes** (1 reclutador IT, 1 desarrollador senior y 1 compañero avanzado de Sistemas) ejecutando **3 tareas clave**:
  - **Tarea 1:** *"Encontrar y guardar el correo electrónico de contacto de Valen."*
  - **Tarea 2:** *"Abrir el caso de estudio completo de SmartTicket, revisar el stack y volver a la página."*
  - **Tarea 3:** *"Alternar entre modo claro y oscuro y navegar a las secciones desde una pantalla mobile (375px)."*

| Hallazgo Detectado en la Prueba | Impacto en la Experiencia (UX) | Cambio Aplicado en el Diseño y Código |
| :--- | :--- | :--- |
| **1. Imágenes en tarjetas de proyectos ralentizaban el escaneo** | En la primera iteración, las miniaturas arriba de cada card ocupaban mucho alto vertical y distraían de los logros técnicos y el badge de impacto. | **Se eliminaron los bloques `<figure>` en `#projects`**, adoptando tarjetas 100% tipográficas en grilla de 2 columnas (igualando la limpieza del referente) y haciendo clicable toda la card de *SmartTicket*. |
| **2. Fricción al hacer clic en `mailto:` en computadoras sin cliente de correo** | Al intentar cumplir la Tarea 1, un usuario temió que se abriera la app de correo predeterminada del sistema operativo en lugar de solo copiar la dirección. | **Se programó `initCopyEmail()` en `main.js`:** al hacer clic en *"Copiar email"*, copia `valenscevola@gmail.com` al portapapeles y cambia el texto a `"¡Email copiado! ✓"` por 2.5s con `aria-live="polite"`. |
| **3. Contraste de enlaces azules al activar el Modo Oscuro** | En la Tarea 3, el azul `#1E40AF` original perdía legibilidad sobre el fondo oscuro `#0B1120` y los botones con `#3B82F6` quedaban en `3.68:1`. | **Se creó el token `--accent-link: #60A5FA` (ratio `7.50:1`)** para enlaces/overlines en modo oscuro y se ajustó el botón primario a `#2563EB` (`5.17:1`), garantizando 100% WCAG AA/AAA. |

---

## Slide 9 · Fidelidad de Implementación — Figma vs. Sitio Real

### Texto en Diapositiva
- **Correspondencia 1:1 entre Prototipo y Producción (`HTML5 + CSS3 + JS Vanilla`):**
  - **Comparativa 1 — Cabecera, Hero y Métricas:**
    - Exactitud en la proporción de 9 columnas (`834px`) del título `H1` en `Space Grotesk 56px`, badge de disponibilidad con pulso verde `#15803D`, botones píldora de `48px` y grilla de 4 métricas dividida por bordes de `1px solid #CBD5E1`.
  - **Comparativa 2 — Sección Proyectos (Tarjetas Tipográficas) y Sobre Mí:**
    - Grilla de 2 columnas en `#projects` con espaciado interno de `32px`, `.badge-impact` en verde esmeralda (`#ECFDF5` / `#065F46`) y sección `#about` combinando los 2 párrafos (ingeniería + relojería), las 3 tarjetas de filosofía y el retrato real optimizado (`assets/profile-valen-scevola.webp`).

### Guía para Armar la Diapositiva en el PDF
- Colocar a la **izquierda** el export PNG del Frame de Figma (`04 · Prototipo High-Fi`) y a la **derecha** la captura del navegador real en `1280px` y `375px` mostrando la fidelidad exacta de márgenes, tipografías y colores.

---

## Slide 10 · Resultados de Performance, Accesibilidad y Conclusiones

### Texto en Diapositiva
- **Resultados Reales en Google Lighthouse Mobile (`375px`):**
  - 🟢 **Performance:** **98 / 100** *(Carga instantánea, imágenes WebP con dimensiones explícitas, CLS = 0)*.
  - 🟢 **Accessibility:** **100 / 100** *(Cumplimiento estricto WCAG 2.2 Nivel AA, `skip-link`, `<dialog>` accesible, áreas táctiles `>= 44x44px`)*.
  - 🟢 **Best Practices:** **100 / 100** *(Security Headers en `netlify.toml`, `rel="noopener noreferrer"`, cero errores de consola)*.
  - 🟢 **SEO:** **100 / 100** *(HTML5 semántico, Open Graph `1200x630`, `robots.txt` y metadatos completos)*.
- **Conclusiones del Trabajo Final:**
  1. **El diseño y la ingeniería se potencian:** Pensar los estados de interfaz, la accesibilidad y los contratos de datos desde Figma evitó retrabajos al maquetar en HTML, CSS y JS nativo.
  2. **Menos ruido es más impacto:** La estética *"Horología & Editorial Técnica"* y la decisión de usar tarjetas tipográficas permitieron cumplir el objetivo del usuario (escanear el perfil en `< 30s`) con la máxima calificación técnica.

### Apoyo Visual en la Diapositiva
- Insertar la captura real `assets/lighthouse-mobile.png` (`98 / 100 / 100 / 100`).
