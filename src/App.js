import React, { Component } from 'react';
import './App.css';

import Header from './react_components/header/index.js'
import ScrollBtn from './react_components/ScrollBtn.js'
import Footer from './react_components/footer/index.js'
import Content from './react_components/content/index.js'

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
