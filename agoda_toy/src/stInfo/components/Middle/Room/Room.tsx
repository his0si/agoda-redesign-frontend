import styled from 'styled-components';
import RoomSlider from './RoomSlider';
import type { MiddleProps } from '@src/stInfo/types/middleProps';

export default function Room(props: MiddleProps) {
  return (
    <Container>
      <RoomTitle>객실 선택</RoomTitle>
      <RoomSlider {...props} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.625rem;
  margin-top: 8.75rem;
`;

const RoomTitle = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;
