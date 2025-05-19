import styled from 'styled-components';

export default function AdInfoContent() {
  return (
    <Container>
      <InfoContentTitle></InfoContentTitle>
      <InfoContentContainer></InfoContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 22.125rem;
  padding: 1.875rem 3.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const InfoContentTitle = styled.p`
  ${({ theme }) => theme.fonts.headline.lg};
  align-self: stretch;
`;

const InfoContentContainer = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;
const InfoContentsText = styled.div``;
