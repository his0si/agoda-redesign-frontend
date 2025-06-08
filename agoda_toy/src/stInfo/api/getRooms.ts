//숙소 객실 리스트 조회
import axiosInstance from '@src/common/api/axiosInstance';

export const getRooms = async (accomodationId: string) => {
  const response = await axiosInstance.get(
    `/accommodations/${accomodationId}/rooms`
  );
  return response.data;
};
