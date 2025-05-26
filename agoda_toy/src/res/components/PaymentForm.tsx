import React, { useState } from 'react';
import styled from 'styled-components';
import StepIndicator from './StepIndicator';
import InfoCard from './InfoCard';

const FormContainer = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  background-color: #fff;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 20px;
  padding: 24px 32px;
  margin-bottom: 20px;
  box-shadow: none;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #3D8587;
  margin-top: 0;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`;

const Label = styled.label`
  font-size: 14px;
  color: #4F4F4F;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #D6DADE;
  border-radius: 16px;
  font-size: 16px;
  background-color: #fff;
  color: #1A1A1A;
  width: 450px;
  height: 71px;
  box-sizing: border-box;
  &::placeholder {
    color: #C4C4C4;
    font-size: 16px;
  }
  &:focus {
    border-color: #3D8587;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 124, 238, 0.15);
    background-color: #fff;
  }
`;

const SubmitButton = styled.button<{ enabled: boolean }>`
  width: 514px;
  height: 72px;
  border-radius: 20px;
  padding: 21px 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ enabled }) => (enabled ? '#3D8587' : '#D6DADE')};
  color: white;
  font-size: 24px;
  font-weight: normal;
  border: none;
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'not-allowed')};
  margin-top: 24px;
  margin-bottom: 32px;
  transition: background 0.2s;
  white-space: nowrap;
  &:hover {
    background-color: ${({ enabled }) => (enabled ? '#2e6e6e' : '#D6DADE')};
  }
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #3D8587;
  align-self: flex-start;
`;

const CouponInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
`;

const CouponInput = styled.input`
  width: 100%;
  height: 71px;
  border: 1px solid #D6DADE;
  border-radius: 16px;
  font-size: 16px;
  line-height: 71px;
  padding: 0 75px 0 12px;
  background: #fff;
  color: #1A1A1A;
  box-sizing: border-box;
  &::placeholder {
    color: #C4C4C4;
    font-size: 16px;
    line-height: 71px;
  }
`;

const CouponLabel = styled.label`
  position: absolute;
  top: -12px;
  left: 16px;
  background: #fff;
  padding: 0 8px;
  font-size: 14px;
  color: #BDBDBD;
  font-weight: bold;
  z-index: 2;
  pointer-events: none;
`;

const CouponButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 63px;
  height: 32px;
  border-radius: 8px;
  background: #3D8587;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentForm = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const [email, setEmail] = useState('');
  const [coupon, setCoupon] = useState('');

  const isFormValid = cardName && cardNumber && cardPassword && email;

  return (
    <FormContainer>
      <PageTitle>2. 결제 정보</PageTitle>
      <Section>
        <SectionTitle>
          * 결제 방법 선택
        </SectionTitle>
        <FormGroup style={{ marginBottom: '16px'}}>
          <Label htmlFor="cardName">카드 명의자 이름 *</Label>
          <Input
            type="text"
            id="cardName"
            placeholder="영문으로 작성해 주세요"
            value={cardName}
            onChange={e => setCardName(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: '16px'}}>
          <Label htmlFor="cardNumber">카드 번호</Label>
          <Input
            type="password"
            id="cardNumber"
            placeholder="카드 번호"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: '16px'}}>
          <Label htmlFor="cardPassword">카드 비밀번호</Label>
          <Input
            type="password"
            id="cardPassword"
            placeholder="카드 비밀번호"
            value={cardPassword}
            onChange={e => setCardPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup style={{ marginBottom: '16px'}}>
          <Label htmlFor="email">결제 확인 이메일</Label>
          <Input
            type="email"
            id="email"
            placeholder="username@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
      </Section>
      <Section>
        <SectionTitle>예약 혜택 (선택)</SectionTitle>
        <CouponInputWrapper>
          <CouponLabel htmlFor="coupon">할인코드</CouponLabel>
          <CouponInput
            id="coupon"
            placeholder="할인코드 입력"
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
          />
          <CouponButton>적용</CouponButton>
        </CouponInputWrapper>
      </Section>
      <SubmitButton type="button" enabled={!!isFormValid} disabled={!isFormValid}>
        예약 확정
      </SubmitButton>
    </FormContainer>
  );
};

export default PaymentForm; 