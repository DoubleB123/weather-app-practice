import React from 'react';
import './styles/Header.css' 
import './styles/CityInput.css' 
import './styles/Home.css'
import Header from './Header.js'
import CityInput from './CityInput.js'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Header displayText='React Weather App'>
          <CityInput inputClass='horizontal' />
        </Header> 
        <CityInput inputClass='vertical' />
      </div>
    );
  }
}

export default Home;
