import Search from './Search';
import Photo from './Photo';
import Description from './Description/Description';
import Pop from './pop/Pop';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export default function Upper() {
  const location = useLocation();
  const { destination, checkInDate, checkOutDate } = location.state || {};

  return (
    <>
      <Search
        width="82.9375rem"
        destination={destination}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        adults="2"
        roomCounts={2}
      />
      <Photo />
      <DesPopContainer>
        <Description />
        <Pop />
      </DesPopContainer>
    </>
  );
}

const DesPopContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;
