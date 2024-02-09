import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

import ProductList from './components/6-Connecting-Backend/ProductList'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  // const [category, setCategory] = useState('')

  const apiUsers = 'https://jsonplaceholder.typicode.com/users'

  // After only first render
  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const res = await axios(apiUsers)
        setUsers(res.data)
      } catch (err) {
        setError((err as AxiosError).message)
      }
    }

    fetchDataUsers()

    // axios(apiUsers)
    //   .then(res => setUsers(res.data))
    //   .catch(err => setError(err.message))
  }, [])

  return (
    <div >
      {/* <select className="form-select" onChange={(evt) => setCategory(evt.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}

      {error && <p className='text-danger'>{error}</p>}

      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </div >
  )
}

export default App

/*
 * A function is needed inside useEffect to use async and await.
   It allows you to write code that looks like it's running sequentially, even though it's actually running asynchronously. 

 * "catch" is used in different way using AxiosError:
    catch (err) {
      setError((err as AxiosError).message)
    }

*/
