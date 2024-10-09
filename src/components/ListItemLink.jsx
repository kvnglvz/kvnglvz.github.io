import { ListItem } from '@mui/material';
import React from 'react';

const ListItemLink = (props) => {
  return <ListItem button component='a' {...props} />;
};

export default ListItemLink;
