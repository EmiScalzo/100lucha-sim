# Tutorial: Cómo Subir Archivos a Foroactivo para el Sitio WWE Superstars

Este tutorial te guiará paso a paso para subir los archivos necesarios a Foroactivo para implementar el sitio web WWE Superstars.

## Archivos que Necesitas Subir

Para que el sitio funcione correctamente en Foroactivo, necesitas subir estos archivos:

### Archivos CSS
- `styles.css` (ubicado en la carpeta `public/css/`)
- `responsive.css` (ubicado en la carpeta `public/css/`)

### Archivos JavaScript
- `data.js` (ubicado en la carpeta `public/js/`)
- `main.js` (ubicado en la carpeta `public/js/`)
- `championships.js` (ubicado en la carpeta `public/js/`)
- `championship.js` (ubicado en la carpeta `public/js/`)
- `superstar.js` (ubicado en la carpeta `public/js/`)

### Imágenes
- Todas las imágenes en la carpeta `public/images/`
- Todas las imágenes de superestrellas en `public/images/superstars/`
- Todas las imágenes de campeonatos en `public/images/championships/`

## Pasos para Subir Archivos a Foroactivo

### 1. Accede al Panel de Administración de Foroactivo

1. Inicia sesión en tu cuenta de Foroactivo
2. Ve al Panel de Administración (normalmente accesible a través de un enlace en la parte inferior del foro o desde tu perfil)

### 2. Alojamiento de Archivos CSS

1. En el Panel de Administración, busca la sección "Visualización" o "Apariencia"
2. Navega a "Hojas de Estilo CSS" o una sección similar
3. Crea una nueva hoja de estilo o edita la existente
4. Copia todo el contenido del archivo `styles.css` y pégalo
5. Guarda los cambios
6. Repite los pasos para el archivo `responsive.css`

### 3. Alojamiento de Archivos JavaScript

1. En el Panel de Administración, busca la sección "Módulos" o "Personalización Avanzada"
2. Navega a "HTML y JavaScript" o "Códigos JavaScript"
3. Crea un nuevo código JavaScript para cada uno de los archivos JS mencionados anteriormente
4. Para cada archivo JS:
   - Dale un nombre descriptivo (ej., "WWE Data", "WWE Main", etc.)
   - Copia todo el contenido del archivo correspondiente
   - Configúralo para que se cargue en las páginas deseadas
   - Guarda los cambios

### 4. Subir Imágenes

1. En el Panel de Administración, busca la sección "Imágenes y Colores" o "Gestión de Imágenes"
2. Navega a "Alojamiento de Imágenes"
3. Sube cada imagen de forma individual:
   - Selecciona la opción "Subir una imagen desde tu ordenador"
   - Busca y selecciona la imagen en tu dispositivo
   - Sube la imagen y copia la URL generada
   - Guarda esta URL para usarla más adelante

### 5. Actualizar Referencias a Archivos

Después de subir todos los archivos, deberás actualizar las referencias en el código:

1. En los archivos JavaScript, actualiza todas las rutas a imágenes para que apunten a las URLs que obtuviste al subir las imágenes
2. Por ejemplo, cambia:
   ```javascript
   image: '/public/images/championships/wwe-championship.png'
   ```
   por:
   ```javascript
   image: 'https://i.servimg.com/u/f58/xx/xx/xx/xx/wwe-championship.png'
   ```
   (usando la URL real proporcionada por Foroactivo)

### 6. Implementar HTML en las Páginas de Foroactivo

1. En el Panel de Administración, navega a "Páginas" o "Gestión de Páginas"
2. Crea nuevas páginas para:
   - Página principal (basada en `index.html`)
   - Página de campeonatos (basada en `championships.html`)
   - Página de superestrella individual (basada en `superstar.html`)
   - Página de campeonato individual (basada en `championship.html`)
3. Para cada página:
   - Copia el contenido HTML relevante
   - Asegúrate de actualizar todas las rutas para que apunten a los archivos CSS, JavaScript e imágenes alojados en Foroactivo

## Solución de Problemas Comunes

### Imágenes no se Muestran

- Verifica que las URLs de las imágenes sean correctas
- Asegúrate de que la imagen se haya subido correctamente a Foroactivo
- Comprueba si hay restricciones de dominio cruzado (CORS) y solicita asistencia a Foroactivo si es necesario

### JavaScript no Funciona

- Asegúrate de que el orden de carga de los scripts sea correcto (por ejemplo, `data.js` debe cargarse antes que `main.js`)
- Verifica si hay errores en la consola del navegador
- Comprueba si Foroactivo está bloqueando alguna funcionalidad de JavaScript

### Problemas de Estilo CSS

- Asegúrate de que las hojas de estilo se estén cargando correctamente
- Verifica si los estilos de Foroactivo están anulando tus estilos personalizados
- Añade `!important` a las reglas CSS críticas si es necesario

## Recursos Adicionales

Para obtener más ayuda con Foroactivo, visita:
- [Centro de Ayuda de Foroactivo](https://help.foroactivo.com/)
- [Foro de Soporte de Foroactivo](https://www.foroactivo.com/foro/)

---

Recuerda que este tutorial es una guía general y que la interfaz específica de Foroactivo puede variar dependiendo de la versión y el plan que estés utilizando.
