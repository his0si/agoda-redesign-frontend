import { useState } from 'react';
import Search from '@/stInfo/components/Upper/Search';
import StayCardList from '@/stList/components/Stay/Card/StayCardList';
import StayCardListHeader from '@/stList/components/Stay/Card/StayCardListHeader';
import styled from 'styled-components';
import StayFilter from '../components/Stay/Filter/StayFilter';

const MIN = 0;
const MAX = 10000000;

export default function StList() {
  const [minPrice, setMinPrice] = useState(MIN);
  const [maxPrice, setMaxPrice] = useState(MAX);

  return (
    <>
      <StayContent>
        <Search width="100%" />
        <SearchResultSection>
          <StayFilter
            min={minPrice}
            max={maxPrice}
            setMin={setMinPrice}
            setMax={setMaxPrice}
          />
          <StayCardSection>
            <StayCardListHeader />
            <StayCardList min={minPrice} max={maxPrice} />
          </StayCardSection>
        </SearchResultSection>
      </StayContent>
    </>
  );
}

const StayContent = styled.div`
  display: flex;
  flex-direction: column;
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