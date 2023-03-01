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
  var bar = document.querySelector('.progressbar_in');
  var speed = 3000;
  window.onload = function() {
    var swiper = new Swiper('.Mvswiper', {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: speed,
        disableOnInteraction: false,
      },
      slidesPerView: '1',
      spaceBetween: 30,
      grabCursor: true,

      breakpoints: {
        768: {
          spaceBetween: 50,
          slidesPerView: 3,
        }
      },
      on: {
        slideChangeTransitionStart: function () {
        bar.style.transitionDuration = '0s',
        bar.style.transform = 'scaleX(0)'
        },
        slideChangeTransitionEnd: function () {
        bar.style.transitionDuration = speed + 'ms',
        bar.style.transform = 'scaleX(1)'
        },
      }
    });

  }


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