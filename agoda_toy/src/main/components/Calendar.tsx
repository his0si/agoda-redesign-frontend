import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import styled, { css } from 'styled-components';

// Helper function to get the number of days in a month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month (0 for Sunday, 1 for Monday, etc.)
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export interface CalendarRef {
  getSelection: () => { start: Date | null; end: Date | null };
}

interface CalendarProps {
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
}

const Calendar = forwardRef<CalendarRef, CalendarProps>(({ initialStartDate, initialEndDate }, ref) => {
  const [selectedDates, setSelectedDates] = useState<{ start: Date | null; end: Date | null }>(() => {
    return { 
        start: initialStartDate ? new Date(initialStartDate.setHours(0,0,0,0)) : null, 
        end: initialEndDate ? new Date(initialEndDate.setHours(0,0,0,0)) : null 
    };
  });

  const [currentMonth, setCurrentMonth] = useState(() => 
    initialStartDate ? initialStartDate.getMonth() : new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(() => 
    initialStartDate ? initialStartDate.getFullYear() : new Date().getFullYear()
  );

  // Effect to update calendar's internal state if initial props change (e.g., user clears dates then reopens)
  useEffect(() => {
    setSelectedDates({
        start: initialStartDate ? new Date(initialStartDate.setHours(0,0,0,0)) : null,
        end: initialEndDate ? new Date(initialEndDate.setHours(0,0,0,0)) : null
    });
    if (initialStartDate) {
        setCurrentMonth(initialStartDate.getMonth());
        setCurrentYear(initialStartDate.getFullYear());
    } else {
        const today = new Date();
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
    }
  }, [initialStartDate, initialEndDate]);

  useImperativeHandle(ref, () => ({
    getSelection: () => {
      return selectedDates;
    }
  }));

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    clickedDate.setHours(0, 0, 0, 0);

    let newStart = selectedDates.start;
    let newEnd = selectedDates.end;

    if (!newStart || (newStart && newEnd)) { 
      newStart = clickedDate;
      newEnd = null;
    } else if (newStart && !newEnd) { 
      if (clickedDate < newStart) {
        newEnd = newStart;
        newStart = clickedDate;
      } else if (clickedDate.getTime() === newStart.getTime()) {
        newStart = null; // Clicking the same start date deselects it
        newEnd = null;
      } else {
        newEnd = clickedDate; 
      }
    }
    setSelectedDates({ start: newStart, end: newEnd });
    // No longer calling onDateSelect or onRangeSelect here
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (prev === 0) setCurrentYear((y) => y - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      if (prev === 11) setCurrentYear((y) => y + 1);
      return newMonth;
    });
  };

  const renderDates = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const datesArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      datesArray.push(<DateCellWrapper key={`empty-${i}`} />); // Empty cells for alignment
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      date.setHours(0,0,0,0);

      const isStart = !!(selectedDates.start && date.getTime() === selectedDates.start.getTime());
      const isEnd = !!(selectedDates.end && date.getTime() === selectedDates.end.getTime());
      const isInRange = !!(selectedDates.start && selectedDates.end && date > selectedDates.start && date < selectedDates.end);
      
      // For single day selection when end date is not yet picked
      const isSelectedSingle = !!(selectedDates.start && !selectedDates.end && date.getTime() === selectedDates.start.getTime());

      datesArray.push(
        <DateCellWrapper key={day} $isInRange={isInRange} $isStartOfRange={isStart} $isEndOfRange={isEnd}>
          <DateCell
            onClick={() => handleDateClick(day)}
            $isSelected={isStart || isEnd || isSelectedSingle}
            $isStart={isStart}
            $isEnd={isEnd}
            $isInRangeVisual={isInRange} // Different from $isInRange on wrapper, for text color etc.
          >
            {day}
          </DateCell>
        </DateCellWrapper>
      );
    }
    return datesArray;
  };

  return (
    <CalendarPopupContainer className="calendar-popup-container">
      {/* Left panel could be a separate component here if this container wraps everything */}
      <CalendarView>
        <Header>
          <NavButton onClick={handlePrevMonth}>{'<'}</NavButton>
          <span>{`${currentYear}.${String(currentMonth + 1).padStart(2, '0')}`}</span>
          <NavButton onClick={handleNextMonth}>{'>'}</NavButton>
        </Header>
        <WeekDays>
          {['일', '월', '화', '수', '목', '금', '토'].map((d) => <WeekDayLabel key={d}>{d}</WeekDayLabel>)}
        </WeekDays>
        <DatesGrid>
          {renderDates()}
        </DatesGrid>
      </CalendarView>
    </CalendarPopupContainer>
  );
});

const CalendarPopupContainer = styled.div`
  display: flex; // For side-by-side layout with a future left panel
  position: absolute;
  top: calc(100% + 8px); 
  left: 0; 
  background: white;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 1000;
  overflow: hidden; // Ensures inner elements conform to border-radius
  font-family: 'SUIT', sans-serif;
`;

const CalendarView = styled.div`
  padding: 16px 20px 20px 20px; 
  width: 300px; // Width of the calendar part itself
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 15px; 
  font-weight: 500; 
  color: #222222;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px; 
  color: #555555; 
  padding: 4px 8px;
  border-radius: 4px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 10px;
  font-size: 12px; 
  color: #767676; 
  font-weight: 400;
`;

const WeekDayLabel = styled.div`
  padding: 4px 0;
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0; // Remove gap to make range background continuous
`;

// Wrapper for each cell, handles the continuous range background
const DateCellWrapper = styled.div<{
  $isInRange?: boolean;
  $isStartOfRange?: boolean;
  $isEndOfRange?: boolean;
}>`
  position: relative;
  background-color: ${({ $isInRange, $isStartOfRange, $isEndOfRange }) => 
    $isInRange || $isStartOfRange || $isEndOfRange ? '#E0F4FF' : 'transparent'};
  
  ${({ $isStartOfRange, $isEndOfRange }) => $isStartOfRange && css`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    ${$isEndOfRange && css` // If it's also the end (single day selected as range)
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    `}
  `}
  ${({ $isEndOfRange, $isStartOfRange }) => $isEndOfRange && css`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    ${$isStartOfRange && css` // If it's also the start (single day selected as range)
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    `}
  `}

  ${({ $isStartOfRange, $isEndOfRange }) => $isStartOfRange && !$isEndOfRange && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({ $isEndOfRange, $isStartOfRange }) => $isEndOfRange && !$isStartOfRange && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}
`;

interface DateCellProps {
  $isSelected?: boolean;
  $isStart?: boolean;
  $isEnd?: boolean;
  $isInRangeVisual?: boolean;
}

const DateCell = styled.div<DateCellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px; 
  height: 36px; 
  margin: 2px auto; // Center the circle within the wrapper, allow wrapper background to show
  cursor: pointer;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 400;
  color: #333333;
  position: relative; // For z-index if needed, or pseudo-elements
  transition: background-color 0.2s, color 0.2s;

  ${({ $isSelected, $isStart, $isEnd }) => 
    ($isSelected || $isStart || $isEnd) && css`
      background-color: #3D8587; // Dark teal from image
      color: white;
      font-weight: 500;
  `}

  ${({ $isInRangeVisual, $isStart, $isEnd }) => 
    $isInRangeVisual && !$isStart && !$isEnd && css`
      color: #3D8587; // Text color for dates in range (if different from default)
      background-color: transparent; // Ensure no circle for in-range items
  `}

  &:hover {
    ${({ $isSelected }) => !$isSelected && css`
      background-color: #f1f1f1; // Light hover for non-selected dates
    `}
  }
`;

export default Calendar; 