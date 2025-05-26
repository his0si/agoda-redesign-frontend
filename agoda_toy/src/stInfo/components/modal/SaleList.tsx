import styled from 'styled-components';

const ABOUT_TEXTS = [
  'AGODA SPONSORED',
  '해피 요금 특가',
  '최저가 할인 이벤트',
  'AGODA WEEK 특별 쿠폰',
];

export default function SaleList() {
  return (
    <Container>
      <Frame>
        <Title>적용 가능한 할인 목록</Title>
        <AboutFrame>
          {ABOUT_TEXTS.map((text) => (
            <About key={text}>{text}</About>
          ))}
        </AboutFrame>
      </Frame>
      <Frame>
        <Title>중복 할인</Title>
        <Coupon>
          <p>최초 회원가입 선물 쿠폰</p>
        </Coupon>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  width: 19.8rem;
  height: 26.1rem;
  display: inline-flex;
  flex-direction: column;
  padding: 1.875rem;
  align-items: center;
  gap: 1.5rem;

  border-radius: 1.25rem;
  border: 1px solid rgba(172, 172, 172, 1);
  background: var(--AGODA-White, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const Title = styled.p`
  align-self: stretch;
  ${({ theme }) => theme.fonts.headline.sm};
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
`;

const AboutFrame = styled.div`
  display: flex;
  padding: 0rem 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;

  width: 18.5rem;
  height: 15.4rem;
  border: 1px solid rgba(172, 172, 172, 1);
  background: var(--AGODA-White, #fff);
`;

const About = styled.p`
  ${({ theme }) => theme.fonts.title.md};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding-top: 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 1.0625rem;
  align-self: stretch;

  width: 18.5rem;
  height: 2.56rem;
`;

const Coupon = styled.div`
  display: flex;
  width: 19.75rem;
  height: 3.81rem;

  justify-content: center;
  padding: 0rem 0.625rem;
  align-items: center;

  border-radius: 0.5rem;
  border: 1px solid rgba(172, 172, 172, 1);
  background: var(--AGODA-Gray100, #f3f4f6);

  ${({ theme }) => theme.fonts.title.md};
`;
