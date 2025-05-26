import styled from 'styled-components';

export default function ReservationBtn() {
  return <Button>예약하기</Button>;
}

const Button = styled.button`
  all: unset;
  display: flex;
  width: 17.3rem;
  height: 2.75rem;
  padding: 0.625rem 3.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: var(--AGODA-Primary, #006a71);

  ${({ theme }) => theme.fonts.headline.lg};
  color: ${({ theme }) => theme.colors.white};
`;
