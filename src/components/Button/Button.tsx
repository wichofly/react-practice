import styles from './Button.module.css'

interface Props {
  children: string
  color?: 'primary' | 'secondary' | 'danger'
  onClick: () => void
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
  return (
    // <button
    //   type="button"
    //   className={`btn btn-outline-${color}`}
    //   onClick={onClick}>
    //   {children}
    // </button>

    <button
      type="button"
      className={[styles.btn, styles[`btn-${color}`]].join(' ')}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button