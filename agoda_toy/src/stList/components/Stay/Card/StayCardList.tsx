import { useGetAllAccommodations } from '@src/stList/hooks/useGetAllAccommodations';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../Pagination';
import StayCard from './StayCard';

interface StayCardListProps {
  min: number;
  max: number;
  destination: string;
  startDate: string;
  endDate: string;
}

export default function StayCardList({
  min,
  max,
  destination,
  startDate,
  endDate,
}: StayCardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroupStart, setCurrentGroupStart] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const { data } = useGetAllAccommodations({
    query: destination,
    startDate,
    endDate,
    minPrice: min,
    maxPrice: max,
    page: 0,
  });

  const totalPage = data?.totalPage ?? 1;

  const filteredList = useMemo(() => {
    const accommodations = data?.accommodations || [];
    return accommodations.filter(
      (stay) => stay.discountPrice >= min && stay.discountPrice <= max
    );
  }, [data?.accommodations, min, max]);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = currentPage * ITEMS_PER_PAGE;
  const currentPageList = filteredList.slice(startIdx, endIdx);

  return (
    <Container>
      {currentPageList.map((hotel, idx) => (
        <StayCard key={idx} {...hotel} />
      ))}
      <Pagination
        currentPage={currentPage}
        currentGroupStart={currentGroupStart}
        onPageChange={setCurrentPage}
        onGroupChange={setCurrentGroupStart}
        totalPage={totalPage}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 61.5778rem; // 필터 후 검색결과 없을 시 width 유지
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
