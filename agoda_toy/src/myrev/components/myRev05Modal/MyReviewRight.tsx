import React from 'react';
import Profile from './Profile';
import ReviewPics from './ReviewPics';
import Review from './Review';
import styled from 'styled-components';

export default function MyReviewRight() {
  return (
    <Container>
      <Profile />
      <ReviewPics />
      <Review />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
