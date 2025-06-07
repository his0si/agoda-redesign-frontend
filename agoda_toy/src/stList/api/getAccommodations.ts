import axiosInstance from '@src/common/api/axiosInstance';
import type { GetAccommodationsParams } from '@src/stList/types/getAccommodationsPrams.types';

export const getAccommodations = async (params: GetAccommodationsParams) => {
  const response = await axiosInstance.get('/accommodations', { params });
  return response.data;
  console.log(response.data);
};
