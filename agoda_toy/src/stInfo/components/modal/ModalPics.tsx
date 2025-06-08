import styled, { css } from 'styled-components';

export default function ModalPics({ pics }: { pics: string[] }) {
  return (
    <Container>
      <BigImageBox bgurl={pics[0]} />
      <Frame>
        <SmallImageBox bgurl={pics[1]} />
        <SmallImageBox bgurl={pics[1]} />
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 37.25rem;
  gap: 0.81rem;

  flex-direction: column;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BigImg = (imageUrl: string) => css`
  width: 37.25rem;
  height: 23.8125rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: url(${imageUrl}) lightgray 50% / cover no-repeat;
`;

const BigImageBox = styled.div<{ bgurl: string }>`
  ${({ bgurl }) => BigImg(bgurl)}
`;

const SmallImg = (imageUrl: string) => css`
  width: 18.1875rem;
  height: 18.1875rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: url(${imageUrl}) lightgray 50% / cover no-repeat;
`;

const SmallImageBox = styled.div<{ bgurl: string }>`
  ${({ bgurl }) => SmallImg(bgurl)}
`;
