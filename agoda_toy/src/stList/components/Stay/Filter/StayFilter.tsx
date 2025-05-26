import styled from 'styled-components';
import SearchTagList from './SearchTagList';
import PriceRange from './PriceRange';

interface StayFilterProps {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}
export default function StayFilter({
  min,
  max,
  setMin,
  setMax,
}: StayFilterProps) {
  return (
    <Container>
      <StayFilterHeader>
        <StayFilterTitle>필터</StayFilterTitle>
        <Line />
      </StayFilterHeader>
      <PriceRange min={min} max={max} setMin={setMin} setMax={setMax} />
      <SearchTagList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.69rem;
  width: 18.75rem;
  height: 25.5625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  gap: 0.75rem;
  border: 1px solid #000;
  background-color: #000;
`;

const StayFilterTitle = styled.p`
  font: ${({ theme }) => theme.fonts.body.sm};
`;

const Line = styled.div`
  width: 18.75rem;
  height: 0.03125rem;
  background-color: #acacac;
`;

const StayFilterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.44rem;
`;
