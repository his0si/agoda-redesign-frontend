import { useQuery } from '@tanstack/react-query';
import { getAccommodations } from '../api/getAccommodations';

import type { GetAccommodationsParams } from '../types/getAccommodationsPrams.types';
import type { GetAccommodationsResponse } from '../types/getAccommodationsResponse.types';

export const useGetAllAccommodations = (params: GetAccommodationsParams) => {
  return useQuery<GetAccommodationsResponse>({
    queryKey: ['accommodations', params],
    queryFn: () => getAccommodations(params),
  });
};
