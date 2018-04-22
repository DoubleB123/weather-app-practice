import React from 'react';
import Header from './Header.js';
import CityInput from './CityInput.js';
import WeatherEntry from './WeatherEntry.js';
import './styles/Detail.css';
import PropTypes from 'prop-types';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    return (
      <div className='detail'>
        <Header displayText='React Weather App'>
          <CityInput inputClass='horizontal' />
        </Header> 
        <div className='weather-stats'>
          <WeatherEntry oneDayData={this.state} />
          <p>{this.state.weather[0].description}</p>
          <p>{'min temp: ' + parseFloat(((this.state.main.temp_min - 273.15) * 1.8 + 32)).toFixed(1) + ' \xB0F'}</p>
          <p>{'max temp: ' + parseFloat(((this.state.main.temp_max - 273.15) * 1.8 + 32)).toFixed(1) + ' \xB0F'}</p>
          <p>{'humidity: ' + this.state.main.humidity + '%'}</p>
        </div>
      </div>

    );

  }
}

WeatherEntry.propTypes = {
  oneDayData: PropTypes.object.isRequired
}

export default Detail;
