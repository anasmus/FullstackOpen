interface Props {
  votes: number;
}

const VoteDisplay = ({ votes }: Props) => {
  return <div>Votes: {votes}</div>;
};

export default VoteDisplay;
