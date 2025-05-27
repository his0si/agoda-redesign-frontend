import React from 'react';
import Questions from './Questions';
import Review from './Review';
import Pics from './Pics';
import styled from 'styled-components';

export default function ModifyModalRight() {
  return (
    <Container>
      <Questions />
      <Review />
      <Pics />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;
`;
