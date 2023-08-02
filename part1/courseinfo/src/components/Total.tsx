interface Part {
  name: string;
  exercises: number;
}

interface Course {
  name: string;
  parts: Part[];
}
interface Props {
  course: Course;
}

function Total({ course: { parts } }: Props) {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
}

export default Total;
