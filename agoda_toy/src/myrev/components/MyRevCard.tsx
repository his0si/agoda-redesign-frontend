import MyRevCardText from './MyRevCardText';
import MyRevCardImg from './MyRevCardImg';
import styled from 'styled-components';
import type { ReviewModalHandlers } from '../types/modalFnTypes';

type MyRevCardProps = ReviewModalHandlers;

export default function MyRevCard(props: MyRevCardProps) {
  return (
    <Container>
      <MyRevCardText {...props} />
      <MyRevCardImg />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
