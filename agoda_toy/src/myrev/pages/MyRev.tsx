import React from 'react';
import MyNavBar from '../../common/components/MyNavBar';
import MyRevCardSlider from '../components/MyRevCardSlider';
import styled from 'styled-components';

export default function MyRev() {
  return (
    <Containter>
      <MyNavBar />
      <MyRevCardSlider />
    </Containter>
  );
}

const Containter = styled.div`
  display: flex;
  width: 120rem;
  justify-content: center;
  gap: 2rem;
`;
