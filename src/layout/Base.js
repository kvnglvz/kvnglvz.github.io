import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useWindowSize from '../hooks/useWindowSize';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  box: {
    borderColor: theme.palette.divider
  }
}));

const Base = ({ children }) => {
  const classes = useStyles();
  const { height } = useWindowSize();

  return (
    <Box pt={4} pb={4} minHeight={height} className={classes.box}>
      { children }
    </Box>
  )
};

export default Base;