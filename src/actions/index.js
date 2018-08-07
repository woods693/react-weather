import axios from 'axios';

const API_KEY = '7eb37a4c2fc90077d364ea2c762dabcd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//ajax request in redux
//Requires middleware - functions that take an action and depending on the actions,
//it will do a number of things before it reaches the reducer


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city_name) {
  const url = `${ROOT_URL}&q=${city_name},us`;

  //returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };

};
