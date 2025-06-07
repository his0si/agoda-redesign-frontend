import { useGetAllAccommodations } from '@src/stList/hooks/useGetAllAccommodations';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../Pagination';
import StayCard from './StayCard';

// const STAY_LIST = [
//   {
//     imageUrl: StayPic1,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi', '인터넷'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 31651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic2,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic3,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic4,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic5,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic6,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic7,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic8,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic8,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
//   {
//     imageUrl: StayPic8,
//     korname: '힐튼 도쿄 오다이바',
//     star: 4,
//     engName: 'Hilton Tokyo Odaiba',
//     review: 8.7,
//     reviewCount: 4564,
//     tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
//     location: '오다이바, 도쿄',
//     realPrice: 780651,
//     salePrice: 531651,
//     totalPrice: 2064225,
//   },
// ]; // ✅ StayCardList.tsx

interface StayCardListProps {
  min: number;
  max: number;
  destination: string;
  startDate: string;
  endDate: string;
}

export default function StayCardList({
  min,
  max,
  destination,
  startDate,
  endDate,
}: StayCardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroupStart, setCurrentGroupStart] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const { data } = useGetAllAccommodations({
    query: destination,
    startDate,
    endDate,
    // page: currentPage - 1, // page도 원하면 전달 가능
  });

  console.log('accommodations data:', data);

  // ✅ useMemo로 필터링 최적화
  const filteredList = useMemo(() => {
    const accommodations = data?.accommodations || [];
    return accommodations.filter(
      (stay) => stay.discountPrice >= min && stay.discountPrice <= max
    );
  }, [data?.accommodations, min, max]);

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
