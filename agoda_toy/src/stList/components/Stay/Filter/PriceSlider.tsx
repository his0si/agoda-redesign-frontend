import { useState } from 'react';
import styled from 'styled-components';

interface PriceSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: () => void;
}

export default function PriceSlider({
  value,
  min,
  max,
  onChange,
}: PriceSliderProps) {
  const [currValue, setCurrValue] = useState(value);

  return (
    <SliderContainer>
      <SliderRail />
      <SliderFillTrack fill={`${(currValue / (max - min)) * 100}%`} />
      <Slider
        type={'range'}
        defaultValue={value}
        min={min}
        max={max}
        onChange={(e) => {
          const newValue = parseInt(e.target.value);
          setCurrValue(newValue);
          onChange(newValue);
        }}
      />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  height: 24px;
  position: relative;
`;

const SliderRail = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: gray;
  position: absolute;
  top: calc(50% - 2px);
`;

const SliderFillTrack = styled.div<$fill: string >`
  width: ${(props) => props.fill};
  height: 4px;
  border-radius: 2px;
  background-color: blue;
  position: absolute;
  top: calc(50% - 2px);
`;

const Slider = styled.input`
  position: absolute;
  top: calc(50% - 6px);
  width: 100%;
  height: 12px;
  -webkit-appearance: none;
  background: transparent;
  margin: 0;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: blue;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    cursor: pointer;
  }

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: none;
  }
`;
