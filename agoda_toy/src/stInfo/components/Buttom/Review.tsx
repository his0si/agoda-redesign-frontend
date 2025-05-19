import React from 'react';
import styled from 'styled-components';

export default function Review() {
  return (
    <Container>
      <Title>리뷰</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.5rem;
  height: 78.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem;
  flex-shrink: 0;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;
