import { ChangeEvent, useEffect, useState } from 'react';
import CountryView from './components/CountryView';
import { getAll } from './services/countries';
import { ICountry } from './interfaces';

function App() {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);

  const shownCountries = country
    ? countries.filter((currentCountry) =>
        currentCountry.name.common
          .toLowerCase()
          .startsWith(country.toLowerCase())
      )
    : [];

  useEffect(() => {
    getAll().then((data) => setCountries(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <h1>Countries Data</h1>
      <div>
        Find Country: <input value={country} onChange={handleChange} />
      </div>
      <h2>Countries</h2>
      <CountryView countries={shownCountries} />
    </>
  );
}

export default App;
