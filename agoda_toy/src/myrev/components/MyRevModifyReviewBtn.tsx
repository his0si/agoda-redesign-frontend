import styled from 'styled-components';
import type { handleModifyRevOpenType } from '../types/modalFnTypes';

export default function MyRevModifyReviewBtn({
  handleModifyRevOpen,
}: handleModifyRevOpenType) {
  return <Button onClick={handleModifyRevOpen}>후기 수정</Button>;
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
  background: var(--AGODA-Fourth, #dcf3f7);
  ${({ theme }) => theme.fonts.title.md};
`;
