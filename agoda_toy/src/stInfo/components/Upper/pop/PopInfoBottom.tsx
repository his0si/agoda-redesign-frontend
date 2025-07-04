import styled from 'styled-components';
import BarGraph from './BarGraph';
import { useGetAccommodation } from '@src/stInfo/hooks/useGetAccomodationId';
import { useParams } from 'react-router-dom';

export default function PopInfoBottom() {
  const { accommodationId } = useParams();

  if (!accommodationId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetAccommodation(accommodationId);

  return (
    <Container>
      <TitleBar>
        <Title>숙소청결도 {data?.cleanlinessScore}</Title>
        <BarGraph
          value={data?.cleanlinessScore ? data.cleanlinessScore * 100 : 0}
        />
      </TitleBar>
      <TitleBar>
        <Title>서비스 {data?.serviceScore}</Title>
        <BarGraph value={data?.serviceScore ? data?.serviceScore * 100 : 0} />
      </TitleBar>
      <TitleBar>
        <Title>위치 {data?.locationScore}</Title>
        <BarGraph value={data?.locationScore ? data?.locationScore * 100 : 0} />
      </TitleBar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  width: 17.9rem;
  height: 9.13rem;
`;

const Title = styled.p`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  ${({ theme }) => theme.fonts.caption.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
