# Portfolio Personal — Máximo Valentino Scévola

> **Trabajo Práctico Final — Cátedra de Diseño UX/UI (2026)**  
> **Carrera:** Licenciatura en Sistemas de Información  
> **Facultad:** Facultad de Ciencia y Tecnología — Universidad Autónoma de Entre Ríos (UADER - FCyT)  
> **Autor:** Máximo Valentino Scévola (*Valen Scévola*)

---

## 1. Descripción del Proyecto y Perfil Híbrido

Este repositorio contiene el diseño y desarrollo de punta a punta de mi portfolio profesional como **Diseñador UX/UI & Desarrollador de Software**. El sitio fue concebido bajo una estética **"Horología & Editorial Técnica"**, inspirada en la precisión de los calibres mecánicos clásicos: superficies cálidas color papel técnico (`#F6F5F2`), tipografía geométrica de alto contraste y agujas en azul cobalto (`#1E40AF`).

Cumpliendo de forma estricta con el reglamento académico de la cátedra, el proyecto fue construido **100% desde cero con tecnologías web nativas puras (HTML5 Semántico, CSS3 Moderno y JavaScript Vanilla ES6+)**, sin utilizar React, Vue, Next.js ni librerías de estilos externas.

### Enlaces del Proyecto
- **Prototipo y Design System en Figma:** `[Reemplazar con enlace público de Figma]`
- **Sitio Desplegado en Producción (Netlify):** `[Reemplazar con URL de Netlify]`
- **Repositorio en GitHub:** [https://github.com/valenscevola](https://github.com/valenscevola)

---

## 2. Resumen del Proceso UX/UI (5 Etapas)

El desarrollo del producto siguió una metodología centrada en el usuario dividida en 5 fases documentadas en el archivo maestro de Figma:

1. **01 · Research & Empatía (Proto-persona & Benchmark):**
   - Definición de la proto-persona principal (*Tech Recruiter / Engineering Manager* que evalúa perfiles junior/trainee en menos de 90 segundos desde desktop o mobile).
   - Análisis comparativo (Benchmark) de portfolios de ingeniería de producto y diseño editorial para identificar patrones de escaneo visual rápido.
2. **02 · Arquitectura de Información (Sitemap & Card Sorting):**
   - Estructuración jerárquica en **9 secciones obligatorias** (`Header`, `Hero`, `Métricas`, `Habilidades`, `Proyectos`, `Trayectoria`, `Sobre mí`, `Contacto`, `Footer`) más un **Caso de Estudio interactivo en modal (`SmartTicket`)** y página `404.html`.
3. **03 · Design System & Tokens (UI Kit WCAG 2.2 AA/AAA):**
   - Creación de tokens semánticos de color con ratios de contraste auditados, escala tipográfica modular (`Space Grotesk` + `Plus Jakarta Sans`) y matriz de 5 componentes maestros con estados `Default`, `Hover`, `Focus-visible` y `Active`.
4. **04 · Wireframing Low-Fi & Prototipado High-Fi:**
   - Diseño de estructuras en baja fidelidad y prototipo de alta fidelidad sobre grillas de **12 columnas en Desktop (`1280px`)** y **4 columnas en Mobile (`375px`)** en múltiplos de `8px`.
5. **05 · Desarrollo Frontend Nativo, Auditoría & Despliegue Continuo:**
   - Traducción fiel del prototipo a código semántico, implementación de microinteracciones accesibles en JS Vanilla y configuración de despliegue continuo (CI/CD).

---

## 3. Decisiones Técnicas y Accesibilidad (WCAG 2.2 Nivel AA / AAA)

| Criterio WCAG 2.2 | Implementación Técnica en el Proyecto |
| :--- | :--- |
| **1.3.1 Info and Relationships** | Landmarks HTML5 nativos (`<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, `<footer>`) y jerarquía de encabezados estricta sin saltos (`<h1>` único en Hero, `<h2>` para secciones y `<h3>` para tarjetas e hitos). |
| **1.4.3 / 1.4.6 Contrast (AA & AAA)** | **Modo Claro (`#F6F5F2`):** Texto primario `#0F172A` (**16.8:1 — AAA**), secundario `#475569` (**6.85:1 — AA**), acento `#1E40AF` con `#FFFFFF` (**8.36:1 — AAA**), badge `#065F46` sobre `#ECFDF5` (**7.12:1 — AAA**).<br>**Modo Oscuro (`#0B1120`):** Texto primario `#F8FAFC` (**17.4:1 — AAA**), secundario `#CBD5E1` (**12.1:1 — AAA**), botones `#2563EB` (**5.17:1 — AA**), enlaces `#60A5FA` (**7.50:1 — AAA**). |
| **2.1.1 / 2.1.2 Keyboard & No Trap** | Navegación 100% operable con `Tab` / `Shift+Tab`. El modal utiliza `<dialog id="case-study-modal">` nativo con `.showModal()`, cerrándose con `Escape`, botón `✕` o clic en `::backdrop`, y devolviendo el foco al botón `#open-case-study`. |
| **2.4.1 Bypass Blocks** | Primer elemento del `<body>`: `<a href="#main-content" class="skip-link">Saltar al contenido principal</a>`, visible al recibir `:focus-visible`. |
| **2.4.7 / 2.4.11 Focus Appearance** | Anillo de foco de alto contraste (`outline: 2px solid var(--focus-ring)` + `box-shadow: 0 0 0 3px var(--focus-shadow)`) en todos los elementos interactivos. |
| **2.5.8 Target Size (Minimum)** | Todos los botones (`.btn` de `48px` de alto), controles de cabecera (`#theme-toggle`, `.mobile-menu-toggle`) y enlaces táctiles cumplen un área mínima de **`44x44px`**. |
| **2.3.3 Animation from Interactions** | Soporte completo para `@media (prefers-reduced-motion: reduce)`, desactivando desplazamientos suaves y animaciones para usuarios sensibles al movimiento. |
| **3.3.1 / 3.3.2 Error Identification & Labels** | Formulario con `<label>` visibles vinculados vía `for`/`id`, validación accesible en JS con `aria-invalid`, mensajes asociados mediante `aria-describedby` y anuncios de estado con `role="status"` y `aria-live="polite"`. |

---

## 4. Estructura de Archivos del Repositorio

```text
portafolio-UXUI/
├── index.html                              # Documento principal con las 9 secciones + modal <dialog>
├── 404.html                                # Página de error 404 personalizada y accesible
├── styles.css                              # Design Tokens (:root), modo oscuro, grillas y estados WCAG
├── main.js                                 # Lógica Vanilla ES6+ (tema, menú mobile, modal, scrollspy, form)
├── robots.txt                              # Directivas de indexación para motores de búsqueda
├── README.md                               # Documentación académica y técnica de la entrega
└── assets/
    ├── favicon.svg                         # Ícono vectorial MVS (#1E40AF y #FFFFFF)
    ├── og-preview.webp                     # Imagen Open Graph 1200x630px para redes sociales
    ├── profile-valen-scevola.webp          # Retrato optimizado en formato WebP con dimensiones explícitas
    ├── retrato.webp                        # Copia de respaldo del retrato original
    ├── CV-Maximo-Valentino-Scevola.pdf     # Currículum Vitae descargable en PDF
    └── generate-og.ps1                     # Script reproducible para regenerar la imagen Open Graph
```

---

## 5. Ejecución Local y Despliegue en Producción

### Ejecución en Entorno Local
Al tratarse de una arquitectura estática pura sin *bundlers* ni dependencias de `node_modules`, podés clonar el repositorio y levantar un servidor HTTP estático:

```bash
git clone https://github.com/valenscevola/portafolio-UXUI.git
cd portafolio-UXUI
python -m http.server 8000
```

Luego abrí `http://localhost:8000` en tu navegador.

### Despliegue en Netlify / GitHub Pages
1. **Netlify (Recomendado):**
   - Conectá el repositorio de GitHub en Netlify.
   - **Build command:** *(dejar vacío)*
   - **Publish directory:** `.` *(raíz del proyecto)*
   - El atributo `data-netlify="true"` en `<form name="contact">` activará automáticamente la recepción de mensajes en el panel de *Forms* de Netlify, y `404.html` se servirá de forma nativa ante rutas inexistentes.
2. **GitHub Pages:**
   - En *Settings → Pages*, seleccioná la rama `main` y la carpeta `/ (root)`.
