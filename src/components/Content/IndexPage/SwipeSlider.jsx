import React from "react";
import PropTypes from "prop-types";

class SwipeSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.autoPlayInterval = null;
  }

  componentDidMount(){
    this.autoPlayInterval = setInterval(() => ( this.changeToNextSlider()), 5000);
  }
  
  isActiveClass(i) {
    const {currentIndex} = this.state;
    return currentIndex === i ? "active" : "";
  }

  changeToNextSlider() {
    const {sliderDatas} = this.props;
    const {currentIndex} = this.state;

    const total = sliderDatas.length;
    let nextIndex = currentIndex + 1;

    if((nextIndex+1) > total) {nextIndex = 0;}

    this.setState({
      currentIndex: nextIndex,
    });
  }

  render() {
    const { sliderDatas } = this.props;

    return(
      <section className="swiper-slider">
        {
          sliderDatas.map((data, i) => (
            <div key={data.src} className={`swiper-item ${this.isActiveClass(i)}`}>
              <a href={data.href} target="_blank" rel="noopener noreferrer">
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
              <div
                key={data.src}
                className={this.isActiveClass(i)}
                onClick={
                () => {
                  this.setState({ currentIndex: i });
                  clearInterval(this.autoPlayInterval);
                }
              }
                onKeyPress={this.handleKeyPress}
                role="button"
                tabIndex="0"
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

SwipeSlider.propTypes = {
  sliderDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
  }))
};

SwipeSlider.defaultProps = {
  sliderDatas: [],
};

export default SwipeSlider;
