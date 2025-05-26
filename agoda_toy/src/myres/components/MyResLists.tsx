// ✅ MyResLists.tsx - 퍼블리싱용 예약 리스트 + 슬라이더 구조
import styled from 'styled-components';
import {
  default as StayPic1,
  default as StayPic2,
  default as StayPic3,
  default as StayPic4,
  default as StayPic5,
} from '../assets/imgs/cancelled_stay_1.png';
import MyResItem from './MyResItem';
import MyResSlider from './MyResSlider';
import type ResItem from '../types/res.types';

interface MyResListsProps {
  showUpcoming: boolean;
}

const UPCOMING_ITEMS: ResItem[] = [
  {
    reservationId: '1',
    korName: '호텔 이름',
    accommodationImage: StayPic5,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '예약 완료',
  },
];

const COMPLETED_ITEMS: ResItem[] = [
  {
    reservationId: '2',
    korName: '호텔 이름',
    accommodationImage: StayPic2,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '체크아웃 완료',
  },
  {
    reservationId: '3',
    korName: '호텔 이름',
    accommodationImage: StayPic3,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '체크인 완료',
  },
  {
    reservationId: '4',
    korName: '호텔 이름',
    accommodationImage: StayPic4,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '체크인 완료',
  },
  {
    reservationId: '5',
    korName: '호텔 이름',
    accommodationImage: StayPic4,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '체크인 완료',
  },
  {
    reservationId: '6',
    korName: '호텔 이름',
    accommodationImage: StayPic4,
    location: 'Itabashi City',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    status: '체크인 완료',
  },
];

const CANCELLED_RES: ResItem = {
  reservationId: '7',
  korName: '호텔 이름',
  accommodationImage: StayPic1,
  location: 'Itabashi City',
  startDate: '2025-02-10',
  endDate: '2025-02-15',
  status: '취소된 예약',
};

export default function MyResLists({ showUpcoming }: MyResListsProps) {
  return (
    <Container>
      {showUpcoming && (
        <ListWrapper>
          <ListTitle>다가오는 예약</ListTitle>
          <MyResSlider items={UPCOMING_ITEMS} />
        </ListWrapper>
      )}

      <ListWrapper>
        <ListTitle>완료된 예약</ListTitle>
        <MyResSlider items={COMPLETED_ITEMS} />
      </ListWrapper>

      <ListWrapper>
        <ListTitle>취소된 예약</ListTitle>
        <MyResItem
          imageUrl={CANCELLED_RES.accommodationImage}
          status={CANCELLED_RES.status}
          location={CANCELLED_RES.location}
          name={CANCELLED_RES.korName}
          startDate={CANCELLED_RES.startDate}
          endDate={CANCELLED_RES.endDate}
        />
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  width: 64.5rem;
  padding-inline: 1.5rem;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.title.lg};
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;
