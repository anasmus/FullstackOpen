import axios from 'axios';
import { ICountry } from '../interfaces';

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all/';

const getAll = async (): Promise<ICountry[]> => {
  const response = await axios.get(baseURL);
  return response.data;
};

export { getAll };
