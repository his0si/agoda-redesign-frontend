import Search from '@stInfo/components/Upper/Search';
import StayCardListHeader from '@stList/components/Stay/Card/StayCardListHeader';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StayCardList from '../components/Stay/Card/StayCardList';
import StayFilter from '../components/Stay/Filter/StayFilter';
import { useGetAllAccommodations } from '@src/stList/hooks/useGetAllAccommodations';

const MIN = 0;
const MAX = 10000000;

export default function StList() {
  const [minPrice, setMinPrice] = useState(MIN);
  const [maxPrice, setMaxPrice] = useState(MAX);
  const location = useLocation();
  const { destination, checkInDate, checkOutDate, adults, rooms } =
    location.state || {};

  const { data } = useGetAllAccommodations({
    query: destination,
    startDate: checkInDate,
    endDate: checkOutDate,
    minPrice,
    maxPrice,
    page: 0,
  });

  return (
    <>
      <StayContent>
        <Search
          width="82.9375rem"
          destination={destination}
          startDate={checkInDate}
          endDate={checkOutDate}
          adults={adults}
          rooms={rooms}
        />
        <SearchResultSection>
          <StayFilter
            min={minPrice}
            max={maxPrice}
            setMin={setMinPrice}
            setMax={setMaxPrice}
          />
          <StayCardSection>
            <StayCardListHeader totalCount={data?.totalCount ?? 0} />
            <StayCardList
              min={minPrice}
              max={maxPrice}
              destination={destination}
              startDate={checkInDate}
              endDate={checkOutDate}
            />
          </StayCardSection>
        </SearchResultSection>
      </StayContent>
    </>
  );
}

const StayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const StayCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SearchResultSection = styled.div`
  display: flex;
  gap: 2.5rem;
`;
