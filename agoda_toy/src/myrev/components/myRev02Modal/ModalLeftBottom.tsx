import styled from 'styled-components';

import LocationIcon from '../../assets/my_rev_icn_loc.svg?react';
import CalIcon from '../../assets/my_rev_icn_scnd.svg?react';
import PeopleIcon from '../../assets/my_rev_icn_peo.svg?react';
import RoomDoorIcon from '../../assets/my_rev_icn_peo.svg?react';
import { WrapSvgIcon } from '@stInfo/styles/Svg';

export default function ModalLeftBottom() {
  return (
    <>
      <Frame>
        <Location />
        <Text>Shibakoen, Tokyo, Japan</Text>
      </Frame>
      <Frame>
        <Cal />
        <Text>2025.04.15(월)</Text>
        <Text>2025.04.15(월)</Text>
      </Frame>
      <Frame>
        <Location />
        <Text>Shibakoen, Tokyo, Japan</Text>
      </Frame>
      <Frame>
        <People />
        <Text>성인 5명</Text>
      </Frame>
      <Frame>
        <RoomDoor />
        <Text>객실 1</Text>
      </Frame>
    </>
  );
}

const Text = styled.p`
  ${({ theme }) => theme.fonts.caption.sm};
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.94rem;
`;

const Location = WrapSvgIcon(LocationIcon);
const Cal = WrapSvgIcon(CalIcon);
const People = WrapSvgIcon(PeopleIcon);
const RoomDoor = WrapSvgIcon(RoomDoorIcon);
