const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Función para cambiar el estado del menú
function toggleMenu() {
  const isActive = hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  
  // Actualizar accesibilidad
  hamburger.setAttribute('aria-expanded', isActive);
}

// Evento al hacer clic en el botón de hamburguesa
hamburger.addEventListener('click', toggleMenu);

// Soporte para activar con la tecla Enter o Espacio cuando se navega por teclado
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});