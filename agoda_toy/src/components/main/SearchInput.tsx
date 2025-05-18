import React from 'react';
import type { ReactNode } from 'react';
import styled, { type DefaultTheme, css } from 'styled-components';

interface SearchInputProps {
  icon: ReactNode;
  value: string;
  placeholder: string;
  isDateField?: boolean; // 날짜 필드인지 여부 (스타일링 다르게 할 수 있음)
  onClick?: () => void; // 클릭 이벤트 핸들러 (예: 날짜 선택기 열기)
  isActiveSelection?: boolean; // New prop
  $transparentBgAndBorders?: boolean; // New prop
  // label?: string; // 디자인상 보이지 않아 우선 제외, 필요시 HiddenLabel 등으로 추가
}

export default function SearchInput({
  icon,
  value,
  placeholder,
  isDateField = false,
  onClick,
  isActiveSelection = false, // Default to false
  $transparentBgAndBorders = false, // Default to false
}: SearchInputProps) {
  return (
    // rule: button 태그에는 type 명시 필수
    <InputContainer type="button" onClick={onClick} $isDateField={isDateField} $transparentBgAndBorders={$transparentBgAndBorders}>
      <IconWrapper>{icon}</IconWrapper>
      <TextValue $hasValue={!!value} $isActiveSelection={isActiveSelection}>
        {value || placeholder}
      </TextValue>
    </InputContainer>
  );
}

const InputContainer = styled.button<{
  $isDateField: boolean;
  $transparentBgAndBorders: boolean; // Added prop type
  theme: DefaultTheme;
}>`
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

  ${({ $transparentBgAndBorders }) =>
    $transparentBgAndBorders &&
    css`
      background: transparent;
      border-radius: 0;
      box-shadow: none; /* Ensure no shadow if it had one */
      &:hover {
        filter: none; /* Remove hover effect if transparent */
        /* Or apply a different hover suitable for this context */
      }
    `}
`;

const IconWrapper = styled.span<{ theme: DefaultTheme }>`
  margin-right: 0.8rem; // 1rem -> 0.8rem
  color: ${({ theme }) => theme.colors.gray900}; // Updated from #555555
  font-size: 1.6rem; // 아이콘 크기 (react-icons 사용 시), rem 단위 사용 2rem -> 1.6rem
  display: flex;
  align-items: center;
`;

const TextValue = styled.span<{
  $hasValue: boolean;
  $isActiveSelection: boolean; // Added new prop type
  theme: DefaultTheme;
}>`
  color: ${({ theme, $hasValue, $isActiveSelection }) => {
    if (!$hasValue) return theme.colors.gray300; // Placeholder text is always gray
    return $isActiveSelection ? theme.colors.black : theme.colors.gray300; // Value text is black if active, gray if default/inactive
  }};
  flex-grow: 1;
`; 