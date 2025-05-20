import styled, { css } from 'styled-components';
import RightImg from '@stInfo/assets/imgs/img_picture_right.png';
import LeftImg1 from '@stInfo/assets/imgs/img_picture_left1.png';
import LeftImg2 from '@stInfo/assets/imgs/img_picture_left2.png';
import LeftImg3 from '@stInfo/assets/imgs/img_picture_left3.png';
import LeftImg4 from '@stInfo/assets/imgs/img_picture_left4.png';

export default function Photo() {
  console.log(typeof LeftImg1);
  return (
    <Container>
      <BigImg />
      <LeftContainer>
        <ImageBox bgurl={LeftImg1} />
        <ImageBox bgurl={LeftImg2} />
        <ImageBox bgurl={LeftImg3} />
        <ImageBox bgurl={LeftImg4} />
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

const BigImg = styled.div`
  width: 43.5rem;
  height: 27.8125rem;
  border-radius: 0.5rem;
  background: url(${RightImg}) lightgray 50% / cover no-repeat;
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
