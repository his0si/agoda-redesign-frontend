import React from 'react';
import styled from 'styled-components';
import backArrowUrl from '../imgs/icon_back.svg';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepCircle = styled.div<{ isActive?: boolean }>`
  width: 16px; // Slightly smaller to match image
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#007CEE' : '#FFFFFF')}; // Active: blue, Inactive: white
  border: ${(props) => (props.isActive ? '4px solid #CDE5FF' : '2px solid #DEDEDE')}; // Active: thicker light blue, Inactive: grey
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const StepConnector = styled.div`
  width: 1px;
  height: 80px; // Adjusted height
  background-color: #DEDEDE; // Lighter grey
  margin: 5px 0;
`;

const StepIndicator = () => {
  // Assuming the first step is active for now
  return (
    <StepperContainer>
      <BackArrow src={backArrowUrl} alt="뒤로가기" />
      <StepCircle isActive />
      <StepConnector />
      <StepCircle />
      <StepConnector />
      <StepCircle />
    </StepperContainer>
  );
};

export default StepIndicator; 