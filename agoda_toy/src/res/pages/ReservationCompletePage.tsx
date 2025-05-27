import React from 'react';
import styled from 'styled-components';
import StepPageLayout from '../components/StepPageLayout';
import hotelImageSrc from '../assets/img_card2.png';
import StarIcon from '../assets/icon_hotel_star1.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #3D8587;
  margin-bottom: 32px;
  align-self: flex-start;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #D6DADE;
  border-radius: 20px;
  width: 777px;
  height: 582px;
  margin-bottom: 40px;
  padding: 40px 48px 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const HotelInfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const HotelImage = styled.img`
  width: 82.8px;
  height: 82.8px;
  border-radius: 20px;
  margin-right: 20px;
  object-fit: cover;
`;

const HotelDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HotelName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 4px;
`;

const HotelRatingRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4F4F4F;
  margin-bottom: 2px;
`;

const Star = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 2px;
  filter: invert(36%) sepia(44%) saturate(1042%) hue-rotate(134deg) brightness(97%) contrast(92%);
`;

const RoomInfoRow = styled.div`
  font-size: 14px;
  color: #4F4F4F;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const VerticalBar = styled.span`
  margin: 0 12px;
  color: #BDBDBD;
`;

const InfoLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 4px;
`;

const InfoValue = styled.div`
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 80px;
  margin-bottom: 0;
`;

const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 40px;
`;

const TotalLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #1A1A1A;
  text-decoration: underline;
`;

const TotalValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1A1A1A;
  text-decoration: underline;
`;

const CompleteButton = styled.button`
  width: 420px;
  height: 56px;
  border-radius: 12px;
  background: #3D8587;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  border: none;
  margin-top: 32px;
  cursor: pointer;
`;

const ReservationNumber = styled.div`
  color: #222;
  font-size: 20px;
  margin-bottom: 12px;
`;

const ReservationCompletePage = () => {
  // Dummy data for demonstration
  const reservationNumber = '8677940';
  const hotelName = '도쿄 프린스 호텔';
  const hotelImage = hotelImageSrc;
  const rating = '8.6 · 4,745건의 리뷰';
  const roomType = '1× 슈페리어 트윈 (33m²)';
  const guests = '성인 2명';
  const checkIn = '2025.04.15(목)';
  const checkOut = '2025.04.20(화)';
  const paymentInfo = '신한카드 일시불';
  const totalPrice = '₩ 1,970,260';

  return (
    <StepPageLayout currentStep={2}>
      <Container>
        <Title>3. 예약 확정</Title>
        <Card>
          <ReservationNumber>{reservationNumber}(예약 번호)</ReservationNumber>
          <HotelInfoRow>
            <HotelImage src={hotelImage} alt={hotelName} />
            <HotelDetails>
              <HotelName>{hotelName}</HotelName>
              <HotelRatingRow>
                <Star src={StarIcon} alt="star" />
                <span>{rating}</span>
              </HotelRatingRow>
              <RoomInfoRow>
                <span>{roomType}</span>
                <VerticalBar>|</VerticalBar>
                <span>{guests}</span>
              </RoomInfoRow>
            </HotelDetails>
          </HotelInfoRow>
          <Row>
            <div>
              <InfoLabel>체크인</InfoLabel>
              <InfoValue>{checkIn}</InfoValue>
            </div>
            <div>
              <InfoLabel>체크 아웃</InfoLabel>
              <InfoValue>{checkOut}</InfoValue>
            </div>
          </Row>
          <InfoLabel style={{ marginTop: 24 }}>결제 정보</InfoLabel>
          <InfoValue>{paymentInfo}</InfoValue>
          <TotalRow>
            <TotalLabel>총액 (KRW)</TotalLabel>
            <TotalValue>{totalPrice}</TotalValue>
          </TotalRow>
        </Card>
        <CompleteButton>예약 완료</CompleteButton>
      </Container>
    </StepPageLayout>
  );
};

export default ReservationCompletePage; 