import React from 'react';
import styled from 'styled-components';
import Bed from '@stInfo/assets/svgs/modal/icn_bed.svg?react';
import People from '@stInfo/assets/svgs/modal/icn_peo.svg?react';
import Eat from '@stInfo/assets/svgs/modal/icn_food.svg?react';
import Wifi from '@stInfo/assets/svgs/modal/icn_wifi.svg?react';
import Alert from '@stInfo/assets/svgs/modal/icn_alert.svg?react';
import { WrapSvgSmall } from '../common/WrapSvgSmall';

export default function AboutRoom() {
  return (
    <Container>
      <Frame>
        <BedIcon />
        <Text>싱글베드 2개</Text>
      </Frame>
      <Frame>
        <PeopleIcon />
        <Text>수용 인원 2명</Text>
      </Frame>
      <Frame>
        <EatIcon />
        <Text>조식 제공</Text>
      </Frame>
      <Frame>
        <WifiIcon />
        <Text>무료 WI-FI</Text>
      </Frame>
      <Frame>
        <AlertIcon />
        <Text>환불 불가(할인 특가 상품)</Text>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  margin-top: 2.06rem;
  width: 13.9rem;
`;

const BedIcon = WrapSvgSmall(Bed);
const PeopleIcon = WrapSvgSmall(People);
const WifiIcon = WrapSvgSmall(Wifi);
const EatIcon = WrapSvgSmall(Eat);
const AlertIcon = WrapSvgSmall(Alert);

const Text = styled.p`
  ${({ theme }) => theme.fonts.body.lg};
`;

const Frame = styled.div`
  display: flex;
  gap: 0.87rem;
`;
