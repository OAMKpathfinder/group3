import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Image from 'material-ui-image'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    marginLeft: '60px',
    width: '90%'
  },
  Image: {
    margin: '2px',
    borderRadius: '8px',
    width: '50%',
    height: '10%'
  }
}));

function Home() {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      
    <h1>Customer FeedBacks</h1>
          <Grid container spacing={4}>
                <Grid item xs={3}>
                  <div>
                  
                            <Image src="https://tse4.mm.bing.net/th?id=OIP.LLDnhlk22RH-HIvzqpDH_gHaIW&pid=Api&P=0&w=300&h=300" />
                            <h5 >1960's House renovation time took 4 months. Requirements were to take care of the leakage in the front porch. Satisfied Customer. </h5>
                  </div>
                </Grid>
                <Grid item xs={3}>
                
                            <Image src="http://upload.treesranch.com/2016/11/25/craftsman-small-house-renovation-houzz-small-craftsman-home-house-plans-sml-1340e81f0466d295.jpg" />
                            <h5>Detached house built in 1980's. Requirements were replace the front window as it was not well insulated</h5>
                </Grid>
                <Grid item xs={3}>
                
                            <Image src="https://karrbick.com/wp-content/uploads/2018/10/St-Louis-Bathroom-renovation-masterbath-remodel-plescia-5.jpg" />
                            <h5>Renovation of a bathroom of a loft house built in 1940's. Original bathtub was kept for respecting the era.</h5>
                </Grid>
                <Grid item xs={3}>
                
                          <a href='url'>  <Image src="https://designmag.fr/wp-content/uploads/2015/02/bibliotheque-piece-design-oval.jpg" /></a>
                            <h5>Renovation of a library with it's valuable wooded shelves. All of them restored.</h5>
                </Grid>
          </Grid>      
        <h1><a href='url'>See More</a></h1>
    </Card>
  
  );
}

export default Home;
