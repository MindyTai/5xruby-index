import React from 'react';

import lecturepic1 from '../../img/lecture-1.jpg'
import lecturepic2 from '../../img/lecture-2.jpg'
import lecturepic3 from '../../img/lecture-3.jpg'

const Lectures = ()=> {
  return(
    <section className="lectures pb-5"> 
      <div className="container">
        <div className="row justify-content-center">
          <h5 className="pt-5">近期講座</h5>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex pt-5 lectures-content">
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="lecture-wrap ">
                  <img 
                  src={lecturepic1 } 
                  alt="" />
                  <div className="p-2">
                    <p className="title mb-2 font-weight-bold text-left">網頁前端設計女性專班 - 台北夜間平日班</p>
                    <span className="badge badge-warning float-left">即將開講</span><br /><span className="time float-left mb-2 ">2018-08-18</span>
                    <div className="statement float-left text-left">好評不斷，口碑加開，五倍紅寶石再度開辦女性專班！在彼此身旁都是女性的環境裡，女孩們一起交流討論，不再因為「男生才會寫程式」的想法而害怕與同學交流，講師以活潑有趣的方式一步一步耐心指導，穩紮穩打網頁前端基礎，並有助教課幫助課後吸收，讓妳從零基礎前進網頁設計師之路。</div>
                    <span className="speaker float-left mt-3 text-left">講者： 李建杭 (Amos Lee)  | 時數： 42.0</span>
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pb-4">
              <div className="lecture-wrap">
                <img 
                src={lecturepic2 } 
                alt="" />
                <div className="p-2">
                  <p className="title mb-2 font-weight-bold text-left">網頁前端設計女性專班 - 台北夜間平日班</p>
                  <span className="badge badge-warning float-left">即將開講</span><br /><span className="time float-left mb-2">2018-08-18</span>
                  <div className="statement float-left text-left">好評不斷，口碑加開，五倍紅寶石再度開辦女性專班！在彼此身旁都是女性的環境裡，女孩們一起交流討論，不再因為「男生才會寫程式」的想法而害怕與同學交流，講師以活潑有趣的方式一步一步耐心指導，穩紮穩打網頁前端基礎，並有助教課幫助課後吸收，讓妳從零基礎前進網頁設計師之路。</div>
                  <span className="speaker float-left mt-3 text-left">講者： 李建杭 (Amos Lee)  | 時數： 42.0</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 pb-4">
              <div className="lecture-wrap third">
                <img 
                src={lecturepic3 } 
                alt="" />
                <div className="p-2">
                  <p className="title mb-2 font-weight-bold text-left">網頁前端設計女性專班 - 台北夜間平日班</p>
                  <span className="badge badge-warning float-left">即將開講</span><br /><span className="time float-left mb-2">2018-08-18</span>
                  <div className="statement float-left text-left">好評不斷，口碑加開，五倍紅寶石再度開辦女性專班！在彼此身旁都是女性的環境裡，女孩們一起交流討論，不再因為「男生才會寫程式」的想法而害怕與同學交流，講師以活潑有趣的方式一步一步耐心指導，穩紮穩打網頁前端基礎，並有助教課幫助課後吸收，讓妳從零基礎前進網頁設計師之路。</div>
                  <span className="speaker float-left mt-3 text-left">講者： 李建杭 (Amos Lee)  | 時數： 42.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="more float-right"><a>...更多講座</a></p>
      </div>
    </section>
  )
}

export default Lectures