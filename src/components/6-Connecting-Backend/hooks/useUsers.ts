import { useEffect, useState } from 'react';
import apiClient, { AxiosError, CanceledError } from '../services/api-client';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // const [category, setCategory] = useState('')

  // After only first render
  useEffect(() => {
    const fetchDataUsers = async () => {
      const controller = new AbortController();

      try {
        const res = await apiClient('/users', { signal: controller.signal });
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      }

      return () => controller.abort();
    };

    fetchDataUsers();

    // axios(apiUsers)
    //   .then(res => setUsers(res.data))
    //   .catch(err => setError(err.message))
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
