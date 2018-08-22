import React from 'react';
import PropTypes from 'prop-types'

class SwipeSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.autoPlayInterval = null
  }

  componentDidMount(){
    this.autoPlayInterval = setInterval(() => ( this.changeToNextSlider()), 5000)
  }
  
  isActiveClass(i) {
    return (this.state.currentIndex) === i ? "active" : ""
  }

  changeToNextSlider() {
    const total = this.props.sliderDatas.length
    let nextIndex = this.state.currentIndex + 1

    if((nextIndex+1) > total) {nextIndex = 0}

    this.setState({
      currentIndex: nextIndex,
    })
  }

  render() {
    const { sliderDatas } = this.props

    return(
      <section className="swiper-slider">
        {
          sliderDatas.map((data, i) => (
            <div key={data.src} className={`swiper-item ${this.isActiveClass(i)}`}>
              <a href={data.href} target="_blank">
                <img
                  alt={data.alt}
                  src={data.src}
                />
              </a>
            </div>
          ))
        }
        <ul className="swiper-list">
          {
            sliderDatas.map((data, i) => (
              <li
                key={data.src}
                className={`${this.isActiveClass(i)}`}
                onClick={
                  () => {
                    this.setState({ currentIndex: i })
                    clearInterval(this.autoPlayInterval)
                  }
                }
              />
            ))
          }
        </ul>
      </section>
    )
  }
}

SwipeSlider.propTypes = {
  sliderDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
  }))
}

SwipeSlider.defaultProps = {
  sliderDatas: [],
}

export default SwipeSlider
