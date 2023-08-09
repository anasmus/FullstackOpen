import { ChangeEvent } from 'react';

interface Props {
  text: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ text, value, handleChange }: Props) => {
  return (
    <div>
      {text} <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
