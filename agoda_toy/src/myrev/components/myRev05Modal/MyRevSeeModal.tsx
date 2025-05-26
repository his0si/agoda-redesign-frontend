import type { handleModalCloseType } from '@src/myrev/types/modalFnTypes';
import ModalLayout from '../../../common/layout/ModalLayout';
import ModalLeft from '../myRev02Modal/ModalLeft';
import MyReviewRight from './MyReviewRight';

export default function MyRevSeeModal({
  handleModalClose,
}: handleModalCloseType) {
  return (
    <ModalLayout handleModalClose={handleModalClose}>
      <ModalLeft />
      <MyReviewRight />
    </ModalLayout>
  );
}
