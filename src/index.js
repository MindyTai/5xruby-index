import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import App from './App';

window.$ = $

registerServiceWorker();

$(function(){

  //init react component
  ReactDOM.render(<App />,document.getElementById('root'))

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
  
})

