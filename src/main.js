// main.js
// Animaciones y vida para Nutrición Consciente

document.addEventListener('DOMContentLoaded', () => {
  // Animación de aparición para los bloques principales
  const sections = document.querySelectorAll('.start, .about, .icons, .program, .appointment, .inperson, .footer');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s';
    setTimeout(() => {
      section.style.opacity = 1;
    }, 400);
  });

  // Efecto hover en botones
  const buttons = document.querySelectorAll('button');
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
  const navLinks = document.querySelectorAll('.nav-list a');
  
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
  
  window.addEventListener('scroll', () => {
    parallaxSections.forEach(element => {
      const rect = element.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        const translateY = (scrollPercent - 0.5) * 20;
        element.style.transform = `translateY(${translateY}px)`;
        element.style.transition = 'transform 0.1s ease-out';
      }
    });
  });

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
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Efecto de paralaje suave para el título principal
  window.addEventListener('scroll', () => {
    const startTitle = document.querySelector('.start-title');
    if (startTitle) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      startTitle.style.transform = `translateY(${rate}px)`;
      startTitle.style.opacity = Math.max(1 - scrolled / 500, 0);
    }
  });

  // Funcionalidad de WhatsApp para botones de agendar cita
  // Los valores de configuración se cargan desde config.js
  const whatsappNumber = CONFIG.whatsappNumber;
  const messages = CONFIG.messages;
  const instagramUsername = CONFIG.instagramUsername;

  // Función para abrir WhatsApp
  function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
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
});
