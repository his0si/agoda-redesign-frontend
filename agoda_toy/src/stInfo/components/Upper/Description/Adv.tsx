import IcnAdvRide from '../../../assets/svgs/icn_adv_ride.svg?react';
import IcnAdvAct from '../../../assets/svgs/icn_adv_act.svg?react';
import IcnAdvClean from '../../../assets/svgs/icn_adv_clean.svg?react';
import IcnAdvBed from '../../../assets/svgs/icn_adv_bed.svg?react';
import IcnAdvStay from '../../../assets/svgs/icn_adv_stay.svg?react';
import styled from 'styled-components';
import { WrapSvgIcon } from '@stInfo/styles/Svg';

const ADV_LIST = [
  { icon: WrapSvgIcon(IcnAdvRide), title: '대중교통(370m 거리)' },
  { icon: WrapSvgIcon(IcnAdvAct), title: '다양한 액티비티' },
  { icon: WrapSvgIcon(IcnAdvClean), title: '매우 청결' },
  { icon: WrapSvgIcon(IcnAdvBed), title: '객실의 안락함 및 쾌적함' },
  { icon: WrapSvgIcon(IcnAdvStay), title: '최근 지어진 숙소' },
];

export default function Adv() {
  return (
    <Container>
      {ADV_LIST.map(({ icon: Icon, title }) => (
        <AdvCard key={title}>
          <Icon />
          <AdvCardTitle>{title}</AdvCardTitle>
        </AdvCard>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 3.375rem;
  width: 57.3rem;
  height: 4rem;
`;

const AdvCard = styled.div`
  display: flex;
  width: 8.75rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 8.75rem;
  height: 4rem;
`;

const AdvCardTitle = styled.p`
  ${({ theme }) => theme.fonts.body.sm};
  align-self: stretch;
  display: flex;
  justify-content: center;
`;
