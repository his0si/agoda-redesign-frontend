import React from 'react';
import styled from 'styled-components';
import { CenterFlex } from '../../../../styles/common/common';

export default function PopInfoTop() {
  return (
    <Container>
      <Sales>할인가</Sales>
      <Cost>￦ 349,202</Cost>
      <PopInfoTopTag></PopInfoTopTag>
      <PopInfoTopTag>2025 새로 지어진 숙소</PopInfoTopTag>
    </Container>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

const Sales = styled.p`
  ${({ theme }) => theme.fonts.caption.md};
`;

const Cost = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;

const PopInfoTopTag = styled.div`
  ${CenterFlex}
  height: 1.5rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.fourth};
  color: ${({ theme }) => theme.colors.secondary};
`;
