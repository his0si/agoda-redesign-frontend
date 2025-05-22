import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  const location = useLocation();
  const isStInfo = location.pathname;

  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      {isStInfo.includes('stinfo') && <Footer />}
    </>
  );
}

const LayoutWrapper = styled.main`
  width: 120rem;
`;
