import { useState } from 'react';
import styled from 'styled-components';
import StayAmenityPopover from './StayAmenityPopover';

interface StayAmenityTagProps {
  tags: string[];
}

export default function StayAmenityTag({ tags }: StayAmenityTagProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <TagInfo
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TagListHeader>숙소 제공 사항</TagListHeader>
        <TagList>
          {tags.slice(0, 3).map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
          {tags.length > 3 && <Tag>+{tags.length - 3}</Tag>}
        </TagList>
        {tags.length > 3 && isHovered && <StayAmenityPopover tags={tags} />}
      </TagInfo>
    </>
  );
}

const TagInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  width: 21.5625rem;
  height: 3.75rem;
`;
const TagListHeader = styled.p`
  font-family: 'SUIT';
  font-weight: 700;
  font-size: 1rem;
  line-height: 100%;
`;

export const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.div`
  border: 0.0625rem solid #000;
  border-radius: 0.498rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`;
