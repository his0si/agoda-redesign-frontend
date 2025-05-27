import React from 'react';
import StepPageLayout from '../components/StepPageLayout';
import PaymentForm from '../components/PaymentForm';

const PaymentPage = () => (
  <StepPageLayout currentStep={2}>
    <PaymentForm />
  </StepPageLayout>
);

export default PaymentPage; 