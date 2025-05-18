import styled from 'styled-components';

export default function AmenContent() {
  return (
    <Container>
      <Frame>
        <Text>무료 와이파이</Text>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 86rem;
  align-items: flex-start;
  gap: 7.5625rem;
`;

const Frame = styled.div`
  display: flex;
  width: 7.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6875rem;
  flex-shrink: 0;
`;

const Text = styled.p`
  align-self: stretch;
  ${({ theme }) => theme.fonts.headline.sm};
`;
