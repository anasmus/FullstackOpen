import axios from 'axios';

const baseURL = 'http://localhost:3000/api/persons';

interface Person {
  id: number;
  name: string;
  number: string;
}

const getAll = async (): Promise<Person[]> => {
  return await axios.get(baseURL).then((response) => response.data);
};

const create = async (newPerson: {
  name: string;
  number: string;
}): Promise<Person> => {
  const response = await axios.post(baseURL, newPerson);
  return response.data;
};

const remove = async (id: number): Promise<number> => {
  return await axios
    .delete(`${baseURL}/${id}`)
    .then((response) => response.status);
};

const update = async (id: number, newPerson: Person): Promise<Person> => {
  return await axios
    .put(`${baseURL}/${id}`, newPerson)
    .then((response) => response.data);
};

export { getAll, create, remove, update };
