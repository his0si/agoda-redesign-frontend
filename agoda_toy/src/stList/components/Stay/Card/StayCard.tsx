import styled from 'styled-components';
import StayReview from './StayReview';
import StayName from './StayName';
import StayAmenityTag from './StayAmenityTag';
import StayAddress from './StayLocation';
import StayPrice from './StayPrice';
import type { Accommodation } from '@src/stList/types/getAccommodationsResponse.types';

export default function StayCard({
  korName,
  engName,
  star,
  accommodationImage,
  location,
  totalScore,
  reviewCount,
  provisionTags,
  price,
  discountPrice,
  totalPrice,
}: Accommodation) {
  return (
    <Container>
      <StayImage src={accommodationImage} alt="호텔 이미지" />
      <Frame>
        <LeftContent>
          <NameReviewFrame>
            <StayName korname={korName} star={star} engName={engName} />
            <StayReview review={totalScore} reviewCount={reviewCount} />
          </NameReviewFrame>
          <StayAmenityTag tags={provisionTags} />
        </LeftContent>
        <RightContent>
          <StayAddress location={location} />
          <StayPrice
            realPrice={price}
            discountPrice={discountPrice}
            totalPrice={totalPrice}
          />
        </RightContent>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 984px;
  height: 18.5rem;
  border: 0.0625rem solid rgba(172, 172, 172, 1);
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fourth};
  }
`;

const StayImage = styled.img`
  width: 18.75rem;
  height: auto;
  object-fit: cover;
`;

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  flex: 1;
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const NameReviewFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
