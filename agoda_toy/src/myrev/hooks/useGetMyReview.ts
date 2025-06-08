import { useQuery } from '@tanstack/react-query';
import { getMyReviews } from '../api/getMyReview';

export const useGetMyReview = () => {
  return useQuery({
    queryKey: ['review'],
    queryFn: () => getMyReviews(),
  });
};
