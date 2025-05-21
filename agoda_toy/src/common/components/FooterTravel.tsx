import styled from 'styled-components';

const TRAVEL_HEADLINE = [
  { text: '국가 및 지역별 호텔', clicked: true },
  { text: '여행지 가이드', clicked: false },
  { text: 'Agoda Homes', clicked: false },
];

const COUNTRY_LIST = [
  { pro: '아시아', hotels: ['발리 호텔', '하노이 호텔', '홍콩 호텔'] },
  { pro: '유럽', hotels: ['런던 호텔', '파리 호텔'] },
  { pro: '중동', hotels: ['두바이 호텔'] },
  { pro: '아프리카', hotels: ['모로코 호텔', '남아프리카 공화국 호텔'] },
  {
    pro: '아메리카',
    hotels: ['아르헨티나 호텔', '브라질 호텔', '캐나다 호텔'],
  },
  { pro: '오세아니아', hotels: ['호주 호텔', '뉴질랜드 호텔'] },
];

export default function FooterTravel() {
  return (
    <Container>
      <TitleContainer>
        <FooterTravelTitle>추천 여행지</FooterTravelTitle>
        <TravelTitleFrame>
          {TRAVEL_HEADLINE.map(({ text, clicked }) => (
            <FooterTravelHeadlineClicked $clicked={clicked} key={text}>
              {text}
            </FooterTravelHeadlineClicked>
          ))}
        </TravelTitleFrame>
      </TitleContainer>
      <Countries>
        {COUNTRY_LIST.map(({ pro, hotels }) => (
          <CountryFrame key={pro}>
            <HeadlineTitle>{pro}</HeadlineTitle>
            {hotels.map((text) => (
              <HeadlineDescription>{text}</HeadlineDescription>
            ))}
          </CountryFrame>
        ))}
      </Countries>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 22.25rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 1.5rem;
  border: 1px solid var(--AGODA-Gray100, #f3f4f6);
  background: var(--AGODA-White, #fff);

  gap: 2.56rem;
`;

const TitleContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  width: 77.4rem;
  height: 5.63rem;
`;

const TravelTitleFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
`;

const FooterTravelTitle = styled.h1`
  align-self: stretch;
  ${({ theme }) => theme.fonts.display.sm};
`;

const FooterTravelHeadlineClicked = styled.h2<{ $clicked?: boolean }>`
  ${({ theme }) => theme.fonts.headline.md};
  color: ${({ $clicked, theme }) =>
    $clicked ? theme.colors.black : theme.colors.gray600};
  text-align: center;
  text-decoration-line: ${({ $clicked }) => ($clicked ? 'underline' : 'none')};
`;

const Countries = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.375rem;

  width: 77.4rem;
`;

const CountryFrame = styled.div`
  display: flex;
  width: 11.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;
`;

const HeadlineTitle = styled.h3`
  ${({ theme }) => theme.fonts.headline.sm};
`;

const HeadlineDescription = styled.h4`
  ${({ theme }) => theme.fonts.caption.lg};
`;
