import styled from 'styled-components';

import UpcomingResCard from './Upcoming/UpcomingResCard';
import MyResLists from './MyResLists';
import NoUpcomingResCard from './Upcoming/NoUpcomingResCard';

export default function MyResContent() {
  const hasUpcoming = false; // 퍼블리싱 단계에서는 하드코딩 가능

  return (
    <Container>
      {hasUpcoming ? <UpcomingResCard /> : <NoUpcomingResCard />}
      <MyResLists />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
`;
