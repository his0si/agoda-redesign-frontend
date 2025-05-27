import React from 'react';
import StepPageLayout from '../components/StepPageLayout';
import GuestForm from '../components/GuestForm';

const GuestInfoPage = () => (
  <StepPageLayout currentStep={1}>
    <GuestForm />
  </StepPageLayout>
);

export default GuestInfoPage; 