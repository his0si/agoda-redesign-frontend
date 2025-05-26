import styled from 'styled-components';
import AdInfo from './AdInfo/AdInfo';
import Amen from './Amen/Amen';
import Room from './Room/Room';
import type { MiddleProps } from '@src/stInfo/types/middleProps';

export default function Middle(props: MiddleProps) {
  return (
    <Container>
      <Room {...props} />
      <Amen />
      <AdInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.75rem;
`;
