import axiosInstance from '@src/common/api/axiosInstance';

export const getAccommodationId = async (accomodationId: number) => {
  const response = await axiosInstance.get(`/accommodations/${accomodationId}`);
  return response.data;
};
