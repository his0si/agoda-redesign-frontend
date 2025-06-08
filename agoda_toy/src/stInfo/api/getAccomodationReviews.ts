//숙소 리뷰 목록 조회
import axiosInstance from '@src/common/api/axiosInstance';

export const getAccommodationReviews = async (accomodationId: string) => {
  const response = await axiosInstance.get(
    `accommodations/${accomodationId}/reviews`
  );
  return response.data;
};
