import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import { BaseProvider } from './providers/BaseProvider';

function App() {
  return (
    <BaseProvider>
      <Container
        disableGutters
        maxWidth={false}
      >
        {/* <UserStore>
          {({ user }) => (
          )}
        </UserStore> */}
        <Outlet />
      </Container>
    </BaseProvider>
  );
}

export default App;
