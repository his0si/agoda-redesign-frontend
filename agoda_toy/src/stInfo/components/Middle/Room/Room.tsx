import styled from 'styled-components';
import RoomSlider from './RoomSlider';

export default function Room() {
  return (
    <Container>
      <RoomTitle>객실 선택</RoomTitle>
      <RoomSlider />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.625rem;
`;

const RoomTitle = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;
