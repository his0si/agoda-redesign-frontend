import styled from 'styled-components';

import React from 'react';

interface UpcomingResThumbProps {
  imageUrl: string;
}
export default function UpcomingResThumb({ imageUrl }: UpcomingResThumbProps) {
  return (
    <>
      <ResImage src={imageUrl} alt="곧 다가오는 예약 호텔 이미지"></ResImage>
    </>
  );
}

const ResImage = styled.img`
  width: 18.25rem;
  height: 16.5rem;
  border-radius: 1.25rem;
  object-fit: cover;
`;
