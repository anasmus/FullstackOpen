import Part from "./Part";

interface Props {
  parts: {
    id: number;
    name: string;
    exercises: number;
  }[];
}

const Content = ({ parts }: Props) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
