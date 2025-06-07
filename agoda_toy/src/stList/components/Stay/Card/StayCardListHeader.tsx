import SortingIc from '@stList/assets/svgs/sorting.svg?react';
import styled from 'styled-components';

interface StayCardListHeaderProps {
  totalCount: number;
}

export default function StayCardListHeader({
  totalCount,
}: StayCardListHeaderProps) {
  return (
    <Container>
      <StayResultHeader>숙소 검색 결과 {totalCount}개 이상</StayResultHeader>
      <Sorting>
        <SortingIcon />
        <StayResultHeader>정렬</StayResultHeader>
      </Sorting>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StayResultHeader = styled.p`
  font: ${({ theme }) => theme.fonts.headline.lg};
`;

const Sorting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
  font: ${({ theme }) => theme.fonts.headline.lg};
`;

const SortingIcon = styled(SortingIc)`
  width: 1rem;
  height: 1.125rem;
`;
