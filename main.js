/**
 * Portfolio Personal — Máximo Valentino Scévola
 * JavaScript Vanilla (ES6+) | Accesibilidad WCAG 2.2 Nivel AA
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initCaseStudyModal();
  initScrollSpy();
  initCopyEmail();
  initContactFormValidation();
});

/**
 * 1. Menú Hamburguesa Mobile (Drawer Accesible)
 * Sincroniza aria-expanded, aria-label, atributo hidden y cierre con Escape o clic en enlaces.
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu');

  if (!toggleBtn || !drawer) return;

  const menuIcon = toggleBtn.querySelector('.icon-menu');
  const navLinks = drawer.querySelectorAll('a[href^="#"]');

  const setMenuState = (isOpen) => {
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
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) return;

    const clickedInsideDrawer = drawer.contains(event.target);
    const clickedToggle = toggleBtn.contains(event.target);

    if (!clickedInsideDrawer && !clickedToggle) {
      setMenuState(false);
    }
  });
}

/**
 * 2. Modal de Caso de Estudio (<dialog id="case-study-modal">)
 * Utiliza la API nativa HTMLDialogElement (.showModal() / .close()),
 * bloquea el scroll del body, cierra al hacer clic en el backdrop y restaura el foco.
 */
function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const openBtn = document.getElementById('open-case-study');
  const closeBtn = document.getElementById('close-case-study');

  if (!modal || !openBtn || !closeBtn) return;

  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    document.body.classList.add('modal-open');
    closeBtn.focus();
  };

  const closeModal = () => {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera del contenedor del modal (en el ::backdrop)
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const clickedInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!clickedInDialog || event.target === modal) {
      closeModal();
    }
  });

  // Asegurar limpieza de clase en body cuando se cierra con tecla Escape nativa
  modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  });
}

/**
 * 3. Indicador de Sección Activa en Navegación (ScrollSpy con IntersectionObserver)
 * Actualiza aria-current="page" en los enlaces de navegación según la sección visible.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.primary-nav .nav-link');

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
 * 4. Copiado Rápido de Email con Confirmación Accesible
 * Permite copiar el correo al portapapeles con feedback visual y anuncio para lectores de pantalla.
 */
function initCopyEmail() {
  const emailLink = document.querySelector('.contact-direct-links a[href^="mailto:"]');
  if (!emailLink || !navigator.clipboard) return;

  const emailAddress = emailLink.getAttribute('href').replace('mailto:', '').trim();
  const labelSpan = emailLink.querySelector('span');

  if (!labelSpan) return;

  const originalText = labelSpan.textContent;
  emailLink.setAttribute('aria-live', 'polite');

  emailLink.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(emailAddress);
      labelSpan.textContent = `¡Email copiado! (${emailAddress})`;
      setTimeout(() => {
        labelSpan.textContent = originalText;
      }, 2800);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  });
}

/**
 * 5. Validación Accesible del Formulario de Contacto (WCAG 2.2 AA)
 * Gestiona aria-invalid y validación semántica antes del envío a Netlify.
 */
function initContactFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('.form-input[required]');

  const validateField = (field) => {
    const isValid = field.checkValidity() && field.value.trim().length > 0;
    field.setAttribute('aria-invalid', String(!isValid));
    return isValid;
  };

  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.value.trim().length > 0) {
        validateField(input);
      }
    });

    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    let firstInvalidField = null;

    inputs.forEach((input) => {
      const valid = validateField(input);
      if (!valid && !firstInvalidField) {
        firstInvalidField = input;
      }
    });

    if (firstInvalidField) {
      event.preventDefault();
      firstInvalidField.focus();
    }
  });
}

