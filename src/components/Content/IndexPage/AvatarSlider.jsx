import React from 'react';
import PropTypes from 'prop-types'

class AvatarSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex : 0,
    }
    this.autoPlayInterval = null
  }

  componentDidMount() {
    this.autoPlayInterval = setInterval(
      () => (this.changeToNextSlider())
    ,5000)
  } 

  isActiveClass(i) {
    return (this.state.currentIndex) === i ? "active" : ""
  }

  changeToNextSlider(){
    const total = this.props.avatarDatas.length
    let nextIndex = this.state.currentIndex + 1
    if((nextIndex+1) > total) {nextIndex = 0}
    
    this.setState({
      currentIndex: nextIndex,
    })
  }

  render() {
    const { avatarDatas } = this.props
    
    return(
      <section className="avatar">
        {
          avatarDatas.map((data, i) => (
            <div key={data.src} className={ `avatar-slide p-3 mt-5 mb-5 ${this.isActiveClass(i)}`}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-md-2 col-lg-2">
                    <img  
                    src={data.src} 
                    alt= {data.alt} />
                  </div>
                  <div className="col-sm-9 col-md-10 col-lg-10">
                    <p> {data.statement} </p>
                    <span className="name">{ data.name }</span>
                    <br />
                    <span className="title">{ data.title }</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        } 
        <div className="col-sm-12 col-md-12 col-lg-12 pt-5">
          <ul className="d-flex justify-content-center avatar-list">
          {
            avatarDatas.map((data, i) => (
              <li 
              key={data.src}
              className={`${this.isActiveClass(i)}`}
              onClick={
                () => {
                  this.setState({currentIndex: i})
                  clearInterval(this.autoPlayInterval)
                  }
                }
              />
            ))
          }
            </ul>
          </div>
        </section>
      )
    }
  }

AvatarSlider.propTypes = {
  avatarDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
  }))
}

AvatarSlider.defaultProps = {
  avatarDatas: []
}

export default AvatarSlider
