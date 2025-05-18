import React, { useState, useEffect, useRef } from 'react';
import styled, { type DefaultTheme } from 'styled-components';
import SearchInput from './SearchInput';
import SearchSummary from './SearchSummary';
import { LuMapPin, LuCalendarDays, LuUsers, LuBedDouble } from 'react-icons/lu';
import PersonnelSelectionPopover from './PersonnelSelectionPopover';
import RoomSelectionPopover from './RoomSelectionPopover';

interface SearchWidgetProps {}

// Helper function to parse personnel string (e.g., "성인 5명, 어린이 1명")
const parsePersonnel = (personnelStr: string): { adults: number; children: number } => {
  const adultsMatch = personnelStr.match(/성인 (\d+)명/);
  const childrenMatch = personnelStr.match(/어린이 (\d+)명/);
  return {
    adults: adultsMatch ? parseInt(adultsMatch[1], 10) : 0,
    children: childrenMatch ? parseInt(childrenMatch[1], 10) : 0,
  };
};

// Helper function to parse rooms string (e.g., "객실 1개")
const parseRooms = (roomsStr: string): number => {
  const roomsMatch = roomsStr.match(/객실 (\d+)개?/);
  return roomsMatch ? parseInt(roomsMatch[1], 10) : 0;
};

export default function SearchWidget(props: SearchWidgetProps) {
  const initialSearchData = {
    destination: '도쿄',
    checkInDate: '2025년 04월 15일',
    checkOutDate: '2025년 04월 20일',
    personnel: '성인 0명',
    rooms: '객실 0',
  };

  const [destination, setDestination] = useState(initialSearchData.destination);
  const [checkInDate, setCheckInDate] = useState(initialSearchData.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(initialSearchData.checkOutDate);

  const initialPersonnel = parsePersonnel(initialSearchData.personnel);
  const [adults, setAdultsState] = useState(initialPersonnel.adults);
  const [children, setChildrenState] = useState(initialPersonnel.children);
  const [rooms, setRoomsState] = useState(parseRooms(initialSearchData.rooms));

  const [isPersonnelPopoverOpen, setIsPersonnelPopoverOpen] = useState(false);
  const [isRoomPopoverOpen, setIsRoomPopoverOpen] = useState(false);

  const [personnelInteracted, setPersonnelInteracted] = useState(false);
  const [roomInteracted, setRoomInteracted] = useState(false);

  const personnelRef = useRef<HTMLDivElement>(null);
  const roomRef = useRef<HTMLDivElement>(null);

  const handleAdultsChange = (count: number) => {
    setAdultsState(count);
    setPersonnelInteracted(true);
  };

  const handleChildrenChange = (count: number) => {
    setChildrenState(count);
    setPersonnelInteracted(true);
  };

  const handleRoomsChange = (count: number) => {
    setRoomsState(count);
    setRoomInteracted(true);
  };

  const personnelSummary = adults === 0 && children === 0 ? "인원 선택" : `성인 ${adults}명${children > 0 ? `, 어린이 ${children}명` : ''}`;
  const roomsSummary = rooms === 0 ? "객실 선택" : `객실 ${rooms}개`;
  
  const isPersonnelActive = personnelInteracted && (adults > 0 || children > 0);
  const isRoomActive = roomInteracted && rooms > 0;

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (personnelRef.current && !personnelRef.current.contains(event.target as Node)) {
        setIsPersonnelPopoverOpen(false);
      }
      if (roomRef.current && !roomRef.current.contains(event.target as Node)) {
        setIsRoomPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainFlexWrapper>
      <FormCard>
        <FormSection>
          <SearchInput
            icon={<LuMapPin />}
            value={destination}
            placeholder="어디로 떠나시나요?"
            onClick={() => {
              setIsPersonnelPopoverOpen(false);
              setIsRoomPopoverOpen(false);
            }}
          />
          <DateInputsWrapper>
            <SearchInput
              icon={<LuCalendarDays />}
              value={checkInDate}
              placeholder="날짜 선택"
              isDateField={true}
              onClick={() => {
                setIsPersonnelPopoverOpen(false);
                setIsRoomPopoverOpen(false);
              }}
            />
            <SearchInput
              icon={<LuCalendarDays />}
              value={checkOutDate}
              placeholder="날짜 선택"
              isDateField={true}
              onClick={() => {
                setIsPersonnelPopoverOpen(false);
                setIsRoomPopoverOpen(false);
              }}
            />
          </DateInputsWrapper>
          <OccupancyInputsWrapper>
            <PopoverWrapper ref={personnelRef}>
              <SearchInput
                icon={<LuUsers />}
                value={adults === 0 && children === 0 && !personnelInteracted ? "" : personnelSummary}
                placeholder="인원 선택"
                onClick={() => {
                  setIsPersonnelPopoverOpen(!isPersonnelPopoverOpen);
                  setIsRoomPopoverOpen(false);
                }}
                isActiveSelection={isPersonnelActive}
              />
              {isPersonnelPopoverOpen && (
                <PersonnelSelectionPopover
                  adults={adults}
                  children={children}
                  onAdultsChange={handleAdultsChange}
                  onChildrenChange={handleChildrenChange}
                />
              )}
            </PopoverWrapper>
            <PopoverWrapper ref={roomRef}>
              <SearchInput
                icon={<LuBedDouble />}
                value={rooms === 0 && !roomInteracted ? "" : roomsSummary}
                placeholder="객실 선택"
                onClick={() => {
                  setIsRoomPopoverOpen(!isRoomPopoverOpen);
                  setIsPersonnelPopoverOpen(false);
                }}
                isActiveSelection={isRoomActive}
              />
              {isRoomPopoverOpen && (
                <RoomSelectionPopover
                  rooms={rooms}
                  onRoomsChange={handleRoomsChange}
                />
              )}
            </PopoverWrapper>
          </OccupancyInputsWrapper>
        </FormSection>
      </FormCard>
      <SearchSummary
        destination={destination}
        dateRange={`${checkInDate} - ${checkOutDate}`}
        rooms={roomsSummary}
        personnel={personnelSummary}
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
  overflow: visible; /* Changed from hidden to visible */
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

const PopoverWrapper = styled.div`
  position: relative;
  flex: 1; // Ensure it takes up space in the flex layout
`; 