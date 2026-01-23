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

  /* ==============================================
     GLOBAL: OCULTAR DURACIÓN (TIEMPO)
     ============================================== */
  ytd-thumbnail-overlay-time-status-renderer,
  span.ytd-thumbnail-overlay-time-status-renderer,
  div.badge-shape-wiz--thumbnail-badge {
    display: none !important;
  }

  /* ==============================================
     GLOBAL: FILTRO DE VIDEOS VISTOS (LÍNEA ROJA)
     ============================================== */
  ytd-rich-item-renderer:has(#progress),
  ytd-video-renderer:has(#progress),
  ytd-grid-video-renderer:has(#progress),
  ytd-rich-item-renderer:has(ytd-thumbnail-overlay-resume-playback-renderer),
  ytd-video-renderer:has(ytd-thumbnail-overlay-resume-playback-renderer) {
    display: none !important;
  }

  /* ==============================================
     CONFIGURACIÓN DE BÚSQUEDA (Resultados)
     ============================================== */
     
  /* 1. MANTENER VISIBLE: Foto y Nombre del Canal */
  ytd-video-renderer #channel-info,
  ytd-video-renderer ytd-channel-name,
  ytd-video-renderer #channel-thumbnail,
  ytd-video-renderer #avatar {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* 2. OCULTAR: Vistas y Tiempo ("hace X tiempo") */
  ytd-video-renderer #metadata-line, 
  ytd-video-renderer .inline-metadata-item,
  ytd-video-renderer #metadata-line span {
    display: none !important;
  }

  /* 3. OCULTAR: Descripción, Snippets y Textos extra */
  ytd-video-renderer #description-text,
  ytd-video-renderer .metadata-snippet-container,
  ytd-video-renderer .metadata-snippet-container-one-line,
  ytd-video-renderer .metadata-snippet-text-navigation,
  ytd-video-renderer .metadata-snippet-text {
    display: none !important;
  }

  /* 4. OCULTAR: Menú de 3 puntos */
  ytd-video-renderer #menu,
  ytd-video-renderer yt-icon-button#button,
  ytd-video-renderer .dropdown-trigger {
    display: none !important;
  }

  /* 5. OCULTAR: Badges (4K, Nuevo, CC) y Capítulos */
  ytd-video-renderer ytd-badge-supported-renderer,
  ytd-video-renderer #expandable-metadata,
  ytd-video-renderer #badges {
    display: none !important;
  }

  /* 6. OCULTAR: Cabecera y Filtros (Chips) */
  ytd-search-header-renderer,
  yt-chip-cloud-renderer,
  div#chip-bar {
    display: none !important;
  }

  /* ==============================================
     CONFIGURACIÓN DE HOME (Cuadrícula)
     ============================================== */
  
  /* Limpieza Visual de Tarjetas Home */
  ytd-rich-item-renderer #avatar-link, 
  ytd-rich-item-renderer yt-decorated-avatar-view-model,
  ytd-rich-item-renderer .yt-content-metadata-view-model__metadata-row,
  ytd-rich-item-renderer yt-thumbnail-overlay-badge-view-model {
    display: none !important;
  }
  
  /* Metadata oculta pero en DOM para ordenar */
  ytd-rich-item-renderer .yt-lockup-metadata-view-model__metadata {
    opacity: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }

  /* Botón original oculto en Home */
  .yt-lockup-metadata-view-model__menu-button button {
    opacity: 0 !important; 
    pointer-events: auto !important;
    width: 1px !important;
  }

  /* Limpieza de contenidos basura en Home */
  ytd-rich-item-renderer:has(a[href*="list="]),
  ytd-rich-item-renderer:has(yt-collection-thumbnail-view-model),
  ytd-rich-item-renderer:has(.ytDismissibleItemReplacedContent),
  ytd-rich-item-renderer:has(notification-multi-action-renderer) {
    display: none !important;
  }

  /* ==============================================
     GLOBALES Y BARRA LATERAL
     ============================================== */

  /* ANIQUILACIÓN TOTAL DE SHORTS */
  ytd-rich-section-renderer, 
  ytd-rich-shelf-renderer,
  ytd-reel-shelf-renderer,
  a[href^="/shorts"],
  ytd-video-renderer a[href^="/shorts"] {
    display: none !important;
  }

  /* LIMPIEZA DE MENÚ LATERAL (IZQUIERDA) */
  #guide,
  #guide-content,
  #guide-inner-content,
  #guide-wrapper,
  ytd-guide-renderer,
  ytd-guide-section-renderer,
  #header.style-scope.ytd-app, 
  #footer.style-scope.ytd-guide-renderer { 
    display: none !important; 
    width: 0 !important;
  }

  /* BARRA SUPERIOR (HEADER) */
  #guide-button,
  yt-icon-button[id="guide-button"] {
    display: none !important;
  }
  
  /* Ajuste de altura del Header */
  ytd-feed-filter-chip-bar-renderer { display: none !important; }
  
  #frosted-glass.ytd-app,
  #frosted-glass.with-chipbar.ytd-app {
    height: 56px !important;
    margin-top: 0 !important;
  }
  
  ytd-app { --ytd-masthead-height: 56px !important; }
  #masthead-container.ytd-app { height: 56px !important; }

  /* REAJUSTE DE MAQUETACIÓN PRINCIPAL */
  ytd-app[guide-persistent-and-visible] #page-manager.ytd-app,
  #page-manager.ytd-app {
    margin-left: 0 !important;
  }

  /* OCULTAR CÓDIGO DE PAÍS */
  #country-code { display: none !important; }

  /* BASURA GLOBAL ADICIONAL */
  ytd-mini-guide-renderer, 
  grid-shelf-view-model,
  button[aria-label*="búsquedas con la voz"], 
  button[aria-label*="voice search"], 
  button[aria-label*="Crear"], 
  button[aria-label*="Create"], 
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
`;
document.head.appendChild( style );

// --- 2. LÓGICA JAVASCRIPT ---

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
      setTimeout( () => document.body.classList.remove( 'killing-mode' ), 50 );
    }
  }, 10 );
};

const processCard = ( card ) => {
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
      killerBtn.style.cssText = `cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 8px; border-radius: 50%; transition: background 0.2s; z-index: 2000; position: absolute; right: 0; top: 0;`;
      killerBtn.onmouseover = () => { killerBtn.style.backgroundColor = 'rgba(255,0,0,0.1)'; killerBtn.querySelector( 'svg' ).style.fill = 'red'; };
      killerBtn.onmouseout = () => { killerBtn.style.backgroundColor = 'transparent'; killerBtn.querySelector( 'svg' ).style.fill = '#aaa'; };
      killerBtn.onclick = ( e ) => { e.stopPropagation(); e.preventDefault(); killVideoInstantly( card, originalBtn ); };
      menuContainer.style.position = 'relative';
      menuContainer.appendChild( killerBtn );
    }
  }
};

const sortHome = () => {
  if ( isSorting || location.pathname !== '/' ) return;
  const container = document.querySelector( 'ytd-rich-grid-renderer #contents' );
  if ( !container ) return;
  const items = Array.from( container.children ).filter( el => el.tagName.toLowerCase() === 'ytd-rich-item-renderer' && el.style.display !== 'none' );
  if ( items.length < 2 ) return;
  isSorting = true;
  items.sort( ( a, b ) => {
    const extractTime = ( t ) => {
      const match = t.toLowerCase().match( /(\d+|un|una)\s+(seg|min|hor|day|día|sem|week|mes|mon|año|year)/ );
      if ( t.toLowerCase().includes( 'vivo' ) ) return "vivo";
      return match ? match[ 0 ] : "";
    };
    return getSeconds( extractTime( a.textContent ) ) - getSeconds( extractTime( b.textContent ) );
  } );
  const fragment = document.createDocumentFragment();
  items.forEach( item => fragment.appendChild( item ) );
  container.prepend( fragment );
  setTimeout( () => isSorting = false, 800 );
};

const enforceSearchSort = () => {
  if ( location.pathname === '/results' && location.search.includes( 'search_query=' ) ) {
    if ( !location.search.includes( 'sp=CAI' ) ) {
      location.replace( location.href + '&sp=CAI' );
    }
  }
};

const observer = new MutationObserver( ( mutations ) => {
  let hasNewNodes = false;

  const trashSections = document.querySelectorAll( 'ytd-rich-section-renderer, ytd-reel-shelf-renderer' );
  trashSections.forEach( el => el.remove() );

  for ( const m of mutations ) {
    if ( m.type === 'childList' && m.addedNodes.length > 0 ) {
      for ( const n of m.addedNodes ) {
        if ( n.nodeType === 1 ) {
          if ( n.tagName === 'YTD-RICH-ITEM-RENDERER' || n.querySelector?.( 'ytd-rich-item-renderer' ) ) {
            hasNewNodes = true;
          }
        }
      }
    }
    if ( hasNewNodes ) break;
  }

  if ( !hasNewNodes ) return;
  if ( observerTimeout ) clearTimeout( observerTimeout );
  observerTimeout = setTimeout( () => {
    document.querySelectorAll( 'ytd-rich-item-renderer' ).forEach( processCard );

    document.querySelectorAll( 'button, span, a' ).forEach( el => {
      const t = el.textContent.trim();
      if ( t === "Versión de prueba de Premium" || t === "Ayuda" || t === "Cuéntanos tu opinión" ) el.style.display = 'none';
    } );

    if ( !isSorting ) sortHome();
  }, 150 );
} );

observer.observe( document.body, { childList: true, subtree: true } );

enforceSearchSort();

window.addEventListener( 'yt-navigate-finish', () => {
  enforceSearchSort();
  isSorting = false;
  setTimeout( () => {
    document.querySelectorAll( 'ytd-rich-item-renderer' ).forEach( processCard );
    sortHome();
  }, 500 );
} );