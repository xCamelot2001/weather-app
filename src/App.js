import React, { useState } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import { getWeather } from './services/weatherService';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      <Weather weather={weather} />
    </div>
  );
}

export default App;
