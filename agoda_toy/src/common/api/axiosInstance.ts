import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/', // 개발 proxy
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터 예시 (선택)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
