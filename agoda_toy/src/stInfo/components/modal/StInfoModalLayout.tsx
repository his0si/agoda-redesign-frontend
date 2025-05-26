import styled from 'styled-components';
import CloseIcon from '../../../myrev/assets/my_rev_x.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';

type ModalLayoutProps = {
  children: React.ReactNode;
};

export default function StInfoModalLayout({ children }: ModalLayoutProps) {
  return (
    <Container>
      <Header>
        <CloseBtnIcon />
      </Header>
      <Frame>{children}</Frame>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 97.1875rem;
  height: 55.0625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: var(--AGODA-White, #fff);
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  width: 97.1875rem;
  justify-content: flex-end;
  align-items: center;
`;

const CloseBtn = WrapSvgIcon(CloseIcon);
const CloseBtnIcon = styled(CloseBtn)`
  margin-top: 2.31rem;
  margin-right: 2.56rem;

  cursor: pointer;
`;

const Frame = styled.div`
  display: flex;
  width: 97.1875rem;
  height: 45.75rem;
  margin-top: 3.81rem;
  justify-content: center;
`;
