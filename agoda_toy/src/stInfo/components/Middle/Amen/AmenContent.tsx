import styled from 'styled-components';

const AMEN_LIST = [
  ['무료 와이파이', '공용 화장실', '에어컨'],
  ['조리시설', '전자레인지', '헬스장'],
  ['커피포트', 'TV', '수영장'],
  ['냉장고', '편의점', '인덕션'],
  ['슬리퍼', '루프탑', '셀프 체크인'],
  ['어메니티', '난방', '세탁기'],
];

export default function AmenContent() {
  return (
    <Container>
      <Frame>
        {AMEN_LIST[0].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
      <Frame>
        {AMEN_LIST[1].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
      <Frame>
        {AMEN_LIST[2].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
      <Frame>
        {AMEN_LIST[3].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
      <Frame>
        {AMEN_LIST[4].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
      <Frame>
        {AMEN_LIST[5].map((text) => (
          <Text>{text}</Text>
        ))}
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 86rem;
  align-items: flex-start;
  gap: 7.5625rem;
`;

const Frame = styled.div`
  display: flex;
  width: 7.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6875rem;
  flex-shrink: 0;
`;

const Text = styled.p`
  align-self: stretch;
  ${({ theme }) => theme.fonts.headline.sm};
`;
