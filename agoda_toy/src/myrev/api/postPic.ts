import axiosInstance from '@src/common/api/axiosInstance';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const post = async () => {
  const response = await axios.post('/images');
  return response.data;
};
