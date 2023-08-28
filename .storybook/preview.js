import { containerClasses, Container, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'POC UI core',
        'Styles',
        ['Creating a Theme', 'Color Palette', 'Typography', ['Overview']],
        'Icons',
        ['Overview'],
        'Components'
      ]
    }
  },
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  viewMode: 'docs'
};

const theme = createTheme();

export const decorators = [
  (Story) => {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Container sx={{ [`&.${containerClasses.root}`]: { padding: '4px' } }}>
            <Story />
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
];
