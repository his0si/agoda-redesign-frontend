import styled from 'styled-components';
import { useGetReservations } from '../hooks/useGetReservations';
import MyResSlider from './MyResSlider';
import MyResItem from './MyResItem';
import UpcomingResCard from './Upcoming/UpcomingResCard';
import NoUpcomingResCard from './Upcoming/NoUpcomingResCard';

import StayPic1 from '../assets/imgs/cancelled_stay_1.png';
import type { ReservationItem } from '../types/res.types';

const CANCELLED_RES: ReservationItem = {
  reservationId: '7',
  korName: '호텔 이름',
  accommodationImage: StayPic1,
  location: 'Itabashi City',
  startDate: '2025-02-10',
  endDate: '2025-02-15',
  status: '취소된 예약',
};

export default function MyResLists() {
  const { data, isLoading, error } = useGetReservations();

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>예약 데이터를 불러오는 데 실패했습니다.</p>;

  const upcoming = data?.upcoming ? [data.upcoming] : [];
  const completed = data?.completed || [];

  // "가장 임박한 예약" 결정 로직 → 지금은 API가 upcoming 1개만 주므로 그대로 사용 가능
  const mostUpcoming = upcoming.length > 0 ? upcoming[0] : null;

  return (
    <Container>
      {/* 다가오는 예약 카드 */}
      <ListWrapper>
        <ListTitle>다가오는 예약</ListTitle>
        {mostUpcoming ? (
          <UpcomingResCard
            resNum={mostUpcoming.reservationId}
            imageUrl={mostUpcoming.accommodationImage}
            status={mostUpcoming.status}
            location={mostUpcoming.location}
            name={mostUpcoming.korName}
            startDate={mostUpcoming.startDate}
            endDate={mostUpcoming.endDate}
          />
        ) : (
          <NoUpcomingResCard />
        )}
      </ListWrapper>

      {/* 완료된 예약 슬라이더 */}
      <ListWrapper>
        <ListTitle>완료된 예약</ListTitle>
        <MyResSlider items={completed} />
      </ListWrapper>

      {/* 취소된 예약 */}
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
