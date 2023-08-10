import { useState, useEffect } from 'react';
import { ICountry, IWeather } from '../interfaces';
import { getWeatherData } from '../services/weather';

interface Props {
  country: ICountry;
}

const CountryDetail = ({ country }: Props) => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  useEffect(() => {
    getWeatherData(country.capital[0]).then((data) => setWeather(data));
  }, [country.capital]);
  return (
    <>
      <div>Capital: {country.capital[0]}</div>
      <div>Area: {country.area}</div>
      <h4>Languages: </h4>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weather && (
        <>
          <h4>Weather at {country.capital[0]}</h4>
          <div>Temperate: {weather.main.temp} Celsius</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind: {weather.wind.speed} m/s</div>
        </>
      )}
    </>
  );
};

export default CountryDetail;
