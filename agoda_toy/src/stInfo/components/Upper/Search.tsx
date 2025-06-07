import IconSearchLocation from '../../assets/svgs/icn_search_location.svg?react';
import IconCalender from '../../assets/svgs/calender.svg?react';
import IconCalender2 from '../../assets/svgs/main_icn_cndin.svg?react';
import styled from 'styled-components';
import IconSearch from '../../assets/svgs/Search.svg?react';
import IconPerson from '../../assets/svgs/icn_search_peo.svg?react';
import { WrapSvgIcon } from '../../styles/Svg';

interface SearchProps {
  width?: string;
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  adults: string;
  roomCounts: number;
}
export default function Search({
  width = '59rem',
  destination,
  checkInDate,
  checkOutDate,
  adults,
  roomCounts,
}: SearchProps) {
  return (
    <Container $width={width}>
      <TypoSearchLocation>
        <SearchLocationIcon />
        {destination}
      </TypoSearchLocation>
      <TypoSearchCal>
        <IconCalenderIn />
        {checkInDate}
      </TypoSearchCal>
      <TypoSearchCal>
        <IconCalenderOut />
        {checkOutDate}
      </TypoSearchCal>
      <IconTypoWrapper>
        <PersonIcon />
        <AdultsRoomsWrapper>
          <TypoSearchAdults>성인 {adults}명</TypoSearchAdults>
          <TypoSearchRooms>객실 {roomCounts}개</TypoSearchRooms>
        </AdultsRoomsWrapper>
      </IconTypoWrapper>
      <SearchIconWrapper />
    </Container>
  );
}

const Container = styled.div<{ $width: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem;
  width: ${({ $width }) => $width};
  height: 2.88rem;
  margin-bottom: 1.75rem;

  gap: 2.5rem;

  border-radius: 6.25rem;
  border: 1px solid #f1f1f1;
  background: var(--AGODA-White, #fff);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

const IconCalenderOut = WrapSvgIcon(IconCalender);
const IconCalenderIn = WrapSvgIcon(IconCalender2);
const SearchLocationIcon = WrapSvgIcon(IconSearchLocation);
const SearchIcon = WrapSvgIcon(IconSearch);

const TypoSearchLocation = styled.div`
  ${({ theme }) => theme.fonts.headline.sm};
  display: flex;
  padding-left: 0.625rem;
  align-items: center;
  gap: 0.5625rem;
`;

const TypoSearchCal = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  ${({ theme }) => theme.fonts.title.lg};
`;
const TypoSearchAdults = styled.p`
  color: #1e1e1e;
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TypoSearchRooms = styled.p`
  color: #8f8f8f;
  font-family: 'Noto Sans KR';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AdultsRoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

const IconTypoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const SearchIconWrapper = styled(SearchIcon)`
  display: flex;
  width: 1.875rem;
  height: 1.875rem;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const PersonIcon = styled(IconPerson)`
  width: 18px;
  height: 18px;
`;
