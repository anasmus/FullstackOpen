import CountryName from './CountryName';
import { ICountry } from '../interfaces';

interface Props {
  countries: ICountry[];
}

const CountryView = ({ countries }: Props) => {
  if (countries.length === 0) return null;
  if (countries.length > 10)
    return <div>To many Matches, Specify another Filter</div>;

  return (
    <>
      {countries.map((country) => (
        <CountryName key={country.ccn3} country={country} />
      ))}
    </>
  );
};

export default CountryView;
