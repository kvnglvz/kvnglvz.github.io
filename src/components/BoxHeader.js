import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  borderPaper: {
    borderColor: theme.palette.divider
  }
}));

const BoxHeader = ({ label }) => {
  const classes = useStyles();
  return (
    <Box p={1} borderTop={1} borderBottom={1} className={classes.borderPaper}>
      <Typography variant='h6'>{ label }</Typography>
    </Box>
  )
};

export default BoxHeader;