import { useState } from 'react'
import './App.css'

function App() {
  const [customer, setCustomer] = useState({
    name: 'Steve',
    address: {
      city: 'Jerusalem',
      zipCode: 99111
    }
  })

  // Important to to use ternary operator to copy the Object.
  const handleClick = () => {
    setCustomer({
      ...customer, // spread operator 
      address: { ...customer.address, zipCode: 99222 }
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Touch me</button>
    </div >
  )
}

export default App
