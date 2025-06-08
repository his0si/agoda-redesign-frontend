import styled from 'styled-components';
import IconScriptMore from '../../../assets/svgs/icn_script_frame_more.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';
import { useGetAccommodation } from '@src/stInfo/hooks/useGetAccomodationId';
import { useParams } from 'react-router-dom';

export default function Script() {
  const { accommodationId } = useParams();

  if (!accommodationId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetAccommodation(accommodationId);

  return (
    <Container>
      <ScriptFrame>
        <TypoScriptFrameMain>{data?.description}</TypoScriptFrameMain>
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
