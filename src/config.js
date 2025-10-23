// config.js
// Configuración del sitio web

const CONFIG = {
  // Número de WhatsApp (código país + número sin espacios ni guiones)
  // Ejemplo: México (52) + 3221234567 = 5213221234567
  whatsappNumber: '5213221234567',
  
  // Usuario de Instagram (sin @)
  instagramUsername: 'nutricion_consciente',
  
  // Ubicación del consultorio
  location: {
    address: 'C. Artemio del Valle Arizape 2827, Guadalajara, Jalisco',
    // Coordenadas para Google Maps (latitud, longitud)
    lat: 20.6597,
    lng: -103.3494,
    // URL de Google Maps para el botón de direcciones
    mapsUrl: 'https://www.google.com/maps/place/C.+Artemio+del+Valle+Arizape+2827,+Guadalajara,+Jalisco'
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
