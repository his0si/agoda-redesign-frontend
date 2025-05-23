import styled from 'styled-components';
import SearchTag from './SearchTag';

const SEARCH_TAG_LIST = [
  { tagName: '선예약 후지불' },
  { tagName: '지금 바로 결제' },
  { tagName: '세탁기' },
  { tagName: '인터넷' },
  { tagName: '금연' },
  { tagName: '흡연구역' },
  { tagName: '인터넷' },
  { tagName: '투숙객 평점: 8+ 우수' },
];

export default function SearchTagList() {
  return (
    <PopularSearchFilterWrapper>
      <PopularSearchListHeader>도쿄 인기 검색 조건</PopularSearchListHeader>
      <TagList>
        {SEARCH_TAG_LIST.map((tag) => (
          <SearchTag tagName={tag.tagName} />
        ))}
      </TagList>
    </PopularSearchFilterWrapper>
  );
}

const PopularSearchFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  width: 16.9375rem;
  height: 11.0625rem;
  flex-shrink: 0;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  width: 18.75rem;
  height: 8.75rem;
  align-items: center;
  align-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
  align-self: stretch;
  flex-wrap: wrap;
`;

const PopularSearchListHeader = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
`;
