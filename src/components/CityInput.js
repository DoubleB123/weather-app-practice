import React from 'react';
import './styles/CityInput.css' 
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      city: event.target.value 
    })
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
              type='text' 
              value={this.state.city} onChange={this.handleChange}>
            </input>
          </li>
          <li className={this.props.inputClass}>
            <Link className={'button city-input-button-' + this.props.inputClass}
                  to={{
                    pathname: '/forecast',
                    search: '?zip=' + this.state.city
                  }}
            >Get Weather
            </Link>
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
