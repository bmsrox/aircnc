import axios from 'axios';

const api = axios.create({
  baseURL: 'https://onmistack-aircnc-backend.herokuapp.com/',
});

export default api;