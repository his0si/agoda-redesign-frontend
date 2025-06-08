import styled from 'styled-components';
import UpcomingResInfo from './UpcomingResInfo';
import UpcomingResThumb from './UpcomingResThumb';
interface UpcomingResCardProps {
  imageUrl: string;
  status: string;
  location: string;
  name: string;
  startDate: string;
  endDate: string;
  resNum: string;
}

export default function UpcomingResCard({
  imageUrl,
  resNum,
  location,
  name,
  startDate,
  endDate,
}: UpcomingResCardProps) {
  return (
    <Container>
      <UpcomingResInfo
        resNum={resNum}
        stayLocation={location}
        stayName={name}
        checkinDate={startDate}
        checkoutDate={endDate}
      />
      <UpcomingResThumb imageUrl={imageUrl} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
