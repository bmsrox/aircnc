import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.177:3001'
});

export default api;