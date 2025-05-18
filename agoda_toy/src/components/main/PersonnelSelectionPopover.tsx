import React from 'react';
import styled from 'styled-components';

interface CounterProps {
  label: string;
  description?: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  minCount?: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  description,
  count,
  onIncrement,
  onDecrement,
  minCount = 0,
}) => {
  return (
    <CounterRow>
      <LabelWrapper>
        <LabelText>{label}</LabelText>
        {description && <DescriptionText>{description}</DescriptionText>}
      </LabelWrapper>
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

interface PersonnelSelectionPopoverProps {
  adults: number;
  children: number;
  onAdultsChange: (count: number) => void;
  onChildrenChange: (count: number) => void;
  onClose?: () => void; // Optional: for a close button or clicking outside
}

const PersonnelSelectionPopover: React.FC<PersonnelSelectionPopoverProps> = ({
  adults,
  children,
  onAdultsChange,
  onChildrenChange,
}) => {
  return (
    <PopoverContainer>
      <Counter
        label="성인"
        description="18세 이상"
        count={adults}
        onIncrement={() => onAdultsChange(adults + 1)}
        onDecrement={() => onAdultsChange(adults - 1)}
        minCount={0}
      />
      <Counter
        label="어린이"
        description="0 - 17세"
        count={children}
        onIncrement={() => onChildrenChange(children + 1)}
        onDecrement={() => onChildrenChange(children - 1)}
        minCount={0}
      />
    </PopoverContainer>
  );
};

export default PersonnelSelectionPopover;

const PopoverContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 250px; 
  position: absolute; 
  top: 100%; 
  left: 0;
  z-index: 10; // Ensure it's above other elements
  margin-top: 8px; // Small gap from the input
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const DescriptionText = styled.span`
  font-size: 12px;
  color: #777;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ControlButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #757575;
  color: #333;
  padding: 0;
  cursor: pointer;
  line-height: 1;
  outline: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #e0e0e0;
  }
`;


const CountText = styled.span`
  font-size: 16px;
  font-weight: 500;
  min-width: 20px; // Ensures space for numbers
  text-align: center;
`; 