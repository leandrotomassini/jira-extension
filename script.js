const observer = new MutationObserver( () => {
  const elements = document.querySelectorAll( 'button, span' );

  elements.forEach( element => {
    const text = element.textContent.trim();
    if ( text === "Versión de prueba de Premium" || text === "Ayuda" ) {
      element.style.display = 'none';
    }
  } );
} );

observer.observe( document.body, {
  childList: true,
  subtree: true
} );