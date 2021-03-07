import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { dark, light } from './config/theme';
import Index from './pages/Index';
import { Router } from '@reach/router';
import { Container, CssBaseline } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import themeState from './states/themeState';

const App = () => {
  const theme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <CssBaseline/>
      <Container disableGutters maxWidth='sm'>
        <Router>
          <Index path='/' />
        </Router>
      </Container>
    </ThemeProvider>
  )
};

export default App;