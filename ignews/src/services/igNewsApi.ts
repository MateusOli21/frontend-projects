import axios from 'axios';

export const igNewsApi = axios.create({
  baseURL: '/api',
});
