import axios from 'axios'; //for making ajax requests

const API_KEY = '7eb37a4c2fc90077d364ea2c762dabcd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//ajax request in redux
//Requires middleware - functions that take an action and depending on the actions,
//it will do a number of things before it reaches the reducer

//This is so theres no room for error when reusing
export const FETCH_WEATHER = 'FETCH_WEATHER'

//action thats responsible for making the api request for fetching weather data
export function fetchWeather(city_name) {
  //ajax request
  const url = `${ROOT_URL}&q=${city_name},us`;

  //returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };

};
