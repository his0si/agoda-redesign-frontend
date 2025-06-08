import { useQuery } from '@tanstack/react-query';
import { getReservations } from '../api/getReservations';
import type { MyReservationsResponse } from '../types/res.types';

export const useGetReservations = () => {
  return useQuery<MyReservationsResponse>({
    queryKey: ['reservations'],
    queryFn: getReservations,
  });
};
