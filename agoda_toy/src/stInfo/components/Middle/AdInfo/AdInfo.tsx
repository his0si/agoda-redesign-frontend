import styled from 'styled-components';
import AdInfoContent from './AdInfoContent';

export default function AdInfo() {
  return (
    <Container>
      <Title>추가 정보</Title>
      <ContentFrame>
        <AdInfoContent />
      </ContentFrame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 87.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.875rem;
`;

const ContentFrame = styled.div`
  display: flex;
  height: 22.125rem;
  padding: 1.875rem 3.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
  color: ${({ theme }) => theme.colors.black};
`;
