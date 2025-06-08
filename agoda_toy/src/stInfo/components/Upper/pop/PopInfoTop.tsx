import { useGetAccommodation } from '@src/stInfo/hooks/useGetAccomodationId';
import styled from 'styled-components';

export default function PopInfoTop() {
  const { data } = useGetAccommodation(1);

  return (
    <Container>
      <SaleAndCost>
        <Sales>할인가</Sales>
        <Cost>￦ {data.price}</Cost>
      </SaleAndCost>
      <PopInfoTagFrame>
        <PopInfoTopTag>{data.provisionTags[0]}</PopInfoTopTag>
        <PopInfoTopTag>{data.provisionTags[1]}</PopInfoTopTag>
      </PopInfoTagFrame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Sales = styled.p`
  ${({ theme }) => theme.fonts.caption.md};
`;

const Cost = styled.h1`
  ${({ theme }) => theme.fonts.display.sm};
`;

const SaleAndCost = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 13rem;
  height: 2.31rem;
`;

const PopInfoTopTag = styled.div`
  display: flex;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: 1.5rem;

  border-radius: 0.25rem;
  background: var(--AGODA-Fourth, #dcf3f7);
  color: ${({ theme }) => theme.colors.secondary};
`;

const PopInfoTagFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
`;
