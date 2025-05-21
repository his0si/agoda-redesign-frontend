import styled from 'styled-components';
import ArrowRightIc from '@stList/assets/svgs/arrow_right.svg?react';
import ArrowLeftIc from '@stList/assets/svgs/arrow_left.svg?react';

interface PaginationProps {
  currentPage: number;
  currentGroupStart: number;
  onPageChange: (page: number) => void;
  onGroupChange: (newStart: number) => void;
}

export default function Pagination({
  currentPage,
  currentGroupStart,
  onPageChange,
  onGroupChange,
}: PaginationProps) {
  const totalPages = 18;

  const isFirstGroup = currentGroupStart === 1;
  const visiblePages = isFirstGroup
    ? Array.from({ length: 8 }, (_, i) => i + 1) // 1~8
    : Array.from({ length: 10 }, (_, i) => i + 9).filter(
        (page) => page <= totalPages
      );

  const handleNextGroup = () => {
    if (isFirstGroup) {
      onGroupChange(9);
      onPageChange(9);
    }
  };

  const handlePrevGroup = () => {
    if (!isFirstGroup) {
      onGroupChange(1);
      onPageChange(1);
    }
  };

  return (
    <PaginationWrapper>
      {!isFirstGroup && (
        <ArrowButton onClick={handlePrevGroup}>
          <ArrowLeftIcon />
          <PaginationText>이전</PaginationText>
        </ArrowButton>
      )}
      {visiblePages.map((page) => (
        <PageNumber
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      {isFirstGroup && (
        <ArrowButton onClick={handleNextGroup}>
          <PaginationText>다음</PaginationText>
          <ArrowRightIcon />
        </ArrowButton>
      )}
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 62.08px;
  gap: 56px;
`;

const PageNumber = styled.button<{ $active: boolean }>`
  background-color: #fff;
  font: ${({ theme }) => theme.fonts.body.lg};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.black};
  cursor: pointer;
`;

const ArrowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 3.9375rem;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
`;

const ArrowRightIcon = styled(ArrowRightIc)`
  width: 0.4375rem;
  height: 0.875rem;
  flex-shrink: 0;
`;

const ArrowLeftIcon = styled(ArrowLeftIc)`
  width: 0.4375rem;
  height: 0.875rem;
`;

const PaginationText = styled.span`
  font: ${({ theme }) => theme.fonts.body.lg};
`;
