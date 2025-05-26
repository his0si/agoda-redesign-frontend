import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MAX, MIN } from './PriceRange';

interface PriceRangeTagProps {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

export default function PriceRangeTag({
  min,
  max,
  setMin,
  setMax,
}: PriceRangeTagProps) {
  const [minInput, setMinInput] = useState('');
  const [maxInput, setMaxInput] = useState('');

  useEffect(() => {
    setMinInput(min.toLocaleString());
    setMaxInput(max.toLocaleString());
  }, [min, max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    const num = Number(raw);
    if (!isNaN(num)) {
      const limited = Math.min(Math.max(num, MIN), max - 1);
      setMin(limited);
      setMinInput(formatWithComma(limited.toString()));
    } else {
      setMinInput('');
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    const num = Number(raw);
    if (!isNaN(num)) {
      const limited = Math.max(Math.min(num, MAX), min + 1);
      setMax(limited);
      setMaxInput(formatWithComma(limited.toString()));
    } else {
      setMaxInput('');
    }
  };

  return (
    <TagContainer>
      <LabelWrapper>
        <TagLabel>이상</TagLabel>
        <TagLabel>이하</TagLabel>
      </LabelWrapper>
      <TagWrapper>
        <TagFrame>
          <InputBox>
            <Prefix>₩</Prefix>
            <PriceInput
              value={minInput}
              onChange={handleMinChange}
              size={minInput.length || 1}
            />
          </InputBox>
        </TagFrame>
        {/* <PriceRangeLineIcon /> */}
        <PriceRangeLine />
        <TagFrame>
          <InputBox>
            <Prefix>₩</Prefix>
            <PriceInput
              value={maxInput}
              onChange={handleMaxChange}
              size={maxInput.length || 1}
            />
          </InputBox>
        </TagFrame>
      </TagWrapper>
    </TagContainer>
  );
}

function formatWithComma(value: string): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const TagContainer = styled.div`
  display: flex;
  width: 15.875rem;
  flex-direction: column;
  gap: 0.63rem;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  // ← 좌우 여백도 줄 수 있음
`;

const LabelWrapper = styled.div`
  display: flex;
  width: 15.875rem;
  gap: 8.75rem;
  padding-left: 1.56rem;
  font: ${({ theme }) => theme.fonts.caption.xsmall};
`;
const PriceRangeLine = styled.div`
  width: 100%;
  border-bottom: 1px dashed rgba(172, 172, 172, 1);
`;

const TagFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
`;

const TagLabel = styled.p`
  font: ${({ theme }) => theme.fonts.caption.xsmall};
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 1.25rem;
  background-color: #fff;
  padding: 0.625rem 1.3125rem;
`;

const Prefix = styled.span`
  font: ${({ theme }) => theme.fonts.caption.xsmall};
  margin-right: 0.25rem;
`;

const PriceInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font: ${({ theme }) => theme.fonts.caption.xsmall};
  width: auto;
  text-align: center;
`;
