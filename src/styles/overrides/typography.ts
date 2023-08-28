import Color from '../Color';

import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';

export const fontFamily = 'Mulish';

export const h1: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '32px',
  lineHeight: '40px',
  color: Color.Primary.Plum
};

export const h2: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '30px',
  color: Color.Primary.Plum
};

export const h3: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '25px',
  color: Color.Primary.Plum
};

export const h4: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20px',
  color: Color.Neutral.Black
};

export const body1: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  color: Color.Neutral.Black
};

export const body2: TypographyStyleOptions = {
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '13px',
  lineHeight: '22px'
};

const typopgraphy: TypographyOptions = {
  fontFamily,
  h1,
  h2,
  body1,
  body2,

  caption: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '22px'
  },

  button: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20.08px',
    textTransform: 'none'
  }
};

export default typopgraphy;
