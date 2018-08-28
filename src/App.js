import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import Content from './components/Content/IndexPage'
import ScrollBtn from './components/ScrollBtn'
import ContactContent from './components/Content/ContactPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Content /> */}
        <ContactContent />
        <Footer />
        <ScrollBtn />
      </div>
    );
  }
}

export default App
