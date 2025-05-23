import styled from 'styled-components';

export default function MyRevCardImg() {
  return <Img />;
}

const Img = styled.div`
  width: 18.25rem;
  height: 16.5rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray300};
`;
