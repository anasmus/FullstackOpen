interface ICountry {
  name: {
    common: string;
  };
  capital: string[];
  languages: object;
  area: number;
  ccn3: number;
  flags: {
    png: string;
    alt: string;
  };
}

interface IWeather {
  weather: {
    icon: string;
  }[];
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
}

export type { ICountry, IWeather };
