import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    width: '100%'
  }
}));

function Objects() {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
    </Card>
  );
}

export default Objects;
