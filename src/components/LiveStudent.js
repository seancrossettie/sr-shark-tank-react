import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, Typography, CardContent
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});

const LiveStudents = ({
  firstName,
  lastName,
}) => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I have not yet been devoured!
          </Typography>
        </CardContent>
      </Card>
  );
};

LiveStudents.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default LiveStudents;
