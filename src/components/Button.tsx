interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button type="button" className="btn btn-outline-info">{text}</button>)
}

export default Button