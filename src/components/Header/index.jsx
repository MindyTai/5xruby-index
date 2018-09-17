import React from 'react'
import $ from 'jquery'
import logoUrl from  '../../img/logo.png'
import  {NavLink} from 'react-router-dom'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hambergerBarOpened : false,
    }
  }

componentDidMount(){
  window.addEventListener("scroll",this.toggleLangSignIn)
}

componentWillUnmount(){
  window.removeEventListener('scroll',this.toggleLangSignIn)
}

toggleLangSignIn(){
  const $langSignIn = $("#lang-sign-in")
  const scrollTop = $(window).scrollTop()

  if(scrollTop >= 40) {
    $langSignIn.addClass("active")
 }else{
   $langSignIn.removeClass("active")
 }
}
  
render() {
  const hambergerActiveClass = this.state.hambergerBarOpened ? "active": ""
  return (
    <header>   
      <div className="nav-bar m-0 p-0">
        <div className="container-fluid">
          <div className="row mr-0" id="lang-sign-in">
            <ul className="m-0 p-0">
              <li className="pb-0"><a>English</a></li>
              <li className="pb-0"><a>日本語</a></li>
            </ul>
          </div>
          <div className="row menu ml-0 mr-0">
            <a href="/" className="col-sm-4 col-md-3 col-lg-3">
              <img  
               src={logoUrl} 
               className="p-3" 
               alt="logo" 
              />
            </a>
            <ul className="col-sm-9 col-md-9 col-lg-9 list m-0">
              <li>
                <NavLink to ="/courses">近期開課</NavLink>
              </li>
              <li>
                <NavLink to ="/showcases">專案開發</NavLink>
              </li>
              <li>
                <NavLink to ="/training">企業代訓</NavLink>
              </li>
              <li>
                <NavLink to ="/spacing">空間租借</NavLink>
              </li>
              <li>
                <NavLink to ="/posts">最新消息</NavLink>
              </li>
            </ul>  
            <div
              className="sm-hamberger-bar" 
              onClick={() => (this.setState({
                  hambergerBarOpened: !this.state.hambergerBarOpened,
              }))} 
            />
          </div>
          <div className={`nav-collapse ${hambergerActiveClass}`}>
            <div className={`sign-in ${hambergerActiveClass}`}>
              <ul className="language-list">
                <li><a>English</a></li>
                <li><a>日本語</a></li>
              </ul>
              <ul className="navList">
                <li><a href="/courses">近期開課</a></li>
                <li><a href="/showcases">專案開發</a></li>
                <li><a href="/training">企業代訓</a></li>
                <li><a href="/spacing">空間租借</a></li>
                <li><a href="/posts">最新消息</a></li> 
              </ul>
            </div>
          </div>
        </div>       
      </div>
    </header>
    )
  }
}

export default Header