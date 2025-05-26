import styled from 'styled-components';
import RoomCard from './RoomCard';
import RoomPic1 from '../../../assets/imgs/img_card1.png';
import RoomPic2 from '../../../assets/imgs/img_card2.png';
import RoomPic3 from '../../../assets/imgs/img_card3.png';
import RoomPic4 from '../../../assets/imgs/img_card4.png';
import RoomPic5 from '../../../assets/imgs/img_card5.png';
import type { MiddleProps } from '@src/stInfo/types/middleProps';

const ROOM_LIST = [
  {
    image: RoomPic1,
    title: '슈페리어 트윈',
    description: '싱글베드 2개',
    realprice: '￦ 310,597',
    saleprice: '￦ 275,928',
  },
  {
    image: RoomPic2,
    title: '디럭스스 트윈',
    description: '싱글베드 2개',
    realprice: '￦ 335,244',
    saleprice: '￦ 277,320',
  },
  {
    image: RoomPic3,
    title: '슈페리어 더블',
    description: '퀸베드 1개',
    realprice: '￦ 395,200',
    saleprice: '￦ 319,459',
  },
  {
    image: RoomPic4,
    title: '디럭스 킹',
    description: '킹베드 1개',
    realprice: '￦ 410,100',
    saleprice: '￦ 354,292',
  },
  {
    image: RoomPic5,
    title: '디럭스 트윈',
    description: '싱글베드 2개+소파베드 1개',
    realprice: '￦ 421,244',
    saleprice: '￦ 378,527',
  },
];

export default function RoomSlider({ handleModalOpen }: MiddleProps) {
  return (
    <Container>
      {ROOM_LIST.map(({ image, title, description, realprice, saleprice }) => (
        <RoomCard
          handleModalOpen={handleModalOpen}
          image={image}
          title={title}
          description={description}
          realprice={realprice}
          saleprice={saleprice}
        />
      ))}
      <RoomSliderBar />
      <RoomSliderBarRectangle />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  align-items: center;
  gap: 0.875rem;
  align-self: stretch;
  overflow-x: hidden;
`;

const RoomSliderBar = styled.div`
  display: flex;
  height: 0.375rem;
  padding-right: 62.5rem;
  align-items: center;
  align-self: stretch;

  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors.gray100};
`;

const RoomSliderBarRectangle = styled.div`
  width: 25.375rem;
  height: 0.375rem;
  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors.secondary};
`;
