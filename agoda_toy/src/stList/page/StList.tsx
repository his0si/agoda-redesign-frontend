import StayCardList from '@stList/components/Stay/StayCardList';
import StayCardListHeader from '@stList/components/Stay/StayCardListHeader';
import styled from 'styled-components';

export default function StList() {
  return (
    <>
      <StayContent>
        <StayCardListHeader />
        <StayCardList />
      </StayContent>
    </>
  );
}

const StayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
