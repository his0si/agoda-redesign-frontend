import React from 'react';
import styled from 'styled-components';
import SearchWidget from '../components/main/SearchWidget';

const BACKGROUND_IMAGE_URL = '/images/background.png';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  return (
    <MainPageContainer>
      {/* <BackgroundImage src={BACKGROUND_IMAGE_URL} alt="Background" /> */}
      <ContentWrapper>
        <CatchphraseText><span>꿈꾸던 여행을 현실로 </span> </CatchphraseText>
        <GlitterIcon src="/images/main_icn_glitter.svg" alt="glitter icon" />
        <SearchWidget />
      </ContentWrapper>
    </MainPageContainer>
  );
}

const MainPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: auto; // Changed from overflow: hidden to allow vertical scrolling
  background-image: url(${BACKGROUND_IMAGE_URL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1; // 배경 이미지 위에 위치
  padding: 2rem; // 콘텐츠 주변 여백
`;

const CatchphraseText = styled.h1`
  color: var(--AGODA-White, #FFF);
  text-align: center;
  font-family: SUIT;
  font-size: 37.5px;
  font-weight: 200;
  line-height: normal;
  margin-bottom: 0.625rem;
  span {
    font-style: italic !important;
  }
`;

const GlitterIcon = styled.img`
  margin-top: 1.25rem;
  margin-bottom: 1.875rem;
  width: 31.25px;
  height: 31.25px;
`; 