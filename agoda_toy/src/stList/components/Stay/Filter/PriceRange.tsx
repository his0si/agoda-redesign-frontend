// ✅ PriceRange.tsx (props 기반으로 수정된 버전)
import styled from 'styled-components';
import PriceRangeSlider from './PriceRangeSlider';
import PriceRangeTag from './PriceRangeTag';

export const MIN = 0;
export const MAX = 10000000;

interface PriceRangeProps {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

export default function PriceRange({
  min,
  max,
  setMin,
  setMax,
}: PriceRangeProps) {
  return (
    <PriceRangeContainer>
      <PriceRangeWrapper>
        <PriceRangeTitle>1박당 요금</PriceRangeTitle>
        <SliderTagFrame>
          <PriceRangeSlider
            min={min}
            max={max}
            setMin={setMin}
            setMax={setMax}
          />
          <PriceRangeTag min={min} max={max} setMin={setMin} setMax={setMax} />
        </SliderTagFrame>
      </PriceRangeWrapper>
    </PriceRangeContainer>
  );
}

const PriceRangeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 0.435rem;
  width: 17.4626rem;
  border-bottom: 1px solid #d9d9d9;
`;

const PriceRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 0.92rem;
`;

const PriceRangeTitle = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
`;

const SliderTagFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6875rem;
`;
