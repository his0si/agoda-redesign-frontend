import styled from 'styled-components';
import ArrowRightIc from '@stList/assets/svgs/arrow_right.svg?react';
import ArrowLeftIc from '@stList/assets/svgs/arrow_left.svg?react';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPage,
  onPageChange,
}: PaginationProps) {
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const visiblePages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <ArrowButton onClick={handlePrevPage}>
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

      {currentPage < totalPage && totalPage > 10 && (
        <ArrowButton onClick={handleNextPage}>
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
  padding: 0;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ArrowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 3.9375rem;
  padding: 0;

  font: ${({ theme }) => theme.fonts.body.lg};
  background-color: #fff;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ArrowRightIcon = styled(ArrowRightIc)`
  width: 0.4375rem;
  height: 0.875rem;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ArrowLeftIcon = styled(ArrowLeftIc)`
  width: 0.4375rem;
  height: 0.875rem;
  flex-shrink: 0;
`;

const PaginationText = styled.span``;
