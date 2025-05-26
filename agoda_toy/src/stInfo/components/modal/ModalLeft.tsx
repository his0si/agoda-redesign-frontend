import React from 'react';
import SaleList from './SaleList';
import ReservationBtn from './ReservationBtn';
import styled from 'styled-components';
import Price from './Price';

export default function ModalLeft() {
  return (
    <Container>
      <SaleList />
      <Price />
      <ReservationBtn />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
