/**
 * Portfolio Personal — Máximo Valentino Scévola
 * JavaScript Vanilla (ES6+) | Accesibilidad WCAG 2.2 Nivel AA
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initCaseStudyModal();
  initCopyEmail();
  initScrollSpy();
  initContactFormValidation();
});

/**
 * 1. Menú Hamburguesa Mobile (`.mobile-menu-toggle` y `#mobile-menu`)
 * - Alterna aria-expanded ("true" / "false"), aria-label y atributo hidden.
 * - Cierra automáticamente al hacer clic en cualquier .mobile-nav-link, en el botón CTA,
 *   al presionar Escape, al hacer clic fuera o al pasar a viewport >= 768px.
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu');

  if (!toggleBtn || !drawer) return;

  const menuIcon = toggleBtn.querySelector('.icon-menu');
  const navLinks = drawer.querySelectorAll('.mobile-nav-link');
  const ctaBtn = drawer.querySelector('.mobile-menu-cta a');
  const tabletMediaQuery = window.matchMedia('(min-width: 768px)');

  const setMenuState = (isOpen, restoreFocus = false) => {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute(
      'aria-label',
      isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );

    if (isOpen) {
      drawer.removeAttribute('hidden');
      if (menuIcon) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      }
    } else {
      drawer.setAttribute('hidden', '');
      if (menuIcon) {
        menuIcon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
      if (restoreFocus) {
        toggleBtn.focus();
      }
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => setMenuState(false));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) return;

    if (!drawer.contains(event.target) && !toggleBtn.contains(event.target)) {
      setMenuState(false);
    }
  });

  const handleViewportChange = (event) => {
    if (event.matches && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  };

  if (typeof tabletMediaQuery.addEventListener === 'function') {
    tabletMediaQuery.addEventListener('change', handleViewportChange);
  } else {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && toggleBtn.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
      }
    });
  }
}

/**
 * 2. Modal del Caso de Estudio (`#open-case-study`, `#case-study-modal`, `#close-case-study`)
 * - Abre con modal.showModal() desde #open-case-study o al hacer clic en la tarjeta SmartTicket.
 * - Bloquea el scroll del <body>, cierra con #close-case-study, Escape o clic en el backdrop,
 *   restaurando el scroll del <body> y devolviendo el foco a #open-case-study.
 */
function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const openBtn = document.getElementById('open-case-study');
  const closeBtn = document.getElementById('close-case-study');
  const featuredCard = document.querySelector('.project-card-featured');

  if (!modal || !openBtn || !closeBtn) return;

  const openModal = () => {
    if (modal.open) return;

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    document.body.classList.add('modal-open');
    closeBtn.focus();
  };

  const closeModal = () => {
    if (typeof modal.close === 'function' && modal.open) {
      modal.close();
    } else {
      modal.removeAttribute('open');
      document.body.classList.remove('modal-open');
      openBtn.focus();
    }
  };

  openBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    openModal();
  });

  if (featuredCard) {
    featuredCard.style.cursor = 'pointer';
    featuredCard.addEventListener('click', (event) => {
      // Evita interferir si el usuario está seleccionando texto dentro de la tarjeta
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) return;
      if (event.target.closest('a')) return;
      openModal();
    });
  }

  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera de .modal-container (sobre el ::backdrop)
  modal.addEventListener('click', (event) => {
    const container = modal.querySelector('.modal-container');
    if (container && !container.contains(event.target)) {
      closeModal();
    }
  });

  // Evento nativo 'close' disparado tanto por modal.close() como por la tecla Escape
  modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    openBtn.focus();
  });
}

/**
 * 3. Acción "Copiar email" en la sección `#contact`
 * - Intercepta el clic en `mailto:valenscevola@gmail.com`, copia la dirección al portapapeles
 *   y anuncia "¡Email copiado! ✓" durante 2.5 segundos con `aria-live="polite"`.
 */
