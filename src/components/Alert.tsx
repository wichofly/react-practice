import { ReactNode } from "react";

interface Props {
  children: ReactNode; // it is possible to pass HTML content to alert component in App.tsx
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
