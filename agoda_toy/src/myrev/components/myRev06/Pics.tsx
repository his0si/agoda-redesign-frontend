import React from 'react';
import styled from 'styled-components';

export default function Pics() {
  return (
    <Container>
      <PicBox />
      <PicBox />
      <PicBox />
    </Container>
  );
}

const PicBox = styled.div`
  display: flex;
  width: 14.125rem;
  height: 11.4375rem;
  padding: 0.5625rem 0.75rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.9375rem;
  background: #f3f4f6;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
