interface Props {
  text: string;
  value: string | number;
}

const StatisticLine = ({ text, value }: Props) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
