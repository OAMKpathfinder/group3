import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    width: '100%'
  }
}));

function Home() {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <h1> Home</h1>
    </Card>
  );
}

export default Home;
