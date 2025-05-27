import React from 'react';
import styled from 'styled-components';
import hotelImg from '../assets/img_card2.png';
import StarIcon from '../assets/icon_hotel_star1.svg';

const FormContainer = styled.div`
  width: 100%;
  max-width: 680px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #3D8587;
  text-align: center;
`;

const Section = styled.section`
  width: 777px;
  height: 582px;
  background-color: #fff;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 20px;
  padding: 24px 32px;
  margin-bottom: 20px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const HotelInfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const HotelImg = styled.img`
  width: 108px;
  height: 108px;
  border-radius: 22.5px;
  object-fit: cover;
  margin-right: 20px;
`;

const HotelTextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HotelName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 12px;
`;

const HotelRatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Star = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;

const HotelRating = styled.div`
  font-size: 16px;
  color: #4F4F4F;
  margin-right: 10px;
`;

const ReviewText = styled.div`
  font-size: 18px;
  color: #4F4F4F;
  margin-bottom: 14px;
`;

const RoomInfo = styled.div`
  font-size: 18px;
  color: #4F4F4F;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0;
`;

const Label = styled.div`
  font-size: 15px;
  color: #222;
`;

const Value = styled.div`
  font-size: 15px;
  color: #222;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  margin: 18px 0 12px 0;
`;

const TotalRow = styled(Row)`
  font-size: 20px;
  font-weight: bold;
  color: #1A1A1A;
  text-decoration: underline;
  margin-top: 18px;
`;

const SubmitButton = styled.button`
  width: 514px;
  height: 72px;
  border-radius: 20px;
  padding: 21px 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #3D8587;
  color: white;
  font-size: 24px;
  font-weight: normal;
  border: none;
  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 32px;
  transition: background 0.2s;
  white-space: nowrap;
  &:hover {
    background-color: #2e6e6e;
  }
`;

const ReservationNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  margin-bottom: 24px;
`;

const InfoText = styled.div`
  font-size: 18px;
  color: #4F4F4F;
  font-weight: normal;
  line-height: 1.4;
`;

const ReservationCompleteBox = () => {
  return (
    <FormContainer>
      <PageTitle>3. 예약 확정</PageTitle>
      <Section>
        <ReservationNumber>8677940(예약 번호)</ReservationNumber>
        <HotelInfoRow>
          <HotelImg src={hotelImg} alt="호텔" />
          <HotelTextCol>
            <HotelName>도쿄 프린스 호텔</HotelName>
            <InfoText>8.6 (4,745건의 리뷰)</InfoText>
            <InfoText>1 x 슈페리어 트윈 (33m²) | 성인 2명</InfoText>
          </HotelTextCol>
        </HotelInfoRow>
        <Row>
          <Label>체크인</Label>
          <Value>2025.04.15(목)</Value>
        </Row>
        <Row>
          <Label>체크 아웃</Label>
          <Value>2025.04.20(화)</Value>
        </Row>
        <Divider />
        <Row>
          <Label>결제 정보</Label>
          <Value>신한카드 일시불</Value>
        </Row>
        <TotalRow>
          <Label>총액 (KRW)</Label>
          <Value>₩ 1,970,260</Value>
        </TotalRow>
      </Section>
      <SubmitButton>예약 완료</SubmitButton>
    </FormContainer>
  );
};

export default ReservationCompleteBox; 