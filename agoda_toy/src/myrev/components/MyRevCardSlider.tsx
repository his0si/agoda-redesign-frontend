import MyRevCard from './MyRevCard';
import styled from 'styled-components';

export default function MyRevCardSlider() {
  return (
    <Container>
      <MyRevCard />
      <MyRevCard />
      <MyRevCard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.69rem;
`;
