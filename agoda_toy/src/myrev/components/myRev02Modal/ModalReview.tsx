import styled from 'styled-components';
import { WrapSvgIcon } from '@stInfo/styles/Svg';
import photoIcon from '../../assets/my_rev_icn_pic.svg?react';

export default function ModalReview() {
  return (
    <Container>
      <ReviewQuestion>자세한 후기를 작성해주세요.</ReviewQuestion>
      <ReviewContainer>
        <ReviewFrame placeholder="위치/부대시설/직원 태도 등에 대한 경험을 적어주세요." />
      </ReviewContainer>
      <AddPhotoBtn>
        <PhotoIconBtn />
        <ReviewQuestion>사진 첨부하기</ReviewQuestion>
      </AddPhotoBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

const ReviewQuestion = styled.p`
  ${({ theme }) => theme.fonts.body.lg};
`;

const ReviewContainer = styled.div`
  width: 44.375rem;
  height: 15.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 1.25rem;
  border: 0.3px solid var(--AGODA-Gray600, #858c9d);
`;

const ReviewFrame = styled.textarea`
  width: 39.5rem;
  height: 12.9375rem;
  flex-shrink: 0;
  border: none;

  ::placeholder {
    ${({ theme }) => theme.fonts.body.md};
    color: #adadad;
  }
`;

const AddPhotoBtn = styled.button`
  all: unset;
  cursor: pointer;

  width: 44.375rem;
  height: 3rem;
  flex-shrink: 0;

  display: flex;
  gap: 0.6rem;

  justify-content: center;
  align-items: center;

  border-radius: 0.625rem;
  border: 0.3px solid #000;
`;

const PhotoIconBtn = WrapSvgIcon(photoIcon);
