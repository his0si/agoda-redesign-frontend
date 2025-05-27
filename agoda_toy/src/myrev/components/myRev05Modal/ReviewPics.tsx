import React from 'react';
import styled from 'styled-components';

export default function ReviewPics() {
  return (
    <Container>
      <Pics />
      <Pics />
      <Pics />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Pics = styled.div`
  width: 13.9375rem;
  height: 11.4375rem;
  border-radius: 0.9375rem;
  background: #f3f4f6;
`;
