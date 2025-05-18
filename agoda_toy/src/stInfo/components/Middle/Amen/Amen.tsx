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
  width: 87.5rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.125rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;
