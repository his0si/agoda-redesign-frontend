import ThumbIc from '@stList/assets/svgs/price_range_thumb.svg?react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MAX, MIN } from './PriceRange';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

export default function PriceRangeSlider({
  min,
  max,
  setMin,
  setMax,
}: PriceRangeSliderProps) {
  const rangeRef = useRef<HTMLDivElement>(null);
  const thumbMinRef = useRef<SVGSVGElement>(null);
  const thumbMaxRef = useRef<SVGSVGElement>(null);

  const tempMin = useRef(min);
  const tempMax = useRef(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    tempMin.current = Math.min(Number(e.target.value), max - 1);
    updateThumbs();
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    tempMax.current = Math.max(Number(e.target.value), min + 1);
    updateThumbs();
  };

  const handleMouseUp = () => {
    setMin(Math.max(tempMin.current, MIN));
    setMax(Math.min(tempMax.current, MAX));
  };

  const updateThumbs = () => {
    const percentMin = ((tempMin.current - MIN) / (MAX - MIN)) * 100;
    const percentMax = ((tempMax.current - MIN) / (MAX - MIN)) * 100;

    if (thumbMinRef.current) thumbMinRef.current.style.left = `${percentMin}%`;
    if (thumbMaxRef.current) thumbMaxRef.current.style.left = `${percentMax}%`;
    if (rangeRef.current) {
      rangeRef.current.style.left = `${percentMin}%`;
      rangeRef.current.style.width = `${percentMax - percentMin}%`;
    }
  };

  useEffect(() => {
    tempMin.current = min;
    tempMax.current = max;
    updateThumbs();
  }, [min, max]);

  return (
    <SliderWrapper>
      <Input
        type="range"
        min={MIN}
        max={MAX}
        value={min}
        onChange={handleMinChange}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
      <Input
        type="range"
        min={MIN}
        max={MAX}
        value={max}
        onChange={handleMaxChange}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      />
      <SliderTrack>
        <TrackBackground />
        <TrackRange ref={rangeRef} />
        <Thumb ref={thumbMinRef} />
        <Thumb ref={thumbMaxRef} />
      </SliderTrack>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1.25rem;
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  cursor: pointer;
  pointer-events: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  z-index: 2;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: none;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    width: 1.25rem;
    height: 1.25rem;
    background: transparent;
    border: none;
  }
`;

const SliderTrack = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  height: 0.5rem;
  transform: translateY(-50%);
  z-index: 1;
`;

const TrackBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #dcdcdc;
  border-radius: 0.25rem;
`;

const TrackRange = styled.div`
  position: absolute;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(85, 163, 181, 0.3) -25.94%,
    #55a3b5 103.35%
  );
  border-radius: 0.25rem;
`;

const Thumb = styled(ThumbIc)`
  position: absolute;
  top: 50%;
  width: 1.25rem;
  height: 1.25rem;
  transform: translate(-25%, -50%);
  z-index: 3;
`;
