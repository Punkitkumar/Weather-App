import "./App.css";
import bootstrap from "bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import CityWeather from "./Components/CityWeather";

function App() {
  const [searchcity, setsearchCity] = useState("Dhanbad");
  const [clicked, setClicked] = useState(false);
  const api_key = "143c14b88ff867ca8cd7990242569dc8";
  const [data,setData] = useState({
    "city" : "",
    "description":"",
    "windspeed":"",
    "humidity":"",
    "temperature":"",
    "temp_min":"",
    "temp_max":""
  });
  useEffect(() => {
    
    return () => {
      handleClick();
    }
  }, [])
  
  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=${api_key}`
        )
        .then((response) => {
          setData({
            city:searchcity,
            description: response.data.weather[0].description,
            windspeed:response.data.wind.speed,
            humidity:response.data.main.humidity, 
            temperature:response.data.main.temp,
            temp_min:response.data.main.temp_min,
            temp_max:response.data.main.temp_max
        })
        setsearchCity("");
      });
  };
  return (
    <>
      <div className="Center-box">
        <div className="Weather-report-box">
          <div className="Search-bar">
            <input
              type="text"
              placeholder="City Name"
              value={searchcity}
              onChange={(e) => setsearchCity(e.target.value)}
              className="input-text"
            />
            <button onClick={() => handleClick()}>Submit </button>
          </div>
          <CityWeather data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
