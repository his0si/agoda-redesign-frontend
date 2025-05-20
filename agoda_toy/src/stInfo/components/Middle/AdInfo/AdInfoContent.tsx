import styled from 'styled-components';

const ADINFO_CONTENT = [
  {
    title: '체크인/체크아웃',
    description: [
      '체크인 시작시간: 15:00',
      '체크인 마감시간: 23:59',
      '체크아웃 마감시간: 12:00',
    ],
  },
  {
    title: '숙소 정보',
    description: [
      '숙소 건축 연도: 2025',
      '총 층수: 27',
      '총 객실 수: 482',
      '금연 여부: yes',
      '레스토랑 수: 1',
    ],
  },
  {
    title: '주의사항',
    description: [
      '6세 이상 아동은 성인으로 간주합니다',
      '간이침대는 제공하지 않습니다',
    ],
  },
];

export default function AdInfoContent() {
  return (
    <Container>
      {ADINFO_CONTENT.map(({ title, description }) => (
        <Frame key={title}>
          <InfoContentTitle>{title}</InfoContentTitle>
          <InfoContentContainer>
            {description.map((text, idx) => (
              <InfoContentsText key={idx}>{text}</InfoContentsText>
            ))}
          </InfoContentContainer>
        </Frame>
      ))}

      <InfoContentTitle></InfoContentTitle>
      <InfoContentContainer></InfoContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10.5625rem;
`;

const Frame = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

const InfoContentTitle = styled.p`
  ${({ theme }) => theme.fonts.headline.lg};
  align-self: stretch;
`;

const InfoContentContainer = styled.div`
  align-self: stretch;
`;
const InfoContentsText = styled.p`
  color: var(--AGODA-Black, #23262c);
  font-family: SUIT;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.875rem; /* 255.556% */
`;
