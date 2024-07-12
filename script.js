// Función para establecer una cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Manejo del botón "Aceptar cookies"
document.getElementById('accept-cookies').addEventListener('click', function() {
    // Establece una cookie para indicar la aceptación del usuario
    setCookie('cookie_accepted', true, 30); // Ejemplo con 30 días de expiración
    // Opcionalmente, oculta la ventana emergente de cookies
    document.getElementById('cookie-popup').style.display = 'none';
});

// Manejo del botón "Más información"
document.getElementById('more-info').addEventListener('click', function() {
    // Redirige al usuario a tu página de política de cookies
    window.location.href = 'cookies.html';
});