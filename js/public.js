function menu_line_ini() {
  $('.menu-card').removeClass('menu-underline');
  $('.menu-news').removeClass('menu-underline');
  $('.menu-price').removeClass('menu-underline');
  $('.menu-access').removeClass('menu-underline');
  $('.menu-contact').removeClass('menu-underline');
};

$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    effect: "slide",
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    speed: 1000,
  })
  new WOW().init();

  // メニューアンダーライン初期化開始
  menu_line_ini();
   // メニューアンダーライン初期化終了

    $('.navbar-toggler').on('click', function () {
      $('.navbar').toggleClass('open');
     $('.drw_menu').toggleClass('open');
    });

    $('.closs').on('click', function () {
      $(".drw_menu").removeClass("open");
      $('.navbar').removeClass('open');
    });

    // Start Click scroll
    var speed = 1500;

    $('.menu-card').click(function() {
      menu_line_ini();
      $('.menu-card').addClass('menu-underline');
      $("html,body").animate({scrollTop:$('.card').offset().top}, speed, "swing");
    });

    $('.menu-news').click(function() {
      menu_line_ini();
      $('.menu-news').addClass('menu-underline');
      $("html,body").animate({scrollTop:$('.news').offset().top}, speed, "swing");
    });

    $('.menu-price').click(function() {
      menu_line_ini();
      $('.menu-price').addClass('menu-underline');
      $("html,body").animate({scrollTop:$('.price').offset().top}, speed, "swing");
    });

    $('.menu-access').click(function() {
      menu_line_ini();
      $('.menu-access').addClass('menu-underline');
      $("html,body").animate({scrollTop:$('.access').offset().top}, speed, "swing");
    });

    $('.menu-contact,.btn-contact').click(function() {
      menu_line_ini();
      $('.menu-contact').addClass('menu-underline');
      $("html,body").animate({scrollTop:$('.contact').offset().top}, speed, "swing");
    });

    $('.top_btn').click(function() {
      menu_line_ini();
      $("html,body").animate({scrollTop:0}, speed, "swing");
    });
    // End Click scroll

    $('.q-btn').click(function() {
      var $answer = $(this).parent().parent().find('.answer');
      if($(this).hasClass('parts-plus')) { 
        $(this).removeClass('parts-plus');
        $answer.slideDown();
        $(this).addClass('parts-minus');
        
      } else {
        $(this).removeClass('parts-minus');
        $answer.slideUp();
        $(this).addClass('parts-plus');
      }
    });

    $('.policy-open').click(function(){
      $('.policy-modal-wrapper').fadeIn();
      return false;
    });

    $('.policy-close,.policy-close-mark').click(function(){
      $('.policy-modal-wrapper').fadeOut();
    });
});

$(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.top_btn').show(1000);
  } else {
    jQuery('.top_btn').hide(1000);
  }
});

