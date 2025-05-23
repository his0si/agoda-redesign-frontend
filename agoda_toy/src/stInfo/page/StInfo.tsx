import Upper from '../components/Upper/Upper';
import Middle from '@stInfo/components/Middle/Middle';
import Review from '@stInfo/components/Review/Review';
import styled from 'styled-components';

export default function StInfo() {
  return (
    <Container>
      <Upper />
      <Middle />
      <Review />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
