import React from 'react'

import showcasepic1 from '../../img/showcase-1.png'
import showcasepic2 from '../../img/showcase-2.png'
import showcasepic3 from '../../img/showcase-3.jpg'

const Showcases = () => {
  return(
    <section className="showcases pb-5">
      <div className="container">
        <div className="row justify-content-center">
        <h5 className="pt-5 text-center">案例作品 Showcase</h5>
        <div className="col-sm-12 col-md-12 col-lg-12 d-flex pt-5 lectures-content">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pb-4">
            <div className="showcases-wrap">
              <img 
              src={showcasepic1} 
              alt="" />
              <div className="p-2">
                <p className="title mb-2 pt-2 font-weight-bold text-left">SpaceNextDoor</p>
                <div className="statement float-left text-left">Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.</div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pb-4">
            <div className="showcases-wrap">
              <img 
              src={showcasepic2} 
              alt="" />
              <div className="p-2">
                <p className="title mb-2 pt-2 font-weight-bold text-left">Shopmatic Go app</p>
                <div className="statement float-left text-left">Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes.</div>  
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pb-4">
            <div className="showcases-wrap third">
              <img 
              src={showcasepic3} 
              alt="" />
              <div className="p-2">
                <p className="title mb-2 pt-2 font-weight-bold text-left">跨境電子商務 Shopmatic</p>
                <div className="statement float-left text-left">Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online.</div>  
              </div>
            </div>
          </div>
        </div>   
      </div>
      <p className="more float-right"><a>...更多案例</a></p>
    </div>
  </section>
  )
}

export default Showcases