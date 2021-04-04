import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className = "container">
        <div className="weatherAppContainer">
          <Weather defaultCity = {"San Francisco"} />
       </div>
       <footer><a href="https://github.com/jayceeth/react-weather-app-forecast">Open-sourced </a> by Jaycee Huynh
          </footer>
      </div>
    </div>)
}

export default App;
