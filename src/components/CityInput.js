import React from 'react';
import './styles/CityInput.css' 
import PropTypes from 'prop-types';
import axios from 'axios';

const APIKEY = 'fe60cbb8648c979c422e7c0dc22ce3cf';

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      city: event.target.value 
    })
  }

  handleSubmit(event) {
    console.log('submited ' + this.state.city);
    const currentWeatherStr = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.city +'&type=accurate&APPID=' + APIKEY;
    const forecastStr = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + this.state.city + '&APPID=' + APIKEY;
    axios.get(currentWeatherStr)
      .then(data => {
        console.log(data);
      });
      /*
    axios.get(forecastStr)
      .then(data => {
        console.log(data);
      });
      */
  }

  render() {
    return (
      <div>
        <ul className={'city-input-list-' + this.props.inputClass}>
          <li className={this.props.inputClass}>
            <h3 className={'city-input-header-' + this.props.inputClass}>Enter a Zip Code</h3>
          </li>
          <li className={this.props.inputClass}>
            <input className={'city-input-input-' + this.props.inputClass} 
              type='text' placeholder='90254'
              value={this.state.city} onChange={this.handleChange}>
            </input>
          </li>
          <li className={this.props.inputClass}>
            <button className={'city-input-button-' + this.props.inputClass}
              onClick={this.handleSubmit} 
            >Get Weather</button>
          </li>
        </ul>
      </div>
    );
  }
}

CityInput.propTypes = {
  inputClass: PropTypes.string.isRequired
} 

export default CityInput