import styled from 'styled-components';
import SearchTag from './SearchTag';

const SEARCH_TAG_LIST = [
  { tagName: '선예약 후지불' },
  { tagName: '지금 바로 결제' },
  { tagName: '세탁기' },
  { tagName: '금연' },
  { tagName: '흡연구역' },
  { tagName: '인터넷' },
  { tagName: '투숙객 평점: 8+ 우수' },
];

export default function SearchTagList() {
  return (
    <Container>
      <SearchTagListHeader>도쿄 인기 검색 조건</SearchTagListHeader>
      {SEARCH_TAG_LIST.map((tag) => (
        <SearchTag tagName={tag.tagName} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 8.75rem;
  align-items: center;
  align-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
  align-self: stretch;
  flex-wrap: wrap;
`;

const SearchTagListHeader = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
`;
