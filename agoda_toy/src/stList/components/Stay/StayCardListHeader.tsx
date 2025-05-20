import styled from 'styled-components';
import SortingIc from '@stList/assets/svgs/sorting.svg?react';
import { SpaceBetweenFlex } from '@/styles/common/common';

export default function StayCardListHeader() {
  return (
    <Container>
      <Text>숙소 검색 결과 1,000개 이상</Text>
      <Sorting>
        <SortingIcon />
        <Text>정렬</Text>
      </Sorting>
    </Container>
  );
}
const Container = styled(SpaceBetweenFlex)``;

const Text = styled.p`
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
