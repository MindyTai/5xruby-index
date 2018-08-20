import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

class ScrollBtn extends React.Component {

componentDidMount(){
  window.addEventListener("scroll",this.fadeInOutAnimate)
}

componentWillUnmount(){
  window.removeEventListener('scroll',this.fadeInOutAnimate)
}

fadeInOutAnimate(){
  const scrollTop = $(window).scrollTop()
  if (scrollTop > 20) {
    $('#scrollTop').fadeIn()
  } else {
    $('#scrollTop').fadeOut()
  }
}
  
render() {
  return (
    <div 
      id="scrollTop"
      className="scrollup to-top text-center" 
      onClick={()=>{
        $("html, body , document , window").animate({
          scrollTop: 0
        }, 'slow')
      }}
      >
      <i id="scrUp"
        class="fa fa-angle-up"  
        aria-hidden="true">
      </i>
    </div> 
    )
  }
}

export default ScrollBtn