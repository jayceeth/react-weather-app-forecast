import React from "react";
import "./ForecastOne.css";
import axios from "axios";

export default function ForecastOne(props){
    function handleResponse(response){
        console.log(response.data)
    }
    console.log('props', props)
    let apiKey ="f0229aa4803b78f326fa1951e4c8d9a5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unit=imperial`
    axios.get(apiURL).then(handleResponse);
    return(
    
        <div className="ForecastOne">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">Sun</div>
                    <div className="Forecast-icon">
                             <img
                                src={props.data.icon}
                                />
                    </div>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-temperature-max">80°</span>
                        <span className="Forecast-temperature-min">50°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}