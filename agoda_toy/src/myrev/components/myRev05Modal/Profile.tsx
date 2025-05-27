import Rate from '@src/stInfo/components/common/Rate';
import Profileimg from '@stInfo/assets/svgs/pro_big.svg?react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <Container>
      <Img />
      <Frame>
        <Name>황혜연</Name>
        <WhenWrite>2025.03.15 작성</WhenWrite>
      </Frame>
      <RateFrame>
        <p>평점</p>
        <RateFrame2>
          <Rate /> <p>8점</p>
        </RateFrame2>
      </RateFrame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Img = styled(Profileimg)`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  padding: 0rem 0.6875rem;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 2.1875rem;
  background: var(--AGODA-Primary, #006a71);
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
`;

const Name = styled.h1`
  ${({ theme }) => theme.fonts.headline.sm};
`;

const WhenWrite = styled.p`
  ${({ theme }) => theme.fonts.body.md};
`;

const RateFrame = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const RateFrame2 = styled.div`
  display: flex;
  gap: 0.5rem;
`;
