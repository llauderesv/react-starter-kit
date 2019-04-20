import React, { useEffect, useState } from 'react';
import request from '../api/axios-config';

const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.ceil(Math.random() * 50);

      if (rnd > 30)
        reject({ message: 'There was something wrong in the server.' });
      resolve({
        data:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis iusto at est hic excepturi! Tempore sapiente delectus iste, excepturi deserunt, magnam mollitia doloremque corrupti suscipit nesciunt reiciendis, sed nulla aut.',
      });
    }, ms);
  });

export default function withFetch(WrappedComponent) {
  function fetch({ ...restProps }) {
    const data = useFetchUsers();

    return <WrappedComponent {...data} {...restProps} />;
  }

  return fetch;
}

function useFetchUsers() {
  const defaultState = {
    data: null,
    isLoading: false,
    error: null,
  };
  const [data, setData] = useState(defaultState);

  function fetchUsers() {
    setData({ ...data, isLoading: true });

    delay(3000)
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
          fetchEvent: fetchUsers,
        });
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return data;
}
