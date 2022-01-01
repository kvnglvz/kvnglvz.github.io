import { Box, Typography } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

const BoxHeader = ({ label }) => {
  return (
    <Box
      sx={{
        p: 1,
        borderWidth: 0,
        borderTopWidth: '1pt',
        borderBottomWidth: '1pt',
        borderStyle: 'solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant='h6'>{ label }</Typography>
    </Box>
  );
};

export default BoxHeader;