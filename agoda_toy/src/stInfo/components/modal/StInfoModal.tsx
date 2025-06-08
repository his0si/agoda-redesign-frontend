import styled from 'styled-components';
import ModalPics from './ModalPics';
import ModalMiddle from './ModalMiddle';
import ModalLeft from './ModalLeft';
import StInfoModalLayout from './StInfoModalLayout';
import type { ModalClose } from '@src/stInfo/types/modalClose';
import { useGetRoomId } from '@src/stInfo/hooks/useGetRoomId';

export default function StInfoModal({
  handleModalClose,
  selectedRoomId,
}: ModalClose) {
  if (selectedRoomId === undefined) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetRoomId(selectedRoomId);

  if (!data) return null;
  console.log(data);
  console.log(selectedRoomId);
  return (
    <StInfoModalLayout handleModalClose={handleModalClose}>
      <Title>{data?.roomType}</Title>
      <ModalPics pics={data?.roomImages} />
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
