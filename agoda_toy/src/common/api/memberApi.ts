import axiosInstance from './axiosInstance';

// 닉네임으로 멤버 조회
export const getMemberByNickname = async (nickname: string) => {
  const response = await axiosInstance.get(`/members/${encodeURIComponent(nickname)}`);
  return response.data;
};

// 카카오 로그인
export const kakaoLogin = async (code: string) => {
  const response = await axiosInstance.post('/oauth/login', { code });
  return response.data;
}; 