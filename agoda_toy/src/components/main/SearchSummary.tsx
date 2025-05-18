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
  padding: 1.6rem; 
  width: 18rem; 
  min-height: 16.8rem; 
  border-radius: 20px 20px 60px 20px; 
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25); // 0px 10px 10px 0px -> 0px 8px 8px 0px
`;

const InfoSection = styled.div`
  width: 100%;
  margin-bottom: 1.6rem; // 버튼과의 간격, rem 단위 사용 2rem -> 1.6rem
  margin-top: 2.4rem; // 기존 2rem에서 0.4rem 증가시켜 텍스트를 아래로 이동
`;

const InfoItem = styled.div`
  margin-bottom: 1.2rem; // Adjusted from 0.8rem to increase spacing
  &:last-child {
    margin-bottom: 0;
  }
`;

const LabelText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 13px; 
  font-weight: 300; 
  line-height: 1.4;
  margin-bottom: 0.1em; 
`;

const ValueText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 12.8px; 
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
  width: 4.8rem; // 버튼 크기, rem 단위 사용 6rem -> 4.8rem
  height: 4.8rem; // 버튼 크기, rem 단위 사용 6rem -> 4.8rem
  cursor: pointer;
  box-shadow: none; // 그림자 제거
  align-self: flex-end; // 오른쪽 정렬로 변경
  margin-top: auto; // InfoSection 아래로 밀어내기
  transition: background-color 0.2s ease-in-out; // 부드러운 배경색 변경 효과 추가

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