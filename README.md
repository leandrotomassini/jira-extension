# Web Customizer Pro

Una extensión de navegador para personalizar y limpiar la interfaz de varios sitios web, con un fuerte enfoque en mejorar la experiencia de YouTube.

## Características

Actualmente, la extensión funciona en los siguientes sitios:

### YouTube (`*.youtube.com`)

- **Limpieza de Interfaz:**
    - Oculta masivamente elementos de la interfaz como: Shorts, menú lateral, código de país, y botones de "Crear" y "Búsqueda por voz".
    - Reduce la altura del encabezado para una vista más compacta.
    - Elimina visualmente información de los videos en la grilla (avatar, metadatos, etc.) para una apariencia minimalista.

- **Funcionalidad "Killer":**
    - Agrega un botón "X" a cada video en la grilla principal.
    - Al hacer clic, el video se oculta instantáneamente y se selecciona la opción "No me interesa" del menú para que YouTube no lo vuelva a recomendar.

- **Ordenamiento Automático:**
    - Ordena automáticamente los videos en la página de inicio, mostrando primero los más recientes (publicados hace segundos, minutos, horas) y dejando los más antiguos al final.
    - Los videos en vivo ("Live") se consideran los más recientes y aparecen al principio.

- **Redirección de Búsqueda:**
    - Redirige automáticamente las búsquedas para que se ordenen por fecha de subida (mostrando primero los más nuevos).

### Otros Sitios

- **Jira (`*.atlassian.net`):**
    - Oculta banners promocionales y botones de "Premium", "Ayuda" y "Opinión".

- **Platzi (`*.platzi.com`):**
    - Oculta banners promocionales y cajas de recomendación.

## ¿Cómo funciona?

La extensión inyecta un archivo CSS (`style`) para ocultar elementos de forma inmediata (evitando parpadeos) y un script JavaScript (`script.js`) que realiza las modificaciones más complejas. Utiliza un `MutationObserver` para reaccionar a los cambios en la página y aplicar las personalizaciones de forma dinámica.

## Instalación

Para utilizar esta extensión, puedes cargarla como una extensión desempaquetada en tu navegador (como Google Chrome o Microsoft Edge).

1.  Clona este repositorio.
2.  Abre la página de gestión de extensiones de tu navegador (`chrome://extensions` o `edge://extensions`).
3.  Activa el "Modo de desarrollador".
4.  Haz clic en "Cargar descomprimida" y selecciona el directorio donde clonaste el repositorio.

---

Creado por ltomassini