import Search from '@/stInfo/components/Upper/Search';
import StayCardList from '@/stList/components/Stay/Card/StayCardList';
import StayCardListHeader from '@/stList/components/Stay/Card/StayCardListHeader';
import styled from 'styled-components';
import StayFilter from '../components/Stay/Filter/StayFilter';

export default function StList() {
  return (
    <>
      <StayContent>
        <Search width="100%" />
        <SearchResultSection>
          <StayFilter />
          <StayCardSection>
            <StayCardListHeader />
            <StayCardList />
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
