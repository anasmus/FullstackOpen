interface Props {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ children, type }: Props) => {
  return (
    <div>
      <button type={type}>{children}</button>
    </div>
  );
};

export default Button;
