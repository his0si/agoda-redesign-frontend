import axiosInstance from 'src/common/api/axiosInstance';
export interface GetAccommodationsParams {
  keyword?: string;
  checkInDate?: string;
  checkOutDate?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
}

export const getAccommodations = async (params: GetAccommodationsParams) => {
  const response = await axiosInstance.get('/accommodations', { params });
  return response.data;
};
