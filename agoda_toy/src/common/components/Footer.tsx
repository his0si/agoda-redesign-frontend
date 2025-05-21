import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <FooterTop />
      <FooterBottom />
    </Container>
  );
}

const Container = styled.footer``;
