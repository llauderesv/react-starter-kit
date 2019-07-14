import axios from 'axios';

/**
 *
 * Setup axios API by defining your own setup rules
 * https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
 */
const instance = axios.create({
  baseURL: null,
  timeout: 1500,
  headers: {
    Authorization: null,
  },
});

export default instance;
