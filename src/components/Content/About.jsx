import React from 'react';
import PropTypes from 'prop-types'

const About = (props) => {
  const { aboutDatas } = props

  return (
    <section className="about">
      <h5 className="pt-5">關於五倍紅寶石 About 5xRuby</h5>
      <div className="icons mt-5 mb-4">
        <div className="container">
          <div className="row">
          {
            aboutDatas.map((data,i) => (
              <div key={data.src} className="col-sm-12 col-md-3 col-lg-3 p-4">
                <a>
                <img 
                  src= {data.src}
                  className="mb-2" alt="" />
                  <p className="title mb-0">{data.title}</p>
                  <p className="statement">{data.statement}</p>
                </a>
              </div> 
            )) 
          }
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  aboutDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string
  }))
}

About.defaultProps = {
  aboutDatas:[] 
}

export default About
