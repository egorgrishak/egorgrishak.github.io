$(document).ready(function(){
    $('.intro').slick({
        arrows: false,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 4000,
    });
  });


$(document).ready(function(){
    $('.intro_techologi').slick({
        speed: 800,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<button type="button" class="slick-prev"><img class="button_carusel" src="../icons/carusel_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="button_carusel" src="../icons/carusel_right.svg"></button>'
    });
  });

  $(document).ready(function(){
    $('.intro_objects').slick({
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img class="button_carusel" src="../icons/carusel_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="button_carusel" src="../icons/carusel_right.svg"></button>'
    });
  });

