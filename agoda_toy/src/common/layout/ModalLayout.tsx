import styled from 'styled-components';
import CloseIcon from '../../myrev/assets/my_rev_x.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';
import type { ModalClose } from '@src/stInfo/types/modalClose';

type ModalLayoutProps = {
  children: React.ReactNode;
};

type ModalTypes = ModalLayoutProps & ModalClose;

export default function ModalLayout({
  children,
  handleModalClose,
}: ModalTypes) {
  return (
    <Overlay>
      <Container>
        <Header>
          <CloseBtnIcon onClick={handleModalClose} />
        </Header>
        <Frame>{children}</Frame>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  width: 75.125rem;
  height: 53.9rem;
  flex-direction: column;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: var(--AGODA-White, #fff);

  align-items: center;
`;

const Header = styled.header`
  display: flex;
  height: 5.19rem;
  width: 75.125rem;
  justify-content: flex-end;
  align-items: center;

  border-bottom: 0.3px solid #000;
`;

const CloseBtn = WrapSvgIcon(CloseIcon);
const CloseBtnIcon = styled(CloseBtn)`
  margin-right: 2rem;
  cursor: pointer;
`;

const Frame = styled.div`
  display: flex;
  height: 45.75rem;
  margin-top: 3.31rem;
`;
