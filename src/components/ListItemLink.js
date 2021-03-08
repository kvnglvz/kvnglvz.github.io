import { ListItem } from '@material-ui/core';
import React from 'react';

const ListItemLink = (props) => {
  return <ListItem button component='a' {...props} />;
}

export default ListItemLink;
