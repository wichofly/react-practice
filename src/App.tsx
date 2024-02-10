import { useEffect, useState } from 'react'
import axios, { AxiosError, CanceledError } from 'axios'
import { RiDeleteBin5Line } from "react-icons/ri";

import ProductList from './components/6-Connecting-Backend/ProductList'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  // const [category, setCategory] = useState('')

  const apiUsers = 'https://jsonplaceholder.typicode.com/users'

  // After only first render
  useEffect(() => {
    const fetchDataUsers = async () => {
      const controller = new AbortController()

      try {
        const res = await axios(apiUsers, { signal: controller.signal })
        setUsers(res.data)
        setIsLoading(false)
      } catch (err) {
        if (err instanceof CanceledError) return
        setError((err as AxiosError).message)
        setIsLoading(false)
      }

      return () => controller.abort()
    }

    fetchDataUsers()

    // axios(apiUsers)
    //   .then(res => setUsers(res.data))
    //   .catch(err => setError(err.message))
  }, [])

  // if (isLoading) {
  //   return <h2 className='spinner-border'>Loading, wait a little bit!</h2>;
  // }

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))

    axios.delete(`${apiUsers}/${user.id}`)
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }


  return (
    <div >
      {/* <select className="form-select" onChange={(evt) => setCategory(evt.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}

      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <p className='spinner-border'></p>}

      <ul className='list-group'>
        {users.map(user =>
          <li key={user.id} className='list-group-item d-flex justify-content-between'>
            {user.name}
            <button className='btn btn-danger btn-sm' onClick={() => deleteUser(user)}>
              <RiDeleteBin5Line fontSize='1.3rem' />
            </button>
          </li>
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
------------------------------------------------------------------------------------------------------------------------------------

**1. AbortController**: 
   -  const controller = new AbortController() : 
   This line creates a new  AbortController  object. It's used to cancel HTTP requests if needed.

**2. HTTP Request with Abort Signal**: 
   -  { signal: controller.signal } : 
   This option is passed to the HTTP request configuration. 
   It associates the request with the  AbortController  signal. If the controller is aborted, the request will be canceled.

**3. Handling Canceled Errors**: 
   -  if (err instanceof CanceledError) return : 
   This checks if the error is an instance of  CanceledError . 
   If it is, it means the request was canceled and the function returns early, preventing further execution

**4. Cleanup Function**: 
   -  return () => controller.abort() : 
   This is a cleanup function that's returned by the  useEffect  hook. 
   When the component unmounts or the effect is cleaned up, this function will be called. 
   It calls the  abort()  method on the  AbortController , which cancels any pending requests. 

In summary, this code uses an  AbortController  to cancel HTTP requests if needed, 
handles canceled errors, and ensures proper cleanup when the component unmounts.

-------------------------------------------------------------------------------------------------------------------------------------
*/
