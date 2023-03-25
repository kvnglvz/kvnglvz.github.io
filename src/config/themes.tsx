import Mantine, { DividerProps } from '@mantine/core/';

export const rightDrawerWidth = 360;
export const toolbarHeight = 48;
export const contentToolbar = 48;
export const contentBar = 140;

const DividerDefaultProps: Partial<DividerProps> = {
  labelProps: {
    style: {
      fontWeight: 'bold',
      fontFamily: '"Inter", "Arial", sans-serif',
    },
  },
};

export const darkTheme: Mantine.MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'yellow',
  fontFamily: '"Georgia", serif',
  fontSizes: { xs: '1.2rem' },
  headings: {
    fontWeight: 'bold',
    fontFamily: '"Inter", "Arial", sans-serif',
    sizes: {
      h1: { fontSize: '6rem', lineHeight: 1.167 },
      h2: { fontSize: '3.75rem', lineHeight: 1.2 },
      h3: { fontSize: '3rem', lineHeight: 1.167 },
      h4: { fontSize: '2.125rem', lineHeight: 1.235 },
      h5: { fontSize: '1.5rem', lineHeight: 1.334 },
      h6: { fontSize: '1.25rem', lineHeight: 1.6 },
    },
  },
  defaultRadius: 16,
  components: {
    Divider: {
      defaultProps: DividerDefaultProps,
    },
  },
};

export const lightTheme: Mantine.MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blue',
  fontFamily: '"Georgia", serif',
  fontSizes: { xs: '1.2rem' },
  headings: {
    fontWeight: 'bold',
    fontFamily: '"Inter", "Arial", sans-serif',
    sizes: {
      h1: { fontSize: '6rem', lineHeight: 1.167 },
      h2: { fontSize: '3.75rem', lineHeight: 1.2 },
      h3: { fontSize: '3rem', lineHeight: 1.167 },
      h4: { fontSize: '2.125rem', lineHeight: 1.235 },
      h5: { fontSize: '1.5rem', lineHeight: 1.334 },
      h6: { fontSize: '1.25rem', lineHeight: 1.6 },
    },
  },
  defaultRadius: 16,
  components: {
    Divider: {
      defaultProps: DividerDefaultProps,
    },
  },
};
