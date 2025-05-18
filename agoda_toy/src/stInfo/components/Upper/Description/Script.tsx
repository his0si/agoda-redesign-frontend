import styled from 'styled-components';

export default function Script() {
  return (
    <>
      <TypoScriptFrameMain>
        롯폰기에 위치한 도쿄 프린스 호텔은 야외 수영장이 있는 고요한 휴양지로,
        혼자 여행하는 여행자에게 이상적입니다. 번화한 롯폰기 지역에 위치하여
        롯폰기 힐스로의 접근이 용이하며, 휴식을 취할 수 있는 고요한 일본식
        정원을 갖추고 있습니다. 도쿄의 활기찬 엔터테인먼트 허브인 롯폰기를
      </TypoScriptFrameMain>
      <TypoScriptFrameMore>더보기</TypoScriptFrameMore>
    </>
  );
}

const TypoScriptFrameMain = styled.p`
  ${({ theme }) => theme.fonts.body.lg};
`;

const TypoScriptFrameMore = styled.div`
  ${({ theme }) => theme.fonts.headline.md};
`;
