import { ReactNode } from "react";

interface Props {
  children: ReactNode; // it is possible to pass HTML content to alert component in App.tsx
  onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      <strong>{children}</strong> You should take me to the sky.
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
};

export default Alert;
