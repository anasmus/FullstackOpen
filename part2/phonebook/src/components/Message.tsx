interface Props {
  message: string | null;
  status: 'success' | 'fail' | null;
}

const Message = ({ message, status }: Props) => {
  if (message === null) return null;
  const style = {
    color: status === 'success' ? 'green' : 'red',
  };
  return (
    <div className='message' style={style}>
      {message}
    </div>
  );
};

export default Message;
