import React from 'react';
import type { ReactNode } from 'react';
import styled, { type DefaultTheme } from 'styled-components';

interface SearchInputProps {
  icon: ReactNode;
  value: string;
  placeholder: string;
  isDateField?: boolean; // 날짜 필드인지 여부 (스타일링 다르게 할 수 있음)
  onClick?: () => void; // 클릭 이벤트 핸들러 (예: 날짜 선택기 열기)
  // label?: string; // 디자인상 보이지 않아 우선 제외, 필요시 HiddenLabel 등으로 추가
}

export default function SearchInput({
  icon,
  value,
  placeholder,
  isDateField = false,
  onClick,
}: SearchInputProps) {
  return (
    // rule: button 태그에는 type 명시 필수
    <InputContainer type="button" onClick={onClick} $isDateField={isDateField}>
      <IconWrapper>{icon}</IconWrapper>
      <TextValue $hasValue={!!value}>{value || placeholder}</TextValue>
    </InputContainer>
  );
}

const InputContainer = styled.button<{ $isDateField: boolean; theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100}; // Updated from #F3F4F6
  border-radius: 1.12rem; // 14px -> 11.2px
  padding: 1.2rem; // 1.5rem -> 1.2rem
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-family: 'SUIT', sans-serif; // Added explicit font-family
  font-size: 11.2px; // Explicit font size 14px -> 11.2px
  font-weight: 500; // Explicit font weight
  line-height: 1.4; // Added explicit line-height for better readability

  &:hover {
    filter: brightness(0.95);
  }
`;

const IconWrapper = styled.span<{ theme: DefaultTheme }>`
  margin-right: 0.8rem; // 1rem -> 0.8rem
  color: ${({ theme }) => theme.colors.gray900}; // Updated from #555555
  font-size: 1.6rem; // 아이콘 크기 (react-icons 사용 시), rem 단위 사용 2rem -> 1.6rem
  display: flex;
  align-items: center;
`;

const TextValue = styled.span<{ $hasValue: boolean; theme: DefaultTheme }>`
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colors.black : theme.colors.gray300}; // Updated
  flex-grow: 1;
`; 