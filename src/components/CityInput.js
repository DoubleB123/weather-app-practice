import React from 'react';
import './styles/CityInput.css' 
import PropTypes from 'prop-types';

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
    console.log('submited' + this.state.city);
  }

  render() {
    return (
      <div>
        <ul className={'city-input-list-' + this.props.inputClass}>
          <li className={this.props.inputClass}>
            <h3 className={'city-input-header-' + this.props.inputClass}>Enter a City and State</h3>
          </li>
          <li className={this.props.inputClass}>
            <input className={'city-input-input-' + this.props.inputClass} 
              type='text' placeholder='Houston, Texas'
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