import styled from 'styled-components';

type BarProps = {
  value: number;
};

export default function BarGraph({ value }: BarProps) {
  return (
    <Container>
      <BarFill value={value} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 0.375rem;
  padding-right: 1.8125rem;
  align-items: center;
  align-self: stretch;
  border-radius: 6.25rem;
  background: var(--AGODA-Fourth, #dcf3f7);
`;

const BarFill = styled.div<{ value: number }>`
  width: ${({ value }) => `${value}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: width 0.3s ease-in-out;
  border-radius: 6.25rem;
`;
