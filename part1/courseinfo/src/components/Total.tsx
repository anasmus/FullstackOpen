interface Props {
  exercises1: number;
  exercises2: number;
  exercises3: number;
}

function Total({ exercises1, exercises2, exercises3 }: Props) {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
}

export default Total;
