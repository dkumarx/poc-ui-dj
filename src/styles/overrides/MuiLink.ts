import Color from '../Color';

import { Components } from '@mui/material';

const MuiLink: Components['MuiLink'] = {
  styleOverrides: {
    root: {
      color: Color.Neutral.Black,
      lineHeight: '20px',
      textDecorationColor: Color.Neutral.Black
    }
  }
};

export default MuiLink;
