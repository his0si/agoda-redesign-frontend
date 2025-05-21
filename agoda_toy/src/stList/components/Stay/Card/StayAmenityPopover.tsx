import styled from 'styled-components';

interface StayAmenityPopoverProps {
  tags: string[];
}
export default function StayAmenityPopover({ tags }: StayAmenityPopoverProps) {
  return (
    <>
      <PopoverWrapper>
        <PopoverBox>
          <PopoverContent>
            <PopoverTitle>숙소 제공 사항</PopoverTitle>
            <TagList>
              {tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </TagList>
          </PopoverContent>
        </PopoverBox>
        <PopoverArrow></PopoverArrow>
      </PopoverWrapper>
    </>
  );
}

const PopoverWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + 1.5rem);
  left: -2rem;
  height: 12.31406rem;
`;

const PopoverBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 27.5rem;
  /* height: 11.25rem; */
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #000;
  opacity: 0.75;
  backdrop-filter: blur(2px);
`;
const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16.875rem;
`;

const PopoverTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-family: SUIT;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PopoverArrow = styled.div`
  width: 0;
  border-left: 1.75rem solid transparent;
  border-right: 1.75rem solid transparent;
  border-top: 1.75rem solid #333;
  margin-left: 3.25rem; // 화살표 위치 조절
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  align-self: stretch;
`;

const Tag = styled.div`
  border-radius: 0.498rem;
  border: 0.996px solid #fff;
  color: ${({ theme }) => theme.colors.white};

  font-family: SUIT;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.25rem 0.5rem;
`;
