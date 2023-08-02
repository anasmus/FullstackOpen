interface Props {
  course: string;
}

function Header({ course }: Props) {
  return <h1>{course}</h1>;
}

export default Header;
