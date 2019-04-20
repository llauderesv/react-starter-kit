import React, { useEffect, useState } from 'react';
import { fakeRequest } from '../utils';

function useFetchData() {
  const [data, setData] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  function fetchUsers() {
    setData({ ...data, isLoading: true });

    fakeRequest(3000)
      .then(response => {
        setData({
          ...data,
          data: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        setData({
          ...data,
          error: error,
          isLoading: false,
          fetchEvent: fetchUsers, // For re-fetching the data
        });
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return data;
}

const withFetch = WrappedComponent => ({ ...restProps }) => {
  const data = useFetchData();

  return <WrappedComponent {...data} {...restProps} />;
};

export default withFetch;
