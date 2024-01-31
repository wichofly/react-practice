interface Prop {
  cartItemsCount: number
}

const Navbar = ({ cartItemsCount }: Prop) => {
  return (
    <div>Navbar: {cartItemsCount}</div>
  )
}

export default Navbar