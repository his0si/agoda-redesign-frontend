import axiosInstance from './axiosInstance';

export const kakaoLogin = async (code: string) => {
  const response = await axiosInstance.get(`/oauth/login`, {
    params: { code },
  });
  return response.data;
};
