import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

export const NotFoundPage = (props) => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  return (
    <Box
      height={height}
      width={width}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :first-of-type': {
          mb: 2,
        }
      }}
    >
      <Typography variant='h5'>
        Seems like youre lost
      </Typography>
      <Button variant='contained' onClick={() => navigate('/home')}>
        Go back to home
      </Button>
    </Box>
  );
};
