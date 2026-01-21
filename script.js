const observer = new MutationObserver( () => {
  const selectors = [
    'section[data-id="banner-business-redirect"]',
    'div[data-class="new-promo-banner"]',
    '.LargeBanner-module_NewBanner__zxYZW',
    '#promo-banner-cta',
    'div[class*="RecommendatorBox-module_RecommendatorBox"]'
  ];

  selectors.forEach( selector => {
    document.querySelectorAll( selector ).forEach( element => {
      element.style.display = 'none';
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