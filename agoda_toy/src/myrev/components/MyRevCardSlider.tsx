import type { ReviewModalHandlers } from '../types/modalFnTypes';
import MyRevCard from './MyRevCard';
import styled from 'styled-components';

type MyRevCardSliderProps = ReviewModalHandlers;

export default function MyRevCardSlider(props: MyRevCardSliderProps) {
  return (
    <Container>
      <MyRevCard {...props} />
      <MyRevCard {...props} />
      <MyRevCard {...props} />
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
