import styled from 'styled-components';

export default function ReviewCardContent() {
  return (
    <Container>
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
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
`;

const Script = styled.p`
  ${({ theme }) => theme.fonts.body.md};
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
`;
const More = styled.p`
  ${({ theme }) => theme.fonts.headline.sm};
  color: ${({ theme }) => theme.colors.gray600};
`;
