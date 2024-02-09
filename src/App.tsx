import { useEffect, useState } from 'react'
import axios from 'axios'

import ProductList from './components/6-Connecting-Backend/ProductList'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  // const [category, setCategory] = useState('')

  const apiUsers = 'https://jsonplaceholder.typicode.com/users'

  // After only first render
  useEffect(() => {
    axios(apiUsers)
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div >
      {/* <select className="form-select" onChange={(evt) => setCategory(evt.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}

      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </div >
  )
}

export default App


