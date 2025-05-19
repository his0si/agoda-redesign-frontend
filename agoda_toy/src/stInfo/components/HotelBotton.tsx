import styled from 'styled-components';

//숙소 둘러보기 버튼 입니다.
export default function HotelBotton() {
  return <Container>숙소 둘러보기</Container>;
}

const Container = styled.button`
  display: flex;
  width: 17.875rem;
  padding: 1.25rem 3.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: var(--AGODA-Primary, #006a71);
  gap: 0.5rem;
  ${({ theme }) => theme.fonts.headline.lg};
  color: ${({ theme }) => theme.colors.white};
`;
