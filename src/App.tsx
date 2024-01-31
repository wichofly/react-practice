import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])
  // const [customer, setCustomer] = useState({
  //   name: 'Steve',
  //   address: {
  //     city: 'Jerusalem',
  //     zipCode: 99111
  //   }
  // })

  // // Important to to use spread operator to copy the Object.
  // const handleClick = () => {
  //   setCustomer({
  //     ...customer, // spread operator 
  //     address: { ...customer.address, zipCode: 99222 }
  //   })
  // }

  return (
    <div className="App">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div >
  )
}

export default App
