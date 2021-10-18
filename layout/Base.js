import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { light, dark } from '../config/theme';
import { Container, CssBaseline } from '@material-ui/core';
import { AppStoreSubscriber, useAppStore } from '../stores/appStore';

const Base = ({ children }) => {
  const [, actions] = useAppStore();
  useEffect(() => {
    actions.setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  return (
    <AppStoreSubscriber>
      {({ theme }) => (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
          <CssBaseline/>
          <Box position='relative' flexGrow={1}>
            <Container disableGutters maxWidth='sm'>
              <Box m={2} mt={6} mb={6}>
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