import React from 'react';
import './styles/Header.css';
import './styles/CityInput.css' ;
import './styles/Forecast.css';
import Header from './Header.js';
import CityInput from './CityInput.js';
import Loading from './Loading.js';
import WeatherList from './WeatherList.js';
import queryString from 'query-string';
import axios from 'axios';

const APIKEY = 'fe60cbb8648c979c422e7c0dc22ce3cf';
//assume user is in pst
const timeDiff = 7;

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      location: props.location
    }
    this.data = null;
  }

  getData() {
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
        this.data = data;
        this.setState({
          loading: false
        })
      })
      .catch(err => {
        console.warn(err);
      })
  }

  componentDidMount() {
    this.getData();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      loading: true,
      location: nextProps.location
    }, () => this.getData());
  }

  render() {
    return (
      <div className='forecast'>
        <Header displayText='forecast header'>
          <CityInput inputClass='horizontal' />
        </Header> 
        {this.state.loading && <Loading displayText='Loading'/>}
        {!this.state.loading && <WeatherList fiveDayData={this.data.data} />}
      </div>
    );
  }
}

/*
const data =  {
  "data": {
    "cod": "200",
    "message": 0.0036,
    "cnt": 40,
    "list": [
      {
        "dt": 1522702800,
        "main": {
          "temp": 296.9,
          "temp_min": 293.817,
          "temp_max": 296.9,
          "pressure": 921.96,
          "sea_level": 1025.76,
          "grnd_level": 921.96,
          "humidity": 44,
          "temp_kf": 3.08
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 2.3,
          "deg": 245.001
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-02 21:00:00"
      },
      {
        "dt": 1522713600,
        "main": {
          "temp": 293.08,
          "temp_min": 291.024,
          "temp_max": 293.08,
          "pressure": 922.46,
          "sea_level": 1026.41,
          "grnd_level": 922.46,
          "humidity": 49,
          "temp_kf": 2.05
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 2.31,
          "deg": 224.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-03 00:00:00"
      },
      {
        "dt": 1522724400,
        "main": {
          "temp": 289.12,
          "temp_min": 288.097,
          "temp_max": 289.12,
          "pressure": 923.19,
          "sea_level": 1027.67,
          "grnd_level": 923.19,
          "humidity": 50,
          "temp_kf": 1.03
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.02,
          "deg": 229
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-03 03:00:00"
      },
      {
        "dt": 1522735200,
        "main": {
          "temp": 286.181,
          "temp_min": 286.181,
          "temp_max": 286.181,
          "pressure": 922.85,
          "sea_level": 1027.73,
          "grnd_level": 922.85,
          "humidity": 37,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.11,
          "deg": 237.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-03 06:00:00"
      },
      {
        "dt": 1522746000,
        "main": {
          "temp": 284.635,
          "temp_min": 284.635,
          "temp_max": 284.635,
          "pressure": 922.11,
          "sea_level": 1027.25,
          "grnd_level": 922.11,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.91,
          "deg": 231.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-03 09:00:00"
      },
      {
        "dt": 1522756800,
        "main": {
          "temp": 285.53,
          "temp_min": 285.53,
          "temp_max": 285.53,
          "pressure": 922.48,
          "sea_level": 1028.02,
          "grnd_level": 922.48,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.06,
          "deg": 232.015
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-03 12:00:00"
      },
      {
        "dt": 1522767600,
        "main": {
          "temp": 293.67,
          "temp_min": 293.67,
          "temp_max": 293.67,
          "pressure": 922.68,
          "sea_level": 1026.75,
          "grnd_level": 922.68,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.56,
          "deg": 227.005
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-03 15:00:00"
      },
      {
        "dt": 1522778400,
        "main": {
          "temp": 296.127,
          "temp_min": 296.127,
          "temp_max": 296.127,
          "pressure": 921.74,
          "sea_level": 1025.08,
          "grnd_level": 921.74,
          "humidity": 41,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 3.41,
          "deg": 223.004
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-03 18:00:00"
      },
      {
        "dt": 1522789200,
        "main": {
          "temp": 295.425,
          "temp_min": 295.425,
          "temp_max": 295.425,
          "pressure": 920.35,
          "sea_level": 1023.27,
          "grnd_level": 920.35,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 3.37,
          "deg": 224.001
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-03 21:00:00"
      },
      {
        "dt": 1522800000,
        "main": {
          "temp": 292.764,
          "temp_min": 292.764,
          "temp_max": 292.764,
          "pressure": 919.5,
          "sea_level": 1022.5,
          "grnd_level": 919.5,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 3.36,
          "deg": 211.503
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-04 00:00:00"
      },
      {
        "dt": 1522810800,
        "main": {
          "temp": 291.805,
          "temp_min": 291.805,
          "temp_max": 291.805,
          "pressure": 920.03,
          "sea_level": 1023.47,
          "grnd_level": 920.03,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 3.76,
          "deg": 218.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-04 03:00:00"
      },
      {
        "dt": 1522821600,
        "main": {
          "temp": 290.914,
          "temp_min": 290.914,
          "temp_max": 290.914,
          "pressure": 918.62,
          "sea_level": 1022.27,
          "grnd_level": 918.62,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 4.06,
          "deg": 229.002
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-04 06:00:00"
      },
      {
        "dt": 1522832400,
        "main": {
          "temp": 288.442,
          "temp_min": 288.442,
          "temp_max": 288.442,
          "pressure": 917.45,
          "sea_level": 1021.93,
          "grnd_level": 917.45,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 2.92,
          "deg": 241.51
        },
        "rain": {
          "3h": 1.59
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-04 09:00:00"
      },
      {
        "dt": 1522843200,
        "main": {
          "temp": 285.024,
          "temp_min": 285.024,
          "temp_max": 285.024,
          "pressure": 918.85,
          "sea_level": 1025.08,
          "grnd_level": 918.85,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 3.02,
          "deg": 302.007
        },
        "rain": {
          "3h": 3.91
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-04 12:00:00"
      },
      {
        "dt": 1522854000,
        "main": {
          "temp": 282.67,
          "temp_min": 282.67,
          "temp_max": 282.67,
          "pressure": 920.84,
          "sea_level": 1028.12,
          "grnd_level": 920.84,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 2.85,
          "deg": 318.505
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-04 15:00:00"
      },
      {
        "dt": 1522864800,
        "main": {
          "temp": 281.516,
          "temp_min": 281.516,
          "temp_max": 281.516,
          "pressure": 922.24,
          "sea_level": 1029.73,
          "grnd_level": 922.24,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 3.41,
          "deg": 323.003
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-04 18:00:00"
      },
      {
        "dt": 1522875600,
        "main": {
          "temp": 281.965,
          "temp_min": 281.965,
          "temp_max": 281.965,
          "pressure": 922.11,
          "sea_level": 1029.62,
          "grnd_level": 922.11,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.76,
          "deg": 324.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-04 21:00:00"
      },
      {
        "dt": 1522886400,
        "main": {
          "temp": 278.27,
          "temp_min": 278.27,
          "temp_max": 278.27,
          "pressure": 924.06,
          "sea_level": 1032.56,
          "grnd_level": 924.06,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.36,
          "deg": 324.015
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-05 00:00:00"
      },
      {
        "dt": 1522897200,
        "main": {
          "temp": 276.068,
          "temp_min": 276.068,
          "temp_max": 276.068,
          "pressure": 925.79,
          "sea_level": 1035.55,
          "grnd_level": 925.79,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.91,
          "deg": 326.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-05 03:00:00"
      },
      {
        "dt": 1522908000,
        "main": {
          "temp": 273.435,
          "temp_min": 273.435,
          "temp_max": 273.435,
          "pressure": 926.44,
          "sea_level": 1036.82,
          "grnd_level": 926.44,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.06,
          "deg": 322.006
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-05 06:00:00"
      },
      {
        "dt": 1522918800,
        "main": {
          "temp": 270.732,
          "temp_min": 270.732,
          "temp_max": 270.732,
          "pressure": 926.64,
          "sea_level": 1037.51,
          "grnd_level": 926.64,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.26,
          "deg": 317.008
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-05 09:00:00"
      },
      {
        "dt": 1522929600,
        "main": {
          "temp": 270.688,
          "temp_min": 270.688,
          "temp_max": 270.688,
          "pressure": 928.37,
          "sea_level": 1039.78,
          "grnd_level": 928.37,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.55,
          "deg": 318.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-05 12:00:00"
      },
      {
        "dt": 1522940400,
        "main": {
          "temp": 281.137,
          "temp_min": 281.137,
          "temp_max": 281.137,
          "pressure": 928.77,
          "sea_level": 1038.13,
          "grnd_level": 928.77,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.73,
          "deg": 315.503
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-05 15:00:00"
      },
      {
        "dt": 1522951200,
        "main": {
          "temp": 285.796,
          "temp_min": 285.796,
          "temp_max": 285.796,
          "pressure": 927.53,
          "sea_level": 1035.31,
          "grnd_level": 927.53,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.58,
          "deg": 314.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-05 18:00:00"
      },
      {
        "dt": 1522962000,
        "main": {
          "temp": 287.554,
          "temp_min": 287.554,
          "temp_max": 287.554,
          "pressure": 924.92,
          "sea_level": 1031.65,
          "grnd_level": 924.92,
          "humidity": 28,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.17,
          "deg": 258.002
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-05 21:00:00"
      },
      {
        "dt": 1522972800,
        "main": {
          "temp": 284.225,
          "temp_min": 284.225,
          "temp_max": 284.225,
          "pressure": 924.05,
          "sea_level": 1030.86,
          "grnd_level": 924.05,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.16,
          "deg": 216.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-06 00:00:00"
      },
      {
        "dt": 1522983600,
        "main": {
          "temp": 282.787,
          "temp_min": 282.787,
          "temp_max": 282.787,
          "pressure": 923.9,
          "sea_level": 1031.1,
          "grnd_level": 923.9,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.21,
          "deg": 226.005
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-06 03:00:00"
      },
      {
        "dt": 1522994400,
        "main": {
          "temp": 281.828,
          "temp_min": 281.828,
          "temp_max": 281.828,
          "pressure": 923.57,
          "sea_level": 1031.07,
          "grnd_level": 923.57,
          "humidity": 41,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 3.02,
          "deg": 243.501
        },
        "rain": {
          "3h": 0.0099999999999998
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-06 06:00:00"
      },
      {
        "dt": 1523005200,
        "main": {
          "temp": 281.487,
          "temp_min": 281.487,
          "temp_max": 281.487,
          "pressure": 922.53,
          "sea_level": 1030.14,
          "grnd_level": 922.53,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 3.22,
          "deg": 256.006
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-06 09:00:00"
      },
      {
        "dt": 1523016000,
        "main": {
          "temp": 281.917,
          "temp_min": 281.917,
          "temp_max": 281.917,
          "pressure": 922.26,
          "sea_level": 1029.9,
          "grnd_level": 922.26,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.01,
          "deg": 262
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-06 12:00:00"
      },
      {
        "dt": 1523026800,
        "main": {
          "temp": 287.392,
          "temp_min": 287.392,
          "temp_max": 287.392,
          "pressure": 921.25,
          "sea_level": 1027.52,
          "grnd_level": 921.25,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.46,
          "deg": 261.003
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-06 15:00:00"
      },
      {
        "dt": 1523037600,
        "main": {
          "temp": 289.483,
          "temp_min": 289.483,
          "temp_max": 289.483,
          "pressure": 919.69,
          "sea_level": 1024.69,
          "grnd_level": 919.69,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 2.31,
          "deg": 258.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-06 18:00:00"
      },
      {
        "dt": 1523048400,
        "main": {
          "temp": 289.776,
          "temp_min": 289.776,
          "temp_max": 289.776,
          "pressure": 917.62,
          "sea_level": 1022.14,
          "grnd_level": 917.62,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.97,
          "deg": 249.002
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-06 21:00:00"
      },
      {
        "dt": 1523059200,
        "main": {
          "temp": 286.169,
          "temp_min": 286.169,
          "temp_max": 286.169,
          "pressure": 916.57,
          "sea_level": 1021.6,
          "grnd_level": 916.57,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 3.22,
          "deg": 230
        },
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-07 00:00:00"
      },
      {
        "dt": 1523070000,
        "main": {
          "temp": 287.205,
          "temp_min": 287.205,
          "temp_max": 287.205,
          "pressure": 915.91,
          "sea_level": 1021.81,
          "grnd_level": 915.91,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 4.21,
          "deg": 234
        },
        "rain": {
          "3h": 0.010000000000001
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-07 03:00:00"
      },
      {
        "dt": 1523080800,
        "main": {
          "temp": 286.855,
          "temp_min": 286.855,
          "temp_max": 286.855,
          "pressure": 914.37,
          "sea_level": 1020.92,
          "grnd_level": 914.37,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 3.62,
          "deg": 234.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-07 06:00:00"
      },
      {
        "dt": 1523091600,
        "main": {
          "temp": 283.51,
          "temp_min": 283.51,
          "temp_max": 283.51,
          "pressure": 914,
          "sea_level": 1021.34,
          "grnd_level": 914,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 1.51,
          "deg": 251.002
        },
        "rain": {
          "3h": 3.53
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-04-07 09:00:00"
      },
      {
        "dt": 1523102400,
        "main": {
          "temp": 279.987,
          "temp_min": 279.987,
          "temp_max": 279.987,
          "pressure": 914.93,
          "sea_level": 1023.01,
          "grnd_level": 914.93,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.06,
          "deg": 337.001
        },
        "rain": {
          "3h": 8.1
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-07 12:00:00"
      },
      {
        "dt": 1523113200,
        "main": {
          "temp": 278.705,
          "temp_min": 278.705,
          "temp_max": 278.705,
          "pressure": 917.08,
          "sea_level": 1025.56,
          "grnd_level": 917.08,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 1.41,
          "deg": 8
        },
        "rain": {
          "3h": 0.18
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-07 15:00:00"
      },
      {
        "dt": 1523124000,
        "main": {
          "temp": 279.505,
          "temp_min": 279.505,
          "temp_max": 279.505,
          "pressure": 918.15,
          "sea_level": 1026.75,
          "grnd_level": 918.15,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 1.32,
          "deg": 20.0007
        },
        "rain": {
          "3h": 0.2
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-04-07 18:00:00"
      }
    ],
    "city": {
      "id": 420023233,
      "name": "Asheville",
      "coord": {
        "lat": 35.6009,
        "lon": -82.5541
      },
      "country": "US"
    }
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
    "content-type": "application/json; charset=utf-8"
  },
  "config": {
    "transformRequest": {},
    "transformResponse": {},
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "headers": {
    },
    "method": "get",
    "url": "http://api.openweathermap.org/data/2.5/forecast?zip=28801&APPID=fe60cbb8648c979c422e7c0dc22ce3cf"
  },
  "request": {}
}; 
*/

export default Forecast;