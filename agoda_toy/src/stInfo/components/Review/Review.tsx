import styled from 'styled-components';
import ReviewHeader from './ReviewHeader';
import ReviewCard from './ReviewCard';
import IconMore from '@stInfo/assets/svgs/Chevron right.svg?react';

const CARD_LIST = new Array(4).fill(0);

export default function Review() {
  return (
    <Container>
      <ReviewHeader />
      <ContentContainer>
        <CardContainer>
          {CARD_LIST.map((num) => (
            <ReviewCard key={num} />
          ))}
        </CardContainer>
        <MoreContainer>
          <MoreReview>리뷰 전체보기</MoreReview>
          <MoreIcon />
        </MoreContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.5rem;
  height: 78.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem;
  flex-shrink: 0;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2.6875rem 1.875rem;
  align-self: stretch;
  flex-wrap: wrap;

  width: 88rem;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 87.625rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.625rem;
`;

const MoreReview = styled.p`
  ${({ theme }) => theme.fonts.headline.sm};
  color: ${({ theme }) => theme.colors.gray300};
`;

const MoreIcon = styled(IconMore)`
  width: 1.875rem;
  height: 1.875rem;
  aspect-ratio: 1/1;
`;

const MoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;

  cursor: pointer;
`;
