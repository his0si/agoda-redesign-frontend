import React from 'react';
import styled from 'styled-components';

export default function Review() {
  return (
    <>
      <Container>
        생각보다 가격이 착해서 큰 기대 안 했는데, 정말 만족스러운
        숙소였어요.방이 깔끔하고 정돈도 잘 되어 있어서 하루 종일 돌아다니다가
        편하게 쉴 수 있었어요.무엇보다 직원분들이 정말 친절해서 체크인부터
        체크아웃까지 기분 좋게 머물렀습니다.간단한 일본어밖에 못했는데도
        알아들어주시고 웃으면서 도와주셔서 감사했어요.호텔 위치도 너무 좋아서
        지하철역이랑 편의점이 도보 5분 거리 안에 다 있었고요.근처에 맛집도
        많아서 아침, 저녁 고민 없이 잘 해결했어요. 전반적으로 가격대비 정말
        훌륭했고, 처음 일본 여행하는 분들께도 추천하고 싶어요.다음에 또 일본 올
        일 있으면 이 호텔은 무조건 재방문할 것 같아요 😊
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 39.375rem;
  height: 12.4375rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  ${({ theme }) => theme.fonts.body.lg};
`;
