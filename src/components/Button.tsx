interface Props {
  children: string
  color?: string
  onClick: () => void
}

const Button = ({ children, color = 'success', onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-${color}`}
      onClick={onClick}>
      {children}
    </button>)
}

export default Button