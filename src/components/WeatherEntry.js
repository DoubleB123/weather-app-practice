import React from 'react';
import PropTypes from 'prop-types';
import './styles/WeatherEntry.css';

//for mapping days of week to actual day string
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
//assume user is in PST
const timeDiff = 7;

class WeatherEntry extends React.Component {
  prettyDate(dateStr) {
    const realDate = new Date(dateStr); 
    //convert time zone
    realDate.setHours(realDate.getHours() - timeDiff);
    return days[realDate.getDay()] + ', ' + months[realDate.getMonth()] + ' ' + realDate.getDate();
  }

  render(){
    return(
      <div className='weather-list-entry'>
        <img className='weather-entry-image' alt={this.props.oneDayData.weather[0].icon} src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.oneDayData.weather[0].icon + ".svg"}></img>
        <p className='weather-entry-p'>{this.prettyDate(this.props.oneDayData.dt_txt)}</p>
      </div>
    );
  }
}

WeatherEntry.propTypes = {
  oneDayData: PropTypes.object.isRequired
}

export default WeatherEntry;