import React from "react";
import "../Css/cityWeather.css";
import weatherImage from "../Images/cloud.png";
import humidityIcon from "../Images/humidity.png";
import cloudyDay from "../Images/cloudy-day.png";
import rainIcon from "../Images/rainy.png";

function CityWeather(props) {
  // console.log(props);
  // const name  = props.data.main.name; data.name
  // const nameof = props.data.name;
  // console.log(nameof);
  console.log(props);
  const name = props.data.city;
  const description = props.data.description;
  const windspeed = props.data.windspeed;
  const humidity = props.data.humidity;
  const temperature = props.data.temperature;
  const temp_min = props.data.temp_min;
  const temp_max = props.data. temp_max;

  console.log(name);
  console.log(windspeed);
  console.log(description);
  console.log(new Date().toLocaleString().replace(",", ""));

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = weekday[d.getDay()];

  return (
    <>
      {name.length ? (
        <div className="full-container">
          <div className="header-city-name">
            <h1>{name}</h1>
            <div className="arrow">
              <span>⬇️</span>
              <div className="down-arrow-degree"> {temp_min}</div>
              <span className="up-arrow">⬆️</span>
              <div className="up-arrow-degree">{temp_max} </div>
            </div>
          </div>
          <div className="content-of-city">
            <div className="day-date-wind">
              <h2>{day}</h2>
              <h3>{new Date().toLocaleString().replace(",", "")}</h3>
              <h4>Wind {windspeed}km/h</h4>
              <div className="present-humidity">
                <img src={humidityIcon} alt="" className="humidity-icon" />
                <h3>{humidity}%</h3>
              </div>
            </div>
            <div className="weather-image">
              <img src={rainIcon} alt="" />
              <h1 className="wind-type">{description}</h1>
            </div>
            <div className="degree-celcius">{temperature}°</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CityWeather;
