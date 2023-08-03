import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClicked = () => setGood(good + 1);
  const handleNeutralClicked = () => setNeutral(neutral + 1);
  const handleBadClicked = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClicked}>Good</Button>
      <Button handleClick={handleNeutralClicked}>Neutral</Button>
      <Button handleClick={handleBadClicked}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
