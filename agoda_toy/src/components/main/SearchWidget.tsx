import React from 'react';
import styled, { type DefaultTheme } from 'styled-components';
import SearchInput from './SearchInput';
import SearchSummary from './SearchSummary';
import { LuMapPin, LuCalendarDays, LuUsers, LuBedDouble } from 'react-icons/lu';

interface SearchWidgetProps {}

export default function SearchWidget(props: SearchWidgetProps) {
  // 임시 데이터 (실제 구현에서는 상태나 props로 관리)
  const searchData = {
    destination: '도쿄',
    checkInDate: '2025년 04월 15일',
    checkOutDate: '2025년 04월 20일',
    personnel: '성인 5명',
    rooms: '객실 1',
  };

  return (
    <MainFlexWrapper>
      <FormCard>
        <FormSection>
          <SearchInput
            icon={<LuMapPin />}
            // label="목적지" // 디자인상 보이지 않으므로 주석 처리 또는 HiddenLabel 사용
            value={searchData.destination}
            placeholder="어디로 떠나시나요?"
          />
          <DateInputsWrapper>
            <SearchInput
              icon={<LuCalendarDays />}
              // label="체크인"
              value={searchData.checkInDate}
              placeholder="날짜 선택"
              isDateField={true}
            />
            <SearchInput
              icon={<LuCalendarDays />}
              // label="체크아웃"
              value={searchData.checkOutDate}
              placeholder="날짜 선택"
              isDateField={true}
            />
          </DateInputsWrapper>
          <OccupancyInputsWrapper>
            <SearchInput
              icon={<LuUsers />}
              // label="인원"
              value={searchData.personnel}
              placeholder="인원 선택"
            />
            <SearchInput
              icon={<LuBedDouble />}
              // label="객실"
              value={searchData.rooms}
              placeholder="객실 선택"
            />
          </OccupancyInputsWrapper>
        </FormSection>
      </FormCard>
      <SearchSummary
        destination={searchData.destination}
        dateRange={`${searchData.checkInDate} - ${searchData.checkOutDate}`}
        rooms={searchData.rooms}
        personnel={searchData.personnel}
      />
    </MainFlexWrapper>
  );
}

const MainFlexWrapper = styled.div`
  display: flex;
  min-width: 65rem; // 기본 최소 너비 설정으로 FormCard 너비 확보 90rem -> 72rem
  max-width: 96rem; // 최대 너비 (사용자 설정 유지) 120rem -> 96rem
  width: 100%; // 부모 너비에 맞추되, min-width 이상, max-width 이하로 제한됨
  gap: 0rem; /* Gap between the two cards */
`;

const FormCard = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 56px 16px 16px 16px; // 70px 20px 20px 20px -> 56px 16px 16px 16px
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.15); // 0 0.5rem 1.5rem -> 0 0.4rem 1.2rem
  overflow: hidden; /* To clip FormSection if needed */
  flex: 1; /* Allow this card to grow */
  display: flex; /* To make FormSection fill it if FormSection has flex-grow */
  align-items: center; /* New: Vertically center FormSection */
  /* justify-content: center; // This would horizontally center FormSection if it didn't have its own margin auto */
`;

const FormSection = styled.section`
  flex-grow: 1; // Tries to grow within FormCard
  padding: 1.2rem; // 1.5rem -> 1.2rem
  display: flex;
  flex-direction: column;
  gap: 0.6rem; // 0.75rem -> 0.6rem
  max-width: 36rem; // Adjusted from 44rem to reduce input field width
  width: 100%;      // New: Ensure it takes full width up to max-width
  margin: 0 auto;   // New: Center FormSection within FormCard
`;

const DateInputsWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 0.8rem; // 날짜 입력 필드 사이 간격 1rem -> 0.8rem

  & > *:not(:last-child) { // Target the first SearchInput in this pair
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: calc(-0.4rem - 0.04rem); // -0.5rem - 0.05rem -> -0.4rem - 0.04rem
      top: 50%;
      transform: translateY(-50%);
      height: 1.76rem; // 2.2rem -> 1.76rem
      width: 0.08rem; // 0.1rem -> 0.08rem
      background-color: ${({ theme }) => theme.colors.gray300}; // Updated from #d1d5db
    }
  }

  & > * {
    flex: 1; // 각 필드가 동일한 너비를 가지도록
  }
`;

const OccupancyInputsWrapper = styled.div`
  display: flex;
  gap: 0.8rem; // 인원/객실 입력 필드 사이 간격 1rem -> 0.8rem
  & > * {
    flex: 1; // 각 필드가 동일한 너비를 가지도록
  }
`; 