function calcularRemanente() {
    const ingresos = document.getElementById('ingresos').value;
    const egresos = document.getElementById('egresos').value;

    if (ingresos === '' || egresos === '') {
        alert('Por favor, ingrese ambos valores');
        return;
    }

    const remanente = ingresos - egresos;
    document.getElementById('resultado').innerText = `REMANENTE: $${remanente}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});


