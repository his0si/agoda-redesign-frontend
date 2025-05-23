import styled from 'styled-components';

export default function MyRevModifyReviewBtn() {
  return <Button>후기 수정</Button>;
}

const Button = styled.button`
  display: flex;
  width: 7.75rem;
  height: 2.25rem;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: var(--AGODA-Fourth, #dcf3f7);
  ${({ theme }) => theme.fonts.title.md};
`;
