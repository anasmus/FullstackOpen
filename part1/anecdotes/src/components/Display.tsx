import VoteDisplay from "./VoteDisplay";

interface Props {
  anecdote: string;
  votes: number;
}

const Display = ({ anecdote, votes }: Props) => {
  return (
    <>
      <div>{anecdote}</div>
      <VoteDisplay votes={votes} />
    </>
  );
};

export default Display;
