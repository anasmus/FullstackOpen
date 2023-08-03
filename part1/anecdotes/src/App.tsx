import { useState } from "react";
import Title from "./components/Title";
import Display from "./components/Display";
import Button from "./components/Button";

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () =>
    setSelected(getRandomNumber(0, anecdotes.length));
  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const largestVoteIndex = votes.reduce((maxIndex, current, currentIndex) => {
    return current > votes[maxIndex] ? currentIndex : maxIndex;
  }, 0);

  return (
    <>
      <Title>Anecdotes of the Day</Title>
      <Display anecdote={anecdotes[selected]} votes={votes[selected]}></Display>
      <Button handleClick={handleVoteClick}>Vote</Button>
      <Button handleClick={handleNextClick}>Next</Button>
      <Title>Anecdote with the Most Votes</Title>
      <Display
        anecdote={anecdotes[largestVoteIndex]}
        votes={votes[largestVoteIndex]}
      />
    </>
  );
};

export default App;
