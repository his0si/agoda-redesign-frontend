import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 6px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const HotelImage = styled.img`
  width: 60px; 
  height: 60px; 
  border-radius: 4px;
  margin-right: 12px;
  object-fit: cover;
`;

const HotelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const HotelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelName = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: #1A1A1A;
`;

const HotelRating = styled.div`
  font-size: 13px;
  color: #4F4F4F;
  // TODO: Add star icons for rating
`;

const BookingDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // Vertically align items
  font-size: 13px;
  margin-bottom: 12px;
  color: #4F4F4F;
`;

const BookingLabel = styled.span`
 color: #4F4F4F;
`;

const BookingValue = styled.span``;

const EditLink = styled.a`
  font-size: 13px;
  color: #007CEE; // Blue color for the link
  text-decoration: underline;
  cursor: pointer;
  font-weight: normal; // Ensure it's not bold by default
  &:hover {
    color: #0056b3;
  }
`;

const PriceSectionTitle = styled.h4`
  font-size: 15px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #1A1A1A;
  border-top: 1px solid #EAEAEA;
  padding-top: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 10px;
  color: #4F4F4F;
`;

const TotalPriceRow = styled(PriceRow)`
  font-weight: bold;
  font-size: 16px; // Slightly larger for total
  color: #1A1A1A;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #EAEAEA;
`;

const InfoCard = () => {
  // Placeholder data - replace with actual props or state
  const hotelName = "도쿄 프린스 호텔";
  const rating = "8.6 (4,745)"; // TODO: Parse and display stars
  const checkInDate = "2025년 4월 15일";
  const checkOutDate = "2025년 4월 20일";
  const roomType = "1 x 슈페리어 트윈 (33m²)";
  const guests = "성인 2명 / 최대 성인 2명";

  const roomPrice = "₩ 1,587,405";
  const taxesAndFees = "₩ 382,855";
  const totalPrice = "₩ 1,970,260";
  // Placeholder image URL
  const imageUrl = "https://via.placeholder.com/80x60"; // Replace with actual image path or URL


  return (
    <CardContainer>
      <HotelInfoContainer>
        <HotelImage src={imageUrl} alt={hotelName} />
        <HotelDetails>
          <HotelName>{hotelName}</HotelName>
          <HotelRating>{rating} ★★★★<span style={{color: "#DEDEDE"}}>☆</span></HotelRating> {/* Placeholder stars, with one greyed out */}
        </HotelDetails>
      </HotelInfoContainer>

      <BookingDetailRow>
        <BookingLabel>{`${checkInDate} - ${checkOutDate}`}</BookingLabel>
        <EditLink>수정</EditLink>
      </BookingDetailRow>
      <BookingDetailRow>
        <BookingLabel>{roomType}</BookingLabel>
        <EditLink>수정</EditLink>
      </BookingDetailRow>
      <BookingDetailRow>
        <BookingLabel>{guests}</BookingLabel>
        <EditLink>수정</EditLink>
      </BookingDetailRow>

      <PriceSectionTitle>가격 세부 정보</PriceSectionTitle>
      <PriceRow>
        <span>{hotelName}</span>
        <span>{roomPrice}</span>
      </PriceRow>
      <PriceRow>
        <span style={{ color: "#828282" }}>1객실, 4박</span>
        <span /> 
      </PriceRow>
      <PriceRow>
        <span>세금 및 수수료</span>
        <span>{taxesAndFees}</span>
      </PriceRow>

      <TotalPriceRow>
        <span>총액 (KRW)</span>
        <span>{totalPrice}</span>
      </TotalPriceRow>
    </CardContainer>
  );
};

export default InfoCard; 