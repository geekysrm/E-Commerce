import React, { Component } from 'react';
import PhotoSlide from './components/App/photoSlide.js'
import DealsOfTheDay from './components/App/DealsOfTheDay.js'
import NavBar1 from './components/App/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoSlide />
        <DealsOfTheDay />
      </div>
    );
  }
}

export default App;
