import axios from 'axios';
import config from '../config';

class Api {
  constructor(baseUrl) {
    this._baseUrl = `${baseUrl}api/v1`;
  }

  setToken(token) { // eslint-disable-line
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  mockCall() { // eslint-disable-line
    return new Promise(res => setTimeout(res, 1000));
  }

  signUp({ username, password, email }) {
    return axios.post(`${this._baseUrl}/auth/sign-up`,
      {
        username,
        email,
        password,
      });
  }


  signIn({ password, email }) {
    return axios.post(`${this._baseUrl}/auth/sign-in`,
      {
        email,
        password,
      });
  }
}


const api = new Api(config.api_url);

export default api;
