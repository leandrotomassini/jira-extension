const observer = new MutationObserver( () => {
  const buttons = document.querySelectorAll( 'button' );

  buttons.forEach( button => {
    if ( button.textContent.includes( "Versión de prueba de Premium" ) ) {
      button.style.display = 'none';
    }
  } );
} );

observer.observe( document.body, {
  childList: true,
  subtree: true
} );