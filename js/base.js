document.addEventListener( 'DOMContentLoaded' , () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');

  //acciones del boton de menú
  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton.getAttribute( 'aria-expanded' ) === 'true'; //devuelve un booleano true si el texto es true. sino, false.
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded ); // invierte el booleano
    if (isExpanded){ //si el nav esta expandido, se anima para cerrarlo
      cerrarMenu();
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
      cerrarMenu();
    }
  } ) ;

  mainNav.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', cerrarMenu);
  })

  function cerrarMenu() {
    hamburgerButton.setAttribute('aria-expanded', 'false');
    hamburgerButton.setAttribute('aria-label', 'Abrir menú de navegación');
    hamburgerButton.innerHTML = '&#9776;';
    mainNav.classList.remove('nav-open');
    mainNav.classList.add('nav-close'); //para animación de cierre
    document.body.classList.remove('bloqueo-menu'); //desbloquea el scroll cuando el menu de navegación esta cerrado.
  }

  //este listener espear a que termine la animacion de cierre del menpu antes de quitar la clase nav-close con display: flex;
  mainNav.addEventListener('animationend', (event) => {
  if (event.animationName === 'cerrar-nav') {
    mainNav.classList.remove('nav-close');
  }
  });

  // Ajusta el menú al cambiar el tamaño de la ventana (para pantallas grandes)
  window.addEventListener('resize', () => {
  if (window.innerWidth >= 1250) {
    mainNav.classList.remove('nav-open', 'nav-close');
    document.body.classList.remove('bloqueo-menu');
    hamburgerButton.setAttribute('aria-expanded', 'false');
    hamburgerButton.setAttribute('aria-label', 'Abrir menú de navegación');
    hamburgerButton.innerHTML = '&#9776;';
  }
});
});
