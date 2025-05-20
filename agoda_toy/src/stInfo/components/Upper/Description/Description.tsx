import HotelName from './HotelName';
import Script from './Script';
import Adv from './Adv';
import styled from 'styled-components';

export default function Description() {
  return (
    <Container>
      <HotelName />
      <Script />
      <Adv />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
