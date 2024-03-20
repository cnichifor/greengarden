const swiperw = document.querySelector('.swiper-wrapper');

// for(let i = productcards.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * (i + 1));
//     [productcards[i], productcards[j]] = [productcards[j], productcards[i]];
// }

// loop through the shuffled array and append each card to a new div element
for(let i = 0; i < productcards.length; i++){
    let el = document.createElement('div');
    swiperw.appendChild(el);
    el.className = 'swiper-slide swiper-el';
    el.appendChild(productcards[i]);
}

new Swiper('.product-swipe', {
    loop: true,
    reverseDirection: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },

    speed: 5000,

    autoHeight: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
});