import React, { Component } from 'react';
import Header from './Header.js'
import CityInput from './CityInput.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CityInput />
      </div>
    );
  }
}

export default App;
