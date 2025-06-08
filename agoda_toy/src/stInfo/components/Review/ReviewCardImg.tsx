import styled, { css } from 'styled-components';

export default function ReviewCardImg({
  reviewImages,
}: {
  reviewImages: string[];
}) {
  return (
    <Container>
      {reviewImages.map((text: string) => (
        <ImgBox bgurl={text} key={text} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.63rem;
  width: 33.5rem;
  height: 9.9375rem;
`;

const ImgFrame = (imageUrl: string) => css`
  width: 10.125rem;
  height: 9.9375rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: url(${imageUrl}) lightgray 50% / cover no-repeat;
`;

const ImgBox = styled.div<{ bgurl: string }>`
  ${({ bgurl }) => ImgFrame(bgurl)}
`;
