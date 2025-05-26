import React from 'react';
import styled from 'styled-components';
import backArrowUrl from '../imgs/icon_back.svg';
import activeBarUrl from '../imgs/active_bar.svg';
import inactiveBarUrl from '../imgs/inactive_bar_1.svg';

const BackArrow = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 137px;
  left: 106px;
  cursor: pointer;
  z-index: 10;
`;

const StepperContainer = styled.div`
  position: relative;
  width: 44px;
  height: 711px;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 22px;
  top: 22px;
  width: 1px;
  height: 645px;
  background: #DEDEDE;
`;

const StepCircleImg = styled.img<{ top: number }>`
  position: absolute;
  left: 0px;
  width: 44px;
  height: 44px;
  top: ${({ top }) => top}px;
`;

const StepIndicator = () => {
  // 원 위치: 첫번째(활성화) 0px, 두번째 333px, 세번째 667px (예시, 실제 위치는 디자인에 맞게 조정)
  return (
    <StepperContainer>
      <BackArrow src={backArrowUrl} alt="뒤로가기" />
      <VerticalLine />
      <StepCircleImg src={activeBarUrl} alt="활성화" top={0} />
      <StepCircleImg src={inactiveBarUrl} alt="비활성화" top={333} />
      <StepCircleImg src={inactiveBarUrl} alt="비활성화" top={667} />
    </StepperContainer>
  );
};

export default StepIndicator; 