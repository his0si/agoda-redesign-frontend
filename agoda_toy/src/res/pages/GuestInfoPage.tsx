import React from 'react';
import styled from 'styled-components';
import StepIndicator from '../components/StepIndicator';
import InfoCard from '../components/InfoCard';
import GuestForm from '../components/GuestForm';

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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const InfoCardArea = styled.div`
  width: 350px;
  margin-top: 80px;
  margin-left: 40px;
`;

const GuestInfoPage = () => {
  return (
    <Container>
      {/* 좌측 진행 단계 표시 */}
      <StepIndicatorArea>
        <StepIndicator />
      </StepIndicatorArea>
      {/* 중앙 투숙객 정보 입력 폼 */}
      <FormArea>
        <GuestForm />
      </FormArea>
      {/* 우측 숙소/가격 정보 카드 */}
      <InfoCardArea>
        <InfoCard />
      </InfoCardArea>
    </Container>
  );
};

export default GuestInfoPage; 