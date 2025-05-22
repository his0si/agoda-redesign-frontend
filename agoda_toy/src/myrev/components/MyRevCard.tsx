import MyRevCardText from './MyRevCardText';
import MyRevCardImg from './MyRevCardImg';
import styled from 'styled-components';

export default function MyRevCard() {
  return (
    <Container>
      <MyRevCardText />
      <MyRevCardImg />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
