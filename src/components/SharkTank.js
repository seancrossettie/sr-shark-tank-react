import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Header from './Header';
import LiveStudents from './LiveStudent';
import Graveyard from './GraveStone';

const SharkTank = ({
  liveStudents,
  setLiveStudents,
  deadStudents,
  setDeadStudents
}) => (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
          <Grid item xs={4}>
          {liveStudents.map((student) => (
            <LiveStudents
               key={student.id}
               firstName={student.firstName}
               lastName={student.lastName}
               setLiveStudents={setLiveStudents}
            />
          ))}
          </Grid>
          <Grid item xs={4}>
            {deadStudents.map((student) => (
              <Graveyard
                key={student.id}
                firstName={student.firstName}
                lastName={student.lastName}
                setDeadStudents={setDeadStudents}
              />
            ))}
          </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
);

SharkTank.propTypes = {
  liveStudents: PropTypes.array.isRequired,
  setLiveStudents: PropTypes.func,
  deadStudents: PropTypes.array.isRequired,
  setDeadStudents: PropTypes.func,
};

export default SharkTank;
