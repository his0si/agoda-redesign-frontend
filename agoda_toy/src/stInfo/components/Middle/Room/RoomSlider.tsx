import styled from 'styled-components';
import RoomCard from './RoomCard';

export default function RoomSlider() {
  return (
    <Container>
      <RoomCard />
      <RoomSliderBar />
      <RoomSliderBarRectangle />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  align-items: center;
  gap: 0.875rem;
  align-self: stretch;
`;

const RoomSliderBar = styled.div`
  display: flex;
  height: 0.375rem;
  padding-right: 62.5rem;
  align-items: center;
  align-self: stretch;

  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors.gray100};
`;

const RoomSliderBarRectangle = styled.div`
  width: 25.375rem;
  height: 0.375rem;
  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors.secondary};
`;
