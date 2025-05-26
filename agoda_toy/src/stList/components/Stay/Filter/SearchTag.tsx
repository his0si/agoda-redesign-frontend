import styled from 'styled-components';

interface SearchTagProps {
  tagName: string;
}

export default function SearchTag({ tagName }: SearchTagProps) {
  return <Tag>{tagName}</Tag>;
}

const Tag = styled.button`
  font: ${({ theme }) => theme.fonts.caption.xsmall};
  height: 1.75rem;
  background: #fff;
  border-radius: 1.25rem;
  border: 1px solid #acacac;
  padding: 0 1.3125rem; //height 보다 padding 값이 큰 관계로,  padding-block : 0으로
`;
