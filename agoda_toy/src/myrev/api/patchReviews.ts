// 리뷰 수정
import axiosInstance from '@src/common/api/axiosInstance';
import type { ReviewUpdateData } from '../types/reviewData';

export const patchReviews = async (
  reviewId: number,
  data: ReviewUpdateData
) => {
  const response = await axiosInstance.patch(`/review/${reviewId}`, data);
  return response.data;
};
