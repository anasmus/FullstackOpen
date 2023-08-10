import { useState } from 'react';
import CountryDetail from './CountryDetail';
import { ICountry } from '../interfaces';

interface Props {
  country: ICountry;
}

const CountryName = ({ country }: Props) => {
  const [shown, setShown] = useState(false);
  const style = {
    fontWeight: shown ? 'bold' : 'normal',
  };
  return (
    <>
      <div style={style}>
        {country.name.common}{' '}
        <button onClick={() => setShown(!shown)}>
          {shown ? 'Hide' : 'Show'}
        </button>
      </div>
      {shown && <CountryDetail country={country} />}
    </>
  );
};

export default CountryName;
