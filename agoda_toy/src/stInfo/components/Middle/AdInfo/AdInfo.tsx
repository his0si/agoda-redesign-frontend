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

  margin-bottom: 11.75rem;
`;

const ContentFrame = styled.div`
  display: flex;
  height: 22.125rem;
  padding: 1.875rem 3.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  border-radius: 1.25rem;
  border: 1px solid var(--AGODA-Gray100, #f3f4f6);
  background: var(--AGODA-White, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
  color: ${({ theme }) => theme.colors.black};
`;
