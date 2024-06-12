import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdOutlineUpdate } from 'react-icons/md';
import apiClient, {
  AxiosError,
} from './components/6-Connecting-Backend/services/api-client';

import useUsers from './components/6-Connecting-Backend/hooks/useUsers';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
}

// Utility function to capitalize the first letter of each word
const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

function App() {
  const {
    users,
    newUserName,
    error,
    isLoading,
    setUsers,
    setNewUserName,
    setError,
  } = useUsers();

  // if (isLoading) {
  //   return <h2 className='spinner-border'>Loading, wait a little bit!</h2>;
  // }

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete('/users' + '/users.id').catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = async () => {
    if (!newUserName.trim()) return;

    const originalUsers = [...users];
    try {
      const formattedName = capitalizeWords(newUserName);
      const newUser = { id: users.length + 1, name: formattedName };
      setUsers([newUser, ...users]);

      // It is needed to call the server to save the changes
      const { data: savedUser } = await apiClient.post('/users', newUser);
      setUsers([savedUser, ...users]);
      setNewUserName(''); // Clear the input field after adding the user
    } catch (err) {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addUser();
    }
  };

  const updateUser = async (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: `${user.name} 🐱 Well done!` };
    try {
      setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

      await apiClient.patch('/users' + '/users.id', updatedUser);
    } catch (err) {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    }
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="spinner-border"></p>}

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new user"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-info btn-sm mx-2"
                onClick={() => updateUser(user)}
              >
                <MdOutlineUpdate fontSize="1.3rem" />
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteUser(user)}
              >
                <RiDeleteBin5Line fontSize="1.3rem" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

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

  NOT USING ASYNC/AWAIT
  ----------------------->
  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 11, name: 'Josue' }
    setUsers([newUser, ...users])

    axios.post(`${apiUsers}`, newUser)
      .then(res => setUsers([res.data, ...users]))
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }
*/
