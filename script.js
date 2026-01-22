// --- 1. CSS INYECTADO (CERO PARPADEO) ---
const style = document.createElement( 'style' );
style.innerHTML = `
  /* MODO FANTASMA: Menús invisibles */
  body.killing-mode ytd-popup-container,
  body.killing-mode .ytd-popup-container,
  body.killing-mode tp-yt-iron-dropdown,
  body.killing-mode .yt-popup-container,
  body.killing-mode #menus {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    z-index: -9999 !important;
  }

  /* OCULTAR CÓDIGO DE PAÍS */
  #country-code { display: none !important; }

  /* BASURA GLOBAL */
  ytd-reel-shelf-renderer, 
  ytd-mini-guide-renderer, 
  grid-shelf-view-model,
  #guide-button, 
  yt-icon-button[id="guide-button"],
  button[aria-label*="búsquedas con la voz"], 
  button[aria-label*="voice search"], 
  button[aria-label*="Crear"], 
  button[aria-label*="Create"], 
  button[aria-label*="Guía"], 
  button[aria-label*="Guide"],
  .yt-spec-touch-feedback-shape__fill {
    display: none !important;
  }

  /* JIRA & PLATZI */
  section[data-id="banner-business-redirect"],
  div[data-class="new-promo-banner"],
  .LargeBanner-module_NewBanner__zxYZW,
  #promo-banner-cta,
  div[class*="RecommendatorBox-module_RecommendatorBox"] {
    display: none !important;
  }

  /* LIMPIEZA DE TARJETAS */
  ytd-rich-item-renderer:has(a[href*="list="]),
  ytd-rich-item-renderer:has(yt-collection-thumbnail-view-model),
  ytd-rich-item-renderer:has(#progress),
  ytd-rich-item-renderer:has(yt-thumbnail-overlay-progress-bar-view-model),
  ytd-rich-item-renderer:has(.ytDismissibleItemReplacedContent),
  ytd-rich-item-renderer:has(notification-multi-action-renderer) {
    display: none !important;
  }

  /* LIMPIEZA VISUAL */
  ytd-rich-item-renderer #avatar-link, 
  ytd-rich-item-renderer yt-decorated-avatar-view-model,
  ytd-rich-item-renderer .yt-content-metadata-view-model__metadata-row,
  ytd-rich-item-renderer yt-thumbnail-overlay-badge-view-model,
  ytd-rich-item-renderer ytd-thumbnail-overlay-time-status-renderer {
    display: none !important;
  }
  
  /* Ocultar Metadata pero mantener en DOM */
  ytd-rich-item-renderer .yt-lockup-metadata-view-model__metadata {
    opacity: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }

  /* Ocultar botón original */
  .yt-lockup-metadata-view-model__menu-button button {
    opacity: 0 !important; 
    pointer-events: auto !important;
    width: 1px !important;
  }
`;
document.head.appendChild( style );


// --- 2. LÓGICA JAVASCRIPT (OPTIMIZADA) ---

let isSorting = false;
let observerTimeout = null;

const timeUnits = {
  'segundo': 1, 'second': 1, 'minuto': 60, 'minute': 60,
  'hora': 3600, 'hour': 3600, 'día': 86400, 'day': 86400,
  'semana': 604800, 'week': 604800, 'mes': 2592000, 'month': 2592000,
  'año': 31536000, 'year': 31536000
};

const getSeconds = ( text ) => {
  if ( !text ) return Infinity;
  const cleanText = text.toLowerCase();
  if ( cleanText.includes( 'vivo' ) || cleanText.includes( 'live' ) || cleanText.includes( 'premiere' ) ) return 0;

  const match = cleanText.match( /(\d+)/ );
  if ( !match ) return Infinity;

  const number = parseInt( match[ 0 ] );
  for ( const [ unit, seconds ] of Object.entries( timeUnits ) ) {
    if ( cleanText.includes( unit ) ) return number * seconds;
  }
  return Infinity;
};

const killVideoInstantly = ( card, originalBtn ) => {
  card.style.display = 'none';
  document.body.classList.add( 'killing-mode' );
  originalBtn.click();

  let attempts = 0;
  const finder = setInterval( () => {
    attempts++;
    const items = document.querySelectorAll( 'yt-list-item-view-model, ytd-menu-service-item-renderer' );
    let clicked = false;

    items.forEach( item => {
      const text = item.textContent.toLowerCase();
      if ( text.includes( 'interesa' ) || text.includes( 'interested' ) ) {
        item.click();
        clicked = true;
      }
    } );

    if ( clicked || attempts > 40 ) {
      clearInterval( finder );
      document.body.click();
      setTimeout( () => {
        document.body.classList.remove( 'killing-mode' );
      }, 50 );
    }
  }, 10 );
};

