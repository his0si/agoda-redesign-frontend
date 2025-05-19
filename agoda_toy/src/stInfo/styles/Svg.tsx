import styled from 'styled-components';
import React from 'react';

export const WrapSvgIcon = <T extends React.FC<React.SVGProps<SVGSVGElement>>>(
  IconComponent: T
) => styled(IconComponent)`
  width: 1.875rem;
  height: 1.875rem;
  aspect-ratio: 1 / 1;
  display: inline-block;
  vertical-align: middle;
`;
