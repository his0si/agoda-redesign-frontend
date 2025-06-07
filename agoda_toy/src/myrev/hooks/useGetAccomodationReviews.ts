import { useQuery } from '@tanstack/react-query';
import { getAccommodationReviews } from '../api/getAccomodationReviews';

export const useGetReview = (accomodationId: number) => {
  return useQuery({
    queryKey: ['useGetReview', accomodationId],
    queryFn: () => getAccommodationReviews(accomodationId),
  });
};
