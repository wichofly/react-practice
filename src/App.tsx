import { useEffect, useState } from 'react'

import ProductList from './components/6-Connecting-Backend/ProductList'

function App() {
  const [category, setCategory] = useState('')

  // After each render
  // useEffect(() => {
  // }, [])

  return (
    <div >
      <select className="form-select" onChange={(evt) => setCategory(evt.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div >
  )
}

export default App


