import styled from 'styled-components';
import RoomCard from './RoomCard';
import type { MiddleProps } from '@src/stInfo/types/middleProps';
import useHorizontalScroll from './useHorizontalScroll';
import { useGetRooms } from '@src/stInfo/hooks/useGetRooms';

type RoomType = {
  roomId: number;
  roomImage: string;
  bed: string;
  roomType: string;
  discountPrice: string;
  price: string;
};

export default function RoomSlider({ handleModalOpen }: MiddleProps) {
  const listWrapperRef = useHorizontalScroll();
  const { data } = useGetRooms(1);
  const roomList = data?.rooms;

  return (
    <>
      <Container ref={listWrapperRef}>
        {roomList.map(
          ({
            roomId,
            roomImage,
            bed,
            roomType,
            discountPrice,
            price,
          }: RoomType) => (
            <RoomCard
              roomId={roomId}
              key={roomId}
              handleModalOpen={() => handleModalOpen(roomId)}
              image={roomImage}
              title={roomType}
              description={bed}
              realprice={price}
              saleprice={discountPrice}
            />
          )
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  align-items: center;
  gap: 0.875rem;
  align-self: stretch;
  overflow-x: auto;

  width: 87.9rem;
  height: 30rem;

  &::-webkit-scrollbar {
    height: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: #f3f4f6;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #55a3b5;
    border-radius: 6.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #55a3b5;
    border-radius: 6.25rem;
  }
`;
