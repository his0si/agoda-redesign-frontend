import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../common/components/Header';

const GuestHeaderOnlyLayout = () => {
  return (
    <div style={{ zoom: '0.8' }}>
      <Header />
      <GuestLayoutWrapper>
        <Outlet />
      </GuestLayoutWrapper>
    </div>
  );
};

export default GuestHeaderOnlyLayout;

const GuestLayoutWrapper = styled.main`
  width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 