import axiosInstance from '@src/common/api/axiosInstance';

//리뷰 삭제
export const deleteReviews = async (reviewId: number) => {
  const response = await axiosInstance.delete(`/review/${reviewId}`);
  return response.data;
};
