interface Props {
  part: string;
  exercises: number;
}

function Part({ part, exercises }: Props) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

export default Part;
