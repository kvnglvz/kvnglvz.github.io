import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppStoreSubscriber } from '../stores/appStore';
import { darkTheme, lightTheme } from '../config/themes';

const queryClient = new QueryClient();

export const BaseProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStoreSubscriber>
        {({ theme }) => (
          <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme }>
            {/* <IoProvider> */}
            <SnackbarProvider maxSnack={3} dense anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
              <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                { children }
              </Box>
            </SnackbarProvider>
            {/* </IoProvider> */}
          </ThemeProvider>
        )}
      </AppStoreSubscriber>
    </QueryClientProvider>
  );
};