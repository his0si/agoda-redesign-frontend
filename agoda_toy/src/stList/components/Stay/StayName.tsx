import styled from 'styled-components';

interface StayNameProps {
  name: string;
  type: number;
  engName: string;
}

export default function StayName({ name, type, engName }: StayNameProps) {
  return (
    <>
      <TitleTypeFrame>
        <StayTitle>{name}</StayTitle>
        <StayType>{type}성 호텔</StayType>
      </TitleTypeFrame>
      <StayEngName>{engName}</StayEngName>
      <></>
    </>
  );
}

const TitleTypeFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StayTitle = styled.p`
  font: ${({ theme }) => theme.fonts.headline.lg};
`;

const StayType = styled.p`
  font: ${({ theme }) => theme.fonts.title.md};
  color: #757575;
`;

const StayEngName = styled.p`
  font: ${({ theme }) => theme.fonts.title.md};
  color: #acacac;
`;
