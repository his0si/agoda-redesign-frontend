import { useQuery } from '@tanstack/react-query';
import { getAccommodationId } from '../api/getAccomodationId';

export const useGetAccommodation = (accommodationId: string) => {
  return useQuery({
    queryKey: ['accommodationId', accommodationId],
    queryFn: () => getAccommodationId(accommodationId),
  });
};
