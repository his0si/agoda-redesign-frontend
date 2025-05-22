import Header from '../../common/components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function GuestHeaderOnlyLayout() {
  return (
    <>
      <Header isMainPage={false} />
      <GuestLayoutWrapper>
        <Outlet />
      </GuestLayoutWrapper>
    </>
  );
}

const GuestLayoutWrapper = styled.main`
  width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 