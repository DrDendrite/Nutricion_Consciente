# Nutrición Consciente - Configuración

## 📱 Configurar WhatsApp e Instagram

Para configurar el número de WhatsApp y el usuario de Instagram, edita el archivo `src/config.js`:

### 1. Número de WhatsApp

```javascript
whatsappNumber: '5213221234567',
```

**Formato:** Código de país + número (sin espacios, guiones ni símbolos)

**Ejemplos:**
- México: `52` + `3221234567` = `5213221234567`
- USA: `1` + `5551234567` = `15551234567`
- España: `34` + `612345678` = `34612345678`

### 2. Usuario de Instagram

```javascript
instagramUsername: 'nutricion_consciente',
```

**Formato:** Usuario sin el símbolo @

### 3. Ubicación del Consultorio

```javascript
location: {
  address: 'C. Artemio del Valle Arizape 2827, Guadalajara, Jalisco',
  lat: 20.6597,
  lng: -103.3494,
  mapsUrl: 'https://www.google.com/maps/place/C.+Artemio+del+Valle+Arizape+2827,+Guadalajara,+Jalisco'
}
```

**Cómo actualizar:**
- **address**: Tu dirección completa como quieres que aparezca en la página
- **lat** y **lng**: Coordenadas geográficas de tu ubicación
  - Obtén las coordenadas en Google Maps: clic derecho en tu ubicación → "¿Qué hay aquí?" → verás las coordenadas
- **mapsUrl**: URL directa a Google Maps de tu ubicación
  - En Google Maps, busca tu dirección → clic en "Compartir" → "Copiar enlace"

### 4. Mensajes personalizados

Puedes personalizar los mensajes que se envían automáticamente en WhatsApp:

```javascript
messages: {
  about: '¡Hola! Me interesa agendar una consulta nutricional.',
  online: '¡Hola! Me gustaría agendar una consulta online.',
  inperson: '¡Hola! Me interesa agendar una consulta presencial.',
  general: '¡Hola! Me gustaría obtener más información.',
  contact: '¡Hola! Me gustaría ponerme en contacto.'
}
```

## 🚀 Funcionalidades de los botones

### Botones de Agendar Cita:

1. **"Agenda tu Cita"** (Sección About) → Abre WhatsApp con mensaje personalizado
2. **"Agendar"** (Cita Online) → Abre WhatsApp preguntando por consulta online
3. **"Agendar"** (Cita Presencial) → Abre WhatsApp preguntando por consulta presencial

### Enlaces del Footer:

1. **Instagram** → Abre el perfil de Instagram en nueva pestaña
2. **WhatsApp** → Abre WhatsApp con mensaje general
3. **Contacto** → Abre WhatsApp con mensaje de contacto

### Funcionalidad de Ubicación:

1. **Mapa Interactivo** → Haz clic en el mapa para abrir Google Maps y obtener direcciones
2. **Mapa Integrado** → Muestra tu ubicación con mapa interactivo de Google Maps
3. **Dirección Dinámica** → Se actualiza automáticamente desde la configuración
4. **Efecto Hover** → Al pasar el mouse sobre el mapa, aparece mensaje "Haz clic para obtener direcciones"

### Imágenes del Footer:

- **Logo de Instagram** → Click abre el perfil de Instagram
- **Logo de WhatsApp** → Click abre WhatsApp

## 📝 Notas importantes

- Los mensajes de WhatsApp se abren en una nueva ventana/pestaña
- El número de WhatsApp debe incluir el código de país
- El usuario de Instagram no debe incluir el símbolo @
- Todos los enlaces se abren en una nueva pestaña para no interrumpir la navegación

## ✨ Efectos y Animaciones

El sitio incluye:
- ✅ Efectos parallax en imágenes
- ✅ Animaciones de entrada al hacer scroll
- ✅ Navegación suave entre secciones
- ✅ Botón "Volver arriba" flotante
- ✅ Efectos hover en botones y tarjetas
- ✅ Resaltado automático de sección activa

---

**Desarrollado con ❤️ por DendriteWeb_Designs**
