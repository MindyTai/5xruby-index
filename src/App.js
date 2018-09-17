import React, { Component } from 'react'
import  {BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'
import Content from './components/Content/IndexPage' 
import ContactContent from './components/Content/ContactPage'
import Courses from './components/Content/CoursesPage'
import Training from './components/Content/TrainingPage'
import Spacing from './components/Content/SpacePage'
import PostsPage from './components/Content/PostsPage'
import Showcases from './components/Content/ShowcasesPage'
import About from './components/Content/AboutPage'
import Press from './components/Content/PressPage'
import Members from './components/Content/MembersPage'
import Qna from './components/Content/QnaPage'
import Privacy from './components/Content/PrivacyPage/index.jsx'
import Service from './components/Content/ServicePage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/contact' component={ContactContent} />
            <Route path='/courses' component={Courses} />
            <Route path='/training' component={Training} />
            <Route path='/spacing' component={Spacing} />
            <Route path='/posts' component={PostsPage} />
            <Route path='/showcases' component={Showcases} />
            <Route path='/about' component={About} />
            <Route path='/press' component={Press} />
            <Route path='/members' component={Members} />
            <Route path='/qna' component={Qna} />
            <Route path='/privacy' component={Privacy} />
            <Route path='/service' component={Service} />
          </Switch>
          <Footer />
          <ScrollBtn />
        </div>
      </BrowserRouter>          
    )
  }
}

export default App
