document.addEventListener( 'DOMContentLoaded' , () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');

  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton.getAttribute( 'aria-expanded' ) === 'true';
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded );
    if (isExpanded){ //si el nav esta expandido, se anima para cerrarlo
      mainNav.classList.remove('nav-open');
      mainNav.classList.add('nav-close');
      hamburgerButton.innerHTML = "&#9776;";
    } else { //se cierra el nav y se anima
      mainNav.classList.remove("nav-close");
      mainNav.classList.add('nav-open');
      hamburgerButton.innerHTML = "&#10005;";
    }
  } ) ;

  // Cierra el menú si se hace clic fuera de él en dispositivos móviles
  document.addEventListener( 'click' , (event) => {
    if( !mainNav.contains( event.target ) &&
        !hamburgerButton.contains( event.target ) &&
        mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ;
      //cerrar nav
      mainNav.classList.remove( 'nav-open' ) ;
      mainNav.classList.add( 'nav-close' );
    }
  } ) ;
    //elimina la clase nav-close cuando se termina la animación
    mainNav.addEventListener('animationend', (event) => {
    if (event.animationName === 'cerrar-nav') {
      mainNav.classList.remove('nav-close');
    }
  });
} ) ;
