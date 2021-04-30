import React from 'react';
import {
  AppBar, Typography, Toolbar, Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import PoolIcon from '@material-ui/icons/Pool';
import { followTheLight } from '../helpers/data/studentData';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    fontSize: 20,
    marginRight: 35
  },
  buttonStyles: {
    marginLeft: 100
  }
}));

const Header = ({ liveStudents, setLiveStudents }) => {
  const handleClick = () => {
    setLiveStudents(liveStudents.splice(followTheLight()));
  };

  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Shark Tank
        </Typography>
      <PoolIcon />
      <Button variant="contained" color="secondary" className={classes.buttonStyles} onClick={handleClick}>
        SHARK ATTACK
      </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  liveStudents: PropTypes.array.isRequired,
  setLiveStudents: PropTypes.func,
};

export default Header;
