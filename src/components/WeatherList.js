import React from 'react';
import WeatherEntry from './WeatherEntry.js'
import PropTypes from 'prop-types';
import './styles/WeatherList.css';
import {Link} from 'react-router-dom';
//import './styles/Header.css';

class WeatherList extends React.Component {
  render(){
    return(
      <div className='weather-list-div'>
        <h2>{this.props.fiveDayData.city.name + "'s Weather"}</h2>
          <ul className='weather-list'>
              {this.props.fiveDayData.list.filter((val,ind) => !(ind %8))
                .map(val => {
                  return (
                    <Link key={val.dt} to={{
                      pathname: "/detail/" + val.dt,
                      state: val 
                      }}
                      params={val}>
                      <li><WeatherEntry oneDayData={val} /></li>
                    </Link>
                  )
                })}
          </ul>
      </div>
    );
  }
}

WeatherList.propTypes = {
  fiveDayData: PropTypes.object.isRequired,
}

export default WeatherList;