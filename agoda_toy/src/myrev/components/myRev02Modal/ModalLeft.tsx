import ModalLeftTop from './ModalLeftTop';
import ModalLeftBottom from './ModalLeftBottom';
import styled from 'styled-components';

export default function ModalLeft() {
  return (
    <Container>
      <ModalLeftTop />
      <ModalLeftBottom />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 2rem;
`;
