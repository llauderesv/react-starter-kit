import axios from 'axios';

// Response interceptors when there's something error in the network...
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

const instance = axios.create({
  baseURL: null,
  timeout: 1000,
  headers: {
    Authorization: null,
  },
});

export default instance;
