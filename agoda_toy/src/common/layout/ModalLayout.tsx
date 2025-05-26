import styled from 'styled-components';
import CloseIcon from '../../myrev/assets/my_rev_x.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';

type ModalLayoutProps = {
  children: React.ReactNode;
};

export default function ModalLayout({ children }: ModalLayoutProps) {
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
  display: flex;
  width: 75.125rem;
  height: 50.9375rem;
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
