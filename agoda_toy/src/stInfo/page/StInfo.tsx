import Upper from '../components/Upper/Upper';
import Middle from '@stInfo/components/Middle/Middle';
import Review from '@stInfo/components/Review/Review';
import { useState } from 'react';
import styled from 'styled-components';
import StInfoModal from '../components/modal/StInfoModal';

export default function StInfo() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  const props = { handleModalOpen };

  return (
    <>
      {isOpen && <StInfoModal handleModalClose={handleModalClose} />}
      <Container>
        <Upper />
        <Middle {...props} />
        <Review />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
