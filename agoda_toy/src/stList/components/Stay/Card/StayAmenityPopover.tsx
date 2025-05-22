import styled from 'styled-components';
import BubbleIc from '@stList/assets/svgs/bubble.svg?react';

interface StayAmenityPopoverProps {
  tags: string[];
}

export default function StayAmenityPopover({ tags }: StayAmenityPopoverProps) {
  return (
    <PopoverContainer>
      <BubbleWrapper>
        <BubbleIcon />
        <OverlayContent>
          <PopoverTitle>숙소 제공 사항</PopoverTitle>
          <TagList>
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </TagList>
        </OverlayContent>
      </BubbleWrapper>
    </PopoverContainer>
  );
}

const PopoverContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: -2rem;
`;

const BubbleWrapper = styled.div`
  position: relative;
  width: 27.5rem;
  height: 12.31406rem;
`;

const BubbleIcon = styled(BubbleIc)`
  width: 100%;
  height: 100%;
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16.9rem;
`;

const PopoverTitle = styled.p`
  font-family: SUIT;
  font-size: 1.25rem;
  font-weight: 700;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 1rem;
`;

const Tag = styled.div`
  border-radius: 0.498rem;
  border: 0.996px solid #fff;
  color: ${({ theme }) => theme.colors.white};
  font-family: SUIT;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.25rem 0.5rem;
`;
