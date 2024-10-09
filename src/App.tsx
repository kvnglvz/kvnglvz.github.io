import { createContext, PropsWithChildren } from 'react';
import { useColorScheme } from '@mantine/hooks';

type AppContextProps = {
  colorScheme: 'dark' | 'light';
};

export const AppContext = createContext<AppContextProps>({
  colorScheme: 'dark',
});

export const App = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  return (
    <AppContext.Provider value={{ colorScheme }}>
      <div className="app">{children}</div>
    </AppContext.Provider>
  );
};
