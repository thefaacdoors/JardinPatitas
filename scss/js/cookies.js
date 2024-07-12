const cookiePopup = document.getElementById('cookie-popup');
const acceptButton = document.getElementById('accept-cookies');
const moreInfoButton = document.getElementById('more-info');

// Función para ocultar la ventana emergente
function hideCookiePopup() {
  cookiePopup.style.display = 'none';
}

// Evento click para el botón "Aceptar cookies"
acceptButton.addEventListener('click', hideCookiePopup);

// Evento click para el botón "Más información"
moreInfoButton.addEventListener('click', function() {
  // Redireccionar a la página de política de cookies
  window.location.href = 'politica-de-cookies.html';
});

// Mostrar la ventana emergente al cargar la página
window.addEventListener('load', function() {
  cookiePopup.style.display = 'block';
});