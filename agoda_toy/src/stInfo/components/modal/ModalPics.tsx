import styled from 'styled-components';
import ImgCard1 from '@stList/assets/imgs/img_card1.png';
import ImgCard2 from '@stList/assets/imgs/img_card2.png';
import ImgCard3 from '@stList/assets/imgs/img_card3.png';

export default function ModalPics() {
  return (
    <Container>
      <BigImg />
      <Frame>
        <SmallImg />
        <SmallImg2 />
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

const BigImg = styled.div`
  width: 37.25rem;
  height: 23.8125rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: url(${ImgCard1}) lightgray 50% / cover no-repeat;
`;

const SmallImg = styled.div`
  width: 18.1875rem;
  height: 18.1875rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: url(${ImgCard2}) lightgray 50% / cover no-repeat;
`;

const SmallImg2 = styled.div`
  width: 18.1875rem;
  height: 18.1875rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: url(${ImgCard3}) lightgray 50% / cover no-repeat;
`;
