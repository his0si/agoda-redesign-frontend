import { useQuery } from '@tanstack/react-query';
import { getRoomsId } from '../api/getRoomId';

export const useGetRoomId = (roomId: number) => {
  return useQuery({
    queryKey: ['roomId', roomId],
    queryFn: () => getRoomsId(roomId),
  });
};
