import styled from 'styled-components';
import image1 from '../../assets/footer/image8.png';
import image2 from '../../assets/footer/image4.png';
import image3 from '../../assets/footer/image5.png';
import image4 from '../../assets/footer/image6.png';

const FOOTER_TEXT =
  'All material herein @ 2005-2025 Agoda Company Pte. Ltd., All Rights Reserved.';
const FOOTER_TEXT2 =
  '아고다는 온라인 여행 및 관련 서비스 분야의 세계적인 선도 기업인 Booking Holdings Inc.의 일부입니다.';

const FOOTER_IMG = [image1, image2, image3, image4];

export default function FooterBottom() {
  return (
    <Container>
      <Frame>
        <div>
          <FooterText>{FOOTER_TEXT}</FooterText>
          <FooterText>{FOOTER_TEXT2}</FooterText>
        </div>
        <ImgFrame>
          {FOOTER_IMG.map((img, idx) => (
            <FooterImg key={idx} $bgImg={img} />
          ))}
        </ImgFrame>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 8.8rem;
  padding: 4.3125rem 14.0625rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  align-self: stretch;

  background: var(--AGODA-Black, #23262c);
`;

const Frame = styled.div`
  display: flex;
  width: 90.375rem;
  flex-direction: column;
  align-items: center;
  gap: 2.375rem;
`;

const FooterText = styled.p`
  ${({ theme }) => theme.fonts.caption.lg};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ImgFrame = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  width: 90.4rem;
`;

const FooterImg = styled.div<{ $bgImg: string }>`
  width: 9.375rem;
  height: 3.75rem;
  aspect-ratio: 5/2;
  background: ${({ $bgImg }) => `url("${$bgImg}") center / cover no-repeat`};
`;
