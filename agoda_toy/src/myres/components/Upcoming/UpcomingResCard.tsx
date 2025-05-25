import styled from 'styled-components';
import UpcomingResInfo from './UpcomingResInfo';
import UpcomingResThumb from './UpcomingResThumb';
import StayPic1 from '@stList/assets/imgs/img_card1.png';

interface UpcomingReservation {
  imageUrl: string;
  resNum: number;
  stayName: string;
  stayLocation: string;
  checkinDate: string;
  checkoutDate: string;
}

const MY_RES_LIST: UpcomingReservation[] = [
  {
    imageUrl: StayPic1,
    resNum: 123456,
    stayName: 'Tokyo Prince',
    stayLocation: 'Shibakoen',
    checkinDate: '2025.04.15(토)',
    checkoutDate: '2025.04.20(토)',
  },
];

export default function UpcomingResCard() {
  const res = MY_RES_LIST[0];

  return (
    <Container>
      <UpcomingResThumb imageUrl={res.imageUrl} />
      <UpcomingResInfo {...res} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
