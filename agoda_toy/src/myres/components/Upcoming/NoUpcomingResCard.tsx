// components/Upcoming/NoUpcomingResCard.tsx
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardThum from '@src/myres/assets/imgs/noupcoming_res.png';
export default function NoUpcomingResCard() {
  const navigate = useNavigate();

  return (
    <Container>
      <TextSection>
        <Frame>
          <Header>곧 시작될 예약</Header>
          <TextWrapper>
            <Title>아직 예정된 여행이 없습니다!</Title>
            <SubText>다양한 호텔을 검색해보세요.</SubText>
          </TextWrapper>
        </Frame>
        <SearchButton onClick={() => navigate('/main')}>
          숙소 검색하기
        </SearchButton>
      </TextSection>
      <Image src={CardThum} alt="예정된 여행 없음 썸네일" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
`;

const TextSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;

  box-sizing: border-box;
  border-radius: 1.25rem;
  border: 1px solid #acacac;
  padding: 1.5rem 2.5rem;
  width: 46.25rem;
  height: 16.5rem;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.62rem;
`;

const Header = styled.p`
  font: ${({ theme }) => theme.fonts.title.lg};
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.headline.lg};
`;

const SubText = styled.p`
  font: ${({ theme }) => theme.fonts.caption.md};
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  width: 10.875rem;
  height: 2.5625rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Image = styled.img`
  width: 18.25rem;
  height: 16.5rem;
  border-radius: 1.25rem;
  object-fit: cover;
`;
