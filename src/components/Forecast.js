import React from 'react';
import './styles/Header.css' 
import './styles/CityInput.css' 
import './styles/Forecast.css'
import Header from './Header.js'
import CityInput from './CityInput.js'

class Forecast extends React.Component {
  render() {
    return (
      <div className='forecast'>
        <Header displayText='forecast header'>
          <CityInput inputClass='horizontal' />
        </Header> 
        <p>Forecast</p>
      </div>
    );
  }
}

export default Forecast;