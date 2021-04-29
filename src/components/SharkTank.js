import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Header from './Header';
import LiveStudents from './LiveStudent';

const SharkTank = ({ liveStudents, setLiveStudents }) => (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
          <Grid item xs={8}>
          {liveStudents.map((student) => (
            <LiveStudents
               key={student.id}
               firstName={student.firstName}
               lastName={student.lastName}
               setLiveStudents={setLiveStudents}
            />
          ))}
          </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
);

SharkTank.propTypes = {
  liveStudents: PropTypes.array.isRequired,
  setLiveStudents: PropTypes.func
};

export default SharkTank;
