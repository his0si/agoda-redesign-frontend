import React from 'react';
import styled from 'styled-components';

const BackArrow = styled.div`
  width: 12px; // Chevron width
  height: 12px; // Chevron height
  border-left: 2px solid #555; // Arrow line color and thickness
  border-bottom: 2px solid #555; // Arrow line color and thickness
  transform: rotate(45deg);
  cursor: pointer;
  margin-bottom: 60px; // Increased margin to match image
  margin-left: 6px; // To visually center it better with the circles
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
      <BackArrow />
      <StepCircle isActive />
      <StepConnector />
      <StepCircle />
      <StepConnector />
      <StepCircle />
    </StepperContainer>
  );
};

export default StepIndicator; 