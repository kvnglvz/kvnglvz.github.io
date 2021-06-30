import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const light = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiListItem: {
      dense: {
        paddingTop: 0,
        paddingBottom: 0
      },
      root: {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: colors.blue[700]
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "'IBM Plex Serif', 'Georgia', serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 900
    },
    h2: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 900
    },
    h3: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 700
    },
    h4: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 700
    },
    h5: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 600
    },
    h6: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 600
    },
    body2: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
    },
    caption: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
    }
  },
  shadows: Array(25).fill('none')
});

const dark = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiListItem: {
      dense: {
        paddingTop: 0,
        paddingBottom: 0
      },
      root: {
        marginTop: 0,
        marginBottom: 0
      }
    },
    MuiDialogContent: {
      root: {
        '&:first-child' : {
          paddingTop: 0
        },
        padding: 0,
      },
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: colors.grey[900],
      paper: colors.grey[900]
    },
    primary: {
      main: colors.cyan[300]
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "'IBM Plex Serif', 'Georgia', serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 900
    },
    h2: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 900
    },
    h3: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 700
    },
    h4: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 700
    },
    h5: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 600
    },
    h6: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
      fontWeight: 600
    },
    body2: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
    },
    caption: {
      fontFamily: "'IBM Plex Sans', 'Arial', sans-serif",
    }
  },
  shadows: Array(25).fill('none')
});

export {
  light,
  dark
}