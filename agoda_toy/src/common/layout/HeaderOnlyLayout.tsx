import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BACKGROUND_IMAGE_URL = '/images/background.png';

const FullScreenBackground = styled.div<{ $isMainPage?: boolean }>`
  ${props => 
    props.$isMainPage && 
    css`
      background-image: url(${BACKGROUND_IMAGE_URL});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
  `}
`;

export default function HeaderOnlyLayout() {
  const location = useLocation();
  const isMainPage = location.pathname === '/main';

  return (
    <>
      <FullScreenBackground $isMainPage={isMainPage} />
      <div style={{ zoom: '0.8', position: 'relative', width: '100%' }}>
        <Header isMainPage={isMainPage} />
        <LayoutWrapper $isMainPage={isMainPage}>
          <Outlet />
        </LayoutWrapper>
      </div>
    </>
  );
}

const LayoutWrapper = styled.main<{ $isMainPage?: boolean }>`
  width: ${props => props.$isMainPage ? '100%' : '120rem'};
  margin: ${props => props.$isMainPage ? '0' : '0 auto'};
  padding-top: ${props => props.$isMainPage ? '0' : '2rem'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$isMainPage ? 'stretch' : 'center'};
  min-height: ${props => props.$isMainPage ? 'calc(100vh / 0.8)' : 'auto'};
`; 