import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { light, dark } from '../config/theme';
import { Container, CssBaseline } from '@material-ui/core';
import { AppStoreSubscriber } from '../stores/appStore';

const Base = ({ children }) => {
  return (
    <AppStoreSubscriber>
      {({ theme }) => (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          <CssBaseline/>
          <Container disableGutters maxWidth='sm'>
            <Box m={8}>
              { children }
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </AppStoreSubscriber>
  )
};

export default Base;