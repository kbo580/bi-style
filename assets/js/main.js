$(function(){
  $("#show").click(function () {
    $(this).toggleClass('active');
    $(".menu").toggleClass('active');
  });

  $('#toTop').on('click', function() {
    $('html, body').animate({ 
      scrollTop: 0 }, 300);
  });

  var swiper = new Swiper('.Mvswiper', {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    slidesPerView: '1',
    spaceBetween: 30,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    breakpoints: {
      768: {
        spaceBetween: 50,
        slidesPerView: 2.75,
      }
    },
  });


  var swiper = new Swiper('.styleswiper', {

    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      768: {
        spaceBetween: 80,
      }
    },
  });




});