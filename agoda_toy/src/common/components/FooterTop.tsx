import styled from 'styled-components';
import FooterTravel from './FooterTravel';
import FooterInfo from './FooterInfo';

export default function FooterTop() {
  return (
    <Container>
      <FooterTravel />
      <FooterInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 46.3125rem;
  padding: 3.75rem 16.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  background: var(--AGODA-Gray100, #f3f4f6);
`;
