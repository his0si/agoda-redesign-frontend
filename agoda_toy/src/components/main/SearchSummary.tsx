import React from 'react';
import styled, { type DefaultTheme } from 'styled-components';
// import { LuSearch } from 'react-icons/lu'; // 검색 아이콘

interface SearchSummaryProps {
  destination: string;
  dateRange: string;
  rooms: string;
  personnel: string;
  onSearchClick?: () => void; // 검색 버튼 클릭 핸들러
}

export default function SearchSummary({
  destination,
  dateRange,
  rooms,
  personnel,
  onSearchClick,
}: SearchSummaryProps) {
  return (
    <SummaryContainer>
      <InfoSection>
        <InfoItem>
          <LabelText>Destination</LabelText>
          <ValueText>{destination}</ValueText>
        </InfoItem>
        <InfoItem>
          <LabelText>Date</LabelText>
          <ValueText>{dateRange}</ValueText>
        </InfoItem>
        <InfoItem>
          <LabelText>Room</LabelText>
          <ValueText>{rooms}</ValueText>
        </InfoItem>
        <InfoItem>
          <LabelText>Personnel</LabelText>
          <ValueText>{personnel}</ValueText>
        </InfoItem>
      </InfoSection>
      {/* rule: button 태그 에는 type 명시 필수 */}
      <SearchButton type="button" onClick={onSearchClick} aria-label="Search">
        {/* <LuSearch /> */}
        <img src="/images/main_icn_search.svg" alt="Search" style={{ width: '45%', height: '70%' }} />
      </SearchButton>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.aside<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem; 
  width: 22.5rem;
  min-height: 21rem;
  border-radius: 25px 25px 75px 25px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
`;

const InfoSection = styled.div`
  width: 100%;
  margin-left: 1rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LabelText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 15px;
  font-weight: 300; 
  line-height: 1.4;
  margin-bottom: 0.05em;
`;

const ValueText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 14px;
  opacity: 0.8;
  font-weight: 300;
  line-height: 1.4;
`;

const SearchButton = styled.button<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  padding: 0;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  box-shadow: none;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  transition: background-color 0.2s ease-in-out;

  img {
    width: 56.25%;
    height: 87.5%;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`; 