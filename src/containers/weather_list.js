import React from 'react';
import { connect } from 'react-redux'
import Chart from '../components/chart.js'
import GoogleMaps from '../components/google_map.js'

class WeatherList extends React.Component {

  renderWeather(cityData){

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const hum = cityData.list.map(weather => weather.main.humidity);

    const {lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td><GoogleMaps lat={lat} lon={lon}/></td>
        <td>
          <Chart data={temps} color={'red'}/>
        </td>
        <td>
          <Chart data={pressure} color={'blue'}/>
        </td>
        <td>
          <Chart data={hum} color={'green'}/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  };

};

function mapStateToProps(state) {
  //state.weather because we declared it as such in the reducer
  return { weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