const processCard = ( card ) => {
  // Si ya tiene el botón, NO TOCAR (Evita parpadeo)
  if ( card.querySelector( '.custom-killer-btn' ) ) return;

  if ( card.textContent.includes( 'Se quitó el video' ) ) {
    card.style.display = 'none';
    return;
  }

  const menuContainer = card.querySelector( '.yt-lockup-metadata-view-model__menu-button' );
  if ( menuContainer ) {
    const originalBtn = menuContainer.querySelector( 'button' );

    if ( originalBtn ) {
      const killerBtn = document.createElement( 'div' );
      killerBtn.className = 'custom-killer-btn';
      killerBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" style="fill: #aaa;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`;

      killerBtn.style.cssText = `
        cursor: pointer; display: flex; align-items: center; justify-content: center; 
        padding: 8px; border-radius: 50%; transition: background 0.2s; 
        z-index: 2000; position: absolute; right: 0; top: 0;
      `;

      killerBtn.onmouseover = () => {
        killerBtn.style.backgroundColor = 'rgba(255,0,0,0.1)';
        killerBtn.querySelector( 'svg' ).style.fill = 'red';
      };
      killerBtn.onmouseout = () => {
        killerBtn.style.backgroundColor = 'transparent';
        killerBtn.querySelector( 'svg' ).style.fill = '#aaa';
      };

      killerBtn.onclick = ( e ) => {
        e.stopPropagation();
        e.preventDefault();
        killVideoInstantly( card, originalBtn );
      };

      menuContainer.style.position = 'relative';
      menuContainer.appendChild( killerBtn );
    }
  }
};

const sortHome = () => {
  if ( isSorting || location.pathname !== '/' ) return;

  const container = document.querySelector( 'ytd-rich-grid-renderer #contents' );
  if ( !container ) return;

  const items = Array.from( container.children ).filter( el =>
    el.tagName.toLowerCase() === 'ytd-rich-item-renderer' &&
    el.style.display !== 'none'
  );

  if ( items.length < 2 ) return;

  isSorting = true;

  items.sort( ( a, b ) => {
    const textA = a.textContent;
    const textB = b.textContent;

    const extractTime = ( t ) => {
      const match = t.toLowerCase().match( /(\d+|un|una)\s+(seg|min|hor|day|día|sem|week|mes|mon|año|year)/ );
      if ( t.toLowerCase().includes( 'vivo' ) ) return "vivo";
      return match ? match[ 0 ] : "";
    };

    return getSeconds( extractTime( textA ) ) - getSeconds( extractTime( textB ) );
  } );

  const fragment = document.createDocumentFragment();
  items.forEach( item => fragment.appendChild( item ) );
  container.prepend( fragment );

  // Aumentamos el delay para asegurar estabilidad
  setTimeout( () => isSorting = false, 800 );
};

// --- OBSERVER INTELIGENTE ---
const observer = new MutationObserver( ( mutations ) => {
  // FILTRO: Solo actuar si se agregan nodos nuevos (scrolling).
  // Ignorar cambios de atributos (hover, clases, estilos).
  let hasNewNodes = false;

  for ( const mutation of mutations ) {
    if ( mutation.type === 'childList' && mutation.addedNodes.length > 0 ) {
      // Verificamos si lo agregado es relevante
      for ( const node of mutation.addedNodes ) {
        if ( node.nodeType === 1 ) { // Es un elemento HTML
          // Si es una tarjeta de video o un contenedor
          if ( node.tagName === 'YTD-RICH-ITEM-RENDERER' || node.querySelector?.( 'ytd-rich-item-renderer' ) ) {
            hasNewNodes = true;
            break;
          }
        }
      }
    }
    if ( hasNewNodes ) break;
  }

  // Si no hay nodos nuevos importantes, NO HACER NADA (Evita parpadeo por hover)
  if ( !hasNewNodes ) return;

  if ( observerTimeout ) clearTimeout( observerTimeout );

  observerTimeout = setTimeout( () => {
    const cards = document.querySelectorAll( 'ytd-rich-item-renderer' );
    cards.forEach( processCard );

    // Limpieza texto (Jira/Platzi)
    document.querySelectorAll( 'button, span, a' ).forEach( el => {
      const t = el.textContent.trim();
      if ( t === "Versión de prueba de Premium" || t === "Ayuda" || t === "Cuéntanos tu opinión" ) el.style.display = 'none';
    } );

    if ( !isSorting ) sortHome();
  }, 150 );
} );

observer.observe( document.body, { childList: true, subtree: true } );

if ( location.pathname === '/results' && location.search.includes( 'search_query=' ) && !location.search.includes( 'sp=' ) ) {
  location.replace( location.href + '&sp=CAI' );
}

window.addEventListener( 'yt-navigate-finish', () => {
  isSorting = false;
  setTimeout( () => {
    const cards = document.querySelectorAll( 'ytd-rich-item-renderer' );
    cards.forEach( processCard );
    sortHome();
  }, 500 );
} );