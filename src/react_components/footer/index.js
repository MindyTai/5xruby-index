import React from 'react'
import pressUrl from '../../img/press-img.png'

const Footer = () => {
  return (
      <footer className="p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img 
              className="mb-3" 
              src={pressUrl} 
              alt="press-img" />
            </div>
            <div className="col-sm-9 col-md-8 col-lg-8">
              <div className="footer-list">
                <ul>
                  <li className="p-0"><a>關於五倍紅寶石</a></li>
                  <li><a>媒體報導</a></li>
                  <li><a>團隊成員</a></li>
                  <li><a>聯絡詢價</a></li>
                  <li><a>常見問題</a></li>
                  <li><a>工作機會</a></li>
                  <li><a>網站原始碼</a></li>
                  <li><a>隱私權條款</a></li>
                  <li><a>服務條款</a></li>
                </ul>
              </div>
            <div className="footer-info">
              <div className="col-sm-12 col-md-12 col-lg-12 info p-0">
                <div className="col-sm-12 col-md-4 col-lg-6 left-part pt-3 pb-3">
                  <strong>02-2331-5247</strong>
                  <br />
                  <small>Mon - Fri / 09:30 - 22:00</small>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/5xruby">
                      <i className="fa fa-facebook mt-2 mr-2" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/5xruby">
                      <i className="fa fa-twitter mt-2 mr-2" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/5xruby">
                      <i className="fa fa-github mt-2 mr-2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-6 right-part pt-3 pb-3">
                  <p>有任何問題？ <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a></p>
                  <div className="address" target="_blank" href="https://goo.gl/lz5v93">地址：<a>10046 台北市中正區衡陽路 7 號 5 樓</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="company text-center pt-3 mx-auto"> © 2017 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)<br />台北市短期補習班立案 第 7594 號</p>
        </div>
      </div> 
    </footer>
  )
}
 
export default Footer