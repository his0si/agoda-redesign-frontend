import styled from 'styled-components';
import BarGraph from './BarGraph';

export default function PopInfoBottom() {
  return (
    <Container>
      <TitleBar>
        <Title>숙소청결도 9.6</Title>
        <BarGraph value={96} />
      </TitleBar>
      <TitleBar>
        <Title>서비스 8.0</Title>
        <BarGraph value={80} />
      </TitleBar>
      <TitleBar>
        <Title>위치 8.8</Title>
        <BarGraph value={88} />
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
