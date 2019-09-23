import { Theme } from '../../utils/styled';
import brandColors from '../colors/brandColors';

const paxfulTheme: Theme = {
  colors: {
    background: brandColors.gray5,
    body: brandColors.gray75,
    headings: brandColors.black,
    black: brandColors.black,
    white: brandColors.white,
    brand: brandColors.brand,
    borders: brandColors.gray5,
    attrs: {
      str: '#B4BEC6',
      agi: '#39d402',
      int: '#C6D2E5',
    },
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem',
  },
  containerPadding: '1.5rem',
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  widths: {
    md: '767px',
    lg: '940px',
    xl: '1110px',
  },
  heights: {
    header: '60px',
  },
  zIndex: {
    default: 1,
    overlay: 15
  }
};

export default paxfulTheme;
