import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mantine/core';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Seems like you're lost.</h1>
      <Button onClick={() => navigate('/home')}>
        Go back to main page
      </Button>
    </Box>
  );
};
