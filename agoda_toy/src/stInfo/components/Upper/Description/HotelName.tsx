import styled from 'styled-components';
import { ColumnCenterFlex } from '../../../../styles/common/common';

export default function HotelName() {
  return (
    <Container>
      <TypoHotelTopFrameMain>도쿄 프린스 호텔</TypoHotelTopFrameMain>
      <TypoHotelTopFrameSub>Tokyo Prince Hotel</TypoHotelTopFrameSub>
      <HotelTopAdd>
        3-3-1 Shibakoen, Minato-Ku, 롯폰기, 도쿄/동경, 일본, 105-8560
      </HotelTopAdd>
      <HotelBottom>8.6</HotelBottom>
      <HotelBottom>리뷰 4,745개개</HotelBottom>
    </Container>
  );
}

const Container = styled.div`
  ${ColumnCenterFlex}
  color: ${({ theme }) => theme.colors.black};
`;

const TypoHotelTopFrameMain = styled.h1`
  ${({ theme }) => theme.fonts.display.md};
`;

const TypoHotelTopFrameSub = styled.h2`
  ${({ theme }) => theme.fonts.title.md};
  color: ${({ theme }) => theme.colors.gray600};
`;

const HotelTopAdd = styled.p`
  ${({ theme }) => theme.fonts.title.sm};
`;

const HotelBottom = styled.p`
  ${({ theme }) => theme.fonts.headline.md};
`;
