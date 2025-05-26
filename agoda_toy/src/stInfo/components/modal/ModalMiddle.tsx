import React from 'react';
import AboutRoom from './AboutRoom';
import CheckMark from '@stInfo/assets/svgs/modal/icn_checkboxes.svg?react';
import Share from '@stInfo/assets/svgs/modal/icn_share.svg?react';
import Heart from '@stInfo/assets/svgs/modal/icn_heart.svg?react';
import { WrapSvgSmall } from '../common/WrapSvgSmall';
import styled from 'styled-components';

export default function ModalMiddle() {
  return (
    <Container>
      <AboutRoom />

      <CheckBreakfastFrame>
        <CheckBreakfast>
          <CheckMarkIcon />
          <p>조식 추가(￦18,000)</p>
        </CheckBreakfast>
        <CheckBreakfastSummary>
          조식이 포함되어 있는 객실입니다.
        </CheckBreakfastSummary>
      </CheckBreakfastFrame>

      <ButtonFrame>
        <ShareIcon />
        <HeartIcon />
      </ButtonFrame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 17rem;
  height: 42.8rem;
  margin-left: 2.25rem;
  margin-right: 2.6rem;

  justify-content: space-between;
`;

const CheckMarkIcon = WrapSvgSmall(CheckMark);
const ShareIcon = WrapSvgSmall(Share);
const HeartIcon = WrapSvgSmall(Heart);

const CheckBreakfastFrame = styled.div`
  display: flex;
  width: 15.4375rem;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.gray300};

  margin-top: 16.63rem;
`;

const CheckBreakfast = styled.p`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.headline.sm};
`;
const CheckBreakfastSummary = styled.p`
  ${({ theme }) => theme.fonts.title.md};
`;

const ButtonFrame = styled.div`
  display: inline-flex;
  padding: 0.25rem 0rem;
  align-items: center;
  gap: 1.625rem;
  justify-self: flex-end;
  margin-top: 4.75rem;
`;
