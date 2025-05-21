import styled from 'styled-components';

interface SearchTagProps {
  tagName: string;
}

export default function SearchTag({ tagName }: SearchTagProps) {
  return <Tag>{tagName}</Tag>;
}

const Tag = styled.div`
  height: 1.75rem;
  border-radius: 1.25rem;
  border: 1px solid #acacac;
  padding: 0.625rem 1.3125rem;
`;
