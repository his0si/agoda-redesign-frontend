import styled from 'styled-components';
import LocationIc from '@stList/assets/svgs/location.svg?react';

interface StayAddressProps {
  location: string;
}

export default function StayAddress({ location }: StayAddressProps) {
  return (
    <AddressFrame>
      <Address>
        <LocationIcon />
        {location}
      </Address>
      <SubAddress>다이아바역에서 70m</SubAddress> {/* 고정값  */}
    </AddressFrame>
  );
}

const AddressFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4375rem;
`;
const LocationIcon = styled(LocationIc)`
  width: 1.125rem;
  height: 1.2604rem;
`;
const Address = styled.p`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font: ${({ theme }) => theme.fonts.title.md};
`;

const SubAddress = styled.p`
  font: ${({ theme }) => theme.fonts.title.sm};
`;
