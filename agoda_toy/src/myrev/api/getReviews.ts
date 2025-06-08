//리뷰 단건 조회
import axiosInstance from '@src/common/api/axiosInstance';

export const getReviews = async (reviewId: number) => {
  const response = await axiosInstance.get(`/reviews/${reviewId}`);
  return response.data;
};
