// HotelList.tsx 또는 StlistPage.tsx
import StayCard from '@stList/components/Stay/StayCard';
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

const STAY_LIST = [
  {
    imageUrl: StayPic1,
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    imageUrl: StayPic2,
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
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
    name: '힐튼 도쿄 오다이바',
    type: 4,
    engName: 'Hilton Tokyo Odaiba',
    review: 8.7,
    reviewCount: 4564,
    tags: ['조식', '피트니스 센터', '무료 Wi-Fi'],
    location: '오다이바, 도쿄',
    realPrice: 780651,
    salePrice: 531651,
    totalPrice: 2064225,
  },
];

export default function StayCardList() {
  return (
    <Container>
      {STAY_LIST.map((hotel) => (
        <StayCard {...hotel} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
