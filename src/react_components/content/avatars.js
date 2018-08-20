import React from 'react'

import avatarpic1 from '../../img/avatar-1.jpg'
import avatarpic2 from '../../img/avatar-2.jpg'
import avatarpic3 from '../../img/avatar-3.jpg'
import avatarpic4 from '../../img/avatar-4.jpg'
import avatarpic5 from '../../img/avatar-5.jpg'
import avatarpic6 from '../../img/avatar-6.jpg'
import avatarpic7 from '../../img/avatar-7.jpg'

const Avatars = ()=>{
  return(
    <section className="avatar">
      <div className="avatar-slide p-3 mt-5 mb-5 active">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic1} 
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic2} 
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic3}
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic4}
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic5}
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic6}
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="avatar-slide p-3 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <img 
              src={avatarpic7}
              alt="" />
            </div>
            <div className="col-sm-9 col-md-10 col-lg-10">
              <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
              <span className="name">Victor Lam</span>
              <br />
              <span className="title">連續創業家，自由工作者</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 pt-5">
        <ul className="d-flex justify-content-center avatar-list">
          <li data-slider-to="0" className="active"></li>
          <li data-slider-to="1"></li>
          <li data-slider-to="2"></li>
          <li data-slider-to="3"></li>
          <li data-slider-to="4"></li>
          <li data-slider-to="5"></li>
          <li data-slider-to="6"></li>
        </ul>
      </div>
    </section>
  )
}

export default Avatars