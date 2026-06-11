document.addEventListener('DOMContentLoaded', function() {
    var contenido = document.getElementById('contenido');
    var btnAgrandar = document.getElementById('agrandar');
    var btnAchicar = document.getElementById('achicar');

    btnAgrandar.addEventListener('click', function() {
        var actual = parseInt(window.getComputedStyle(contenido).fontSize);
        if (actual < 32) {
            contenido.style.fontSize = (actual + 2) + 'px';
        }
    });

    btnAchicar.addEventListener('click', function() {
        var actual = parseInt(window.getComputedStyle(contenido).fontSize);
        if (actual > 10) {
            contenido.style.fontSize = (actual - 2) + 'px';
        }
    });
});