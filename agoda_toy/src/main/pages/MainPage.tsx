import React from 'react';
import styled from 'styled-components';
import SearchWidget from '../components/SearchWidget';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  return (
    <MainPageContainer>
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
  width: 100%;
  height: 150vh;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90rem;
  width: calc(100% - 4rem);
  padding: 2rem;
  z-index: 10;
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