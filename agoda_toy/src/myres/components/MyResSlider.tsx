import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';
import type ResItem from '../types/res.types';
import MyResItem from './MyResItem';

import ArrowIc from '../assets/svgs/arrow_icn.svg?react';

interface MyResSliderProps {
  items: ResItem[];
}

export default function MyResSlider({ items }: MyResSliderProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex);
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  return (
    <SliderWrapper>
      <StyledSwiper
        modules={[Navigation]}
        spaceBetween={32} // 2rem
        slidesPerView="auto"
        onSwiper={setSwiper}
      >
        {items.map((item, idx) => (
          <SwiperSlide style={{ width: 'fit-content' }} key={idx}>
            <MyResItem
              imageUrl={item.accommodationImage}
              name={item.korName}
              location={item.location}
              status={item.status}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      {swiper && (
        <>
          {activeIndex > 0 && (
            <NavButtonLeft onClick={() => swiper.slidePrev()}>
              <LeftArrowIcon />
            </NavButtonLeft>
          )}
          {activeIndex < items.length - 1 && (
            <NavButtonRight onClick={() => swiper.slideNext()}>
              <RightArrowIcon />
            </NavButtonRight>
          )}
        </>
      )}
    </SliderWrapper>
  );
}

// ✅ 버튼이 바깥으로 나갈 수 있도록 padding 추가
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  /* padding: 0 1.5rem; */
`;

const StyledSwiper = styled(Swiper)`
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    height: 100%;
    background: linear-gradient(to left, white, transparent);
    pointer-events: none;
    z-index: 2;
  }
`;

const NavButtonBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(-40%, -50%);
  z-index: 3;
  width: 3rem;
  height: 3rem;
  background-color: #55a3b5;
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12.5rem;
  border: 1px solid var(--AGODA-Fourth, #dcf3f7);
  cursor: pointer;
`;

const NavButtonRight = styled(NavButtonBase)`
  right: 0;
`;

const NavButtonLeft = styled(NavButtonBase)`
  left: 0;
`;

const LeftArrowIcon = styled(ArrowIc)`
  transform: rotate(180deg);
  width: 0.625rem;
  height: 1.0625rem;
`;
const RightArrowIcon = styled(ArrowIc)`
  width: 0.625rem;
  height: 1.0625rem;
`;
