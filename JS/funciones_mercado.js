    var boton = document.getElementById('btn');

function manejarClick() {
    redirigir();
}

boton.addEventListener('click', manejarClick);


function redirigir() {
    window.location.href = '/index/dashboard.html';
}
