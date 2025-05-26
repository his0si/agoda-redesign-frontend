import styled from 'styled-components';
import ModalPics from './ModalPics';
import ModalMiddle from './ModalMiddle';
import ModalLeft from './ModalLeft';
import StInfoModalLayout from './StInfoModalLayout';

export default function StInfoModal() {
  return (
    <StInfoModalLayout>
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
