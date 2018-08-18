import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

window.$ = $

registerServiceWorker();

$(function(){
  let top = 0;
  //nav 
  var $window = $(window);
  var $langSignIn = $("#lang-sign-in");


  $window.scroll(function(){
    top = $(window).scrollTop();
    if(top >= 40) {
       $langSignIn.addClass("active");
    }else{
      $langSignIn.removeClass("active");
    }
  });

  $(".sm-hamberger-bar").click(function(){
    $(".nav-collapse").toggleClass("active");
    $(".sign-in").toggleClass("active");
  }) 

  //swiper-slider
  function SwiperChangeTo(index,swiperSliderClassName,swiperListClassName){
    $(swiperSliderClassName).removeClass("active");
    $(swiperListClassName).removeClass("active");

    $(swiperSliderClassName).eq(index).addClass("active");
    $(swiperListClassName).eq(index).addClass("active");
  }

  function NextSliderIndex(swiperListClassName){
    const currentIndex = Number($(swiperListClassName + ".active").attr("data-slider-to"));
    const totalCount = $(swiperListClassName).length;
    let nextIndex = currentIndex + 1;

    if( (nextIndex + 1) > totalCount) { nextIndex = 0 };
    return nextIndex;
  }

  const swiperAutoChangeInterval = setInterval(function(){
    const nextIndex = NextSliderIndex('.swiper-list li');
    SwiperChangeTo(nextIndex, '.swiper-item', '.swiper-list li');
  }, 5000);

  $(".swiper-list li").on("click",function(){
    clearInterval(swiperAutoChangeInterval);
    const currentIndex = $(this).attr("data-slider-to");
    SwiperChangeTo(currentIndex, ".swiper-item", ".swiper-list li");
  })

  //avatar-slider
  const avatarAutoChangeInterval = setInterval(function(){
    const nextIndex = NextSliderIndex(".avatar-list li");
    SwiperChangeTo(nextIndex, ".avatar-slide", ".avatar-list li");
  }, 5000);

  $(".avatar-list li").on("click",function(){
    clearInterval(avatarAutoChangeInterval);
    const currentIndex =  $(this).attr("data-slider-to");
    SwiperChangeTo(currentIndex, ".avatar-slide", ".avatar-list li");
  })

  //scroll-top button
  $('#scrTop').on('click', function () {
    $('#scrTop').click(function () {
        $("html, body , document , window").animate({
          scrollTop: 0
        }, 'slow');
        return false;
    });
  });

  $window.scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#scrTop').fadeIn();
    } else {
      $('#scrTop').fadeOut();
    }
  });
 
})

