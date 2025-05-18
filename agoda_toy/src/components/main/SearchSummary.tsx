import React from 'react';
import styled, { type DefaultTheme } from 'styled-components';
import { LuSearch } from 'react-icons/lu'; // 검색 아이콘

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
        <LuSearch />
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
  padding: 2rem; // rem 단위 사용 (기존 2.5rem)
  width: 20rem; // rem 단위 사용, 이미지 비율에 맞춰 너비 고정 또는 비율 설정
  min-height: 21rem; // Added to increase height
  border-radius: 20px 20px 70px 20px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
`;

const InfoSection = styled.div`
  width: 100%;
  margin-bottom: 2rem; // 버튼과의 간격, rem 단위 사용
`;

const InfoItem = styled.div`
  margin-bottom: 1rem; 
  &:last-child {
    margin-bottom: 0;
  }
`;

const LabelText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.8; 
  margin-bottom: 0.3rem; 
`;

const ValueText = styled.p<{ theme: DefaultTheme }>`
  font-family: 'SUIT', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`;

const SearchButton = styled.button<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white}; // Updated
  color: ${({ theme }) => theme.colors.primary}; // Updated
  border: none;
  border-radius: 50%; // 원형 버튼
  width: 6rem; // 버튼 크기, rem 단위 사용
  height: 6rem; // 버튼 크기, rem 단위 사용
  cursor: pointer;
  font-size: 2.8rem; // 아이콘 크기, rem 단위 사용
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2); // rem 단위 사용
  align-self: center; // 부모 컨테이너(flex-start)에도 불구하고 중앙 정렬
  margin-top: auto; // InfoSection 아래로 밀어내기
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100}; // Updated
  }
`; 