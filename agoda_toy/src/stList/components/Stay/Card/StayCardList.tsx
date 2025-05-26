// HotelList.tsx 또는 StlistPage.tsx
import StayCard from '@/stList/components/Stay/Card/StayCard';
// import Review from '@stInfo/components/Review/Review';
import StayPic1 from '@stList/assets/imgs/img_card1.png';
import StayPic2 from '@stList/assets/imgs/img_card2.png';
import StayPic3 from '@stList/assets/imgs/img_card3.png';
import StayPic4 from '@stList/assets/imgs/img_card4.png';
import StayPic5 from '@stList/assets/imgs/img_card5.png';
import StayPic6 from '@stList/assets/imgs/img_card6.png';
import StayPic7 from '@stList/assets/imgs/img_card7.png';
import StayPic8 from '@stList/assets/imgs/img_card8.png';
import styled from 'styled-components';
import Pagination from '../../Pagination';
import { useMemo, useState } from 'react';

const STAY_LIST = [
  {
    imageUrl: StayPic1,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi', '인터넷'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 31651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic2,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic3,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic4,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic5,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic6,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic7,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic8,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic8,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
  {
    imageUrl: StayPic8,
    korname: '힐튼 도쿄 오다이바',
    star: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
]; // ✅ StayCardList.tsx

interface StayCardListProps {
  min: number;
  max: number;
}

export default function StayCardList({ min, max }: StayCardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroupStart, setCurrentGroupStart] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // ✅ useMemo로 필터링 최적화
  const filteredList = useMemo(
    () =>
      STAY_LIST.filter(
        (stay) => stay.salePrice >= min && stay.salePrice <= max
      ),
    [min, max]
  );

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = currentPage * ITEMS_PER_PAGE;
  const currentPageList = filteredList.slice(startIdx, endIdx);

  return (
    <Container>
      {currentPageList.map((hotel, idx) => (
        <StayCard key={idx} {...hotel} />
      ))}
      <Pagination
        currentPage={currentPage}
        currentGroupStart={currentGroupStart}
        onPageChange={setCurrentPage}
        onGroupChange={setCurrentGroupStart}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 61.5778rem; // 필터 후 검색결과 없을 시 width 유지
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
