import styled, { css } from 'styled-components';
import { useGetAccommodation } from '@src/stInfo/hooks/useGetAccomodationId';

export default function Photo() {
  const { data } = useGetAccommodation(1);
  const images = data?.accommodationImages;

  if (!images || images.length < 5) return null;

  return (
    <Container>
      <BigImageBox bgurl={images[0]} />
      <LeftContainer>
        <ImageBox bgurl={images[1]} />
        <ImageBox bgurl={images[2]} />
        <ImageBox bgurl={images[3]} />
        <ImageBox bgurl={images[4]} />
      </LeftContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.5rem;
  height: 27.8125rem;
  padding: 0.625rem 0.75rem;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-bottom: 1.38rem;
`;

const BigImg = (imageUrl: string) => css`
  width: 43.5rem;
  height: 27.8125rem;
  border-radius: 0.5rem;
  background: url(${imageUrl}) lightgray 50% / cover no-repeat;
`;

const BigImageBox = styled.div<{ bgurl: string }>`
  ${({ bgurl }) => BigImg(bgurl)}
`;

const LeftContainer = styled.div`
  display: flex;
  width: 43.5rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.4375rem 0.5rem;
  flex-wrap: wrap;
`;

const SmallImgWrapper = (imageUrl: string) => css`
  width: 21.5rem;
  height: 13.6875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: url(${imageUrl}) lightgray 50% / cover no-repeat;
`;

const ImageBox = styled.div<{ bgurl: string }>`
  ${({ bgurl }) => SmallImgWrapper(bgurl)}
`;
