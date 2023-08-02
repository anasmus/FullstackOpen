import Part from "./Part";

interface Props {
  part1: string;
  part2: string;
  part3: string;
  exercises1: number;
  exercises2: number;
  exercises3: number;
}

function Content({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}: Props) {
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
}

export default Content;
