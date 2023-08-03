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

const Header = ({ course: { name } }: Props) => {
  return <h1>{name}</h1>;
};

export default Header;
