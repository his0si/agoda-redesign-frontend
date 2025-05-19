import React from 'react';
import styled from 'styled-components';

export default function ReivewCard() {
  return (
    <Container>
      <UserName>황혜연</UserName>
      <Rate>8.2점</Rate>
      <Script>
        생각보다 가격이 착해서 큰 기대 안 했는데, 정말 만족스러운 숙소였어요.
        방이 깔끔하고 정돈도 잘 되어 있어서 하루 종일 돌아다니다가 편하게 쉴 수
        있었어요. 무엇보다 직원분들이 정말 친절해서 체크인부터 체크아웃까지…
      </Script>
      <More>더보기</More>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 42.875rem;
  padding: 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h1`
  ${({ theme }) => theme.fonts.headline.sm};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Rate = styled.p`
  ${({ theme }) => theme.fonts.caption.lg};
`;

const Script = styled.p`
  ${({ theme }) => theme.fonts.body.md};
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
`;
const More = styled.button`
  ${({ theme }) => theme.fonts.headline.sm};
  color: ${({ theme }) => theme.colors.gray600};
`;
