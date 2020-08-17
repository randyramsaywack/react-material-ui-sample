import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Content from './Content';

// const useStyles = makeStyles({

// });


export default function App() {
  // const classes = useStyles();
  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}