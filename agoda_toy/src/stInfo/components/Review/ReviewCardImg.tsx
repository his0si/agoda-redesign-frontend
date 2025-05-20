import styled from 'styled-components';

const LIST = [1, 2, 3];

export default function ReviewCardImg() {
  return (
    <Container>
      {LIST.map((num) => (
        <ImgFrame key={num} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.63rem;
  width: 33.5rem;
  height: 9.9375rem;
`;

const ImgFrame = styled.div`
  width: 10.125rem;
  height: 9.9375rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: var(--AGODA-Gray100, #f3f4f6);
`;
