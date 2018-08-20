import React from 'react';

import icon1 from '../../img/icon-1.png'
import icon2 from '../../img/icon-2.png'
import icon3 from '../../img/icon-3.png'
import icon4 from '../../img/icon-4.png'

const About = ()=> {
  return(
    <section className="about">
      <h5 className="pt-5">關於五倍紅寶石 About 5xRuby</h5>
      <div className="icons mt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 p-4">
              <a>
                <img 
                  src={icon1} 
                  className="mb-2" alt="" />
                <p className="title mb-0">課程教學</p>
                <p className="statement">五倍規劃了一系列從入門到中高階的專業網站開發課程，不管是初學或已有基礎，都可以快速上手！</p>
              </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 p-4">
              <a>
                <img 
                  src={icon2} 
                  className="mb-2" alt="" />
                <p className="title mb-0">專案開發</p>
                <p className="statement">從 Ruby、Rails、iOS 的工程服務，到系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。</p>
              </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 p-4">
              <a>
                <img 
                  src={icon3} 
                  className="mb-2" alt="" />
                <p className="title mb-0">技術顧問</p>
                <p className="statement">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
              </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 p-4">
              <a>
                <img 
                  src={icon4} 
                  className="mb-2" alt="" />
                <p className="title mb-0">社群經營</p>
                <p className="statement">追求 Ruby 開發社群的永續經營，致力於舉辦各類活動，促進 Ruby 社群良好發展。</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
