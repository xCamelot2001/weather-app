import React from "react";

const Weather = ({ weather }) => {
    if (!weather) {
        return null;
    }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp} °C</p>
    </div>
  );
}

export default Weather;