import styled from 'styled-components';

export default function StayFilter() {
  return (
    <Container>
      <StayFilterHeader>
        <StayFilterTitle>필터</StayFilterTitle>
        <Line />
      </StayFilterHeader>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.69rem;
  width: 18.75rem;
  height: 25.5625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid #acacac;
`;

const StayFilterTitle = styled.p`
  font: ${({ theme }) => theme.fonts.body.sm};
`;

const Line = styled.div`
  width: 18.75rem;
  height: 0.03125rem;
  background-color: #acacac;
`;

const StayFilterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.44rem;
`;