function initCopyEmail() {
  const emailLink = document.querySelector('.contact-direct-links a[href="mailto:valenscevola@gmail.com"]');
  if (!emailLink) return;

  const labelSpan = emailLink.querySelector('span');
  if (!labelSpan) return;

  const originalText = labelSpan.textContent;
  let resetTimeout = null;

  emailLink.setAttribute('aria-live', 'polite');

  emailLink.addEventListener('click', async (event) => {
    if (!navigator.clipboard) return;
    event.preventDefault();

    try {
      await navigator.clipboard.writeText('valenscevola@gmail.com');
      labelSpan.textContent = '¡Email copiado! ✓';

      if (resetTimeout) clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        labelSpan.textContent = originalText;
      }, 2500);
    } catch {
      window.location.href = 'mailto:valenscevola@gmail.com';
    }
  });
}

/**
 * 4. Indicador de sección activa en la barra de navegación (`.nav-link`)
 * - Utiliza `IntersectionObserver` para marcar con `aria-current="page"` el enlace correspondiente
 *   mientras el usuario hace scroll por las secciones.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${activeId}`) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * 5. Validación Accesible del Formulario de Contacto (WCAG 2.2 AA)
 * - Valida campos requeridos y formato de email asociando errores con aria-describedby.
 */
function initContactFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.setAttribute('novalidate', '');

  const fieldsConfig = [
    {
      input: document.getElementById('contact-name'),
      errorId: 'contact-name-error',
      getErrorMessage: (value) => (!value ? 'Por favor, ingresá tu nombre.' : ''),
    },
    {
      input: document.getElementById('contact-email'),
      errorId: 'contact-email-error',
      getErrorMessage: (value) => {
        if (!value) return 'Por favor, ingresá tu correo electrónico.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? 'Ingresá un formato de correo válido (ej. nombre@empresa.com).'
          : '';
      },
    },
    {
      input: document.getElementById('contact-message'),
      errorId: 'contact-message-error',
      getErrorMessage: (value) =>
        !value ? 'Por favor, contame brevemente sobre el proyecto o propuesta.' : '',
    },
  ];

  fieldsConfig.forEach(({ input, errorId }) => {
    if (!input) return;
    let errorEl = document.getElementById(errorId);
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.id = errorId;
      errorEl.className = 'form-error';
      errorEl.setAttribute('role', 'alert');
      errorEl.hidden = true;
      input.parentElement.appendChild(errorEl);
    }
  });

  let statusBanner = form.querySelector('.form-status');
  if (!statusBanner) {
    statusBanner = document.createElement('div');
    statusBanner.className = 'form-status';
    statusBanner.setAttribute('role', 'status');
    statusBanner.setAttribute('aria-live', 'polite');
    statusBanner.hidden = true;
    form.appendChild(statusBanner);
  }

  const validateSingleField = ({ input, errorId, getErrorMessage }) => {
    if (!input) return true;
    const errorEl = document.getElementById(errorId);
    const errorMessage = getErrorMessage(input.value.trim());

    if (errorMessage) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', errorId);
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.hidden = false;
      }
      return false;
    }

    input.setAttribute('aria-invalid', 'false');
    input.removeAttribute('aria-describedby');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.hidden = true;
    }
    return true;
  };

  fieldsConfig.forEach((config) => {
    if (!config.input) return;

    config.input.addEventListener('blur', () => {
      if (config.input.value.trim().length > 0) {
        validateSingleField(config);
      }
    });

    config.input.addEventListener('input', () => {
      if (config.input.getAttribute('aria-invalid') === 'true') {
        validateSingleField(config);
      }
      if (!statusBanner.hidden) {
        statusBanner.hidden = true;
      }
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let firstInvalidInput = null;
    fieldsConfig.forEach((config) => {
      const isValid = validateSingleField(config);
      if (!isValid && !firstInvalidInput) {
        firstInvalidInput = config.input;
      }
    });

    if (firstInvalidInput) {
      firstInvalidInput.focus();
      return;
    }

    const formData = new FormData(form);
    try {
      if (window.location.protocol.startsWith('http')) {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });
      }
    } catch {
      // Fallback silencioso para visualización estática local
    }

    form.reset();
    fieldsConfig.forEach(({ input }) => {
      if (input) input.removeAttribute('aria-invalid');
    });

    statusBanner.textContent =
      '✓ ¡Mensaje enviado con éxito! Gracias por escribirme, te responderé a la brevedad.';
    statusBanner.hidden = false;
  });
}
