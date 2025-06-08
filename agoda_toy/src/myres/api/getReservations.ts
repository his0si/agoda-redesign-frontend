import axiosInstance from '@src/common/api/axiosInstance';
import type { MyReservationsResponse } from '../types/res.types';

export const getReservations = async (): Promise<MyReservationsResponse> => {
  const response = await axiosInstance.get('/reservations');
  return response.data;
};
