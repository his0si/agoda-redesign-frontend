// src/styles/theme.ts
import type { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#006A71',
  secondary: '#55A3B5',
  third: '#A3E1E5',
  fourth: '#DCF3F7',
  warning: '#FF4C70',
  white: '#FFFFFF',
  gray100: '#F3F4F6',
  gray300: '#C5C9D0',
  gray600: '#858C9D',
  gray900: '#535762',
  black: '#23262C',
};

interface FontStyle {
  weight: number;
  size: number; // px 단위
  lineHeight: number; // % 단위
}

const FONT = ({ weight, size, lineHeight }: FontStyle): string => {
  return `
    font-family: 'SUIT';
    font-weight: ${weight};
    font-size: ${size} rem;
    line-height: ${lineHeight}%;
  `;
};

const fonts = {
  display: {
    lg: FONT({ weight: 800, size: 3, lineHeight: 100 }),
    md: FONT({ weight: 800, size: 2.25, lineHeight: 100 }),
    sm: FONT({ weight: 800, size: 1.875, lineHeight: 100 }),
  },
  headline: {
    lg: FONT({ weight: 800, size: 1.5, lineHeight: 100 }),
    md: FONT({ weight: 800, size: 1.25, lineHeight: 100 }),
    sm: FONT({ weight: 700, size: 1.25, lineHeight: 100 }),
  },
  title: {
    lg: FONT({ weight: 600, size: 1.125, lineHeight: 100 }),
    md: FONT({ weight: 600, size: 1, lineHeight: 0 }),
    sm: FONT({ weight: 400, size: 1, lineHeight: 0 }),
  },
  body: {
    lg: FONT({ weight: 500, size: 1.125, lineHeight: 0 }),
    md: FONT({ weight: 400, size: 1, lineHeight: 140 }),
    sm: FONT({ weight: 700, size: 0.875, lineHeight: 0 }),
  },
  caption: {
    lg: FONT({ weight: 500, size: 1, lineHeight: 100 }),
    md: FONT({ weight: 500, size: 0.875, lineHeight: 0 }),
    sm: FONT({ weight: 400, size: 0.875, lineHeight: 100 }),
    xsmall: FONT({ weight: 500, size: 0.75, lineHeight: 100 }),
  },
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
