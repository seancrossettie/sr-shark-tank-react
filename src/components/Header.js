import React from 'react';
import {
  AppBar, Typography, Toolbar, Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import PoolIcon from '@material-ui/icons/Pool';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentData';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    fontSize: 20,
    flex: 1,
  },
  buttonStyles: {
    marginLeft: 25,
  }
}));

const Header = ({
  liveStudents, setLiveStudents, setDeadStudents
}) => {
  const handleClick = () => {
    followTheLight(liveStudents);
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  };

  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Shark Tank
          <PoolIcon className={classes.buttonStyles}/>
        </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        SHARK ATTACK
      </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  liveStudents: PropTypes.array.isRequired,
  setLiveStudents: PropTypes.func,
  setDeadStudents: PropTypes.func,
};

export default Header;
