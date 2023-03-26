import React, { createContext, PropsWithChildren } from 'react';
import { Container } from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';

type AppContextProps = {
  isMobile: boolean;
  colorScheme: 'dark' | 'light';
};

export const AppContext = createContext<AppContextProps>({
  isMobile: false,
  colorScheme: 'dark',
});

export const App = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const colorScheme = useColorScheme();

  return (
    <AppContext.Provider value={{ isMobile, colorScheme }}>
      <Container size="xs" p="xl" py={'60px'}>
        {children}
      </Container>
    </AppContext.Provider>
  );
};
