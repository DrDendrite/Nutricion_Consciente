// config.js
// Configuración del sitio web

const CONFIG = {
  // Número de WhatsApp (código país + número sin espacios ni guiones)
  // Ejemplo: México (52) + 3221234567 = 5213221234567
  whatsappNumber: '523312661899',
  
  // Usuario de Instagram (sin @)
  instagramUsername: 'pinedanutrifit',
  
  // Ubicación del consultorio
  location: {
    address: 'C. Artemio del Valle Arizape 2827, Guadalajara, Jalisco',
    // Coordenadas para Google Maps (latitud, longitud)
    lat: 20.6597,
    lng: -103.3494,
    // URL de Google Maps para el botón de direcciones
    mapsUrl: 'https://www.google.com/maps/place/C.+Artemio+del+Valle+Arizpe+2827,+Jardines+de+la+Paz,+44860+Guadalajara,+Jal.,+M%C3%A9xico/@20.648589,-103.3037716,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b3c87edc55c3:0x165ef206826d5c45!8m2!3d20.648584!4d-103.3011967!16s%2Fg%2F11hf72y82z?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D'
  },
  
  // Mensajes predefinidos para WhatsApp
  messages: {
    about: '¡Hola! Me interesa agendar una consulta nutricional. ¿Podrías darme más información?',
    online: '¡Hola! Me gustaría agendar una consulta online. ¿Cuál es la disponibilidad?',
    inperson: '¡Hola! Me interesa agendar una consulta presencial. ¿Tienen citas disponibles?',
    general: '¡Hola! Me gustaría obtener más información sobre los servicios de nutrición.',
    contact: '¡Hola! Me gustaría ponerme en contacto para obtener más información.'
  }
};
