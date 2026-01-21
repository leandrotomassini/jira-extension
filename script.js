const observer = new MutationObserver( () => {
  const selectors = [
    'section[data-id="banner-business-redirect"]',
    'div[data-class="new-promo-banner"]',
    '.LargeBanner-module_NewBanner__zxYZW',
    '#promo-banner-cta',
    'div[class*="RecommendatorBox-module_RecommendatorBox"]',
    'grid-shelf-view-model',
    'ytd-reel-shelf-renderer',
    'ytd-mini-guide-renderer',
    '.yt-spec-touch-feedback-shape__fill',
    'button[aria-label*="búsquedas con la voz"]',
    'button[aria-label*="voice search"]',
    'button[aria-label*="Crear"]',
    'button[aria-label*="Create"]',
    'button[aria-label*="Guía"]',
    'button[aria-label*="Guide"]',
    '#guide-button'
  ];

  selectors.forEach( selector => {
    document.querySelectorAll( selector ).forEach( element => {
      if ( selector === 'grid-shelf-view-model' ) {
        if ( element.textContent.includes( "Shorts" ) ) {
          element.style.display = 'none';
        }
      } else {
        element.style.display = 'none';
      }
    } );
  } );

  const textElements = document.querySelectorAll( 'button, span, a' );
  textElements.forEach( element => {
    const text = element.textContent.trim();
    if (
      text === "Versión de prueba de Premium" ||
      text === "Ayuda" ||
      text === "Cuéntanos tu opinión"
    ) {
      element.style.display = 'none';
    }
  } );
} );

observer.observe( document.body, {
  childList: true,
  subtree: true
} );