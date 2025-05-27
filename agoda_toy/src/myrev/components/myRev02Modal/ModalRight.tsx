import ModalRate from './ModalRate';
import styled from 'styled-components';
import ModalReview from './ModalReview';
import { RATE_QUESTIONS } from '@src/myrev/constant/ratequestions';

export default function ModalRight() {
  return (
    <Container>
      <QuestionsContainer>
        {RATE_QUESTIONS.map((question) => (
          <ModalRate key={question} question={question} />
        ))}
      </QuestionsContainer>

      <ModalReview />
    </Container>
  );
}

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
