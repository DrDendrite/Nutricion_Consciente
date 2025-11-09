# Configuración del Formulario de Contacto

## Servicio de Correo: Web3Forms

El formulario de contacto utiliza **Web3Forms**, un servicio gratuito y confiable para enviar correos desde formularios web sin necesidad de backend.

### Pasos para configurar:

1. **Obtener API Key:**
   - Visita: https://web3forms.com
   - Haz clic en "Get Started - It's Free"
   - Ingresa tu correo: `pinedanutrifit@gmail.com`
   - Recibirás un correo con tu **Access Key**

2. **Configurar en el sitio:**
   - Abre el archivo `src/config.js`
   - Busca la sección `email`
   - Reemplaza `'TU_API_KEY_AQUI'` con tu Access Key real:
   ```javascript
   email: {
     destination: 'pinedanutrifit@gmail.com',
     from: 'melissa@pinedanutricion.com',
     web3formsKey: 'tu-access-key-aqui' // ← Pegar aquí tu Access Key
   }
   ```

3. **Verificar funcionamiento:**
   - Abre el sitio web
   - Ve a la sección "Contacto"
   - Llena el formulario de prueba
   - Envía un mensaje
   - Deberías recibir el correo en `pinedanutrifit@gmail.com`

### Características del formulario:

✅ **Correo personalizado**: Los correos aparecerán como enviados desde `melissa@pinedanutricion.com`
✅ **Sin límites**: Web3Forms permite envíos ilimitados en el plan gratuito
✅ **Respuesta automática**: Incluye el correo del remitente para responder fácilmente
✅ **Validación**: Todos los campos requeridos están validados
✅ **Diseño responsive**: Se adapta a móvil, tablet y desktop
✅ **Mensajes de confirmación**: El usuario recibe feedback visual al enviar

### Campos del formulario:

- **Nombre completo** * (obligatorio)
- **Correo electrónico** * (obligatorio)
- **Teléfono** (opcional)
- **Asunto** * (obligatorio) - Opciones:
  - Consulta Nutricional
  - Información de Precios
  - Seguimiento de mi tratamiento
  - Otro
- **Mensaje** * (obligatorio)

### Soporte:

Si tienes algún problema con Web3Forms:
- Documentación: https://docs.web3forms.com
- Soporte: support@web3forms.com

### Alternativas (si necesitas):

Si prefieres otro servicio, puedes usar:
- **Formspree** (https://formspree.io) - Gratis para 50 envíos/mes
- **EmailJS** (https://www.emailjs.com) - Gratis para 200 envíos/mes
- **Getform** (https://getform.io) - Gratis para 50 envíos/mes

---

**Nota**: El correo `melissa@pinedanutricion.com` es solo el nombre que aparecerá como remitente. Los correos llegarán a `pinedanutrifit@gmail.com`.
