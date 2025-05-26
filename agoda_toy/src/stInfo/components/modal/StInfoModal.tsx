import styled from 'styled-components';
import ModalPics from './ModalPics';
import ModalMiddle from './ModalMiddle';
import ModalLeft from './ModalLeft';
import StInfoModalLayout from './StInfoModalLayout';
import type { ModalClose } from '@src/stInfo/types/modalClose';

export default function StInfoModal({ handleModalClose }: ModalClose) {
  return (
    <StInfoModalLayout handleModalClose={handleModalClose}>
      <Title>슈페리어트윈</Title>
      <ModalPics />
      <ModalMiddle />
      <ModalLeft />
    </StInfoModalLayout>
  );
}

const Title = styled.h1`
  position: absolute;
  top: 2.56rem;
  left: 4.5rem;
  ${({ theme }) => theme.fonts.display.md};
`;
