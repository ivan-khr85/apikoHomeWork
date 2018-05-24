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
    return axios.post(`${this._baseUrl}/auth/sign-up`, {
      profile: { fullName: username },
      username: email,
      password,
      email,
    });
  }

  signIn({ password, email }) {
    return axios.post(`${this._baseUrl}/auth/sign-in`, {
      username: email,
      password,
    });
  }

  signOut() {
    return axios.post(`${this._baseUrl}/auth/sign-out`);
  }

  getQuestions({ limit = 10, skip = 0 } = {}) {
    return axios.get(
      `${this._baseUrl}/questions?limit=${limit}&skip=${skip}`,
    );
  }


  getAnswersByQuestionId({ id, limit = 2, skip = 0 } = {}) {
    return axios.get(
      `${this._baseUrl}/questions/${id}/answers?limit=${limit}&skip=${skip}&sort=-1`,
    );
  }

  publishAnswer({ description, questionId }) {
    this; // eslint-disable-line
    const title = 'default title for API require from mobile client';
    return axios.post('https://seniv-ask-apiko.herokuapp.com/api/v1/answers/', {
      title,
      description,
      questionId,
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZmE5N2RmODAzNDI3MDAxNGNlOTg5OSIsImlhdCI6MTUyNzAwMTcwNSwiZXhwIjoxNTI5NTkzNzA1fQ.2FQuKo4UPyovqLQmx_Z99Tw2dvKPzGNDQuo355ObzaY', // eslint-disable-line
      },
    });
  }
}


const api = new Api(config.api_url);

export default api;
