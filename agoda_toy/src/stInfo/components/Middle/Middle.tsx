import styled from 'styled-components';
import AdInfo from './AdInfo/AdInfo';
import Amen from './Amen/Amen';
import Room from './Room/Room';

export default function Middle() {
  return (
    <Container>
      <Room />
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
