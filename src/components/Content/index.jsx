import React from 'react';
import SwipeSlider from './SwipeSlider'
import About from './About'
import Lectures from './Lectures'
import Showcases from './Showcases'
import KnowUs from './KnowUs'
import AvatarSlider from './AvatarSlider'
import sliderDatas from '../info/slider.json'
import avatarDatas from '../info/avatar.json'
import aboutDatas from '../info/about.json'
import lectureDatas from '../info/lecture.json'
import showcaseDatas from '../info/showcase.json'

class Content extends React.Component {
  render(){
    return (
      <article>
        <SwipeSlider sliderDatas={sliderDatas} />
        <About aboutDatas={aboutDatas}/>
        <Lectures lectureDatas={lectureDatas}/>
        <AvatarSlider avatarDatas={avatarDatas} />
        <Showcases showcaseDatas={showcaseDatas}/>
        <KnowUs />
      </article> 
    )
  }
}

export default Content