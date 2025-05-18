import styled from 'styled-components';
import Button from '../../Button';

export default function RoomCard() {
  return (
    <Container>
      <ImgCard />
      <CardContent>
        <CardContentFrame>
          <p>슈페리어 트윈</p>
          <p>싱글베드 2개</p>
          <div>화장실이미지?</div>
        </CardContentFrame>
        <CardContentFrame>
          <p>￦ 310,597</p>
          <p>￦ 275,928</p>
        </CardContentFrame>
      </CardContent>
      <Button />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 20.4375rem;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ImgCard = styled.img`
  height: 13.6875rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`;

const CardContentFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
