import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Persons from './components/Persons';
import Input from './components/Input';
import PersonForm from './components/PersonForm';
import Button from './components/Button';
import Message from './components/Message';
import { getAll, create, remove, update } from './services/persons';

interface Person {
  id: number;
  name: string;
  number: string;
}

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'success' | 'fail' | null>(null);

  useEffect(() => {
    getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const shownPersons =
    newFilter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().startsWith(newFilter.toLowerCase())
        );

  const createMessage = (message: string, status: 'success' | 'fail') => {
    setMessage(message);
    setStatus(status);
    setTimeout(() => {
      setMessage(null);
      setStatus(null);
    }, 5000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newName === '' || newNumber === '') return;
    const person = persons.find((person) => person.name === newName);
    if (person !== undefined) {
      handlePersonExists(person);
    } else {
      const newPerson = { name: newName, number: newNumber };
      create(newPerson).then((data) => {
        setPersons([...persons, data]);
        createMessage(
          `${data.name} added to the Phone Book Successfully`,
          'success'
        );
      });
    }

    setNewName('');
    setNewNumber('');
  };

  const handlePersonExists = (person: Person) => {
    const confirmation = confirm(
      `${newName} is Already Added to the Phone Book, replace the Old number with the New?`
    );
    if (confirmation) {
      const newPerson = { ...person, number: newNumber };
      const id = person.id;
      update(id, newPerson)
        .then((data) => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : data))
          );
          createMessage(
            `${data.name}'s Number Updated Successfully!`,
            'success'
          );
        })
        .catch(() => {
          setPersons(persons.filter((person) => person.id !== id));
          createMessage(
            `Information of ${person.name} is already removed from the Server`,
            'fail'
          );
        });
    }
  };

  const handleDelete = (id: number) => {
    const personName = persons.find((person) => person.id === id)?.name;
    if (confirm(`Do You want to Delete ${personName} from PhoneBook?`)) {
      remove(id).then((statusCode) => {
        if (statusCode === 200) {
          setPersons(persons.filter((person) => person.id !== id));
        }
      });
    }
  };

  return (
    <div>
      <h1>Phone Book</h1>
      <Message message={message} status={status} />
      <Input
        text='Filter With Name: '
        value={newFilter}
        handleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewFilter(e.target.value)
        }
      />
      <h2>Add New Entry</h2>
      <PersonForm handleSubmit={handleSubmit}>
        <Input
          text='Name: '
          value={newName}
          handleChange={(e) => setNewName(e.target.value)}
        />
        <Input
          text='Number: '
          value={newNumber}
          handleChange={(e) => setNewNumber(e.target.value)}
        />
        <Button type='submit'>Add</Button>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons={shownPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
