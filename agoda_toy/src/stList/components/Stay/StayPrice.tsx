import styled from 'styled-components';

interface StayPriceProps {
  realPrice: number;
  salePrice: number;
  totalPrice: number;
}
export default function StayPrice({
  realPrice,
  salePrice,
  totalPrice,
}: StayPriceProps) {
  return (
    <>
      <PriceFrame>
        <PriceLabel>1박당 요금</PriceLabel>
        <PriceRow>
          <RealPrice>₩{realPrice.toLocaleString()}</RealPrice>
          <SalePrice>₩{salePrice.toLocaleString()}</SalePrice>
        </PriceRow>
        <TotalPrice>총액 ₩{totalPrice.toLocaleString()}</TotalPrice>
      </PriceFrame>
    </>
  );
}

const PriceFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PriceLabel = styled.p`
  font: ${({ theme }) => theme.fonts.title.sm};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-bottom: 0.1875rem;
`;

const RealPrice = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
  text-decoration: line-through;
  color: #acacac;
`;

const SalePrice = styled.p`
  font: ${({ theme }) => theme.fonts.headline.lg};
  white-space: nowrap;
`;

const TotalPrice = styled.p`
  font: ${({ theme }) => theme.fonts.caption.lg};
  border-bottom: 1px solid;
  /* text-decoration: underline; */
`;
