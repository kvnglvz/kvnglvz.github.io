import React from 'react';
import { AppStoreSubscriber } from '../stores/appStore';
import { darkTheme, lightTheme } from '../config/themes';
import { MantineProvider, Button } from '@mantine/core';

export const BaseProvider = ({ children }: any) => {
  return (
    <AppStoreSubscriber>
      {({ theme }) => (
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={theme === 'dark' ? darkTheme : lightTheme}
        >
          { children }
        </MantineProvider>
      )}
    </AppStoreSubscriber>
  );
};