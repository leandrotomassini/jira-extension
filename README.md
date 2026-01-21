# Web Customizer Pro

Una extensión de navegador para personalizar y limpiar la interfaz de varios sitios web.

## Características

Actualmente, la extensión funciona en los siguientes sitios:

- **Jira (`*.atlassian.net`):**
    - Oculta banners promocionales.
    - Oculta los botones "Versión de prueba de Premium", "Ayuda" y "Cuéntanos tu opinión".

- **Platzi (`*.platzi.com`):**
    - Oculta banners promocionales y cajas de recomendación.

## ¿Cómo funciona?

La extensión inyecta un archivo JavaScript (`script.js`) en las páginas de los dominios especificados. Este script utiliza un `MutationObserver` para observar cambios en el contenido de la página y oculta automáticamente los elementos no deseados tan pronto como aparecen.

## Instalación

Para utilizar esta extensión, puedes cargarla como una extensión desempaquetada en tu navegador (como Google Chrome o Microsoft Edge).

1.  Clona este repositorio.
2.  Abre la página de gestión de extensiones de tu navegador (`chrome://extensions` o `edge://extensions`).
3.  Activa el "Modo de desarrollador".
4.  Haz clic en "Cargar descomprimida" y selecciona el directorio donde clonaste el repositorio.

---

Creado por ltomassini