import React from 'react';
import styled from 'styled-components';
import SearchWidget from '../components/main/SearchWidget';

// 배경 이미지 경로 (public 폴더 기준)
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
  font-size: 30px;
  font-weight: 200;
  line-height: normal;
  margin-bottom: 0.5rem; // 3rem에서 0.5rem으로 수정 (아이콘과의 간격)
  span {
    font-style: italic !important;
  }
`;

const GlitterIcon = styled.img`
  margin-top: 1.0rem; // -1rem에서 0.2rem으로 수정 (텍스트 바로 아래 작은 간격)
  margin-bottom: 1.5rem; // 아이콘과 SearchWidget 사이 간격 (0.5 + 0.2 + 2.3 = 3rem 유지)
  width: 25px; // 아이콘 너비 설정
  height: 25px; // 아이콘 높이 설정
`; 