import axiosInstance from './axiosInstance';

export const kakaoLogin = async (code: string) => {
  const response = await axiosInstance.post('/oauth/login', { code });
  return response.data;
};
