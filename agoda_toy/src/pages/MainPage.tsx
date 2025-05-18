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
        <CatchphraseText>꿈꾸던 여행을 현실로</CatchphraseText>
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
  overflow: hidden; // 이미지가 컨테이너를 벗어나지 않도록
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
  font-size: 40px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  margin-bottom: 3rem; // 검색 위젯과의 간격
`; 