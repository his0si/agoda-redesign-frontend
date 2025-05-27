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

const VerticalLine = styled.div<{ currentStep: 1 | 2 | 3 }>`
  position: absolute;
  left: 22px;
  top: 22px;
  width: 1px;
  height: ${({ currentStep }) =>
    currentStep === 2 ? '333px' : '645px'};
  background: #DEDEDE;
`;

const StepCircleImg = styled.img<{ top: number }>`
  position: absolute;
  left: 0px;
  width: 44px;
  height: 44px;
  top: ${({ top }) => top}px;
`;

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  // currentStep: 1(투숙객 정보), 2(결제 정보), 3(예약 확정)
  return (
    <StepperContainer>
      {currentStep !== 3 && <BackArrow src={backArrowUrl} alt="뒤로가기" />}
      <VerticalLine currentStep={currentStep} />
      {currentStep === 3 ? (
        <StepCircleImg src={activeBarUrl} alt="활성화" top={0} />
      ) : (
        <>
          <StepCircleImg src={activeBarUrl} alt="활성화" top={0} />
          <StepCircleImg src={inactiveBarUrl} alt="비활성화" top={333} />
          {currentStep === 1 && (
            <StepCircleImg src={inactiveBarUrl} alt="비활성화" top={667} />
          )}
        </>
      )}
    </StepperContainer>
  );
};

export default StepIndicator; 