//객실 상세 조회
import axiosInstance from '@src/common/api/axiosInstance';

export const getRoomsId = async (roomId: number) => {
  const response = await axiosInstance.get(`/rooms/${roomId}`);
  return response.data;
};
