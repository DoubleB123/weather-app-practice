import React from 'react';
import './styles/CityInput.css' 
import PropTypes from 'prop-types';

class CityInput extends React.Component {
  render() {
    return (
      <div>
        <ul className={'city-input-list-' + this.props.inputClass}>
          <li className={this.props.inputClass}>
            <h3 className={'city-input-header-' + this.props.inputClass}>Enter a City and State</h3>
          </li>
          <li className={this.props.inputClass}>
            <input className={'city-input-input-' + this.props.inputClass} type='text' placeholder='Houston, Texas'></input>
          </li>
          <li className={this.props.inputClass}>
            <button className={'city-input-button-' + this.props.inputClass}>Get Weather</button>
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