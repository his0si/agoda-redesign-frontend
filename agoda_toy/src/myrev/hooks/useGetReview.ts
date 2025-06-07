import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../api/getReviews';

export const useGetReview = (reviewId: number) => {
  return useQuery({
    queryKey: ['reviewId', reviewId],
    queryFn: () => getReviews(reviewId),
  });
};
