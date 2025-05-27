import React from 'react';
import styled from 'styled-components';
import ModalRate from '../myRev02Modal/ModalRate';
import { RATE_QUESTIONS } from '@src/myrev/constant/ratequestions';

export default function Questions() {
  return (
    <>
      <QuestionsContainer>
        {RATE_QUESTIONS.map((question) => (
          <ModalRate key={question} question={question} />
        ))}
      </QuestionsContainer>
    </>
  );
}

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
