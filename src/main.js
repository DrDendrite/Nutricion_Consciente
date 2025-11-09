// main.js
// Animaciones y vida para Nutrición Consciente

document.addEventListener('DOMContentLoaded', () => {
  // ========== MENÚ HAMBURGUESA ==========
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-list a');
  
  // Variable para guardar la posición del scroll
  let scrollPosition = 0;
  
  // Toggle del menú hamburguesa
  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      navToggle.classList.toggle('active');
      navList.classList.toggle('active');
      navOverlay.classList.toggle('active');
      
      // Prevenir scroll del body y mantener posición
      if (navList.classList.contains('active')) {
        // Guardar posición actual
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Restaurar posición de scroll
        window.scrollTo(0, scrollPosition);
      }
    });
  }  // Cerrar menú al hacer clic en el overlay
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navList.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restaurar posición de scroll
  
    });
  }
  
  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // No restaurar scroll aquí porque el usuario quiere navegar a otra sección
      }
    });
  });

  // Animación de aparición para los bloques principales
  const sections = document.querySelectorAll('.start, .about, .icons, .program, .appointment, .inperson, .contact, .footer');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s';
    setTimeout(() => {
      section.style.opacity = 1;
    }, 400);
  });

  // Efecto hover en botones (excepto el hamburguesa)
  const buttons = document.querySelectorAll('button:not(.nav-hamburger)');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.boxShadow = '0 4px 16px rgba(245,154,131,0.2)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = '';
    });
  });

  // Navegación suave y resaltado de sección activa
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Calcular offset para compensar el header fijo
        const headerHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        // Scroll suave
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Remover clase activa de todos los links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Agregar clase activa al link clickeado
        this.classList.add('active');
      }
    });
  });

  // Resaltar link activo al hacer scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    // Back to top button
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
    
    // Active nav link
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Parallax para elementos
    parallaxSections.forEach(element => {
      const rect = element.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        const translateY = (scrollPercent - 0.5) * 20;
        element.style.transform = `translateY(${translateY}px)`;
        element.style.transition = 'transform 0.1s ease-out';
      }
    });
    
    // Paralaje para título principal
    const startTitle = document.querySelector('.start-title');
    if (startTitle) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      startTitle.style.transform = `translateY(${rate}px)`;
      startTitle.style.opacity = Math.max(1 - scrolled / 500, 0);
    }
  });

  // Animación de entrada para testimonios al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const testimonials = document.querySelectorAll('.social-post');
  testimonials.forEach(testimonial => {
    testimonial.style.opacity = '0';
    testimonial.style.transform = 'translateY(30px)';
    testimonial.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(testimonial);
  });

  // Parallax suave para elementos al hacer scroll
  const parallaxSections = document.querySelectorAll('.about-me_pic, .icons-grid_calendar, .icons-grid_pan, .icons-grid_messages, .icons-grid_healthy');

  // Efecto de escala suave en las tarjetas de testimonios al hacer hover
  testimonials.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(0) scale(1.03)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Animación de fade-in para los iconos de servicios
  const iconItems = document.querySelectorAll('.icons-grid > div');
  const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
      }
    });
  }, { threshold: 0.2 });

  iconItems.forEach(icon => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px) scale(0.95)';
    icon.style.transition = 'opacity 0.5s, transform 0.5s';
    iconObserver.observe(icon);
  });

  // Botón de volver arriba
  const backToTopButton = document.getElementById('backToTop');

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Funcionalidad de WhatsApp para botones de agendar cita
  // Los valores de configuración se cargan desde config.js
  const whatsappNumber = CONFIG.whatsappNumber;
  const messages = CONFIG.messages;
  const instagramUsername = CONFIG.instagramUsername;

  // Función para abrir WhatsApp y enviar mensaje automáticamente
  function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    // Usar api.whatsapp.com para envío automático en lugar de wa.me
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }

  // Botón "Agenda tu Cita" en la sección About
  const scheduleButton = document.querySelector('.button-schedule');
  if (scheduleButton) {
    scheduleButton.addEventListener('click', () => {
      openWhatsApp(messages.about);
    });
  }

  // Botón "Agendar" en la sección de cita online
  const appointmentButton = document.querySelector('.button-appointment');
  if (appointmentButton) {
    appointmentButton.addEventListener('click', () => {
      openWhatsApp(messages.online);
    });
  }

  // Botón "Agendar" en la sección de cita presencial
  const inpersonButton = document.querySelector('.button-schedule_inperson');
  if (inpersonButton) {
    inpersonButton.addEventListener('click', () => {
      openWhatsApp(messages.inperson);
    });
  }

  // Agregar cursor pointer a los botones
  [scheduleButton, appointmentButton, inpersonButton].forEach(button => {
    if (button) {
      button.style.cursor = 'pointer';
    }
  });

  // Funcionalidad para los enlaces del footer
  const footerWhatsAppLink = document.querySelector('.footer-whatsapp');
  const footerWhatsAppImg = document.querySelector('.footer-whatsapp_img');
  
  if (footerWhatsAppLink) {
    footerWhatsAppLink.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(messages.general);
    });
  }

  if (footerWhatsAppImg) {
    footerWhatsAppImg.style.cursor = 'pointer';
    footerWhatsAppImg.addEventListener('click', () => {
      openWhatsApp(messages.general);
    });
  }

  // Enlace de Instagram en el footer
  const footerInstagramLink = document.querySelector('.footer-instagram');
  const footerInstagramImg = document.querySelector('.footer-instagram_img');
  
  if (footerInstagramLink) {
    footerInstagramLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(`https://instagram.com/${instagramUsername}`, '_blank');
    });
  }

  if (footerInstagramImg) {
    footerInstagramImg.style.cursor = 'pointer';
    footerInstagramImg.addEventListener('click', () => {
      window.open(`https://instagram.com/${instagramUsername}`, '_blank');
    });
  }

  // Enlace de contacto en el footer
  const footerContactLink = document.querySelector('.footer-contact');
  if (footerContactLink) {
    footerContactLink.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(messages.contact);
    });
  }

  // Hacer que el mapa sea clickeable para abrir Google Maps
  const mapContainer = document.querySelector('.inperson-map-container');
  if (mapContainer) {
    mapContainer.style.cursor = 'pointer';
    mapContainer.addEventListener('click', () => {
      window.open(CONFIG.location.mapsUrl, '_blank');
    });
  }

  // Actualizar el mapa de Google Maps con las coordenadas de configuración
  const mapIframe = document.querySelector('.inperson-map');
  if (mapIframe && CONFIG.location.lat && CONFIG.location.lng) {
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8!2d${CONFIG.location.lng}!3d${CONFIG.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM5JzM1LjAiTiAxMDPCsDIwJzU4LjAiVw!5e0!3m2!1ses!2smx!4v1234567890`;
    mapIframe.src = embedUrl;
  }

  // Actualizar la dirección mostrada
  const addressElement = document.querySelector('.inperson-address');
  if (addressElement && CONFIG.location.address) {
    addressElement.textContent = CONFIG.location.address;
  }

  // ========== CONTACT FORM FUNCTIONALITY ==========
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('.button-contact-submit');
      
      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.classList.add('loading');
      formMessage.style.display = 'none';

      // Prepare data for Web3Forms
      const data = {
        access_key: CONFIG.email.web3formsKey,
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || 'No proporcionado',
        subject: formData.get('subject'),
        message: formData.get('message'),
        from_name: 'Formulario Web - Nutrición Consciente',
        replyto: formData.get('email')
      };

      try {
        // Send to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
          // Success message
          formMessage.textContent = '¡Mensaje enviado exitosamente! Te responderemos pronto.';
          formMessage.className = 'form-message success';
          formMessage.style.display = 'block';
          
          // Reset form
          contactForm.reset();
          
          // Hide message after 5 seconds
          setTimeout(() => {
            formMessage.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Error al enviar el formulario');
        }
      } catch (error) {
        // Error message
        formMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
        
        console.error('Form submission error:', error);
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
      }
    });
  }

  // Testimonials Slider Functionality
  const slider = document.getElementById('testimonialsSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  
  if (slider && prevBtn && nextBtn && dotsContainer) {
    const cards = slider.querySelectorAll('.social-post');
    
    // Create dots dynamically
    cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        const targetCard = cards[index];
        const scrollPosition = targetCard.offsetLeft - slider.offsetLeft;
        slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 30; // gap between cards
      slider.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 30;
      slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    });
    
    // Update active dot on scroll
    let scrollTimeout;
    slider.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = slider.scrollLeft + slider.offsetWidth / 2;
        let activeIndex = 0;
        
        cards.forEach((card, index) => {
          const cardStart = card.offsetLeft - slider.offsetLeft;
          const cardEnd = cardStart + card.offsetWidth;
          if (scrollPosition >= cardStart && scrollPosition <= cardEnd) {
            activeIndex = index;
          }
        });
        
        document.querySelectorAll('.dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === activeIndex);
        });
      }, 100);
    });
  }
});
