interface Props {
  parts: {
    id: number;
    name: string;
    exercises: number;
  }[];
}

const Total = ({ parts }: Props) => {
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return (
    <div>
      <b>Total of {totalExercises} exercises</b>
    </div>
  );
};

export default Total;
