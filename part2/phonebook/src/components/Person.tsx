interface Props {
  name: string;
  number: string;
  handleClick: () => void;
}

const Person = ({ name, number, handleClick }: Props) => {
  return (
    <div>
      {name} {number} <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Person;
