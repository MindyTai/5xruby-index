import React from 'react';
import PropTypes from 'prop-types'

const Lectures = (props)=> {
  const { lectureDatas } = props

  return(
    <section className="lectures pb-5"> 
      <div className="container">
        <div className="row justify-content-center">
          <h5 className="pt-5">近期講座</h5>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex pt-5 lectures-content">
          {
            lectureDatas.map((data,i)=>(
              <div key={data.src} className="col-sm-12 col-md-6 col-lg-4 pb-4">
                <div className="lecture-wrap ">
                    <img 
                    src={data.src} 
                    alt="" />
                    <div className="p-2">
                      <p className="title mb-2 font-weight-bold text-left">{data.title}</p>
                      <span className="badge badge-warning float-left">{data.state}}</span><br /><span className="time float-left mb-2 ">{data.time}</span>
                      <div className="statement float-left text-left">{data.statement}</div>
                      <span className="speaker float-left mt-3 text-left">講者：{data.lecturer}  | 時數： {data.hours}</span>
                    </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
        <p className="more float-right"><a>...更多講座</a></p>
      </div>
    </section>
  )
}

Lectures.propTypes = {
  lectureDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.string,
    statement: PropTypes.string,
    lecturer: PropTypes.string,
    hours: PropTypes.string
  }))
}

Lectures.defaultProps = {
  lectureDatas: []
}

export default Lectures