import { Theme } from '../../utils/styled';
import brandColors from '../colors/brandColors';

const paxfulTheme: Theme = {
  colors: {
    background: brandColors.gray5,
    body: brandColors.gray75,
    headings: brandColors.black,
    black: brandColors.black,
    white: brandColors.white,
    brand: brandColors.red,
    borders: brandColors.gray5,
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4',
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
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  heights: {
    header: '60px',
  },
};

export default paxfulTheme;
