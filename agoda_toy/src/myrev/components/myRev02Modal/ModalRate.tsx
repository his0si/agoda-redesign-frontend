import styled from 'styled-components';
import Stars from '../../assets/my_rev_icn_star.svg?react';

export default function ModalRate({ question }: { question: string }) {
  return (
    <Container>
      <h1>{question}</h1>
      <StarButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  ${({ theme }) => theme.fonts.body.lg};
`;

const StarButton = styled(Stars)`
  display: flex;
  width: 6.1875rem;
  height: 1.125rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.125rem;
  flex-shrink: 0;
  margin-bottom: 2rem;
`;
