import { useQuery } from '@tanstack/react-query';
import {
  getAccommodations,
  type GetAccommodationsParams,
} from '../api/getAccommodations';

export const useGetAllAccommodations = (params: GetAccommodationsParams) => {
  return useQuery({
    queryKey: ['accommodations', params],
    // 쿼리를 식별하는 키 , 같은 params 면 캐싱을 사용하고 params가 바뀔 때 새로 fetch
    queryFn: () => getAccommodations(params),
    // api 호출 함수
  });
};
