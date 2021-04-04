import React from "react";
export default function WeatherForecastDaily(props){
    function maxTemp(){
        let temp =Math.round(props.data.temp.max);
        return `${temp}°`
    }
     function minTemp(){
        let temp =Math.round(props.data.temp.min);
        return `${temp}°`
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed","Thu","Fri","Sat"];
        return days[day];
    }
    return (
        <div className="WeatherForecastDaily">
            <div className="Forecast-day">{day()}</div>
            <div className="Forecast-icon">
                 <img
                 src= {`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                 alt = {props.data.description} 
                 width = {50}/>
            </div>
                <div className="Forecast-temperatures">
                <span className="Forecast-temperature-max">{maxTemp()}</span>
                <span className="Forecast-temperature-min">{minTemp()}</span>
                </div>
            </div>
    )
}