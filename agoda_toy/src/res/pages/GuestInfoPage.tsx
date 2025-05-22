import React from 'react';
import styled from 'styled-components';

const GuestInfoPage = () => {
  return (
    <Container>
      {/* 좌측 진행 단계 표시 */}
      <StepIndicatorArea>
        {/* TODO: 단계 UI 구현 */}
      </StepIndicatorArea>
      {/* 중앙 투숙객 정보 입력 폼 */}
      <FormArea>
        {/* TODO: 입력 폼 구현 */}
      </FormArea>
      {/* 우측 숙소/가격 정보 카드 */}
      <InfoCardArea>
        {/* TODO: 카드 UI 구현 */}
      </InfoCardArea>
    </Container>
  );
};

export default GuestInfoPage;

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