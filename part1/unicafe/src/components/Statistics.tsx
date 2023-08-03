import StatisticLine from "./StatisticLine";

interface Props {
  good: number;
  neutral: number;
  bad: number;
}

const Statistics = ({ good, bad, neutral }: Props) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <>
      <h2>Statistics</h2>
      {all === 0 ? (
        <div>No Feedback Given</div>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive + "%"} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Statistics;
