import React from "react";
import PropTypes from "prop-types";

const Showcases = (props) => {
  const {showcaseDatas} = props;
  return(
    <section className="showcases pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <h5 className="pt-5 text-center">案例作品 Showcase</h5>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex pt-5 showcases-content">
            {
            showcaseDatas.map((data)=>(
              <div key={data.src} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pb-4 showcasesBox">
                <div className="showcases-wrap">
                  <img 
                    src={data.src}
                    alt=""
                  />
                  <div className="p-2">
                    <p className="title mb-2 pt-2 font-weight-bold text-left">{data.title}</p>
                    <div className="statement float-left text-left">{data.statement}</div>
                  </div>
                </div>
              </div>
              )
            )
          }
          </div>   
        </div>
        <p className="more float-right"><a href="/showcases">...更多案例</a></p>
      </div>
    </section>
  );
};

Showcases.propTypes = {
  showcaseDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string
  }))
};

Showcases.defaultProps = {
  showcaseDatas: []
};

export default Showcases;