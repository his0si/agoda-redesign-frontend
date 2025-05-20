import styled from 'styled-components';
import AmenContent from './AmenContent';

export default function Amen() {
  return (
    <Container>
      <Title>편의시설</Title>
      <AmenContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6875rem;
  align-self: stretch;
  height: 18.2rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
  display: flex;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;
