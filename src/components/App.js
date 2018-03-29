import React, { Component } from 'react';
import Header from './Header.js'
import CityInput from './CityInput.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header displayText='main header'>
          <CityInput inputClass='horizontal' />
        </Header> 
        <CityInput inputClass='vertical' />
      </div>
    );
  }
}

export default App;
