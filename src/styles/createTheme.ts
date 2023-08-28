import createTheme, { Theme, ThemeOptions } from '@mui/material/styles/createTheme';
import deepmerge from '@mui/utils/deepmerge';
import MuiLink from './overrides/MuiLink';
import MuiTypography from './overrides/MuiTypography';
import typography from './overrides/typography';

import '@fontsource/mulish';

const DefaultThemeOptions: ThemeOptions = {
  typography,
  components: {
    MuiLink,
    MuiTypography
  }
};

export default (themeOptions?: ThemeOptions): Theme => {
  if (themeOptions) {
    return createTheme(deepmerge(DefaultThemeOptions, themeOptions));
  }

  return createTheme(DefaultThemeOptions);
};
