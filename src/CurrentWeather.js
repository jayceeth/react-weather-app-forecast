import React from "react";
import FormatDate from "./FormatDate";
import CurrentTemperature from "./CurrentTemperature";
import "./CurrentWeather.css"


export default function CurrentWeather(props){
    return(
        <div className = "Weather">
            <div className="CurrentWeather">
                    <h1>{props.data.city}</h1>
                        <ul>
                            <li><FormatDate date={props.data.date} /></li>
                            <li className="text-capitalize">{props.data.description}</li>
                        </ul>
                               <img
                                src={props.data.icon}
                                alt={props.data.description}
                                width={100}
                                />
                            <CurrentTemperature imperial={props.data.temperature} className="Temperature"/>
                        <br />
                        <ul className="WeatherCondition">
                            <li className="humidity">Humidity: {props.data.humidity}%</li>
                            <li className="wind">Wind: {props.data.wind} mph</li>
                        </ul>
            </div>
        </div>
    )
}