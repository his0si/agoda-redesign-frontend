import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      <Footer />
    </>
  );
}

const LayoutWrapper = styled.main`
  width: 120rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
