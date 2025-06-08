//내 리뷰 목록록 조회
import axiosInstance from '@src/common/api/axiosInstance';

export const getMyReviews = async () => {
  const response = await axiosInstance.get(`/reviews/me`);
  return response.data;
};
