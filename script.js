let isSorting = false;

const timeUnits = {
  'segundo': 1, 'second': 1,
  'minuto': 60, 'minute': 60,
  'hora': 3600, 'hour': 3600,
  'día': 86400, 'day': 86400,
  'semana': 604800, 'week': 604800,
  'mes': 2592000, 'month': 2592000,
  'año': 31536000, 'year': 31536000
};

const getSeconds = ( text ) => {
  if ( !text ) return Infinity;
  const cleanText = text.toLowerCase();

  if ( cleanText.includes( 'vivo' ) || cleanText.includes( 'live' ) || cleanText.includes( 'premiere' ) ) {
    return 0;
  }

  const match = cleanText.match( /(\d+)/ );
  if ( !match ) return Infinity;

  const number = parseInt( match[ 0 ] );

  for ( const [ unit, seconds ] of Object.entries( timeUnits ) ) {
    if ( cleanText.includes( unit ) ) {
      return number * seconds;
    }
  }

  return Infinity;
};

const sortHome = () => {
  if ( isSorting ) return;
  if ( location.pathname !== '/' && location.pathname !== '' ) return;

  const container = document.querySelector( 'ytd-rich-grid-renderer #contents' );
  if ( !container ) return;

  const items = Array.from( container.children ).filter( el =>
    el.tagName.toLowerCase() === 'ytd-rich-item-renderer'
  );

  if ( items.length === 0 ) return;

  isSorting = true;

  items.sort( ( a, b ) => {
    const getText = ( el ) => {
      const metaLines = el.querySelectorAll( 'span.yt-core-attributed-string' );
      let timeText = "";

      metaLines.forEach( span => {
        const t = span.textContent.toLowerCase();
        if ( t.match( /(\d+|un|una)\s+(seg|min|hor|day|día|sem|week|mes|mon|año|year)/ ) || t.includes( 'vivo' ) ) {
          timeText = t;
        }
      } );
      return timeText;
    };

    return getSeconds( getText( a ) ) - getSeconds( getText( b ) );
  } );

  const fragment = document.createDocumentFragment();
  items.forEach( item => fragment.appendChild( item ) );

  container.prepend( fragment );

  setTimeout( () => {
    isSorting = false;
  }, 500 );
};

const hideElements = () => {
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
    '#guide-button',
    'yt-icon-button[id="guide-button"]'
  ];

  selectors.forEach( selector => {
    document.querySelectorAll( selector ).forEach( element => {
      if ( selector === 'grid-shelf-view-model' ) {
        if ( element.textContent.includes( "Shorts" ) ) element.style.display = 'none';
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
};

const observer = new MutationObserver( () => {
  hideElements();
  if ( !isSorting ) {
    sortHome();
  }
} );

observer.observe( document.body, { childList: true, subtree: true } );

if ( location.pathname === '/results' && location.search.includes( 'search_query=' ) && !location.search.includes( 'sp=' ) ) {
  location.replace( location.href + '&sp=CAI' );
}

window.addEventListener( 'yt-navigate-finish', () => {
  isSorting = false;
  hideElements();
  sortHome();
} );