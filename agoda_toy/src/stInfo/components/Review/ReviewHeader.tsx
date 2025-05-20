import styled from 'styled-components';
import { IconStar } from '../common/Rate';
import ReviewTag from './ReviewTag';

export default function ReviewHeader() {
  return (
    <Container>
      <HeaderTop>
        <Title>리뷰</Title>
        <RateContainer>
          <Score>
            <IconStar />
            <RateText>8.6점</RateText>
          </Score>
          <RateText>·</RateText>
          <RateText>4,745개</RateText>
        </RateContainer>
      </HeaderTop>
      <ReviewTag />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.0625rem;
`;

const Title = styled.h1`
  flex: 1 0 0;
  ${({ theme }) => theme.fonts.display.sm};
`;

const RateContainer = styled.div`
  display: flex;
  width: 12.4275rem;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

const RateText = styled.p`
  ${({ theme }) => theme.fonts.headline.lg};
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
`;

const HeaderTop = styled.div`
  display: flex;
  width: 87.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;
`;
