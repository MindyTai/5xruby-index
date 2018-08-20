import React from 'react'

import fbicon from '../../img/fb-icon.png'
import twittericon from '../../img/twitter-icon.png'

const KnowUs = ()=> {
  return(
    <section className="know-us pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
            <p className="text text-center mb-4 mt-4">你可以看看 <a className="text-red" href="/faq">常見問題</a> 或者直接 <a className="text-red" href="/contacts">線上洽詢</a> ，會有親切的客服回答你的問題，<br /> 也可以透過社群網站隨時關注我們的動態。</p>
          </div>
          <div className="social-btn bottom-spacing-lg mx-auto mb-5">
            <a target="_blank"  href="https://www.facebook.com/5xruby">
            <img 
            src={fbicon} 
            className="mr-3" 
            alt="Icon fb" />
            </a>
            <a target="_blank"  href="https://twitter.com/5xruby">
            <img 
            src={twittericon} 
            alt="Icon twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowUs