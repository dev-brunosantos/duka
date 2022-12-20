const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Autoplay
    autoplay: {
        delay: 3000,
    },

    // Efects
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
    },
});