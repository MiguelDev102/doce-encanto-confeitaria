/* ==========================================================================
   SCRIPT.JS — INTERATIVIDADE BASE PARA SITES DE PEQUENOS NEGÓCIOS
   Complementa o index.html e o style.css existentes.
   JavaScript puro, sem frameworks ou bibliotecas externas.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     CONFIGURAÇÃO
     ========================================================================== */

  const SELECTORS = {
    header: '.navbar',
    navToggle: '.navbar-toggle',
    navLinks: '.navbar-links',
    navLinkItems: '.navbar-links a',
    faqItems: '.faq-item',
    contactForm: '.contact-form',
    revealTargets:
      '.feature, .service-card, .testimonial, .pricing-card, .card, ' +
      '.faq-item, .about-image, .hero-image',
  };

  const CLASSES = {
    menuOpen: 'is-open',
    headerScrolled: 'is-scrolled',
    fieldInvalid: 'is-invalid',
    reveal: 'is-visible',
  };

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ==========================================================================
     MENU MOBILE
     ========================================================================== */

  function initMobileMenu() {
    const toggleButton = document.querySelector(SELECTORS.navToggle);
    const navLinks = document.querySelector(SELECTORS.navLinks);

    if (!toggleButton || !navLinks) return;

    const closeMenu = () => {
      navLinks.classList.remove(CLASSES.menuOpen);
      toggleButton.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      navLinks.classList.add(CLASSES.menuOpen);
      toggleButton.setAttribute('aria-expanded', 'true');
    };

    const toggleMenu = () => {
      const isOpen = navLinks.classList.contains(CLASSES.menuOpen);
      isOpen ? closeMenu() : openMenu();
    };

    toggleButton.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer link de navegação
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  /* ==========================================================================
     FAQ
     ========================================================================== */

  function initFaqAccordion() {
    const faqItems = document.querySelectorAll(SELECTORS.faqItems);

    if (!faqItems.length) return;

    faqItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;

        // Mantém apenas um item aberto por vez
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      });
    });
  }

  /* ==========================================================================
     SCROLL SUAVE
     ========================================================================== */

  function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      });
    });
  }

  /* ==========================================================================
     HEADER
     ========================================================================== */

  function initHeaderOnScroll() {
    const header = document.querySelector(SELECTORS.header);
    if (!header) return;

    const updateHeaderState = () => {
      const hasScrolled = window.scrollY > 10;
      header.classList.toggle(CLASSES.headerScrolled, hasScrolled);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  /* ==========================================================================
     FORMULÁRIO
     ========================================================================== */

  function initContactForm() {
    const form = document.querySelector(SELECTORS.contactForm);
    if (!form) return;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const getFormGroup = (field) => field.closest('.form-group') || field.parentElement;

    const clearFieldError = (field) => {
      field.classList.remove(CLASSES.fieldInvalid);
      const group = getFormGroup(field);
      const existingError = group ? group.querySelector('.form-error') : null;
      if (existingError) existingError.remove();
    };

    const showFieldError = (field, message) => {
      field.classList.add(CLASSES.fieldInvalid);
      const group = getFormGroup(field);
      if (!group) return;

      let errorElement = group.querySelector('.form-error');
      if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'form-error';
        group.appendChild(errorElement);
      }
      errorElement.textContent = message;
    };

    const validateField = (field) => {
      clearFieldError(field);

      const value = field.value.trim();

      if (field.hasAttribute('required') && value === '') {
        showFieldError(field, 'Este campo é obrigatório.');
        return false;
      }

      if (field.type === 'email' && value !== '' && !emailPattern.test(value)) {
        showFieldError(field, 'Informe um e-mail válido.');
        return false;
      }

      return true;
    };

    const removeFormMessage = () => {
      const existingMessage = form.querySelector('.form-success-message');
      if (existingMessage) existingMessage.remove();
    };

    const showSuccessMessage = () => {
      removeFormMessage();
      const message = document.createElement('p');
      message.className = 'form-hint form-success-message';
      message.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      form.appendChild(message);
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      removeFormMessage();

      const fields = form.querySelectorAll('.form-input, .form-textarea, .form-select');
      let isFormValid = true;

      fields.forEach((field) => {
        const isFieldValid = validateField(field);
        if (!isFieldValid) isFormValid = false;
      });

      if (!isFormValid) return;

      // Demonstração apenas: nenhum dado é enviado a um servidor
      showSuccessMessage();
      form.reset();
    });

    // Valida cada campo assim que o usuário sai dele
    form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
    });
  }

  /* ==========================================================================
     ANIMAÇÕES
     ========================================================================== */

  function initRevealAnimations() {
    const targets = document.querySelectorAll(SELECTORS.revealTargets);
    if (!targets.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add(CLASSES.reveal));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(CLASSES.reveal);
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((target) => observer.observe(target));
  }

  /* ==========================================================================
     INICIALIZAÇÃO
     ========================================================================== */

  initMobileMenu();
  initFaqAccordion();
  initSmoothScroll();
  initHeaderOnScroll();
  initContactForm();
  initRevealAnimations();

});
