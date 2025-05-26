import styled from 'styled-components';

import MyNavBar from '@src/common/components/MyNavBar';
import MyResContent from '../components/MyResContent';

export default function MyRes() {
  return (
    <PageWrapper>
      <Container>
        <MyNavBar />
        <MyResContent />
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  padding: 6.25rem 18rem;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;
