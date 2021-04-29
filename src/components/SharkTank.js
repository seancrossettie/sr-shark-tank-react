import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';

const SharkTank = () => (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
          <Grid item xs={8}>
          </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
);

export default SharkTank;
