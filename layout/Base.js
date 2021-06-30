import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { light, dark } from '../config/theme';
import { Container, CssBaseline } from '@material-ui/core';
import { AppStoreSubscriber } from '../stores/appStore';

const Base = ({ children }) => {
  return (
    <AppStoreSubscriber>
      {({ theme }) => (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          <CssBaseline/>
          <Box position='relative' flexGrow={1}>
            <Container disableGutters maxWidth='sm'>
              <Box m={2}>
                { children }
              </Box>
            </Container>
          </Box>
        </ThemeProvider>
      )}
    </AppStoreSubscriber>
  )
};

export default Base;