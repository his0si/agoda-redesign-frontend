import styled from 'styled-components';
import StayReview from './StayReview';
import StayName from './StayName';
import StayTag from './StayTag';
import StayAddress from './StayLocation';
import StayPrice from './StayPrice';

interface StayCardProps {
  imageUrl: string;
  name: string;
  engName: string;
  type: number;
  review: number;
  reviewCount: number;
  tags: string[];
  location: string;
  realPrice: number;
  salePrice: number;
  totalPrice: number;
}

export default function StayCard({
  imageUrl,
  name,
  review,
  engName,
  type,
  reviewCount,
  tags,
  location,
  realPrice,
  salePrice,
  totalPrice,
}: StayCardProps) {
  return (
    <Container>
      <StayImage src={imageUrl} alt="호텔 이미지" />
      <Frame>
        <LeftContent>
          <NameReviewFrame>
            <StayName name={name} type={type} engName={engName} />
            <StayReview review={review} reviewCount={reviewCount} />
          </NameReviewFrame>
          <StayTag tags={tags} />
        </LeftContent>
        <RightContent>
          <StayAddress location={location} />
          <StayPrice
            realPrice={realPrice}
            salePrice={salePrice}
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
  border: 0.0625rem solid #acacac;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
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
