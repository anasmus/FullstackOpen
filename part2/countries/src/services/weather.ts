import axios from 'axios';
import { IWeather } from '../interfaces';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_API_KEY;

const getWeatherData = async (capital: string): Promise<IWeather> => {
  const response = await axios.get(`${baseURL}?q=${capital}&appid=${apiKey}`);
  return response.data;
};

export { getWeatherData };
