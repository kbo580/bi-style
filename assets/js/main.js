$(function(){
  $("#show").click(function () {
    $(this).toggleClass('active');
    $(".menu").toggleClass('active');
  });

  $('#toTop').on('click', function() {
    $('html, body').animate({ 
      scrollTop: 0 }, 300);
  });

  //--------------- 下からフェードイン ----------------
  function fadeUpAnime(){
    $('.fadeUp').each(function(){ 
      var elemPos = $(this).offset().top; 
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUpAnime');
      }
    });
  }
  
  $(window).on('load scroll', function (){
    fadeUpAnime();
  });

  //--------------- swiper ----------------

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
        slidesPerView: 3,
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