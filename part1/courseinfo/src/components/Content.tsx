import Part from "./Part";

interface PartObject {
  name: string;
  exercises: number;
}

interface Course {
  name: string;
  parts: PartObject[];
}
interface Props {
  course: Course;
}

function Content({ course: { parts } }: Props) {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
}

export default Content;
