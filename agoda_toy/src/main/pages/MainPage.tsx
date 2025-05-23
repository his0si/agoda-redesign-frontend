import React from 'react';
import styled from 'styled-components';
import SearchWidget from '../components/SearchWidget';

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
  width: 100vw;
  height: 150vh;
  position: relative;
  overflow-y: auto;
  background-image: url(${BACKGROUND_IMAGE_URL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 2.5rem));
  z-index: 1;
  padding: 2rem;
`;

const CatchphraseText = styled.h1`
  color: var(--AGODA-White, #FFF);
  text-align: center;
  font-family: SUIT;
  font-size: 37.5px;
  font-weight: 200;
  line-height: normal;
  margin-top: 7rem;
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