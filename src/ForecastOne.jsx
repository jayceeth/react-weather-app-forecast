import React, { useState, useEffect } from "react";
import "./ForecastOne.css";
import WeatherForecastDaily from "./WeatherForecastDaily";
import axios from "axios";

export default function ForecastOne(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastOne">
        <div className="row">
          {forecast.map(function (dailyForecastOne, index) {
            if (index < 6) {
              return (
                <div className="col-4 weather-forecast-one" key={index}>
                  <WeatherForecastDaily data={dailyForecastOne} />
                </div>
              );
            }
            return <></>;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "f0229aa4803b78f326fa1951e4c8d9a5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
