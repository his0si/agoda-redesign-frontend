import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../api/getRooms';

export const useGetRooms = (accommodationId: string) => {
  return useQuery({
    queryKey: ['getRooms', accommodationId],
    queryFn: () => getRooms(accommodationId),
  });
};
