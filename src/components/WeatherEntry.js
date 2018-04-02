import React from 'react';
import PropTypes from 'prop-types';
import './styles/WeatherEntry.css';

//for mapping
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];

class WeatherEntry extends React.Component {
  prettyDate(dateStr) {
    const realDate = new Date(dateStr); 
    return days[realDate.getDay()] + ', ' + months[realDate.getMonth()] + ' ' + realDate.getDate();
  }

  render(){
    return(
      <div className='weather-list-entry'>
        <img src={process.env.PUBLIC_URL + '/weather-icons/' + this.props.oneDayData.weather[0].icon + ".svg"}></img>
        <p>{this.prettyDate(this.props.oneDayData.dt_txt)}</p>
      </div>
    );
  }
}

WeatherEntry.propTypes = {
  oneDayData: PropTypes.object.isRequired
}

export default WeatherEntry;