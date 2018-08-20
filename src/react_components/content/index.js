import React from 'react';
import Slider from './slider.js'
import About from './about.js'
import Lectures from './lectures.js'
import Avatars from './avatars.js'
import Showcases from './showcases.js'
import KnowUs from './KnowUs.js'

class Content extends React.Component {
  render(){
    return (
      <article>
        <Slider />
        <About />
        <Lectures />
        <Avatars />
        <Showcases />
        <KnowUs />
      </article> 
    )
  }
}

export default Content