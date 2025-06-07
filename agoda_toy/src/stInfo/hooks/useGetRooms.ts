import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../api/getRooms';

export const useGetRooms = (accommodationId: number) => {
  return useQuery({
    queryKey: ['accommodationId', accommodationId],
    queryFn: () => getRooms(accommodationId),
  });
};
