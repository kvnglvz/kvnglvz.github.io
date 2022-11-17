import React from 'react';
import { Outlet } from 'react-router';
import { Container } from '@mantine/core';

export const App = () => {
  return (
    <Container size='xs' p='xl' py={'60px'}>
      <Outlet />
    </Container>
  );
}