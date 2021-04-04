import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import ForecastOne from "./ForecastOne";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityName(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiKey = "f0229aa4803b78f326fa1951e4c8d9a5";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityName}
              />
            </div>
            <div className="col-2">
              <div className="searchButton">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
        <ForecastOne coordinates={weatherData.coordinates} data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return <p> Loading...</p>;
  }
}
