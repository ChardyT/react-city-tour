import React, { Component } from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <main className="content">
              <Navbar />
              <TourList />   
          </main>
      </div>
    );
  }
}

export default App;
