# Portfolio Personal — Máximo Valentino Scévola

Trabajo Práctico Final de la cátedra **Diseño UX/UI** (Licenciatura en Sistemas de Información — UADER FCyT, 2026).

Sitio web estático, semántico y accesible que presenta mi perfil híbrido como **Diseñador UX/UI & Desarrollador de Software**, incluyendo proyectos seleccionados y el caso de estudio completo de **SmartTicket**.

---

## Arquitectura y Stack Técnico (Sin Frameworks)

Cumpliendo estrictamente con las restricciones de la cátedra, el proyecto fue construido **100% desde cero con tecnologías web nativas**:

- **HTML5 Semántico (`index.html`)**: Landmarks accesibles (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), jerarquía estricta de encabezados (`<h1>` único, `<h2>` por sección y `<h3>` por tarjeta/hito) y modal nativo con `<dialog>`.
- **CSS3 Moderno Mobile-First (`styles.css`)**:
  - Sistema de Design Tokens mediante Custom Properties (`:root`) inspirado en la estética *"Horología & Editorial Técnica"*.
  - Grillas responsivas con CSS Grid y Flexbox en 3 breakpoints (`375px` Mobile, `768px` Tablet y `1280px` Desktop).
  - Soporte para modo oscuro (`prefers-color-scheme: dark` y `[data-theme="dark"]`) en tonos azul noche pizarra (`#0B1120` y `#1E293B`).
- **JavaScript Vanilla ES6+ (`main.js`)**:
  - Menú hamburguesa accesible con sincronización de `aria-expanded`, `aria-label`, atributo `hidden` y cierre con tecla `Escape` o cambio de viewport.
  - Modal de caso de estudio (`HTMLDialogElement.showModal()`) con bloqueo de scroll, cierre por clic en `::backdrop` y restauración de foco al botón disparador.
  - Acción rápida de copiado de correo al portapapeles (`navigator.clipboard`) con anuncio accesible `aria-live="polite"`.
  - Indicador de sección activa en la barra de navegación (`IntersectionObserver` + `aria-current="page"`).
  - Validación accesible del formulario de contacto con `aria-invalid`, `aria-describedby` y soporte para **Netlify Forms**.

---

## Accesibilidad Web (WCAG 2.2 Nivel AA / AAA)

| Criterio | Implementación en el Proyecto |
| :--- | :--- |
| **Contraste de Color** | Texto principal `#0F172A` sobre fondo `#F6F5F2` (**16.8:1 — AAA**); texto secundario `#475569` (**6.85:1 — AA**); acento primario `#1E40AF` con texto blanco (**8.36:1 — AAA**). |
| **Navegación por Teclado** | Enlace `.skip-link` ("Saltar al contenido principal") como primer elemento del `<body>` y anillos `:focus-visible` de alto contraste (`#2563EB`). |
| **Áreas Táctiles (Target Size)** | Botones principales de `48px` de altura y controles interactivos de al menos `44x44px`. |
| **Reducción de Movimiento** | Respeto por la preferencia del sistema mediante `@media (prefers-reduced-motion: reduce)`. |

---

## Estructura de Archivos

```text
portafolio-UXUI/
├── index.html                        # Estructura semántica de las 9 secciones + modal <dialog>
├── styles.css                        # Design Tokens, grillas responsivas y estados accesibles
├── main.js                           # Interacciones en JS Vanilla (menú, modal, clipboard, scrollspy)
├── README.md                         # Documentación técnica y de diseño del proyecto
└── assets/
    ├── favicon.svg                   # Icono vectorial MVS
    ├── profile-valen-scevola.webp    # Retrato optimizado en formato WebP
    └── retrato.webp                  # Copia de respaldo del retrato
```

---

## Ejecución Local

Al no requerir bundlers ni dependencias externas, podés abrir `index.html` directamente en el navegador o servirlo localmente con Python:

```bash
python -m http.server 8000
```

Luego abrí `http://localhost:8000` en tu navegador.

