import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

registerServiceWorker();

$(function(){
  let top = 0;

  $(window).scroll(function(){
    top = $(window).scrollTop();
    if(top >= 40) {
      $(".lang-sign-in").addClass("active");
    }else {
      $(".lang-sign-in").removeClass("active");
    }
  });

  $(".sm-hamberger-bar").click(function(){
    $(".nav-collapse").toggleClass("active");
    $(".sign-in").toggleClass("active");
  })
})
