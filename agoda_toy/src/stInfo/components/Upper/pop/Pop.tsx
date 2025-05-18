import PopInfoTop from './PopInfoTop';
import styled from 'styled-components';
import { CenterFlex } from '../../../../styles/common/common';
import Button from '../../Button';

export default function Pop() {
  return (
    <Container>
      <PopInfoTop />
      <Button />
    </Container>
  );
}

const Container = styled.div`
  ${CenterFlex}
  width: 21.5rem;
  padding: 1.5rem 0.9375rem;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;
