import { createTheme } from '@mui/material/styles';
import { blue, yellow } from '@mui/material/colors';

export const rightDrawerWidth = 360;

export const toolbarHeight = 48;
export const contentToolbar = 48;
export const contentBar = 140;

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[800],
    },
  },
  typography: {
    fontFamily: '"IBM Plex Serif", "Georgia", serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    body2: {
      fontFamily: '"Inter", "Arial", sans-serif',
    },
    caption: {
      fontFamily: '"Inter", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 16
  },
  mixins: {
    toolbar: {
      minHeight: toolbarHeight,
      height: toolbarHeight,
      maxHeight: toolbarHeight,
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: yellow[100],
    },
  },
  typography: {
    fontFamily: '"IBM Plex Serif", "Georgia", serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    body2: {
      fontFamily: '"Inter", "Arial", sans-serif',
    },
    caption: {
      fontFamily: '"Inter", "Arial", sans-serif',
    },
  },
  shape: {
    borderRadius: 16
  },
  mixins: {
    toolbar: {
      minHeight: toolbarHeight,
      height: toolbarHeight,
      maxHeight: toolbarHeight,
    }
  }
});
