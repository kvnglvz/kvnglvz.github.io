import React, { useContext } from 'react';
import { darkTheme, lightTheme } from '../config/themes';
import { MantineProvider } from '@mantine/core';
import { AppContext } from '../App';

export const BaseProvider = ({ children }: any) => {
  const { colorScheme } = useContext(AppContext);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={colorScheme === 'dark' ? darkTheme : lightTheme}
    >
      {children}
    </MantineProvider>
  );
};
