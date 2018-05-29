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
      profile: { fullName: username.toLowerCase() },
      username: email.toLowerCase(),
      password,
      email: email.toLowerCase(),
    });
  }

  signIn({ password, email }) {
    return axios.post(`${this._baseUrl}/auth/sign-in`, {
      username: email.toLowerCase(),
      password: password.toLowerCase(),
    });
  }

  signOut() {
    return axios.post(`${this._baseUrl}/auth/sign-out`);
  }

  getQuestions({ limit = 10, skip = 0, search = '' } = {}) {
    return axios.get(
      `${this._baseUrl}/questions?limit=${limit}&skip=${skip}&search=${search}`,
    );
  }


  getAnswersByQuestionId({ id, limit = 2, skip = 0 } = {}) {
    return axios.get(
      `${this._baseUrl}/questions/${id}/answers?limit=${limit}&skip=${skip}`,
    );
  }

  publishAnswer({ description, questionId }) {
    const title = 'default title for API require from mobile client';
    return axios.post(`${this._baseUrl}/answers/`, {
      title,
      description,
      questionId,
    });
  }
 
 
  createQuestion({ title, description, tags }) {
    return axios.post(`${this._baseUrl}/questions/`, {
      title,
      description,
      tags,
    });
  }

  getUserInfo() {
    return axios.get(`${this._baseUrl}/users/my/`);
  }
}


const api = new Api(config.api_url);

export default api;
