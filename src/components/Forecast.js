import React from 'react';
import './styles/Header.css';
import './styles/CityInput.css' ;
import './styles/Forecast.css';
import Header from './Header.js';
import CityInput from './CityInput.js';
import Loading from './Loading.js';
import queryString from 'query-string';
import axios from 'axios';

const APIKEY = 'fe60cbb8648c979c422e7c0dc22ce3cf';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      location: props.location
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.state.location.search);
    const currentWeatherStr = 'http://api.openweathermap.org/data/2.5/weather?zip=' + parsed.zip +'&type=accurate&APPID=' + APIKEY;
    const forecastStr = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + parsed.zip + '&APPID=' + APIKEY;

      /*
    axios.get(currentWeatherStr)
      .then(data => {
        this.setState({
          loading: false
        })
        console.log(data);
      });
      */
    axios.get(forecastStr)
      .then(data => {
        console.log(data);
        this.setState({
          loading: false
        })
      })
      .catch(err => {
        console.warn(err);
      })
  }

  render() {
    return (
      <div className='forecast'>
        <Header displayText='forecast header'>
          <CityInput inputClass='horizontal' />
        </Header> 
        {this.state.loading && <Loading displayText='Loading'/>}
      </div>
    );
  }
}

export default Forecast;