document.addEventListener( 'DOMContentLoaded' , () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');

  //acciones del boton de menú
  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton.getAttribute( 'aria-expanded' ) === 'true';
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded );
    if (isExpanded){ //si el nav esta expandido, se anima para cerrarlo
      mainNav.classList.remove('nav-open');
      mainNav.classList.add('nav-close');
      hamburgerButton.innerHTML = "&#9776;";
      hamburgerButton.setAttribute('aria-label', 'Abrir menú de navegación');
    } else {
      document.body.classList.add('bloqueo-menu'); //bloquea el scroll mientras el menu de navegacion este abierto
      mainNav.classList.remove("nav-close");
      mainNav.classList.add('nav-open');
      hamburgerButton.innerHTML = "&#10005;";
      hamburgerButton.setAttribute('aria-label', 'Cerrar menú de navegación');
    }
  } ) ;

  // Cierra el menú si se hace clic fuera de él en dispositivos móviles
  document.addEventListener( 'click' , (event) => {
    if( !mainNav.contains( event.target ) && !hamburgerButton.contains( event.target ) && mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ;
      mainNav.classList.remove( 'nav-open' ) ;
      mainNav.classList.add( 'nav-close' );
      //devuelve el icono de menú cuando se toca fuera del menu
      hamburgerButton.innerHTML = "&#9776;";
      hamburgerButton.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  } ) ;

    //elimina la clase nav-close y libera el scroll cuando se termina la animacion
    mainNav.addEventListener('animationend', (event) => {
    if (event.animationName === 'cerrar-nav') {
      mainNav.classList.remove('nav-close');
      document.body.classList.remove('bloqueo-menu'); //desbloquea el scroll cuando el menu de navegación esta cerrado.
    }
  });
} ) ;
