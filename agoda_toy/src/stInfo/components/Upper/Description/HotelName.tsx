import styled from 'styled-components';
import { IconStar } from '@stInfo/components/common/Rate';
import { useGetAccommodation } from '@src/stInfo/hooks/useGetAccomodationId';

const accommodationId = 1;

export default function HotelName() {
  const { data } = useGetAccommodation(accommodationId);

  console.log(data);

  return (
    <Container>
      <HotelTopGroup>
        <HotelTopFrame>
          <TypoHotelTopFrameMain>{data?.korName}</TypoHotelTopFrameMain>
          <TypoHotelTopFrameSub>{data?.engName}</TypoHotelTopFrameSub>
        </HotelTopFrame>
        <HotelTopAdd>{data?.address}</HotelTopAdd>
      </HotelTopGroup>
      <HotelBottomGroup>
        <HotelBottom>
          <IconStar />
          <HotelBottomReview>{data?.totalScore}</HotelBottomReview>
        </HotelBottom>
        <HotelBottomReview>리뷰 {data?.reviewCount}개</HotelBottomReview>
      </HotelBottomGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 29rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3.75rem;
`;

const TypoHotelTopFrameMain = styled.h1`
  ${({ theme }) => theme.fonts.display.md};
  margin: 0;
`;

const TypoHotelTopFrameSub = styled.h2`
  ${({ theme }) => theme.fonts.title.md};
  color: ${({ theme }) => theme.colors.gray600};
`;

const HotelTopAdd = styled.p`
  ${({ theme }) => theme.fonts.title.sm};
  margin: 0;
`;

const HotelTopFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8125rem;
  width: 25.5rem;
  height: 2.81rem;
`;

const HotelTopGroup = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  flex-direction: column;
  justify-content: stretch;
  height: 4.31rem;
`;

const HotelBottomGroup = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 1.25rem;
`;

const HotelBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HotelBottomReview = styled.p`
  margin: 0;
  ${({ theme }) => theme.fonts.headline.md};
`;
