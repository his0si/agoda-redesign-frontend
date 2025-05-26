import { useState } from 'react';
import MyNavBar from '../../common/components/MyNavBar';
import MyRevCardSlider from '../components/MyRevCardSlider';
import styled from 'styled-components';
import MyRevModal from '../components/myRev02Modal/MyRevModal';
import MyRevSeeModal from '../components/myRev05Modal/MyRevSeeModal';

export default function MyRev() {
  const [writeRev, setWriteRev] = useState(false);
  const [modifyRev, setModifyRev] = useState(false);

  function handleWriteRevOpen() {
    //후기 작성 모달 오픈
    setWriteRev(true);
  }

  function handleModifyRevOpen() {
    //후기 수정 모달 오픈
    setModifyRev(true);
  }

  function handleModalClose() {
    if (writeRev) {
      setWriteRev(false);
    } else if (modifyRev) {
      setModifyRev(false);
    }
  }

  const props = {
    handleWriteRevOpen,
    handleModifyRevOpen,
  };

  return (
    <>
      {writeRev && <MyRevModal handleModalClose={handleModalClose} />}
      {modifyRev && <MyRevSeeModal handleModalClose={handleModalClose} />}

      <Containter>
        <MyNavBar />
        <MyRevCardSlider {...props} />
      </Containter>
    </>
  );
}

const Containter = styled.div`
  display: flex;
  width: 120rem;
  justify-content: center;
  gap: 2rem;
`;
