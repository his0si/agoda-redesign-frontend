import ModalLeft from './ModalLeft';
import ModalRight from './ModalRight';
import ModalLayout from '../../../common/layout/ModalLayout';

export default function MyRevModal() {
  return (
    <ModalLayout>
      <ModalLeft />
      <ModalRight />
    </ModalLayout>
  );
}
