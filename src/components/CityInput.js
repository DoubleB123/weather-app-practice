import React from 'react';
import './styles/styles.css' 

class CityInput extends React.Component {
  render() {
    return (
      <div>
        <ul className='city-input-list'>
          <li>
            <h3 className='city-input-header'>Enter a City and State</h3>
          </li>
          <li>
            <input className='city-input-input' type='text' placeholder='Houston, Texas'></input>
          </li>
          <li>
            <button className='city-input-button'>Get Weather</button>
          </li>
        </ul>
      </div>
    );
  }
}


export default CityInput