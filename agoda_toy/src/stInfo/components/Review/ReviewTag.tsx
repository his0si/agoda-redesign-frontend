import styled from 'styled-components';

const TAG_LIST = [
  '경치',
  '깔끔함',
  '야경',
  '대중교통',
  '수영장',
  '인터넷',
  '도쿄 타워',
];

export default function ReviewTag() {
  return (
    <Container>
      {TAG_LIST.map((text) => (
        <Tag key={text}>{text}</Tag>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.375rem;
`;

const Tag = styled.div`
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6.25rem;
  border: 1px solid var(--AGODA-Secondary, #55a3b5);
  ${({ theme }) => theme.fonts.headline.sm};
  color: ${({ theme }) => theme.colors.secondary};
`;
