import styled from 'styled-components';

export default function MyRevWriteReviewBtn() {
  return <Button>후기 작성</Button>;
}

const Button = styled.button`
  position: absolute;
  position: absolute;
  bottom: 1.5rem;
  right: 2.5rem;

  display: flex;
  width: 8rem;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: var(--AGODA-Primary, #006a71);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title.md};
`;
