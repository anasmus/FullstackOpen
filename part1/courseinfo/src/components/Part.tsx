interface Part {
  name: string;
  exercises: number;
}

interface Props {
  part: Part;
}

const Part = ({ part: { name, exercises } }: Props) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
