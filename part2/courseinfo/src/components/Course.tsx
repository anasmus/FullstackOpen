import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

interface Props {
  course: {
    id: number;
    name: string;
    parts: {
      id: number;
      name: string;
      exercises: number;
    }[];
  };
}

const Course = ({ course: { name, parts } }: Props) => {
  return (
    <>
      <Header>{name}</Header>
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;
