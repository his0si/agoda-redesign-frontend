import React from 'react';
import styled from 'styled-components';
import StepIndicator from './StepIndicator';
import InfoCard from './InfoCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: #fff;
`;

const StepIndicatorArea = styled.div`
  width: 200px;
  margin-top: 80px;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const InfoCardArea = styled.div`
  width: 350px;
  margin-top: 80px;
  margin-left: 100px;
`;

interface StepPageLayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

const StepPageLayout = ({ children, currentStep }: StepPageLayoutProps) => (
  <Container>
    <StepIndicatorArea>
      <StepIndicator currentStep={currentStep as 1 | 2 | 3} />
    </StepIndicatorArea>
    <FormArea>
      {children}
    </FormArea>
    {currentStep !== 3 && (
      <InfoCardArea>
        <InfoCard />
      </InfoCardArea>
    )}
  </Container>
);

export default StepPageLayout; 