import styled from 'styled-components';
import AdInfoContent from './AdInfoContent';

export default function AdInfo() {
  return (
    <Container>
      <Title>추가 정보</Title>
      <AdInfoContent />
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

const Title = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
  color: ${({ theme }) => theme.colors.black};
`;
