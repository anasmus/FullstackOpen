interface Props {
  name: string;
  exercises: number;
}

const Part = ({ name, exercises }: Props) => {
  return (
    <div>
      {name} {exercises}
    </div>
  );
};

export default Part;
