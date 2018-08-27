import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import ScrollBtn from './components/ScrollBtn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
        <ScrollBtn />
      </div>
    );
  }
}

export default App
