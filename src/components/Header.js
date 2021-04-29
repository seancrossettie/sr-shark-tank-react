import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PoolIcon from '@material-ui/icons/Pool';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    marginRight: 35
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Shark Tank
        </Typography>
      <PoolIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
