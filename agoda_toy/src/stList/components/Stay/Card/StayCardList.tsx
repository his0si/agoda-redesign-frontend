import { getAccommodations } from '@src/stList/api/getAccommodations';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../Pagination';
import StayCard from './StayCard';
import StayCardListHeader from './StayCardListHeader';
import type { Accommodation } from '@src/stList/types/getAccommodationsResponse.types';

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
  const [allAccommodations, setAllAccommodations] = useState<Accommodation[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  // price 필터 변경 시 계속 1페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [min, max]);

  useEffect(() => {
    const fetchAllPages = async () => {
      setLoading(true);
      try {
        // 우선 첫 호출 -> totalPage 알아내기
        const firstResponse = await getAccommodations({
          query: destination,
          startDate,
          endDate,
          page: 0,
          minPrice: min,
          maxPrice: max,
        });
        const totalPage = firstResponse.totalPage;
        const allData = [...firstResponse.accommodations];
        // 나머지 페이지 호출
        const pagePromises = [];
        for (let i = 1; i < totalPage; i++) {
          pagePromises.push(
            getAccommodations({
              query: destination,
              startDate,
              endDate,
              minPrice: min,
              maxPrice: max,
              page: i,
            })
          );
        }
        const pageResults = await Promise.all(pagePromises);
        pageResults.forEach((res) => {
          allData.push(...res.accommodations);
        });

        setAllAccommodations(allData);
      } catch (err) {
        console.error('전체 숙소 데이터를 불러오는 데 실패했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPages();
  }, [destination, startDate, endDate]);

  // discountPrice 기준 필터링
  const filteredAccommodations = useMemo(() => {
    return allAccommodations.filter(
      (stay) => stay.discountPrice >= min && stay.discountPrice <= max
    );
  }, [allAccommodations, min, max]);

  const ITEMS_PER_PAGE = 8;
  const totalPage = Math.ceil(filteredAccommodations.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <StayCardListHeader totalCount={filteredAccommodations.length} />
      <Wrapper>
        {loading ? (
          <p>로딩중...</p>
        ) : (
          <>
            {filteredAccommodations
              .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((hotel, idx) => (
                <StayCard key={idx} {...hotel} />
              ))}
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 61.5778rem;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
