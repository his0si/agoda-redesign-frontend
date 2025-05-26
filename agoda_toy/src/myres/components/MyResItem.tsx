import StayIc from '@src/myres/assets/svgs/hotel_icn.svg?react';
import styled from 'styled-components';
import formatDateRange from '../utils/formatDateRange';

interface MyResItemProps {
  imageUrl: string;
  status: '예약 완료' | '체크인 완료' | '체크아웃 완료' | '취소된 예약';
  location: string;
  name: string;
  startDate: string; // e.g., api'2025-07-01'
  endDate: string; // e.g., '2025-07-03'
}

export default function MyResItem({
  imageUrl,
  status,
  location,
  name,
  startDate,
  endDate,
}: MyResItemProps) {
  const formattedDate = formatDateRange(startDate, endDate);

  return (
    <Container>
      <ResThumb src={imageUrl} />
      <ResInfoWrapper>
        <ResHeader>
          <StayIcon />
          <ResTitle>{status}</ResTitle>
        </ResHeader>
        <ResText>{location}</ResText>
        <ResText>{name}</ResText>
        <ResText>{formattedDate}</ResText>
      </ResInfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0.5rem;
  width: 15.4rem;
  height: 6.25rem;
`;

const ResThumb = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.3125rem;
  object-fit: cover;
`;

const ResInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  gap: 0.125rem;
  white-space: nowrap;
`;

const ResHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

const StayIcon = styled(StayIc)`
  width: 1.5rem;
  height: 1.5rem;
`;

const ResTitle = styled.p`
  font: ${({ theme }) => theme.fonts.body.sm};
`;

const ResText = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
`;
