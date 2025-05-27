import ModalLayout from '../../../common/layout/ModalLayout';
import type { handleModalCloseType } from '@src/myrev/types/modalFnTypes';
import ModalLeft from '../myRev02Modal/ModalLeft';
import ModifyModalRight from './ModifyModalRight';

export default function MyRevModifyModal({
  handleModalClose,
}: handleModalCloseType) {
  return (
    <ModalLayout handleModalClose={handleModalClose}>
      <ModalLeft />
      <ModifyModalRight />
    </ModalLayout>
  );
}
