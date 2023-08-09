import Person from './Person';

interface Props {
  persons: {
    id: number;
    name: string;
    number: string;
  }[];
  handleDelete: (id: number) => void;
}

const Persons = ({ persons, handleDelete }: Props) => {
  return (
    <>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          handleClick={() => handleDelete(person.id)}
        />
      ))}
    </>
  );
};

export default Persons;
