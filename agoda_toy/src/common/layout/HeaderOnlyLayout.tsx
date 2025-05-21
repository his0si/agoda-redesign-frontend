import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderOnlyLayout() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </>
  );
}

const LayoutWrapper = styled.main`
  width: 120rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`; 