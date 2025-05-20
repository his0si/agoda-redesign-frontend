import styled from 'styled-components';

export default function BookBtn() {
  return <Container>예약하기</Container>;
}

const Container = styled.button`
  ${({ theme }) => theme.fonts.headline.md};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  width: 18.5rem;
  padding: 0.625rem 3.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.5rem;
  background: var(--AGODA-Primary, #006a71);
`;
