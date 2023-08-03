interface Props {
  children: string;
  handleClick: () => void;
}

const Button = ({ children, handleClick }: Props) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
