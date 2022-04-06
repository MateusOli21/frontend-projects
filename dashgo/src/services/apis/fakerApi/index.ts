import axios from 'axios'

export const fakerApi = axios.create({
  baseURL: 'http://localhost:3000/api',
})
