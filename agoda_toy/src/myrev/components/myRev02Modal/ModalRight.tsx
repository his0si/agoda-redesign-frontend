import ModalRate from './ModalRate';
import styled from 'styled-components';
import ModalReview from './ModalReview';

const RATE_QUESTIONS = [
  '숙소의 위치가 만족스러우셨나요?',
  '숙소의 위생상태가 만족스러우셨나요?',
  '직원의 서비스가 만족스러우셨나요?',
];

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
