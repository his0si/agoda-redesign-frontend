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
  justify-content: space-between; // 내부 요소들을 위아래로 분산
  align-items: flex-start; // 텍스트 왼쪽 정렬을 위해 변경
  background: ${({ theme }) => theme.colors.primary}; // Updated
  color: ${({ theme }) => theme.colors.white}; // Updated
  padding: 2rem; // 1.6rem * 1.25
  width: 22.5rem; // 18rem * 1.25
  min-height: 21rem; // 16.8rem * 1.25
  border-radius: 25px 25px 75px 25px; // 20px*1.25, 20px*1.25, 60px*1.25, 20px*1.25
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25); // 8px*1.25, 8px*1.25
`;

const InfoSection = styled.div`
  width: 100%;
  margin-bottom: 2rem; // 1.6rem * 1.25
  margin-top: 3rem; // 2.4rem * 1.25
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem; // 1.2rem * 1.25
  &:last-child {
    margin-bottom: 0;
  }
`;

const LabelText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 16.25px; // 13px * 1.25
  font-weight: 300; 
  line-height: 1.4;
  margin-bottom: 0.1em; 
`;

const ValueText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 16px; // 12.8px * 1.25
  opacity: 0.8;
  font-weight: 300;
  line-height: 1.4;
`;

const SearchButton = styled.button<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15); // 투명도 20%의 하얀색 배경
  border: none;
  padding: 0; // 내부 여백 제거
  border-radius: 50%; // 원형 클릭 영역 유지
  width: 6rem; // 4.8rem * 1.25
  height: 6rem; // 4.8rem * 1.25
  cursor: pointer;
  box-shadow: none; // 그림자 제거
  align-self: flex-end; // 오른쪽 정렬로 변경
  margin-top: auto; // InfoSection 아래로 밀어내기
  transition: background-color 0.2s ease-in-out; // 부드러운 배경색 변경 효과 추가

  img {
    width: 56.25%; // 45% * 1.25 
    height: 87.5%; // 70% * 1.25
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3); // 호버 시 투명도 30%의 하얀색 배경 (예시)
  }

  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`; 