import { FormEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const PersonForm = ({ children, handleSubmit }: Props) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default PersonForm;
