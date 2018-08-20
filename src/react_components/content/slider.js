import React, { Component } from 'react';

import sliderpic1 from '../../img/banner-1.jpg'
import sliderpic2 from '../../img/banner-2.jpg'
import sliderpic3 from '../../img/banner-3.jpg'

class Slider extends React.Component {
  render(){
    return(
      <section className="swiper-slider">
        <div className="swiper-item active">
          <a href="#" target="_blank">
            <img 
             alt="客製化進階 RWD 手機版網頁設計班 - 台北假日班"
             src={sliderpic1} />
          </a>
        </div>
        <div className="swiper-item">   
          <a href="https://www.facebook.com/rubymokumokukai/" target="_blank">
            <img 
             alt="客製化進階 RWD 手機版網頁設計班 - 台北假日班" 
             src={sliderpic2} />
          </a>
        </div>
        <div className="swiper-item">   
          <a href="https://www.facebook.com/rubymokumokukai/" target="_blank">
            <img 
             alt="客製化進階 RWD 手機版網頁設計班 - 台北假日班" 
             src={sliderpic3} />
          </a>
        </div>
        <ul className="swiper-list">
          <li data-slider-to="0" className="active"></li>
          <li data-slider-to="1"></li>
          <li data-slider-to="2"></li>
        </ul>
      </section>
    )
  }
}

export default Slider