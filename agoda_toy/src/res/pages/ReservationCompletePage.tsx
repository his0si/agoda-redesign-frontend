import React from 'react';
import StepPageLayout from '../components/StepPageLayout';
import ReservationCompleteBox from '../components/ReservationCompleteBox';

const ReservationCompletePage = () => (
  <StepPageLayout currentStep={3}>
    <ReservationCompleteBox />
  </StepPageLayout>
);

export default ReservationCompletePage;
