import React from 'react';
import styled from 'styled-components';

// Re-using Counter from PersonnelSelectionPopover or a shared component is ideal
// For this example, defined inline for simplicity
interface CounterProps {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  minCount?: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  count,
  onIncrement,
  onDecrement,
  minCount = 0,
}) => {
  return (
    <CounterRow>
      <LabelText>{label}</LabelText>
      <Controls>
        <ControlButton
          type="button"
          onClick={onDecrement}
          disabled={count <= minCount}
          aria-label={`Decrease ${label}`}
        >
          -
        </ControlButton>
        <CountText>{count}</CountText>
        <ControlButton type="button" onClick={onIncrement} aria-label={`Increase ${label}`}>
          +
        </ControlButton>
      </Controls>
    </CounterRow>
  );
};

interface RoomSelectionPopoverProps {
  rooms: number;
  onRoomsChange: (count: number) => void;
  onClose?: () => void;
}

const RoomSelectionPopover: React.FC<RoomSelectionPopoverProps> = ({
  rooms,
  onRoomsChange,
}) => {
  return (
    <PopoverContainer>
      <Counter
        label="객실"
        count={rooms}
        onIncrement={() => onRoomsChange(rooms + 1)}
        onDecrement={() => onRoomsChange(rooms - 1)}
        minCount={0}
      />
    </PopoverContainer>
  );
};

export default RoomSelectionPopover;

// Styles are similar to PersonnelSelectionPopover, consider a common styled component if DRY is a priority
const PopoverContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 12px;
  min-width: 220px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  margin-top: 4px;
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ControlButton = styled.button`
  background-color: transparent;
  border: 1px solid #757575;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;
  font-size: 18px;
  font-weight: 300;
  line-height: 1;

  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #e0e0e0;
    color: #e0e0e0;
  }
`;

const CountText = styled.span`
  font-size: 14px;
  font-weight: 500;
  min-width: 18px;
  text-align: center;
`; 