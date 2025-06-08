import styled from 'styled-components';

const FOOTER_LIST = [
  {
    title: '도움말ㆍ문의',
    text: [
      '도움말 센터',
      '자주 묻는 질문(FAQ)',
      '개인정보 처리방침',
      '이용약관',
      '디지털 서비스법(EU)',
      '콘텐츠 가이드라인&신고',
    ],
  },
  {
    title: '회사 소개',
    text: [
      '아고다 소개',
      '채용 정보',
      '프레스센터/보도자료',
      '블로그',
      '포인트맥스',
    ],
  },
  {
    title: '파트너',
    text: [
      'YCS 파트너 포털',
      'Partner Hub',
      '아고다 광고문의',
      '제휴 파트너',
      '아고다 API 안내',
    ],
  },
  {
    title: '모바일 아고다',
    text: ['iOS', 'Android'],
  },
];

export default function FooterInfo() {
  return (
    <Container>
      {FOOTER_LIST.map(({ title, text }) => (
        <Frame key={title}>
          <InfoTitle>{title}</InfoTitle>
          <InfoText>
            {text.map((script) => (
              <p key={script}>{script}</p>
            ))}
          </InfoText>
        </Frame>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
  width: 60.5rem;
`;

const Frame = styled.div`
  display: flex;
  width: 11.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoTitle = styled.h2`
  ${({ theme }) => theme.fonts.headline.sm};
`;

const InfoText = styled.div`
  ${({ theme }) => theme.fonts.body.lg};
  color: ${({ theme }) => theme.colors.gray900};
`;
