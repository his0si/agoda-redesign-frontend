import React from 'react';
import styled from 'styled-components';

export const WrapSvgSmall = <T extends React.FC<React.SVGProps<SVGSVGElement>>>(
  IconComponent: T
) => styled(IconComponent)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;
