import { useQuery } from '@tanstack/react-query';
import { getAccommodationReviews } from '../api/getAccomodationReviews';

export const useGetAccommodationReviews = (accomodationId: string) => {
  return useQuery({
    queryKey: ['getAccommodationReviews', accomodationId],
    queryFn: () => getAccommodationReviews(accomodationId),
  });
};
