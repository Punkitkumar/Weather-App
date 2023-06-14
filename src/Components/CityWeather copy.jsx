import React from "react";
import "../Css/cityWeather.css";
import weatherImage from "../Images/cloud.png";

function CityWeather(props) {
  console.log(props);
  return (
    <>
      <div className="current-day">
        <div className="city-name-today-high-low">
          <h1 className="city-name">London</h1>
          <div className="arrow">
            <span>⬇️</span>
            <div className="down-arrow-degree"> 18</div>
            <span className="up-arrow">⬆️</span>
            <div className="up-arrow-degree">27 </div>
          </div>
        </div>
        <div className="day-date-sky">
          <div className="day-date-description">
            <div className="day-date-box">
              <h2 className="up-marging0">MONDAY</h2>
              <h3 className="up-marging0">00/00/2016</h3>
              <h4 className="up-marging0">Wind 6Km/h</h4>
            </div>
          </div>
          <div className="weather-cloud">
            <img src={weatherImage} alt="" />
            <h1>CLOUD</h1>
          </div>
        </div>
        <div className="today-degree">
            <span>22°</span>
        </div>
      </div>
    </>
  );
}

export default CityWeather;
