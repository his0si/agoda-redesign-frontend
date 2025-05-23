import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  // const location = useLocation();
  const { pathname } = useLocation();
  const showFooter = pathname.includes('stinfo') || pathname.includes('stlist');
  return (
    <div style={{ zoom: '0.8' }}>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      {showFooter && <Footer />}
    </div>
  );
}

const LayoutWrapper = styled.main`
  width: 120rem;
`;
