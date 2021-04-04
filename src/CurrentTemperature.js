import React, {useState} from "react";

export default function CurrentTemperature(props){
    const [unit, setUit] = useState("imperial");
    function displayMetric(event){
        event.preventDefault();
        setUit("metric")

    }
    function displayImperial(event){
        event.preventDefault();
        setUit("imperial")
    }
    if (unit === "imperial"){
        return(
        <div className="CurrentTemperature">
            <span className="temperature">
            {props.imperial}
            </span>
            <span className="unit">
            °F | {" "}
            <a href="/" onClick={displayMetric}>
                °C 
            </a>
            </span>
        </div>
    ) ;
    } else{
        let metric =  (props.imperial - 32)*(5/9)
        return(
             <div className="CurrentTemperature">
            <span className="temperature">
            {Math.round(metric)}
            </span>
            <span className="unit">
            <a href="/" onClick={displayImperial}>°F</a> | {" "}
                °C 
            </span>
        </div>
        )
    }
    
}