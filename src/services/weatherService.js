import axios from 'axios';

const API_KEY = '6925ff0ca44b433bff85837d63b6d2f7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}weather`, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
        }
    });
    return response.data;
}