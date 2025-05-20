import styled from 'styled-components';
import IconScriptMore from '../../../assets/svgs/icn_script_frame_more.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';

export default function Script() {
  return (
    <Container>
      <ScriptFrame>
        <TypoScriptFrameMain>
          롯폰기에 위치한 도쿄 프린스 호텔은 야외 수영장이 있는 고요한 휴양지로,
          혼자 여행하는 여행자에게 이상적입니다. 번화한 롯폰기 지역에 위치하여
          롯폰기 힐스로의 접근이 용이하며, 휴식을 취할 수 있는 고요한 일본식
          정원을 갖추고 있습니다. 도쿄의 활기찬 엔터테인먼트 허브인 롯폰기를…
        </TypoScriptFrameMain>
        <TypoScriptFrameMore>
          더보기
          <ScriptMoreIcon />
        </TypoScriptFrameMore>
      </ScriptFrame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 64.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 63.8rem;
  height: 7.44rem;
  margin-bottom: 2.75rem;
`;

const ScriptFrame = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5625rem;
  align-self: stretch;
  width: 63.8rem;
  height: 5.44rem;
`;

const TypoScriptFrameMain = styled.p`
  ${({ theme }) => theme.fonts.body.lg};
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0;
`;

const TypoScriptFrameMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.gray600};
  ${({ theme }) => theme.fonts.headline.md};
`;

const ScriptMoreIcon = WrapSvgIcon(IconScriptMore);
