// 리뷰 작성
import axiosInstance from '@src/common/api/axiosInstance';
import type { ReviewPostData } from '../types/reviewPost';

export const postReview = async (data: ReviewPostData) => {
  const response = await axiosInstance.patch('/review/', data);
  return response.data;
};
