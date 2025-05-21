import styled from 'styled-components';

interface StayAmenityTagProps {
  tags: string[];
}

export default function StayAmenityTag({ tags }: StayAmenityTagProps) {
  return (
    <>
      <TagInfo>
        숙소 제공 사항
        <TagList>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagList>
      </TagInfo>
    </>
  );
}

const TagInfo = styled.div`
  font-family: 'SUIT';
  font-weight: 700;
  font-size: 1rem;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.div`
  border: 0.0625rem solid #000;
  border-radius: 0.498rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`;
